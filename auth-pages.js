"use strict";

const authApi = window.odisha360Auth;
const loginButton = document.getElementById("login-google-btn");
const loginStatus = document.getElementById("login-status");
const dashboard = document.getElementById("dashboard-profile");

function showAuthError(message) {
  if (loginStatus) {
    loginStatus.textContent = message;
    loginStatus.hidden = !message;
  }
}

function getGoogleIdentity(user) {
  return user.identities?.find(identity => identity.provider === "google");
}

function renderProfile(user) {
  const metadata = user.user_metadata || {};
  const identity = getGoogleIdentity(user);
  const fullName = metadata.full_name || metadata.name || "Google user";
  const email = user.email || "Email unavailable";
  const picture = metadata.avatar_url || metadata.picture || "";
  const googleId = identity?.identity_data?.sub
    || identity?.provider_id
    || metadata.sub
    || "Unavailable";

  document.getElementById("profile-name").textContent = fullName;
  document.getElementById("profile-email").textContent = email;
  document.getElementById("profile-google-id").textContent = googleId;

  const avatar = document.getElementById("profile-avatar");
  if (picture) {
    avatar.src = picture;
    avatar.alt = `${fullName} profile`;
    avatar.hidden = false;
    document.getElementById("profile-avatar-fallback").hidden = true;
  } else {
    document.getElementById("profile-avatar-fallback").textContent = fullName.charAt(0).toUpperCase();
    avatar.hidden = true;
    document.getElementById("profile-avatar-fallback").hidden = false;
  }

  dashboard.hidden = false;
}

function renderAccountLists(itineraries, favouriteIds, cloudAvailable) {
  const itineraryList = document.getElementById("account-itineraries");
  const favouriteList = document.getElementById("account-favourites");
  const itineraryStatus = document.getElementById("itineraries-status");
  itineraryList.replaceChildren();
  favouriteList.replaceChildren();

  const destinationNames = {
    puri: "Puri", konark: "Konark Sun Temple", bhubaneswar: "Bhubaneswar",
    chilika: "Chilika Lake", simlipal: "Similipal National Park",
    bhitarkanika: "Bhitarkanika", gopalpur: "Gopalpur-on-Sea",
    chandipur: "Chandipur", cuttack: "Cuttack", raghurajpur: "Raghurajpur",
    dhauli: "Dhauli Shanti Stupa", "udayagiri-khandagiri": "Udayagiri & Khandagiri Caves",
    daringbadi: "Daringbadi", satkosia: "Satkosia Gorge", hirakud: "Hirakud Dam"
  };
  itineraries.forEach(itinerary => {
    const item = document.createElement("li");
    const title = document.createElement("strong");
    title.textContent = `${itinerary.duration_days || itinerary.durationDays || "—"}-day trip from ${itinerary.starting_point || itinerary.startingPoint}`;
    const detail = document.createElement("span");
    detail.textContent = ` · ${itinerary.budget_tier || itinerary.budgetTier || ""} · ₹${Number(itinerary.total_calculated_budget || itinerary.totalBudget || 0).toLocaleString("en-IN")}`;
    item.append(title, detail);
    itineraryList.appendChild(item);
  });
  if (!itineraries.length) {
    const item = document.createElement("li");
    item.textContent = "No saved itineraries yet. Generate a trip from the homepage to save one.";
    itineraryList.appendChild(item);
  }
  favouriteIds.forEach(id => {
    const item = document.createElement("li");
    item.textContent = destinationNames[id] || id;
    favouriteList.appendChild(item);
  });
  if (!favouriteIds.length) {
    const item = document.createElement("li");
    item.textContent = "No favourite destinations yet.";
    favouriteList.appendChild(item);
  }
  itineraryStatus.textContent = cloudAvailable
    ? "Your account itineraries are up to date."
    : "Showing itineraries saved on this device. Cloud data is unavailable.";
}

