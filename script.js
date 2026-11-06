"use strict";

const supabaseClient = window.odisha360Auth?.client || null;

// ─── NAVBAR ─────────────────────────────────────────────────────────────────
const navbar = document.getElementById("navbar");
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileNavOverlay = document.getElementById("mobile-nav-overlay");
const mobileNavClose = document.getElementById("mobile-nav-close");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link, .mobile-cta");

// Scroll → scrolled class
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
  updateActiveNavLink();
  toggleBackToTop();
});

// Hamburger open/close
hamburgerBtn.addEventListener("click", () => {
  const isOpen = hamburgerBtn.classList.toggle("active");
  hamburgerBtn.setAttribute("aria-expanded", isOpen);
  mobileNavOverlay.classList.toggle("active", isOpen);
  mobileNavOverlay.setAttribute("aria-hidden", String(!isOpen));
  mobileNavOverlay.inert = !isOpen;
  document.body.style.overflow = isOpen ? "hidden" : "";
});

mobileNavClose.addEventListener("click", closeMobileNav);
mobileNavOverlay.addEventListener("click", (e) => {
  if (e.target === mobileNavOverlay) closeMobileNav();
});
mobileNavLinks.forEach(link => link.addEventListener("click", closeMobileNav));

function closeMobileNav() {
  hamburgerBtn.classList.remove("active");
  hamburgerBtn.setAttribute("aria-expanded", "false");
  mobileNavOverlay.classList.remove("active");
  mobileNavOverlay.setAttribute("aria-hidden", "true");
  mobileNavOverlay.inert = true;
  document.body.style.overflow = "";
}

// ─── ACTIVE NAV LINK ON SCROLL ───────────────────────────────────────────────
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.scrollY + 120;
  let matched = false;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
    if (navLink && scrollY >= top && scrollY < top + height) {
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      navLink.classList.add("active");
      matched = true;
    }
  });
  // If at very top, activate Home
  if (!matched && window.scrollY < 100) {
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    const homeLink = document.querySelector('.nav-link[href="#home"]');
    if (homeLink) homeLink.classList.add("active");
  }
}

// ─── HERO IMAGE ZOOM-IN ON LOAD ──────────────────────────────────────────────
const heroImg = document.getElementById("hero-bg-img");
if (heroImg) {
  const markLoaded = () => heroImg.classList.add("loaded");
  if (heroImg.complete && heroImg.naturalHeight > 0) {
    markLoaded();
  } else {
    heroImg.addEventListener("load", markLoaded);
    heroImg.addEventListener("error", markLoaded); // graceful fallback
  }
}

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────
const statNumbers = document.querySelectorAll(".stat-number");
let counted = false;

function animateCounters() {
  if (counted) return;
  counted = true;
  statNumbers.forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.round(current).toLocaleString();
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

const heroStats = document.getElementById("hero-stats");
if (heroStats) {
  const counterObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCounters();
      counterObserver.disconnect();
    }
  }, { threshold: 0.2 });
  counterObserver.observe(heroStats);
}

// ─── SEARCH AUTOCOMPLETE ──────────────────────────────────────────────────────
const DESTINATIONS = (window.ODISHA_DESTINATIONS || []).map(destination => destination.name);

const searchWhere = document.getElementById("search-where");
const searchSuggestions = document.getElementById("search-suggestions");

if (searchWhere && searchSuggestions) {
  let searchTimer;

  function renderSearchSuggestions(matches) {
    searchSuggestions.replaceChildren();
    matches.slice(0, 6).forEach(dest => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "suggestion-item";
      item.setAttribute("role", "option");
      item.textContent = dest;
      item.addEventListener("click", () => {
        searchWhere.value = dest;
        searchSuggestions.classList.remove("show");
        searchWhere.focus();
        document.getElementById("destination-query").value = dest;
        document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
      });
      searchSuggestions.appendChild(item);
    });
    searchSuggestions.classList.toggle("show", matches.length > 0);
  }

  searchWhere.addEventListener("input", () => {
    const query = searchWhere.value.trim().toLowerCase();
    clearTimeout(searchTimer);
    if (query.length < 2) {
      searchSuggestions.classList.remove("show");
      return;
    }
    searchTimer = setTimeout(() => {
      renderSearchSuggestions(DESTINATIONS.filter(destination => destination.toLowerCase().includes(query)));
    }, 120);
  });

  // Keyboard: Escape closes suggestions
  searchWhere.addEventListener("keydown", (e) => {
    if (e.key === "Escape") searchSuggestions.classList.remove("show");
  });

  document.addEventListener("click", (e) => {
    if (!searchWhere.contains(e.target) && !searchSuggestions.contains(e.target)) {
      searchSuggestions.classList.remove("show");
    }
  });
}

