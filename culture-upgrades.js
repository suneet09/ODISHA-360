"use strict";

(function addCultureTopics() {
  const grid = document.getElementById("culture-grid");
  const modal = document.getElementById("content-modal");
  const modalContent = document.getElementById("modal-content");
  if (!grid) return;

  const esc = value => String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const icons = { Food: "utensils", Dance: "music-2", Crafts: "palette", Festivals: "party-popper", "Tribal Heritage": "users", Architecture: "landmark" };
  const existing = [...grid.children];
  const existingCategories = ["Festivals", "Architecture", "Dance", "Crafts", "Festivals", "Food", "Festivals", "Tribal Heritage", "Architecture"];
  existing.forEach((card, index) => { card.dataset.cultureCategory = existingCategories[index] || "Architecture"; });

  const topics = window.ODISHA_CULTURE_ADDITIONS || [];
  topics.forEach(topic => {
    const card = document.createElement("article");
    card.className = "culture-card";
    card.dataset.cultureCategory = topic.category;
    card.dataset.cultureId = topic.id;
    card.innerHTML = `<div class="culture-icon"><i data-lucide="${icons[topic.category] || "book-open"}" aria-hidden="true"></i></div><h3 class="culture-card-title">${esc(topic.title)}</h3><p class="culture-card-desc">${esc(topic.summary)}</p><button class="culture-link" type="button" data-culture-open="${esc(topic.id)}">Learn More →</button>`;
    grid.appendChild(card);
  });

  const iconMarkup = name => `<i data-lucide="${name}" aria-hidden="true"></i>`;
  grid.addEventListener("click", event => {
    const button = event.target.closest("[data-culture-open]");
    if (!button) return;
    const topic = topics.find(item => item.id === button.dataset.cultureOpen);
    if (!topic || !modal || !modalContent) return;
    modalContent.innerHTML = `<article class="modal-article"><img class="modal-hero" loading="lazy" src="${esc(topic.image)}" alt="${esc(topic.alt)}" onerror="this.onerror=null;this.src='assets/images/odisha-placeholder.svg'"><p class="section-tag">${iconMarkup(icons[topic.category] || "book-open")} ${esc(topic.category)}</p><h2 id="modal-title">${esc(topic.title)}</h2><p>${esc(topic.description)}</p><dl class="destination-facts"><div><dt>Where to experience it</dt><dd>${esc(topic.whereToExperience)}</dd></div><div><dt>Best time</dt><dd>${esc(topic.bestTime)}</dd></div></dl></article>`;
    if (window.lucide?.createIcons) window.lucide.createIcons();
    if (modal.showModal) modal.showModal();
  });

  document.getElementById("culture-tabs")?.addEventListener("click", event => {
    const button = event.target.closest("[data-culture-filter]");
    if (!button) return;
    const category = button.dataset.cultureFilter;
    document.querySelectorAll("#culture-tabs [data-culture-filter]").forEach(tab => tab.setAttribute("aria-pressed", String(tab === button)));
    grid.querySelectorAll(".culture-card").forEach(card => {
      card.hidden = category !== "all" && card.dataset.cultureCategory !== category;
    });
  });
  if (window.lucide?.createIcons) window.lucide.createIcons();
})();