async function loadAccountLists(userId) {
  let localItineraries = [];
  let localFavourites = [];
  try {
    localItineraries = JSON.parse(localStorage.getItem("odisha360:itineraries") || "[]");
    localFavourites = JSON.parse(localStorage.getItem("odisha360:favourites") || "[]");
    if (!Array.isArray(localItineraries)) localItineraries = [];
    if (!Array.isArray(localFavourites)) localFavourites = [];
  } catch (error) {
    console.error("Could not read locally saved account data:", error);
  }

  try {
    const [itineraryResult, favouriteResult] = await Promise.all([
      authApi.client.from("itineraries").select("id,starting_point,duration_days,budget_tier,total_calculated_budget,created_at")
        .eq("user_id", userId).order("created_at", { ascending: false }).limit(50),
      authApi.client.from("favorites").select("destination_id").eq("user_id", userId).limit(100)
    ]);
    if (itineraryResult.error) throw itineraryResult.error;
    if (favouriteResult.error) throw favouriteResult.error;
    const cloudFavourites = favouriteResult.data.map(item => item.destination_id);
    renderAccountLists(itineraryResult.data.length ? itineraryResult.data : localItineraries,
      cloudFavourites.length ? cloudFavourites : localFavourites, true);
  } catch (error) {
    console.error("Could not load saved account data:", error);
    renderAccountLists(localItineraries, localFavourites, false);
  }
}

async function initializeLoginPage() {
  if (!authApi) {
    showAuthError("Sign-in is unavailable. Check the Supabase setup and reload this page.");
    loginButton.disabled = true;
    return;
  }

  const query = new URLSearchParams(window.location.search);
  const providerError = query.get("error_description") || query.get("error");
  if (providerError) {
    showAuthError(`Google sign-in was not completed: ${providerError}`);
  } else if (query.get("signedOut") === "1") {
    showAuthError("You have been signed out.");
  } else if (query.get("reason") === "session") {
    showAuthError("Your session could not be verified. Please sign in again.");
  }

  const { data, error } = await authApi.getSession();
  if (error) {
    console.error("Could not check the login session:", error);
    showAuthError("We couldn't check your sign-in session. Please reload and try again.");
    return;
  }
  if (data.session) {
    window.location.replace("dashboard.html");
    return;
  }

  loginButton.addEventListener("click", async () => {
    loginButton.disabled = true;
    loginButton.setAttribute("aria-busy", "true");
    showAuthError("");

    try {
      const redirectTo = new URL("dashboard.html", window.location.href).toString();
      const { error: signInError } = await authApi.signInWithGoogle(redirectTo);
      if (signInError) {
        console.error("Could not start Google sign-in:", signInError);
        showAuthError(signInError.message || "Google sign-in could not be started.");
        loginButton.disabled = false;
        loginButton.removeAttribute("aria-busy");
      }
    } catch (error) {
      console.error("Unexpected error while starting Google sign-in:", error);
      showAuthError("Google sign-in could not be started. Please try again.");
      loginButton.disabled = false;
      loginButton.removeAttribute("aria-busy");
    }
  });
}

async function initializeDashboard() {
  if (!authApi) {
    window.location.replace("login.html");
    return;
  }

  const { data: sessionData, error: sessionError } = await authApi.getSession();
  if (sessionError) {
    console.error("Could not read the dashboard session:", sessionError);
    window.location.replace("login.html?reason=session");
    return;
  }
  if (!sessionData.session) {
    window.location.replace("login.html");
    return;
  }

  const { data, error } = await authApi.client.auth.getUser();
  if (error || !data.user) {
    if (error) console.error("Could not verify the dashboard user:", error);
    window.location.replace("login.html?reason=session");
    return;
  }

  renderProfile(data.user);
  loadAccountLists(data.user.id);
  authApi.client.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_OUT" || !session?.user) {
      window.location.replace("login.html");
      return;
    }
    renderProfile(session.user);
  });

  document.getElementById("sign-out-button").addEventListener("click", async event => {
    const button = event.currentTarget;
    button.disabled = true;
    try {
      const { error: signOutError } = await authApi.signOut();
      if (signOutError) {
        console.error("Could not sign out:", signOutError);
        showAuthError("Sign-out failed. Please try again.");
        button.disabled = false;
        return;
      }
      window.location.replace("login.html?signedOut=1");
    } catch (error) {
      console.error("Unexpected error while signing out:", error);
      showAuthError("Sign-out failed. Please try again.");
      button.disabled = false;
    }
  });
}

if (loginButton) {
  initializeLoginPage().catch(error => {
    console.error("Could not initialize the login page:", error);
    showAuthError("Sign-in could not be initialized. Check your connection and try again.");
  });
}
if (dashboard) {
  initializeDashboard().catch(error => {
    console.error("Could not initialize the dashboard:", error);
    window.location.replace("login.html?reason=session");
  });
}