// Search tabs
const searchTabs = document.querySelectorAll(".search-tab");
let activeSearchTab = "destinations";
searchTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    activeSearchTab = tab.dataset.tab || "destinations";
    searchTabs.forEach(t => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    searchWhere.placeholder = activeSearchTab === "hotels"
      ? "Search stays near a destination"
      : activeSearchTab === "experiences"
        ? "Search culture, food or experiences"
        : "Where do you want to go?";
  });
});

function handleSearch(e) {
  e.preventDefault();
  const where = document.getElementById("search-where").value.trim();
  const when = document.getElementById("search-when").value;
  const travellers = document.getElementById("search-travellers").value;
  if (!where) {
    showToast("Please enter a destination to search!");
    return;
  }
  if (activeSearchTab === "hotels") {
    showToast("Hotel search and booking are not connected yet. Use the trip planner for estimated stay costs.");
    return;
  }
  if (activeSearchTab === "experiences") {
    const queryText = where.toLowerCase();
    const matches = (window.ODISHA_CULTURE || []).filter(topic =>
      [topic.title, topic.summary, topic.history, topic.significance, topic.experience]
        .join(" ").toLowerCase().includes(queryText));
    if (!matches.length) {
      showToast(`No culture or experience guide matched "${where}". Try dance, food, festival or temple.`);
      return;
    }
    document.getElementById("culture").scrollIntoView({ behavior: "smooth" });
    openCultureDetails(matches[0].id);
    return;
  }
  const dateStr = when ? new Date(when).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "any date";
  const query = document.getElementById("destination-query");
  query.value = where;
  query.dispatchEvent(new Event("input", { bubbles: true }));
  document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
  showToast(`Showing matches for "${where}" · ${travellers} traveller(s) · ${dateStr}`);
}

// ─── DESTINATIONS, DETAILS, FAVOURITES ────────────────────────────────────────
const destinationGrid = document.getElementById("destinations-grid");
const destinationFilterButtons = [...document.querySelectorAll(".filter-btn")];
const destinationSearchInput = document.getElementById("destination-query");
const destinationCount = document.getElementById("destination-count");
const destinations = window.ODISHA_DESTINATIONS || [];
const AVAILABLE_DESTINATION_PHOTOS = new Set(["puri", "konark", "bhubaneswar", "chilika", "simlipal"]);
function destinationPhoto(destination) {
  return AVAILABLE_DESTINATION_PHOTOS.has(destination.id)
    ? destination.image : "assets/images/odisha-placeholder.svg";
}
let currentDestinationFilter = "all";
let favouriteIds = readStoredList("odisha360:favourites");
const pendingTripDestinationIds = new Set();

function readStoredList(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch (error) {
    console.error(`Could not read ${key} from local storage:`, error);
    return [];
  }
}

