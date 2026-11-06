/* Progressive destination discovery and weather assistance. */
(function () {
  "use strict";
  const places = window.ODISHA_DESTINATIONS || [];
  const destinationStat = [...document.querySelectorAll(".stat-item")]
    .find(item => item.querySelector(".stat-label")?.textContent.trim() === "Destinations");
  if (destinationStat) {
    destinationStat.querySelector(".stat-number").dataset.count = String(places.length);
    destinationStat.querySelector(".stat-suffix").textContent = "";
  }
  const perPage = 12;
  const availablePhotos = new Set(["puri", "konark", "bhubaneswar", "chilika", "simlipal"]);
  let page = 1;
  let currentDistrict = "";
  const grid = document.getElementById("destinations-grid");
  const queryInput = document.getElementById("destination-query");
  const districtSelect = document.getElementById("destination-district");
  const count = document.getElementById("destination-count");
  const moreButton = document.getElementById("load-more-destinations");
  const escape = value => String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);

  // Render only the current page. The existing handlers keep favourite and modal behavior.
  function renderPage() {
    if (!grid) return;
    const filter = document.querySelector(".filter-btn.active")?.dataset.filter || "all";
    const query = (queryInput?.value || "").trim().toLowerCase();
    const matches = places.filter(place => {
      const categories = [place.category, ...(place.tags || [])].map(item => item.toLowerCase());
      return (filter === "all" || categories.includes(filter))
        && (!currentDistrict || place.district.split(/,\s*/).includes(currentDistrict))
        && (!query || `${place.name} ${place.district} ${place.category} ${place.description}`.toLowerCase().includes(query));
    });
    const visible = matches.slice(0, page * perPage);
    grid.replaceChildren();
    visible.forEach(place => {
      const card = document.createElement("article");
      let savedIds = [];
      try { savedIds = JSON.parse(localStorage.getItem("odisha360:favourites") || "[]"); } catch (_) { /* Recover from malformed local storage. */ }
      const saved = savedIds.includes(place.id);
      card.className = "dest-card reveal-on-scroll revealed";
      card.dataset.destinationId = place.id;
      card.dataset.category = [place.category, ...(place.tags || [])].join(" ").toLowerCase();
      card.innerHTML = `<div class="dest-card-img-wrap">
        <img class="dest-card-img" src="${escape(availablePhotos.has(place.id) ? place.image : "assets/images/odisha-placeholder.svg")}" alt="${escape(availablePhotos.has(place.id) ? (place.alt || place.name) : `Generic placeholder; a destination photo for ${place.name} is not yet available`)}" loading="lazy">
        <div class="dest-card-overlay"></div><span class="dest-card-badge">${escape(place.category)}</span>
        <button class="dest-card-fav${saved ? " saved" : ""}" type="button" aria-label="${saved ? "Remove" : "Add"} ${escape(place.name)} ${saved ? "from" : "to"} favourites" aria-pressed="${saved}" data-favourite="${escape(place.id)}"><i data-lucide="heart" aria-hidden="true"></i></button>
      </div><div class="dest-card-body"><div class="dest-card-meta"><span class="dest-card-location"><i data-lucide="map-pin" aria-hidden="true"></i>${escape(place.district)}</span><span class="dest-card-category">${escape(place.category)}</span></div>
        <h3 class="dest-card-title">${escape(place.name)}</h3><p class="dest-card-desc">${escape(place.description)}</p>
        <div class="dest-card-footer"><span class="dest-card-tag">${escape(place.tags?.join(" · ") || place.category)}</span><button type="button" class="dest-card-link" data-destination-details="${escape(place.id)}">View details <span aria-hidden="true">→</span></button></div></div>`;
      const image = card.querySelector("img");
      image.addEventListener("error", () => { image.src = "assets/images/odisha-placeholder.svg"; }, { once: true });
      grid.appendChild(card);
    });
    if (count) count.textContent = `${visible.length} of ${matches.length} matching · ${places.length} total destinations`;
    if (moreButton) moreButton.hidden = visible.length >= matches.length;
    window.lucide?.createIcons?.();
  }

  window.renderDestinations = renderPage;
  const districts = [...new Set(places.flatMap(place => place.district.split(/,\s*/)))].sort((a, b) => a.localeCompare(b));
  districts.forEach(name => districtSelect?.add(new Option(name, name)));
  districtSelect?.addEventListener("change", () => { currentDistrict = districtSelect.value; page = 1; renderPage(); });
  moreButton?.addEventListener("click", () => { page += 1; renderPage(); });
  queryInput?.addEventListener("input", () => { page = 1; renderPage(); });
  document.querySelectorAll(".filter-btn").forEach(button => button.addEventListener("click", () => { page = 1; renderPage(); }));

  const preferenceSelect = document.getElementById("trip-preferences");
  places.forEach(place => preferenceSelect?.add(new Option(place.name, place.id)));
  try {
    const previous = JSON.parse(localStorage.getItem("odisha360:last-inputs") || "null");
    if (previous) {
      document.getElementById("trip-start").value = previous.start || "";
      document.getElementById("trip-duration").value = previous.duration || "";
      document.getElementById("trip-style").value = previous.style || "mixed";
      document.getElementById("trip-budget").value = previous.budget || "";
      [...(preferenceSelect?.options || [])].forEach(option => { option.selected = (previous.preferences || []).includes(option.value); });
    }
  } catch (error) { console.warn("Could not restore planner inputs", error); }

  // Report incomplete data in development tools without interrupting visitors.
  const required = ["id", "name", "district", "category", "description", "bestSeason", "entryFee", "avgDailyCost", "topAttractions", "localFood", "nearestCity", "lat", "lng", "image", "alt", "verified"];
  const invalid = places.filter(place => required.some(key => place[key] === undefined || place[key] === null || place[key] === ""));
  if (invalid.length) console.warn("Odisha 360 destination records missing required data:", invalid.map(place => place.id));

  // Assistance weather results are cached for 30 minutes by destination id.
  const assistanceForm = document.getElementById("assistance-form");
  const assistanceInput = document.getElementById("assistance-place");
  const suggestions = document.getElementById("assistance-destinations");
  const result = document.getElementById("assistance-result");
  places.forEach(place => suggestions?.append(new Option(place.name, place.name)));
  const weatherKey = "odisha360:weather:";
  const rupees = value => `₹${Math.round(value).toLocaleString("en-IN")}`;
  const weatherCode = code => ({ 0: "Clear", 1: "Mostly clear", 2: "Partly cloudy", 3: "Overcast", 45: "Fog", 48: "Fog", 51: "Drizzle", 61: "Rain", 63: "Rain", 65: "Heavy rain", 71: "Snow", 80: "Showers", 95: "Thunderstorm" })[code] || "Variable conditions";
  function nextDayRainChance(weather) {
    const times = weather.hourly?.time || [];
    const now = weather.current?.time || "";
    const first = Math.max(0, times.findIndex(time => time >= now));
    return Math.max(0, ...(weather.hourly?.precipitation_probability || []).slice(first, first + 24));
  }
  function advice(place, weather) {
    const tips = [];
    const temp = weather.current.temperature_2m;
    const rain = nextDayRainChance(weather);
    if (temp >= 30 || weather.current.relative_humidity_2m >= 75) tips.push("Wear light, breathable cotton; carry a hat, sunscreen and water.");
    if (rain >= 40) tips.push("Rain is possible: pack a raincoat, quick-dry clothes and waterproof footwear.");
    if (temp < 20 || /hill|waterfall/i.test(place.category + " " + place.name)) tips.push("Bring a light jacket and an extra layer, especially for early mornings.");
    if (place.category === "Beach") tips.push("Choose breathable clothes, sunglasses and sandals; follow local sea and tide advice.");
    if (place.category === "Wildlife") tips.push("Wear full sleeves and earthy colours, closed shoes and insect repellent; follow forest staff guidance.");
    if (place.category === "Spiritual") tips.push("For temple visits, choose clothing covering shoulders and knees and footwear that is easy to remove.");
    if (!tips.length) tips.push("Wear comfortable clothes and shoes, carry water and check local conditions before setting out.");
    return tips;
  }
  assistanceForm?.addEventListener("submit", async event => {
    event.preventDefault();
    const place = places.find(item => item.name.toLowerCase() === assistanceInput.value.trim().toLowerCase());
    if (!place) { result.textContent = "Choose a destination from the suggestions so we can use its verified location."; return; }
    result.textContent = `Loading current weather for ${place.name}…`;
    try {
      let cached = null;
      try { cached = JSON.parse(localStorage.getItem(weatherKey + place.id) || "null"); } catch (_) { /* Empty or stale cache. */ }
      let weather = cached && Date.now() - cached.savedAt < 30 * 60 * 1000 ? cached.data : null;
      if (!weather) {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${place.lat}&longitude=${place.lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,uv_index,weather_code&hourly=precipitation_probability&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code&forecast_days=3&timezone=auto`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Weather service returned ${response.status}`);
        weather = await response.json();
        localStorage.setItem(weatherKey + place.id, JSON.stringify({ savedAt: Date.now(), data: weather }));
      }
      const current = weather.current;
      const rainChance = nextDayRainChance(weather);
      const forecast = (weather.daily?.time || []).map((date, i) => `<li><strong>${new Date(date + "T12:00:00").toLocaleDateString("en-IN", { weekday: "short", day: "numeric" })}</strong>: ${weatherCode(weather.daily.weather_code[i])}, ${Math.round(weather.daily.temperature_2m_min[i])}–${Math.round(weather.daily.temperature_2m_max[i])}°C, rain chance ${weather.daily.precipitation_probability_max[i] ?? "—"}%</li>`).join("");
      const tips = advice(place, weather);
      const safety = place.category === "Wildlife" ? "Stay with authorised guides and observe wildlife from a safe distance." : place.category === "Beach" ? "Check lifeguard, tide and sea-condition advice before entering the water." : "Carry drinking water and check local access notices before travel.";
      result.innerHTML = `<article class="assistance-card"><h3>${escape(place.name)} weather</h3><p class="weather-observed">${weatherCode(current.weather_code)} · observed ${escape(current.time || "now")}</p><div class="weather-metrics"><span>Temperature <strong>${Math.round(current.temperature_2m)}°C</strong></span><span>Feels like <strong>${Math.round(current.apparent_temperature)}°C</strong></span><span>Humidity <strong>${current.relative_humidity_2m}%</strong></span><span>Wind <strong>${Math.round(current.wind_speed_10m)} km/h</strong></span><span>Rain chance <strong>${rainChance}%</strong></span><span>UV index <strong>${current.uv_index ?? "—"}</strong></span></div><h4>3-day forecast</h4><ul>${forecast}</ul><h4>What to wear</h4><ul>${tips.map(tip => `<li>${escape(tip)}</li>`).join("")}</ul><p><strong>Best time:</strong> ${escape(place.bestSeason)}</p><p><strong>Safety tip:</strong> ${escape(safety)}</p><button type="button" class="btn btn-primary" data-assistance-trip="${escape(place.id)}">Add to my trip</button><p class="weather-note">Weather data from Open-Meteo; local conditions can change.</p></article>`;
    } catch (error) {
      console.warn("Weather lookup unavailable:", error);
      result.innerHTML = `<p class="assistance-error">Live weather is unavailable right now, possibly due to a connection issue. Try again later. Your place-specific seasonal advice: ${escape(place.bestSeason)}</p>`;
    }
  });
  result?.addEventListener("click", event => {
    const button = event.target.closest("[data-assistance-trip]");
    if (!button) return;
    const id = button.dataset.assistanceTrip;
    if (preferenceSelect) [...preferenceSelect.options].forEach(option => { if (option.value === id) option.selected = true; });
    document.getElementById("trip-planner")?.scrollIntoView({ behavior: "smooth" });
    document.getElementById("trip-start").value ||= places.find(place => place.id === id)?.district.split(",")[0] || "";
  });
  document.getElementById("assistance-chat-toggle")?.addEventListener("click", () => {
    document.getElementById("assistance")?.scrollIntoView({ behavior: "smooth" });
    assistanceInput?.focus({ preventScroll: true });
  });
  renderPage();
})();
