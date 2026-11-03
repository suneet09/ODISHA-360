/* ============================================================
   ODISHA 360 - Main JavaScript
   ============================================================ */

"use strict";

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
const DESTINATIONS = [
  "Konark Sun Temple", "Puri Beach", "Chilika Lake", "Bhubaneswar",
  "Simlipal National Park", "Daringbadi", "Rath Yatra – Puri", "Lingaraj Temple",
  "Udayagiri Caves", "Dhauli Peace Pagoda", "Ratnagiri Buddhist Site",
  "Bhitarkanika Mangroves", "Gopalpur-on-Sea", "Satkosia Tiger Reserve",
  "Hirakud Dam", "Odissi Dance Festival", "Pattachitra Village Raghurajpur",
  "Tikarpada Wildlife Sanctuary", "Gandhamardan Hills", "Sambalpur"
];

const searchWhere = document.getElementById("search-where");
const searchSuggestions = document.getElementById("search-suggestions");

if (searchWhere && searchSuggestions) {
  searchWhere.addEventListener("input", () => {
    const query = searchWhere.value.trim().toLowerCase();
    searchSuggestions.innerHTML = "";
    if (query.length < 2) {
      searchSuggestions.classList.remove("show");
      return;
    }
    const matches = DESTINATIONS.filter(d => d.toLowerCase().includes(query));
    if (!matches.length) {
      searchSuggestions.classList.remove("show");
      return;
    }
    matches.slice(0, 6).forEach(dest => {
      const item = document.createElement("div");
      item.className = "suggestion-item";
      item.setAttribute("role", "option");
      item.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${dest}`;
      item.addEventListener("click", () => {
        searchWhere.value = dest;
        searchSuggestions.classList.remove("show");
        searchWhere.focus();
      });
      searchSuggestions.appendChild(item);
    });
    searchSuggestions.classList.add("show");
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
searchTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    searchTabs.forEach(t => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
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
  const dateStr = when ? new Date(when).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "any date";
  showToast(`Searching "${where}" for ${travellers} traveller(s) on ${dateStr}`);
}

// ─── DESTINATION FILTER ───────────────────────────────────────────────────────
const filterBtns = document.querySelectorAll(".filter-btn");
const destCards = document.querySelectorAll(".dest-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;

    destCards.forEach(card => {
      const categories = (card.dataset.category || "").toLowerCase();
      const show = filter === "all" || categories.includes(filter);

      if (show) {
        card.classList.remove("hidden");
        // Reset then trigger animation
        card.style.animation = "none";
        // Use double rAF to guarantee repaint before animation
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            card.style.animation = "card-pop-in 0.4s ease both";
          });
        });
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// ─── FAVOURITE TOGGLE ────────────────────────────────────────────────────────
const favBtns = document.querySelectorAll(".dest-card-fav");
favBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent card click events
    const wasSaved = btn.classList.toggle("saved");
    const card = btn.closest(".dest-card");
    const title = card ? card.querySelector(".dest-card-title").textContent.trim() : "Destination";
    showToast(wasSaved
      ? `❤️ Added "${title}" to favourites!`
      : `Removed "${title}" from favourites.`
    );
  });
});

// ─── STYLE CHIPS (trip planner) ──────────────────────────────────────────────
const styleChips = document.querySelectorAll(".style-chip");
styleChips.forEach(chip => {
  chip.addEventListener("click", () => chip.classList.toggle("active"));
});

// ─── PLANNER FORM ────────────────────────────────────────────────────────────
function handlePlannerForm(e) {
  e.preventDefault();
  const start = document.getElementById("trip-start").value.trim();
  const duration = document.getElementById("trip-duration").value;
  const budget = document.getElementById("trip-budget").value;
  const styles = [...document.querySelectorAll(".style-chip.active")]
    .map(c => c.dataset.style)
    .join(", ");

  if (!start) {
    showToast("Please enter your starting city or district!");
    return;
  }
  if (!duration) {
    showToast("Please select your trip duration!");
    return;
  }
  const budgetLabel = budget === "budget" ? "Budget" : budget === "mid" ? "Mid-Range" : budget === "luxury" ? "Premium" : "Custom";
  showToast(`✈️ Building your ${duration}-day ${styles || "custom"} ${budgetLabel} Odisha itinerary from ${start}...`);
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
  testimonialTrack.style.transform = `translateX(-${currentTestimonial * getCardWidth()}px)`;
  tDots.forEach((dot, i) => dot.classList.toggle("active", i === currentTestimonial));
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
  const email = document.getElementById("newsletter-email").value.trim();
  if (!email) return;
  const name = email.split("@")[0];
  showToast(`🎉 Subscribed! Welcome to Odisha 360, ${name}!`);
  e.target.reset();
}

// ─── CONTACT FORM ────────────────────────────────────────────────────────────
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById("contact-name").value.trim();
  if (!name) return;
  showToast(`✅ Thank you, ${name}! We will get back to you within 24 hours.`);
  e.target.reset();
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