function writeStoredList(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Could not write ${key} to local storage:`, error);
    return false;
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function refreshIcons() {
  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  }
}

if (!window.lucide) {
  document.getElementById("lucide-script")?.addEventListener("load", refreshIcons, { once: true });
}

function destinationMatches(destination, filter, query) {
  const categories = [destination.category, ...destination.tags].map(value => value.toLowerCase());
  const matchesFilter = filter === "all" || categories.includes(filter);
  const text = [
    destination.name, destination.district, destination.category,
    destination.tags.join(" "), destination.description
  ].join(" ").toLowerCase();
  return matchesFilter && (!query || text.includes(query));
}

function renderDestinations() {
  if (!destinationGrid) return;
  const query = destinationSearchInput.value.trim().toLowerCase();
  const filtered = destinations.filter(destination =>
    destinationMatches(destination, currentDestinationFilter, query));

  destinationGrid.replaceChildren();
  filtered.forEach(destination => {
    const card = document.createElement("article");
    const isIllustration = destination.image.endsWith("odisha-placeholder.svg");
    card.className = "dest-card reveal-on-scroll revealed";
    card.dataset.destinationId = destination.id;
    card.dataset.category = [destination.category, ...destination.tags].join(" ").toLowerCase();
    card.innerHTML = `
      <div class="dest-card-img-wrap">
      <img class="dest-card-img" src="${escapeHTML(destinationPhoto(destination))}"
          alt="${escapeHTML(AVAILABLE_DESTINATION_PHOTOS.has(destination.id) ? `${destination.name}, ${destination.district} district` : `Generic placeholder; a destination photo for ${destination.name} is not yet available`)}"
          loading="lazy" />
        <div class="dest-card-overlay"></div>
        <span class="dest-card-badge">${escapeHTML(destination.category)}</span>
        <button class="dest-card-fav${favouriteIds.includes(destination.id) ? " saved" : ""}"
          type="button" aria-label="${favouriteIds.includes(destination.id) ? "Remove" : "Add"} ${escapeHTML(destination.name)} ${favouriteIds.includes(destination.id) ? "from" : "to"} favourites"
          aria-pressed="${favouriteIds.includes(destination.id)}" data-favourite="${escapeHTML(destination.id)}">
          <i data-lucide="heart" aria-hidden="true"></i>
        </button>
      </div>
      <div class="dest-card-body">
        <div class="dest-card-meta">
          <span class="dest-card-location"><i data-lucide="map-pin" aria-hidden="true"></i>${escapeHTML(destination.district)} district</span>
          <span class="dest-card-category">${escapeHTML(destination.category)}</span>
        </div>
        <h3 class="dest-card-title">${escapeHTML(destination.name)}</h3>
        <p class="dest-card-desc">${escapeHTML(destination.description)}</p>
        <div class="dest-card-footer">
          <span class="dest-card-tag">${escapeHTML(destination.tags.join(" · "))}</span>
          <button type="button" class="dest-card-link" data-destination-details="${escapeHTML(destination.id)}">View details <span aria-hidden="true">→</span></button>
        </div>
      </div>`;
    const image = card.querySelector("img");
    image.addEventListener("error", () => {
      if (!image.src.endsWith("/odisha-placeholder.svg")) {
        image.src = "assets/images/odisha-placeholder.svg";
        image.alt = `Illustrated landscape placeholder for ${destination.name}`;
      }
    }, { once: true });
    destinationGrid.appendChild(card);
  });
  destinationCount.textContent = `${filtered.length} of ${destinations.length} destinations`;
  destinationGrid.classList.add("ready");
  refreshIcons();
}

destinationGrid?.addEventListener("click", event => {
  const favouriteButton = event.target.closest("[data-favourite]");
  if (favouriteButton) {
    const id = favouriteButton.dataset.favourite;
    const destination = destinations.find(item => item.id === id);
    favouriteIds = favouriteIds.includes(id)
      ? favouriteIds.filter(favouriteId => favouriteId !== id)
      : [...favouriteIds, id];
    if (!writeStoredList("odisha360:favourites", favouriteIds)) {
      showToast("Could not save favourites in this browser.");
      return;
    }
    renderDestinations();
    syncFavourite(id, favouriteIds.includes(id));
    showToast(`${destination.name} ${favouriteIds.includes(id) ? "added to" : "removed from"} favourites.`);
    return;
  }
  const detailsButton = event.target.closest("[data-destination-details]");
  if (detailsButton) openDestinationDetails(detailsButton.dataset.destinationDetails);
});

destinationFilterButtons.forEach(button => button.addEventListener("click", () => {
  currentDestinationFilter = button.dataset.filter;
  destinationFilterButtons.forEach(item => {
    const selected = item === button;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-pressed", String(selected));
  });
  renderDestinations();
}));
destinationSearchInput?.addEventListener("input", renderDestinations);

async function syncFavourite(destinationId, isSaved) {
  if (!supabaseClient) return;
  try {
    const { data: sessionData, error: sessionError } = await supabaseClient.auth.getSession();
    if (sessionError) throw sessionError;
    const userId = sessionData.session?.user?.id;
    if (!userId) return;
    const query = supabaseClient.from("favorites");
    const result = isSaved
      ? await query.upsert({ user_id: userId, destination_id: destinationId }, { onConflict: "user_id,destination_id" })
      : await query.delete().eq("user_id", userId).eq("destination_id", destinationId);
    if (result.error) throw result.error;
  } catch (error) {
    console.error("Could not sync favourite with Supabase:", error);
    showToast("Favourite saved on this device; cloud sync failed.");
  }
}

const contentModal = document.getElementById("content-modal");
const modalContent = document.getElementById("modal-content");

function showModal(content) {
  modalContent.replaceChildren(content);
  contentModal.showModal();
  refreshIcons();
}

function openDestinationDetails(id) {
  const destination = destinations.find(item => item.id === id);
  if (!destination) return;
  const article = document.createElement("article");
  article.className = "modal-article";
  article.innerHTML = `
    <img class="modal-hero" src="${escapeHTML(destinationPhoto(destination))}" alt="${escapeHTML(AVAILABLE_DESTINATION_PHOTOS.has(destination.id) ? destination.name : `Generic placeholder; a destination photo for ${destination.name} is not yet available`)}" />
    <p class="section-tag">${escapeHTML(destination.category)} · ${escapeHTML(destination.district)}</p>
    <h2 id="modal-title">${escapeHTML(destination.name)}</h2>
    <p>${escapeHTML(destination.description)}</p>
    <dl class="destination-facts">
      <div><dt>Best season</dt><dd>${escapeHTML(destination.bestSeason)}</dd></div>
      <div><dt>Entry fees</dt><dd>${escapeHTML(destination.entryFeeLabel)}</dd></div>
      <div><dt>Estimated daily cost</dt><dd>Budget ₹${destination.avgDailyCost.budget.toLocaleString("en-IN")} · Mid ₹${destination.avgDailyCost.mid.toLocaleString("en-IN")} · Premium ₹${destination.avgDailyCost.luxury.toLocaleString("en-IN")}</dd></div>
    </dl>
    <h3>Top attractions</h3><ul>${destination.attractions.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
    <h3>Try locally</h3><p>${destination.localFood.map(escapeHTML).join(" · ")}</p>
    <div class="modal-actions">
      <a class="btn btn-outline-dark" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${destination.name}, Odisha`)}" target="_blank" rel="noopener noreferrer">Open map</a>
      <button class="btn btn-primary" type="button" data-add-to-trip="${escapeHTML(destination.id)}">Add to my trip</button>
    </div>`;
  const image = article.querySelector("img");
  image.addEventListener("error", () => {
    image.src = "assets/images/odisha-placeholder.svg";
    image.alt = `Illustrated landscape placeholder for ${destination.name}`;
  }, { once: true });
  showModal(article);
}

modalContent.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add-to-trip]");
  if (!addButton) return;
  const destination = destinations.find(item => item.id === addButton.dataset.addToTrip);
  pendingTripDestinationIds.add(destination.id);
  document.getElementById("trip-start").value ||= destination.district;
  document.getElementById("trip-style").value = ({
    Heritage: "cultural", Spiritual: "spiritual", Beach: "beach",
    Nature: "nature", Wildlife: "adventure"
  })[destination.category] || "mixed";
  contentModal.close();
  document.getElementById("trip-planner").scrollIntoView({ behavior: "smooth" });
  showToast(`${destination.name} added to your itinerary preferences.`);
});

