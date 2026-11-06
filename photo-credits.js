"use strict";

(async function applyVerifiedPhotoCredits() {
  const destinations = window.ODISHA_DESTINATIONS || [];
  const fallback = "assets/images/odisha-placeholder.svg";
  let credits = [];
  // Suppress legacy, uncredited image paths immediately so an unverified photo
  // is never shown while the attribution manifest is loading.
  document.querySelectorAll("#destinations-grid [data-destination-id]").forEach(card => {
    const place = destinations.find(item => item.id === card.dataset.destinationId);
    const image = card.querySelector("img");
    if (image) { image.src = fallback; image.alt = `Photo not yet verified for ${place?.name || "this destination"}`; }
  });
  try {
    const response = await fetch("assets/images/credits.json", { cache: "no-cache" });
    if (!response.ok) throw new Error(`Credits request failed (${response.status})`);
    credits = await response.json();
  } catch (error) {
    console.warn("Image credits could not be loaded; showing neutral placeholders.", error);
  }
  const byId = new Map(credits.filter(item => item.id && item.file && item.sourceUrl && item.licence).map(item => [item.id, item]));
  const destinationByName = new Map(destinations.map(item => [item.name.toLowerCase(), item]));

  function prepareImage(image, item, credit) {
    image.loading = "lazy";
    image.decoding = "async";
    image.src = credit ? credit.file : fallback;
    image.alt = credit ? (item.alt || item.name || item.title) : `Photo not yet verified for ${item.name || item.title}`;
    image.onerror = () => { image.onerror = null; image.src = fallback; };
  }
  function updateDestinationCards() {
    document.querySelectorAll("#destinations-grid [data-destination-id]").forEach(card => {
      const place = destinations.find(item => item.id === card.dataset.destinationId);
      const image = card.querySelector("img");
      if (place && image) prepareImage(image, place, byId.get(place.id));
    });
  }
  function updateModal() {
    const title = document.querySelector("#modal-title")?.textContent.trim().toLowerCase();
    const image = document.querySelector("#modal-content .modal-hero");
    if (!title || !image) return;
    const culture = (window.ODISHA_CULTURE_ADDITIONS || []).find(item => item.title.toLowerCase() === title);
    const place = destinationByName.get(title);
    const item = culture || place;
    if (item) prepareImage(image, item, byId.get(item.id));
    else { image.src = fallback; image.alt = `Photo not yet verified for ${title}`; }
  }
  function updatePlanner() {
    document.querySelectorAll("#itinerary-days .itinerary-day").forEach(card => {
      if (card.querySelector(".itinerary-place-photo")) return;
      const title = card.querySelector("h4")?.textContent.trim();
      const place = destinationByName.get((title || "").toLowerCase());
      if (!place) return;
      const image = document.createElement("img");
      image.className = "itinerary-place-photo";
      image.setAttribute("aria-hidden", "true");
      card.prepend(image);
      prepareImage(image, place, byId.get(place.id));
    });
  }
  function renderCredits() {
    const list = document.getElementById("image-credits-list");
    if (!list) return;
    list.replaceChildren();
    if (!credits.length) {
      const note = document.createElement("li");
      note.className = "image-credit-empty";
      note.textContent = "No destination or culture photos have passed the required place-match and licence checks yet.";
      list.append(note);
      return;
    }
    credits.forEach(item => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = item.sourceUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = `${item.title} — ${item.author}; ${item.licence}`;
      li.append(link);
      list.append(li);
    });
  }
  updateDestinationCards(); updateModal(); updatePlanner(); renderCredits();
  const observer = new MutationObserver(() => { updateDestinationCards(); updateModal(); updatePlanner(); });
  [document.getElementById("destinations-grid"), document.getElementById("modal-content"), document.getElementById("itinerary-days")]
    .filter(Boolean).forEach(node => observer.observe(node, { childList: true, subtree: true }));
})();