document.querySelector("[data-close-modal]")?.addEventListener("click", () => contentModal.close());
contentModal?.addEventListener("click", event => {
  if (event.target === contentModal) contentModal.close();
});

// ─── CULTURE DETAILS ─────────────────────────────────────────────────────────
const cultureGrid = document.getElementById("culture-grid");
const cultureTopics = window.ODISHA_CULTURE || [];

function renderCultureCards() {
  if (!cultureGrid) return;
  cultureGrid.replaceChildren();
  cultureTopics.forEach(topic => {
    const card = document.createElement("article");
    card.className = "culture-card reveal-on-scroll revealed";
    card.innerHTML = `
      <div class="culture-icon"><i data-lucide="${escapeHTML(topic.icon)}" aria-hidden="true"></i></div>
      <h3 class="culture-card-title">${escapeHTML(topic.title)}</h3>
      <p class="culture-card-desc">${escapeHTML(topic.summary)}</p>
      <button class="culture-link" type="button" data-culture-details="${escapeHTML(topic.id)}">Explore the story <span aria-hidden="true">→</span></button>`;
    cultureGrid.appendChild(card);
  });
  cultureGrid.classList.add("ready");
  refreshIcons();
}

renderCultureCards();
renderDestinations();

// ─── TRIP PLANNER ────────────────────────────────────────────────────────────
const plannerForm = document.getElementById("planner-form");
const plannerStatus = document.getElementById("planner-status");
const itineraryResult = document.getElementById("itinerary-result");
let currentItinerary = null;
const STYLE_CATEGORIES = {
  cultural: ["heritage"], adventure: ["wildlife", "nature"],
  spiritual: ["spiritual"], nature: ["nature", "wildlife"],
  beach: ["beach"], mixed: []
};

function getCoordinates(name) {
  const key = name.toLowerCase().replace(/ district$/, "").trim();
  const place = destinations.find(destination =>
    destination.id === key || destination.name.toLowerCase() === key);
  if (place) return [place.lat, place.lng];
  const districtPlace = destinations.find(destination => destination.district.toLowerCase().split(/,\s*/).includes(key));
  if (districtPlace) return [districtPlace.lat, districtPlace.lng];
  const fallback = destinations.find(destination => destination.id === "bhubaneswar") || destinations[0];
  return [fallback.lat, fallback.lng];
}

function isKnownStartingPoint(name) {
  const key = name.toLowerCase().replace(/ district$/, "").trim();
  return destinations.some(destination => destination.id === key || destination.name.toLowerCase() === key
    || destination.district.toLowerCase().split(/,\s*/).includes(key));
}

function distanceKm(from, to) {
  const radians = degree => degree * Math.PI / 180;
  const [lat1, lon1] = from;
  const [lat2, lon2] = to;
  const dLat = radians(lat2 - lat1);
  const dLon = radians(lon2 - lon1);
  const value = Math.sin(dLat / 2) ** 2
    + Math.cos(radians(lat1)) * Math.cos(radians(lat2)) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

function createRoute(start, duration, style) {
  const preferred = STYLE_CATEGORIES[style] || [];
  const startCoords = getCoordinates(start);
  const selectedIds = new Set([...pendingTripDestinationIds,
    ...[...(document.getElementById("trip-preferences")?.selectedOptions || [])].map(option => option.value)]);
  const pinnedDestinations = destinations.filter(item => selectedIds.has(item.id));
  const preferredDestinations = destinations.filter(item =>
    !pinnedDestinations.includes(item)
    && preferred.some(category => [item.category, ...item.tags].some(tag => tag.toLowerCase() === category)));
  const firstGroup = pinnedDestinations.length
    ? pinnedDestinations
    : preferred.length ? preferredDestinations : destinations;
  const remainingDestinations = destinations.filter(item => !firstGroup.includes(item));
  let candidates = [...firstGroup];
  let current = startCoords;
  const route = [];

  while (route.length < duration && (candidates.length || remainingDestinations.length)) {
    if (!candidates.length && remainingDestinations.length) {
      candidates = [...remainingDestinations];
      remainingDestinations.length = 0;
    }
    let bestIndex = 0;
    let bestDistance = Infinity;
    candidates.forEach((destination, index) => {
      const distance = distanceKm(current, [destination.lat, destination.lng]);
      const score = distance;
      if (score < bestDistance) {
        bestDistance = score;
        bestIndex = index;
      }
    });
    const [destination] = candidates.splice(bestIndex, 1);
    const distance = distanceKm(current, [destination.lat, destination.lng]);
    const estimatedRoadDistance = Math.round(distance * 1.25);
    route.push({
      ...destination,
      travelDistanceKm: estimatedRoadDistance,
      travelTimeHours: Math.max(0.5, Math.round(estimatedRoadDistance / 45 * 2) / 2)
    });
    current = [destination.lat, destination.lng];
  }
  return route;
}

function buildItinerary({ start, duration, style, budget }) {
  const route = createRoute(start, duration, style);
  const travelRates = { budget: 8, mid: 13, luxury: 24 };
  const days = route.map((destination, index) => {
    const attractions = destination.attractions;
    return {
      day: index + 1,
      destinationId: destination.id,
      destination: destination.name,
      district: destination.district,
      description: destination.description,
      travelDistanceKm: destination.travelDistanceKm,
      travelTimeHours: destination.travelTimeHours,
      travelFrom: index === 0
        ? (isKnownStartingPoint(start) ? start : `Bhubaneswar-area estimate for ${start}`)
        : route[index - 1].name,
      morning: index === 0
        ? `Travel from ${isKnownStartingPoint(start) ? start : "the Bhubaneswar area (approximate start)"} (about ${destination.travelTimeHours} hr / ${destination.travelDistanceKm} km by road), then visit ${attractions[0]}.`
        : `Travel from ${route[index - 1].name} (about ${destination.travelTimeHours} hr / ${destination.travelDistanceKm} km by road), then visit ${attractions[0]}.`,
      afternoon: `Explore ${attractions[1]}. Allow time for a relaxed lunch and local transport.`,
      evening: `Visit ${attractions[2]}; check local opening times and sunset conditions.`,
      food: destination.localFood,
      bestSeason: destination.bestSeason,
      entryFeeLabel: destination.entryFeeLabel,
      entryCost: destination.entryFee,
      dailyCost: destination.avgDailyCost[budget],
      travelCost: Math.round(destination.travelDistanceKm * travelRates[budget]),
      totalDayCost: Math.round(destination.avgDailyCost[budget] * 0.5)
        + Math.round(destination.avgDailyCost[budget] * 0.25) * 2
        + Math.round(destination.travelDistanceKm * travelRates[budget]) + destination.entryFee
    };
  });
  const totals = days.reduce((sum, day) => ({
    stay: sum.stay + Math.round(day.dailyCost * 0.5),
    food: sum.food + Math.round(day.dailyCost * 0.25),
    localTransport: sum.localTransport + Math.round(day.dailyCost * 0.25),
    intercityTransport: sum.intercityTransport + day.travelCost,
    entryFees: sum.entryFees + day.entryCost
  }), { stay: 0, food: 0, localTransport: 0, intercityTransport: 0, entryFees: 0 });
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    startingPoint: start, durationDays: duration, travelStyle: style,
    originApproximate: !isKnownStartingPoint(start),
    budgetTier: budget, createdAt: new Date().toISOString(), schedule: days,
    budgetBreakdown: totals,
    totalBudget: Object.values(totals).reduce((sum, amount) => sum + amount, 0)
  };
}

function renderItinerary(itinerary) {
  document.getElementById("itinerary-title").textContent =
    `${itinerary.durationDays}-day ${itinerary.travelStyle} journey`;
  document.getElementById("itinerary-summary").textContent =
    `Starting from ${itinerary.startingPoint} · ${itinerary.schedule.length} stops · ${itinerary.budgetTier} estimate`
      + (itinerary.originApproximate ? " · Unknown starting place estimated from Bhubaneswar" : "");
  const dayList = document.getElementById("itinerary-days");
  dayList.replaceChildren();
  itinerary.schedule.forEach(day => {
    const card = document.createElement("article");
    card.className = "itinerary-day";
    card.innerHTML = `
      <div class="itinerary-day-heading"><span>Day ${day.day}</span><div><h4>${escapeHTML(day.destination)}</h4><p>${escapeHTML(day.district)} district</p></div></div>
      <p class="itinerary-travel"><i data-lucide="route" aria-hidden="true"></i> From ${escapeHTML(day.travelFrom)} · approx. ${day.travelDistanceKm} km / ${day.travelTimeHours} hr by road</p>
      <div class="day-activities">
        <p><strong>Morning</strong>${escapeHTML(day.morning)}</p>
        <p><strong>Afternoon</strong>${escapeHTML(day.afternoon)}</p>
        <p><strong>Evening</strong>${escapeHTML(day.evening)}</p>
      </div>
      <p class="day-food"><strong>Local food:</strong> ${day.food.map(escapeHTML).join(" · ")}</p>`;
    card.insertAdjacentHTML("beforeend", `<p class="day-cost"><strong>Day estimate:</strong> ₹${day.totalDayCost.toLocaleString("en-IN")} (stay, food, local and intercity transport, entry allowance)</p>`);
    dayList.appendChild(card);
  });
  const totals = itinerary.budgetBreakdown;
  document.getElementById("itinerary-budget").innerHTML = `
    <h4>Estimated total: ₹${itinerary.totalBudget.toLocaleString("en-IN")} / traveller</h4>
    <dl>${[
      ["Stay", totals.stay], ["Food", totals.food], ["Local transport", totals.localTransport],
      ["Between destinations", totals.intercityTransport], ["Entry allowances", totals.entryFees]
    ].map(([label, amount]) => `<div><dt>${label}</dt><dd>₹${amount.toLocaleString("en-IN")}</dd></div>`).join("")}</dl>`;
  itineraryResult.hidden = false;
  refreshIcons();
}

async function persistItinerary(itinerary) {
  const saved = readStoredList("odisha360:itineraries");
  const withoutDuplicate = saved.filter(item => item.id !== itinerary.id);
  if (!writeStoredList("odisha360:itineraries", [itinerary, ...withoutDuplicate].slice(0, 50))) {
    plannerStatus.textContent = "Your itinerary is displayed, but this browser could not save it.";
    plannerStatus.hidden = false;
    return false;
  }
  plannerStatus.textContent = "Itinerary generated and saved on this device.";
  plannerStatus.hidden = false;
  if (!supabaseClient) return true;
  try {
    const { data: sessionData, error: sessionError } = await supabaseClient.auth.getSession();
    if (sessionError) throw sessionError;
    const userId = sessionData.session?.user?.id;
    if (!userId) return true;
    const { error } = await supabaseClient.from("itineraries").upsert({
      client_id: itinerary.id,
      user_id: userId,
      starting_point: itinerary.startingPoint,
      duration_days: itinerary.durationDays,
      travel_style: itinerary.travelStyle,
      budget_tier: itinerary.budgetTier,
      total_calculated_budget: itinerary.totalBudget,
      schedule: itinerary.schedule
    }, { onConflict: "user_id,client_id" });
    if (error) throw error;
    plannerStatus.textContent = "Itinerary saved on this device and synced to your account.";
    return true;
  } catch (error) {
    console.error("Could not sync the itinerary with Supabase:", error);
    plannerStatus.textContent = "Itinerary saved on this device. Cloud sync failed; you can retry with Save.";
    return false;
  }
}

plannerForm?.addEventListener("submit", async event => {
  event.preventDefault();
  if (!plannerForm.reportValidity()) return;
  const start = document.getElementById("trip-start").value.trim();
  const duration = Number(document.getElementById("trip-duration").value);
  const style = document.getElementById("trip-style").value;
  const budget = document.getElementById("trip-budget").value;
  if (start.length < 2 || start.length > 120 || !Number.isInteger(duration)
    || duration < 1 || duration > 14 || !["budget", "mid", "luxury"].includes(budget)) {
    plannerStatus.textContent = "Enter a starting place, select 1–14 days, a travel style and a budget.";
    plannerStatus.hidden = false;
    return;
  }
  const button = document.getElementById("btn-generate-plan");
  try {
    localStorage.setItem("odisha360:last-inputs", JSON.stringify({
      start, duration, style, budget,
      preferences: [...(document.getElementById("trip-preferences")?.selectedOptions || [])].map(option => option.value)
    }));
  } catch (error) { console.warn("Could not remember planner inputs:", error); }
  button.disabled = true;
  button.setAttribute("aria-busy", "true");
  plannerStatus.textContent = "Building your route and estimating costs…";
  plannerStatus.hidden = false;
  itineraryResult.hidden = true;
  try {
    currentItinerary = buildItinerary({ start, duration, style, budget });
    renderItinerary(currentItinerary);
    await persistItinerary(currentItinerary);
    itineraryResult.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    console.error("Could not build the itinerary:", error);
    plannerStatus.textContent = "We couldn't build this route. Check the form and try again.";
  } finally {
    button.disabled = false;
    button.removeAttribute("aria-busy");
  }
});

document.getElementById("save-itinerary")?.addEventListener("click", async () => {
  if (!currentItinerary) return;
  const synced = await persistItinerary(currentItinerary);
  showToast(synced ? "Itinerary saved." : "Itinerary saved locally; cloud sync can be retried.");
});
document.getElementById("print-itinerary")?.addEventListener("click", () => window.print());

function renderCultureDetails(topic) {
  const article = document.createElement("article");
  article.className = "modal-article culture-article";
  article.innerHTML = `
    <p class="section-tag">Odisha's living heritage</p>
    <h2 id="modal-title">${escapeHTML(topic.title)}</h2>
    <div class="culture-gallery">${topic.images.slice(0, 3).map((src, index) => `
      <img src="${escapeHTML(src)}" loading="lazy"
        alt="Odisha destination image ${index + 1}, shown as regional context for ${escapeHTML(topic.title)}" />`).join("")}</div>
    <h3>History</h3><p>${escapeHTML(topic.history)}</p>
    <h3>Why it matters</h3><p>${escapeHTML(topic.significance)}</p>
    <h3>Where to experience it</h3><p>${escapeHTML(topic.experience)}</p>
    <p class="best-time"><strong>Best time:</strong> ${escapeHTML(topic.bestTime)}</p>`;
  showModal(article);
}

cultureGrid?.addEventListener("click", event => {
  const button = event.target.closest("[data-culture-details]");
  const topic = cultureTopics.find(item => item.id === button?.dataset.cultureDetails);
  if (topic) renderCultureDetails(topic);
});

function openCultureDetails(id) {
  const topic = cultureTopics.find(item => item.id === id);
  if (topic) renderCultureDetails(topic);
}

// ─── TESTIMONIALS CAROUSEL ───────────────────────────────────────────────────
const testimonialTrack = document.getElementById("testimonials-track");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const tNavPrev = document.getElementById("t-nav-prev");
const tNavNext = document.getElementById("t-nav-next");
const tDots = document.querySelectorAll(".t-dot");

let currentTestimonial = 0;
let testimonialAutoplay;

function getVisibleCount() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
}

function getCardWidth() {
  // Use actual rendered width + gap (24px)
  if (!testimonialCards[0]) return 340 + 24;
  return testimonialCards[0].getBoundingClientRect().width + 24;
}

function goToTestimonial(idx) {
  const visible = getVisibleCount();
  const maxIdx = Math.max(0, testimonialCards.length - visible);
  currentTestimonial = Math.max(0, Math.min(idx, maxIdx));
  if (testimonialTrack) {
    testimonialTrack.style.transform = `translateX(-${currentTestimonial * getCardWidth()}px)`;
  }
  tDots.forEach((dot, i) => {
    dot.hidden = i > maxIdx;
    dot.classList.toggle("active", i === currentTestimonial);
    dot.setAttribute("aria-current", String(i === currentTestimonial));
  });
}

if (tNavNext) {
  tNavNext.addEventListener("click", () => {
    resetAutoplay();
    const visible = getVisibleCount();
    const max = testimonialCards.length - visible;
    goToTestimonial(currentTestimonial >= max ? 0 : currentTestimonial + 1);
  });
}
if (tNavPrev) {
  tNavPrev.addEventListener("click", () => {
    resetAutoplay();
    const visible = getVisibleCount();
    const max = testimonialCards.length - visible;
    goToTestimonial(currentTestimonial <= 0 ? max : currentTestimonial - 1);
  });
}
tDots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    resetAutoplay();
    goToTestimonial(i);
  });
});

// Touch/swipe support for testimonials
let touchStartX = 0;
if (testimonialTrack) {
  testimonialTrack.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  testimonialTrack.addEventListener("touchend", (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      resetAutoplay();
      const visible = getVisibleCount();
      const max = testimonialCards.length - visible;
      if (diff > 0) {
        goToTestimonial(currentTestimonial >= max ? 0 : currentTestimonial + 1);
      } else {
        goToTestimonial(currentTestimonial <= 0 ? max : currentTestimonial - 1);
      }
    }
  }, { passive: true });
}

function startAutoplay() {
  testimonialAutoplay = setInterval(() => {
    const visible = getVisibleCount();
    const max = testimonialCards.length - visible;
    goToTestimonial(currentTestimonial >= max ? 0 : currentTestimonial + 1);
  }, 5000);
}
function resetAutoplay() {
  clearInterval(testimonialAutoplay);
  startAutoplay();
}

// Only autoplay if not prefers-reduced-motion
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!prefersReducedMotion) {
  startAutoplay();
}

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => goToTestimonial(0), 150);
});

// ─── NEWSLETTER ───────────────────────────────────────────────────────────────
function handleNewsletter(e) {
  e.preventDefault();
  showToast(supabaseClient
    ? "Supabase is initialized, but newsletter storage has not been configured."
    : "Newsletter signup is unavailable because Supabase is not configured.");
}

// ─── CONTACT FORM ────────────────────────────────────────────────────────────
function handleContact(e) {
  e.preventDefault();
  showToast(supabaseClient
    ? "Supabase is initialized, but contact-message storage has not been configured."
    : "Contact form submission is unavailable because Supabase is not configured.");
}

// ─── BACK TO TOP ─────────────────────────────────────────────────────────────
const backToTop = document.getElementById("back-to-top");
function toggleBackToTop() {
  if (backToTop) {
    backToTop.classList.toggle("visible", window.scrollY > 500);
  }
}
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ─── TOAST ───────────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg, duration = 4000) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), duration);
}

// ─── SCROLL REVEAL ANIMATIONS ────────────────────────────────────────────────
// Only apply to elements NOT currently visible (avoids conflicting with filter show/hide)
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      revealObserver.unobserve(entry.target); // animate once only
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });

document.querySelectorAll(".dest-card, .culture-card, .why-card").forEach((el, i) => {
  el.classList.add("reveal-on-scroll");
  el.style.transitionDelay = `${(i % 3) * 80}ms`; // stagger
  revealObserver.observe(el);
});

// ─── KEYFRAMES (injected) ────────────────────────────────────────────────────
const injectStyle = document.createElement("style");
injectStyle.textContent = `
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}
.reveal-on-scroll.revealed {
  opacity: 1;
  transform: translateY(0);
}
/* Filter pop animation — must override reveal state */
@keyframes card-pop-in {
  from { opacity: 0; transform: scale(0.94) translateY(12px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
`;
document.head.appendChild(injectStyle);

// ─── SMOOTH SCROLL OFFSET (for fixed navbar) ────────────────────────────────
// Intercept all internal anchor clicks and offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const navHeight = navbar ? navbar.offsetHeight : 80;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

// ─── INIT ─────────────────────────────────────────────────────────────────────
updateActiveNavLink();

const authButtons = document.querySelectorAll(".auth-button");
let activeAuthSession = null;

function updateAuthButtons(session) {
  activeAuthSession = session;
  const user = session?.user;

  authButtons.forEach(button => {
    button.textContent = user ? "My profile" : "Continue with Google";
    button.setAttribute("aria-label", user ? "Open your profile" : "Sign in with Google");
  });
}

async function handleUniversalGoogleLogin() {
  if (!supabaseClient) {
    showToast("Google sign-in is unavailable because Supabase is not configured.");
    return;
  }

  if (activeAuthSession) {
    window.location.assign("dashboard.html");
    return;
  }

  window.location.assign("login.html");
}

authButtons.forEach(button => {
  button.addEventListener("click", handleUniversalGoogleLogin);
});

if (supabaseClient) {
  supabaseClient.auth.onAuthStateChange((_event, session) => {
    updateAuthButtons(session);
  });
}
