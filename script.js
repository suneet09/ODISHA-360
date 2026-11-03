/* ============================================================
   ODISHA 360 - Main JavaScript (Stage 1: Complete Homepage)
   Smart Tourism Platform for Odisha
   ============================================================ */

"use strict";

// ─── DESTINATIONS DATABASE (Mock Data for Stage 1 & Stage 2) ───────────────
const DESTINATIONS_DATA = {
  konark: {
    id: "konark",
    name: "Konark Sun Temple",
    district: "Puri District (35 km from Puri)",
    category: "heritage",
    badge: "UNESCO World Heritage Site",
    rating: "4.9",
    reviewCount: "1.2k",
    img: "assets/images/konark.jpg",
    fallbackImg: "assets/images/hero.jpg",
    season: "Oct – Mar",
    budget: "₹1,200 – ₹2,500 / day",
    airport: "Bhubaneswar BBI (65 km)",
    duration: "1 Day",
    overview: "Conceived as a colossal chariot of the Sun God Surya, the Konark Sun Temple is a 13th-century Kalinga architectural masterpiece built from khondalite rocks by King Narasimhadeva I. Standing on the shores of the Bay of Bengal, the temple features 24 intricately carved stone wheels representing the hours of the day and seven spirited horses pulling the divine chariot.",
    history: "Constructed around 1250 CE during the Eastern Ganga Dynasty, European sailors called it the 'Black Pagoda' because of its dark stone spire that served as a navigational landmark in the Bay of Bengal. The iconic Sun Dial wheels calculate exact solar time down to the minute.",
    attractions: [
      "24 Architectural Sundial Wheels with celestial motifs",
      "Natya Mandapa (Hall of Dance) with 128 classical dance poses",
      "Chandrabhaga Beach & Sunrise Marine Drive (3 km away)",
      "ASI Archaeological Museum & Sound and Light Show",
      "Annual Konark Dance Festival in December"
    ],
    tips: "Visit during sunrise or early morning for the best photography and minimal crowds. Guided audio devices and ASI certified guides are available at the entrance."
  },

  puri: {
    id: "puri",
    name: "Puri – Sea & Soul",
    district: "Puri Coastal District",
    category: "beach spiritual",
    badge: "Sacred Char Dham",
    rating: "4.8",
    reviewCount: "2.4k",
    img: "assets/images/puri.jpg",
    fallbackImg: "assets/images/hero.jpg",
    season: "Year-Round (Best: Oct – Mar)",
    budget: "₹1,500 – ₹3,500 / day",
    airport: "Bhubaneswar BBI (60 km)",
    duration: "2 to 3 Days",
    overview: "Puri is one of India's revered Char Dham pilgrimage sites, where the ancient abode of Lord Jagannath overlooks the rolling waves of the Bay of Bengal. The city pairs vibrant spiritual devotion with the clean, eco-certified Golden Beach (Blue Flag certified) and a lively cultural promenade along the Marine Drive.",
    history: "The sacred Jagannath Temple was commissioned in the 12th century by King Anantavarman Chodaganga Deva. The iconic Rath Yatra (Chariot Festival) has been celebrated for over a millennium, drawing millions of global devotees each summer.",
    attractions: [
      "Shree Jagannath Temple & Anandabazar Mahaprasad",
      "Puri Golden Beach (Blue Flag Certified Eco-Beach)",
      "Swargadwar Beach Promenade & Handicraft Markets",
      "Gundicha Temple (Garden house of the Lord)",
      "Raghurajpur Crafts Village (12 km away for Pattachitra art)"
    ],
    tips: "Taste the divine Mahaprasad (Chhappan Bhog) at Anandabazar between 1:00 PM and 3:00 PM. Follow temple dress etiquette (traditional Indian attire recommended)."
  },

  chilika: {
    id: "chilika",
    name: "Chilika Lake & Satapada",
    district: "Khurda, Puri & Ganjam",
    category: "nature wildlife",
    badge: "Ramsar Wetland Site",
    rating: "4.7",
    reviewCount: "1.8k",
    img: "assets/images/chilika.jpg",
    fallbackImg: "assets/images/hero.jpg",
    season: "Nov – Feb (Migratory Birds)",
    budget: "₹1,800 – ₹3,200 / day",
    airport: "Bhubaneswar BBI (100 km)",
    duration: "1 to 2 Days",
    overview: "Asia's largest brackish water lagoon and a Ramsar wetland of international importance, Chilika covers over 1,100 sq km. It is a premier sanctuary for the endangered Irrawaddy dolphins at Satapada, and a winter haven for over a million migratory flamingos, pelicans, and sandpipers from Siberia and Central Asia.",
    history: "Chilika has flourished for centuries as a vital maritime trade route linking ancient Kalinga merchants with Java, Sumatra, and Bali. The legendary Kalijai island temple stands at its center, dedicated to the guardian goddess of the fishermen.",
    attractions: [
      "Satapada Dolphin Watching Motorboat Safaris",
      "Mangalajodi Bird Sanctuary (eco-tourism paradise)",
      "Kalijai Temple Island in the middle of the lake",
      "Nalabana Island Bird Sanctuary (Ramsar core)",
      "Fresh Chilika Crabs and Prawns at local lake shacks"
    ],
    tips: "Take the earliest morning boat from Satapada (between 6:30 AM and 8:30 AM) for the best chance of spotting playful Irrawaddy dolphins surfacing."
  },

  bhubaneswar: {
    id: "bhubaneswar",
    name: "Bhubaneswar Temple City",
    district: "Khurda District (State Capital)",
    category: "heritage spiritual",
    badge: "Temple City of India",
    rating: "4.8",
    reviewCount: "1.9k",
    img: "assets/images/bhubaneswar.jpg",
    fallbackImg: "assets/images/hero.jpg",
    season: "Oct – Mar",
    budget: "₹1,500 – ₹4,000 / day",
    airport: "Bhubaneswar BBI (In City)",
    duration: "2 Days",
    overview: "Known as 'Ekamra Kshetra', Bhubaneswar once held over 7,000 sandstone temples. Today, it stands as a seamless blend of heritage and modern innovation, home to the 11th-century Lingaraj Temple, the exquisite Rajarani Temple, Mukteshwar Temple (the 'Gem of Odishan Architecture'), and the 2,000-year-old rock-cut Udayagiri-Khandagiri caves.",
    history: "Bhubaneswar has witnessed centuries of Jain, Buddhist, and Hindu patronage. Emperor Kharavela left behind the famous Hathigumpha inscription in the 1st century BCE, while medieval Somavamsi and Bhauma-Kara rulers built the majestic stone spires.",
    attractions: [
      "Lingaraj Temple (180-foot towering stone vimana)",
      "Mukteshwar & Rajarani Temples (intricate carvings)",
      "Udayagiri & Khandagiri Jain Rock Caves",
      "Odisha Crafts Museum (Kala Bhoomi)",
      "Nandankanan Zoological Park (White Tigers & Safari)"
    ],
    tips: "Non-Hindus can view the magnificent Lingaraj Temple complex from the elevated viewing platform constructed beside the northern perimeter wall."
  },

  simlipal: {
    id: "simlipal",
    name: "Similipal Tiger Reserve",
    district: "Mayurbhanj District",
    category: "nature wildlife",
    badge: "UNESCO Biosphere Reserve",
    rating: "4.6",
    reviewCount: "950",
    img: "assets/images/simlipal.jpg",
    fallbackImg: "assets/images/hero.jpg",
    season: "Nov – May (Closed Monsoons)",
    budget: "₹2,200 – ₹5,000 / day",
    airport: "Bhubaneswar BBI (270 km) / Kolkata (240 km)",
    duration: "2 to 3 Days",
    overview: "Encompassing 2,750 sq km of dense sal forests, deep gorges, and cloud-draped plateaus, Similipal is part of the UNESCO World Network of Biosphere Reserves. It is home to Royal Bengal Tigers, wild Asian elephants, 300+ bird species, and rare melanistic (black) leopards found nowhere else in the wild.",
    history: "Once a private hunting reserve for the Maharajas of Mayurbhanj, Similipal was declared a tiger reserve under Project Tiger in 1973 and a UNESCO Biosphere Reserve in 2009.",
    attractions: [
      "Barehipani Waterfall (399 meters, 2nd highest in India)",
      "Joranda Waterfall plunging 150 meters into deep gorge",
      "Jungle Safaris at Chahala, Jamuani, and Ramtirtha",
      "Eco-tourism cottage stays managed by local forest communities",
      "Mugger Crocodile Breeding Center at Ramtirtha"
    ],
    tips: "Entry permits must be pre-booked online via the Odisha Tourism / Wildlife portal. Only authorized high-clearance 4x4 safari vehicles are permitted inside the park."
  },

  daringbadi: {
    id: "daringbadi",
    name: "Daringbadi Hill Retreat",
    district: "Kandhamal District",
    category: "nature",
    badge: "Kashmir of Odisha",
    rating: "4.6",
    reviewCount: "870",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    fallbackImg: "assets/images/simlipal.jpg",
    season: "Sep – Mar (Dec/Jan for Frost)",
    budget: "₹1,400 – ₹3,000 / day",
    airport: "Bhubaneswar BBI (250 km)",
    duration: "2 Days",
    overview: "Perched at 3,000 feet above sea level in the Eastern Ghats, Daringbadi is known as the 'Kashmir of Odisha'. It offers cool pine forests, fragrant coffee gardens, cascading waterfalls, and quiet tribal hamlets where winter temperatures occasionally drop to freezing point.",
    history: "Named after Daring Sahib, a British colonial officer who surveyed and developed the hill tract in the 19th century as a summer escape from coastal humidity.",
    attractions: [
      "Hill View Point & Pine Forest Nature Trail",
      "Organic Coffee & Black Pepper Plantations",
      "Midubanda & Dasingbadi Waterfalls",
      "Lover's Point and Emu Bird Farm",
      "Belghar Nature Camp and Kutia Kondh tribal culture"
    ],
    tips: "Pack warm woolens if traveling in December or January. Visit the state coffee gardens to buy freshly roasted Odisha highland coffee beans directly."
  },

  dhauli: {
    id: "dhauli",
    name: "Dhauli Shanti Stupa",
    district: "Bhubaneswar / Puri Border",
    category: "heritage spiritual",
    badge: "Historic Peace Memorial",
    rating: "4.7",
    reviewCount: "1.4k",
    img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
    fallbackImg: "assets/images/bhubaneswar.jpg",
    season: "Oct – Mar",
    budget: "₹800 – ₹1,800 / day",
    airport: "Bhubaneswar BBI (10 km)",
    duration: "Half Day to 1 Day",
    overview: "Set upon the green Dhauli hills on the banks of the Daya River, this sacred site marks the turning point of Indian civilization: the Kalinga War of 261 BCE. The hillside features 3rd-century BCE Ashokan rock edicts topped by the iconic Dhauli Shanti Stupa (Peace Pagoda) built jointly by Kalinga Nippon Buddha Sangha.",
    history: "Witnessing the immense bloodshed along the Daya River during the Kalinga conquest, Emperor Ashoka underwent a profound spiritual transformation, renouncing war ('Digvijaya') to adopt universal peace through Buddhist teachings ('Dharmavijaya').",
    attractions: [
      "The White Peace Pagoda (Shanti Stupa) with Buddha sculptures",
      "Emperor Ashoka's Major Rock Edicts carved in Brahmi script",
      "Ancient carved stone elephant dating to 250 BCE",
      "Evening Light and Sound Show narrating the Kalinga War",
      "Dhavaleshwar Shiva Temple on the lower ridge"
    ],
    tips: "Attend the 35-minute evening Light & Sound Show on the hilltop (available in English, Hindi, and Odia). Great panoramic sunset views of the Daya River valley."
  },

  bhitarkanika: {
    id: "bhitarkanika",
    name: "Bhitarkanika Mangrove Sanctuary",
    district: "Kendrapara District",
    category: "nature wildlife",
    badge: "Mini Amazon of India",
    rating: "4.7",
    reviewCount: "720",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    fallbackImg: "assets/images/chilika.jpg",
    season: "Oct – Mar (Nesting Season)",
    budget: "₹2,000 – ₹4,500 / day",
    airport: "Bhubaneswar BBI (160 km)",
    duration: "2 Days",
    overview: "India's second-largest mangrove ecosystem after the Sundarbans, Bhitarkanika is a network of tidal creeks, mudflats, and emerald mangrove forests. It shelters over 1,700 giant saltwater crocodiles (including 20-foot world record specimens), spotted deer, wild boars, and 8 species of kingfishers.",
    history: "Declared a National Park in 1998 and designated a Ramsar Wetland in 2002. Nearby Gahirmatha Marine Sanctuary is the world's most critical mass nesting beach ('Arribada') for hundreds of thousands of endangered Olive Ridley sea turtles.",
    attractions: [
      "Boat Safaris through tidal mangrove creeks from Dangmal",
      "Crocodile Breeding Centre and Museum at Dangmal",
      "Gahirmatha Turtle Sanctuary Beach (entry restricted in season)",
      "Hunting Tower of the Kanika Kings & ancient Shiva temple ruins",
      "Forest Department Eco-Tent stays nestled in coastal forests"
    ],
    tips: "Always hire an authorized forest boat from Khola or Gupti gate with life jackets. Keep camera lenses ready for basking giant crocodiles on the muddy riverbanks."
  },

  gopalpur: {
    id: "gopalpur",
    name: "Gopalpur-on-Sea",
    district: "Ganjam District",
    category: "beach",
    badge: "Historic Maritime Port",
    rating: "4.6",
    reviewCount: "680",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    fallbackImg: "assets/images/puri.jpg",
    season: "Oct – Mar",
    budget: "₹1,400 – ₹3,200 / day",
    airport: "Bhubaneswar BBI (170 km)",
    duration: "1 to 2 Days",
    overview: "Once a bustling maritime port under the British East India Company trading with Burma, Gopalpur-on-Sea is now a peaceful coastal haven. Famous for quiet golden sand shores, gentle surf, the historic 1871 striped lighthouse, and relaxed beachside promenades away from crowded tourist hubs.",
    history: "In ancient times known as Mansurkota, Gopalpur played a prominent role in maritime trade. Crumbling colonial warehouses and the iconic red-and-white lighthouse still stand as testimony to its sea-faring golden era.",
    attractions: [
      "Historic 1871 Gopalpur Lighthouse with 360° coastal views",
      "Quiet Beachfront promenade and cashew groves",
      "Fresh coastal seafood delicacies and local fish markets",
      "Tampara Lake (scenic freshwater lake with water sports, 20 km)",
      "Pati Sonapur virgin beach and Bahuda river mouth"
    ],
    tips: "Climb the Gopalpur Lighthouse during public visiting hours (3:30 PM to 5:30 PM) for breathtaking panoramic sunset views over the Bay of Bengal."
  }
};

// ─── 22 TOP DESTINATIONS FOR AUTOCOMPLETE ──────────────────────────────────
const AUTOCOMPLETE_DESTINATIONS = [
  { name: "Konark Sun Temple", district: "Puri", cat: "UNESCO Heritage" },
  { name: "Puri Golden Beach", district: "Puri", cat: "Blue Flag Beach" },
  { name: "Chilika Lake & Satapada", district: "Khurda", cat: "Dolphin Lagoon" },
  { name: "Bhubaneswar Temple City", district: "Khurda", cat: "City of Temples" },
  { name: "Similipal National Park", district: "Mayurbhanj", cat: "Tiger Reserve" },
  { name: "Daringbadi Hill Station", district: "Kandhamal", cat: "Kashmir of Odisha" },
  { name: "Dhauli Shanti Stupa", district: "Bhubaneswar", cat: "Peace Memorial" },
  { name: "Bhitarkanika Mangroves", district: "Kendrapara", cat: "Crocodile Sanctuary" },
  { name: "Gopalpur-on-Sea", district: "Ganjam", cat: "Serene Beach" },
  { name: "Raghurajpur Crafts Village", district: "Puri", cat: "Pattachitra Art" },
  { name: "Lingaraj Temple", district: "Bhubaneswar", cat: "11th-Century Shrine" },
  { name: "Udayagiri & Khandagiri Caves", district: "Bhubaneswar", cat: "Jain Rock Caves" },
  { name: "Chandrabhaga Beach", district: "Puri", cat: "Sunset Beach" },
  { name: "Pipili Applique Village", district: "Puri", cat: "Handicrafts" },
  { name: "Satkosia Tiger Reserve", district: "Angul", cat: "Gorge & Wildlife" },
  { name: "Hirakud Dam", district: "Sambalpur", cat: "Longest Earth Dam" },
  { name: "Koraput Tribal Heartland", district: "Koraput", cat: "Tribal Culture" },
  { name: "Debrigarh Wildlife Sanctuary", district: "Bargarh", cat: "Eco-Reserve" },
  { name: "Barehipani Waterfalls", district: "Mayurbhanj", cat: "2nd Highest Waterfall" },
  { name: "Ratnagiri Buddhist Stupa", district: "Jajpur", cat: "Diamond Triangle" },
  { name: "Lalitgiri Monastery", district: "Cuttack", cat: "Ancient Relics" },
  { name: "Mangalajodi Bird Sanctuary", district: "Khurda", cat: "Avian Paradise" }
];

// ─── NAVBAR & MOBILE NAVIGATION ─────────────────────────────────────────────
const navbar = document.getElementById("navbar");
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileNavOverlay = document.getElementById("mobile-nav-overlay");
const mobileNavClose = document.getElementById("mobile-nav-close");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link, .mobile-cta");

// Scroll state for fixed navigation bar
window.addEventListener("scroll", () => {
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);
  updateActiveNavLink();
  toggleBackToTop();
});

// Hamburger toggle
if (hamburgerBtn && mobileNavOverlay) {
  hamburgerBtn.addEventListener("click", () => {
    const isOpen = hamburgerBtn.classList.toggle("active");
    hamburgerBtn.setAttribute("aria-expanded", isOpen);
    mobileNavOverlay.classList.toggle("active", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  if (mobileNavClose) mobileNavClose.addEventListener("click", closeMobileNav);
  mobileNavOverlay.addEventListener("click", (e) => {
    if (e.target === mobileNavOverlay) closeMobileNav();
  });
  mobileNavLinks.forEach(link => link.addEventListener("click", closeMobileNav));
}

function closeMobileNav() {
  if (!hamburgerBtn || !mobileNavOverlay) return;
  hamburgerBtn.classList.remove("active");
  hamburgerBtn.setAttribute("aria-expanded", "false");
  mobileNavOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Active Nav link updater based on viewport position
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.scrollY + 130;
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

  if (!matched && window.scrollY < 120) {
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    const homeLink = document.querySelector('.nav-link[href="#home"]');
    if (homeLink) homeLink.classList.add("active");
  }
}

// ─── HERO IMAGE ZOOM & ANIMATIONS ───────────────────────────────────────────
const heroImg = document.getElementById("hero-bg-img");
if (heroImg) {
  const markLoaded = () => heroImg.classList.add("loaded");
  if (heroImg.complete && heroImg.naturalHeight > 0) {
    markLoaded();
  } else {
    heroImg.addEventListener("load", markLoaded);
    heroImg.addEventListener("error", markLoaded);
  }
}

// Animated stats counter
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

// ─── SEARCH & AUTOCOMPLETE FUNCTIONALITY ────────────────────────────────────
const searchWhere = document.getElementById("search-where");
const searchSuggestions = document.getElementById("search-suggestions");
const searchWhen = document.getElementById("search-when");

// Set minimum date to today
if (searchWhen) {
  const today = new Date().toISOString().split("T")[0];
  searchWhen.min = today;
}

if (searchWhere && searchSuggestions) {
  searchWhere.addEventListener("input", () => {
    const query = searchWhere.value.trim().toLowerCase();
    searchSuggestions.innerHTML = "";

    if (query.length < 2) {
      searchSuggestions.classList.remove("show");
      return;
    }

    const matches = AUTOCOMPLETE_DESTINATIONS.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.district.toLowerCase().includes(query) ||
      item.cat.toLowerCase().includes(query)
    );

    if (!matches.length) {
      searchSuggestions.classList.remove("show");
      return;
    }

    matches.slice(0, 6).forEach(item => {
      const el = document.createElement("div");
      el.className = "suggestion-item";
      el.setAttribute("role", "option");
      el.innerHTML = `
        <div class="suggestion-left">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span><strong>${item.name}</strong> <small style="color:var(--text-light);">(${item.district})</small></span>
        </div>
        <span class="suggestion-tag">${item.cat}</span>
      `;
      el.addEventListener("click", () => {
        searchWhere.value = item.name;
        searchSuggestions.classList.remove("show");
        applyDestinationSearch(item.name);
      });
      searchSuggestions.appendChild(el);
    });

    searchSuggestions.classList.add("show");
  });

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

    const tabType = tab.dataset.tab;
    if (tabType === "itineraries") {
      searchWhere.placeholder = "Search itineraries: 3-day Golden Triangle, Chilika...";
      showToast("Curated Itinerary Search activated");
    } else if (tabType === "experiences") {
      searchWhere.placeholder = "Search experiences: Odissi, Rath Yatra, Pattachitra...";
      showToast("Cultural Experiences Search activated");
    } else {
      searchWhere.placeholder = "e.g. Konark, Puri, Chilika, Dhauli...";
    }
  });
});

// Trending pills in hero
document.querySelectorAll(".trending-pill").forEach(pill => {
  pill.addEventListener("click", () => {
    const query = pill.dataset.query;
    if (searchWhere) searchWhere.value = query;
    applyDestinationSearch(query);
  });
});

// Main Search Form handler
function handleSearch(e) {
  if (e) e.preventDefault();
  const where = searchWhere ? searchWhere.value.trim() : "";
  const when = searchWhen ? searchWhen.value : "";
  const travellers = document.getElementById("search-travellers")?.value || "2";

  if (!where) {
    showToast("Please enter a destination to search!");
    if (searchWhere) searchWhere.focus();
    return;
  }

  const dateStr = when ? new Date(when).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "any season";
  showToast(`🔍 Searching "${where}" for ${travellers} traveller(s) (${dateStr})...`);
  applyDestinationSearch(where);
}

// Apply Destination Search: Filters destination cards and scrolls smoothly
function applyDestinationSearch(query) {
  const term = query.toLowerCase().trim();
  const destCards = document.querySelectorAll(".dest-card");
  const statusBar = document.getElementById("search-status-bar");
  const termDisplay = document.getElementById("search-term-display");
  const countDisplay = document.getElementById("search-count-display");
  const emptyState = document.getElementById("destinations-empty");

  // Reset active filter button styling
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));

  let visibleCount = 0;

  destCards.forEach(card => {
    const title = card.querySelector(".dest-card-title")?.textContent.toLowerCase() || "";
    const desc = card.querySelector(".dest-card-desc")?.textContent.toLowerCase() || "";
    const district = (card.dataset.district || "").toLowerCase();
    const category = (card.dataset.category || "").toLowerCase();

    const matches = title.includes(term) || desc.includes(term) || district.includes(term) || category.includes(term);

    if (matches) {
      card.classList.remove("hidden");
      visibleCount++;
      card.style.animation = "none";
      requestAnimationFrame(() => {
        card.style.animation = "card-pop-in 0.4s ease both";
      });
    } else {
      card.classList.add("hidden");
    }
  });

  // Update status notification bar
  if (statusBar && termDisplay && countDisplay) {
    statusBar.classList.add("show");
    termDisplay.textContent = `"${query}"`;
    countDisplay.textContent = visibleCount;
  }

  // Handle empty state
  if (emptyState) {
    emptyState.classList.toggle("show", visibleCount === 0);
  }

  // Smooth scroll to destinations section
  const destSection = document.getElementById("destinations");
  if (destSection) {
    const navHeight = navbar ? navbar.offsetHeight : 80;
    const top = destSection.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

// Reset destination search & filter back to All
function resetDestinationFilters() {
  const destCards = document.querySelectorAll(".dest-card");
  const statusBar = document.getElementById("search-status-bar");
  const emptyState = document.getElementById("destinations-empty");
  const filterAll = document.getElementById("filter-all");

  destCards.forEach(card => card.classList.remove("hidden"));

  if (statusBar) statusBar.classList.remove("show");
  if (emptyState) emptyState.classList.remove("show");
  if (searchWhere) searchWhere.value = "";

  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  if (filterAll) filterAll.classList.add("active");

  showToast("Showing all 9 top destinations");
}

// ─── TOURISM CATEGORIES INTERACTION ─────────────────────────────────────────
// Clicking a category card activates the category filter and scrolls to destinations
document.querySelectorAll(".category-card").forEach(card => {
  const cat = card.dataset.category;
  const triggerCategory = () => {
    filterDestinationsByCategory(cat);
  };
  card.addEventListener("click", triggerCategory);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      triggerCategory();
    }
  });
});

function filterDestinationsByCategory(categoryKey) {
  const filterBtn = document.querySelector(`.filter-btn[data-filter="${categoryKey}"]`);
  if (filterBtn) {
    filterBtn.click();
  } else {
    // Fallback: manual filter
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    const destCards = document.querySelectorAll(".dest-card");
    let count = 0;
    destCards.forEach(card => {
      const cats = (card.dataset.category || "").toLowerCase();
      const show = cats.includes(categoryKey.toLowerCase());
      card.classList.toggle("hidden", !show);
      if (show) count++;
    });
  }

  // Smooth scroll to destinations
  const destSection = document.getElementById("destinations");
  if (destSection) {
    const navHeight = navbar ? navbar.offsetHeight : 80;
    const top = destSection.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

// ─── DESTINATION FILTER BAR (All, Heritage, Nature, Beach, etc.) ────────────
const filterBtns = document.querySelectorAll(".filter-bar .filter-btn");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    const destCards = document.querySelectorAll(".dest-card");
    const emptyState = document.getElementById("destinations-empty");
    const statusBar = document.getElementById("search-status-bar");

    if (statusBar) statusBar.classList.remove("show");

    let count = 0;

    if (filter === "saved") {
      // Filter by saved items from localStorage
      const savedList = getSavedDestinations();
      destCards.forEach(card => {
        const destId = card.dataset.id;
        const isSaved = savedList.includes(destId);
        card.classList.toggle("hidden", !isSaved);
        if (isSaved) count++;
      });

      if (count === 0) {
        showToast("No saved destinations yet! Click the heart ❤️ icon on any card to save it.");
      }
    } else {
      destCards.forEach(card => {
        const categories = (card.dataset.category || "").toLowerCase();
        const show = filter === "all" || categories.includes(filter);

        if (show) {
          card.classList.remove("hidden");
          count++;
          card.style.animation = "none";
          requestAnimationFrame(() => {
            card.style.animation = "card-pop-in 0.4s ease both";
          });
        } else {
          card.classList.add("hidden");
        }
      });
    }

    if (emptyState) emptyState.classList.toggle("show", count === 0);
  });
});

// ─── WISHLIST / SAVED DESTINATIONS (localStorage) ───────────────────────────
const STORAGE_KEY_SAVED = "odisha360_saved_destinations";

function getSavedDestinations() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SAVED);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    return [];
  }
}

function saveDestinationsList(list) {
  try {
    localStorage.setItem(STORAGE_KEY_SAVED, JSON.stringify(list));
  } catch (err) {
    console.warn("localStorage write failed:", err);
  }
}

function updateSavedCounters() {
  const saved = getSavedDestinations();
  const count = saved.length;

  const navCounter = document.getElementById("fav-counter");
  const mNavCounter = document.getElementById("m-fav-counter");
  const savedFilterCount = document.getElementById("saved-filter-count");

  if (navCounter) navCounter.textContent = count;
  if (mNavCounter) mNavCounter.textContent = count;
  if (savedFilterCount) savedFilterCount.textContent = count;

  // Sync card heart button states
  document.querySelectorAll(".dest-card-fav").forEach(btn => {
    const destId = btn.dataset.destId;
    btn.classList.toggle("saved", saved.includes(destId));
  });
}

// Favourite toggle click handlers
document.querySelectorAll(".dest-card-fav").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const destId = btn.dataset.destId;
    let saved = getSavedDestinations();
    const card = btn.closest(".dest-card");
    const title = card ? card.querySelector(".dest-card-title")?.textContent.trim() : "Destination";

    if (saved.includes(destId)) {
      saved = saved.filter(id => id !== destId);
      btn.classList.remove("saved");
      showToast(`Removed "${title}" from your saved destinations.`);
    } else {
      saved.push(destId);
      btn.classList.add("saved");
      showToast(`❤️ Added "${title}" to your saved destinations!`);
    }

    saveDestinationsList(saved);
    updateSavedCounters();
  });
});

// Nav saved button triggers the saved destinations filter
const navSavedBtn = document.getElementById("nav-saved-btn");
const mNavSaved = document.getElementById("m-nav-saved");

function showSavedDestinationsView(e) {
  if (e) e.preventDefault();
  const filterSaved = document.getElementById("filter-saved");
  if (filterSaved) filterSaved.click();

  const destSection = document.getElementById("destinations");
  if (destSection) {
    const navHeight = navbar ? navbar.offsetHeight : 80;
    const top = destSection.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

if (navSavedBtn) navSavedBtn.addEventListener("click", showSavedDestinationsView);
if (mNavSaved) mNavSaved.addEventListener("click", showSavedDestinationsView);

// ─── DESTINATION QUICK-VIEW MODAL ───────────────────────────────────────────
const destModalBackdrop = document.getElementById("dest-modal-backdrop");
let activeModalDestId = null;

function openDestModal(destId) {
  const data = DESTINATIONS_DATA[destId];
  if (!data || !destModalBackdrop) return;

  activeModalDestId = destId;

  // Populate modal data
  const modalImg = document.getElementById("modal-hero-img");
  const modalTitle = document.getElementById("modal-dest-title");
  const modalLocation = document.getElementById("modal-location-text");
  const modalBadge = document.getElementById("modal-badge");
  const modalRating = document.getElementById("modal-rating");
  const modalSeason = document.getElementById("modal-fact-season");
  const modalBudget = document.getElementById("modal-fact-budget");
  const modalAirport = document.getElementById("modal-fact-airport");
  const modalDuration = document.getElementById("modal-fact-duration");
  const modalOverview = document.getElementById("modal-overview-text");
  const modalHistory = document.getElementById("modal-history-text");
  const modalAttractions = document.getElementById("modal-attractions-list");
  const modalTips = document.getElementById("modal-tips-text");

  if (modalImg) {
    modalImg.src = data.img;
    modalImg.onerror = () => { modalImg.src = data.fallbackImg || "assets/images/hero.jpg"; };
  }
  if (modalTitle) modalTitle.textContent = data.name;
  if (modalLocation) modalLocation.textContent = data.district;
  if (modalBadge) modalBadge.textContent = data.badge;
  if (modalRating) modalRating.textContent = `★ ${data.rating} (${data.reviewCount} reviews)`;
  if (modalSeason) modalSeason.textContent = data.season;
  if (modalBudget) modalBudget.textContent = data.budget;
  if (modalAirport) modalAirport.textContent = data.airport;
  if (modalDuration) modalDuration.textContent = data.duration;
  if (modalOverview) modalOverview.textContent = data.overview;
  if (modalHistory) modalHistory.textContent = data.history;
  if (modalTips) modalTips.textContent = data.tips;

  // Attractions list
  if (modalAttractions) {
    modalAttractions.innerHTML = "";
    data.attractions.forEach(att => {
      const li = document.createElement("li");
      li.className = "modal-attraction-item";
      li.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${att}</span>
      `;
      modalAttractions.appendChild(li);
    });
  }

  // Show modal
  destModalBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeDestModal() {
  if (!destModalBackdrop) return;
  destModalBackdrop.classList.remove("active");
  document.body.style.overflow = "";
  activeModalDestId = null;
}

// Close on backdrop click
if (destModalBackdrop) {
  destModalBackdrop.addEventListener("click", (e) => {
    if (e.target === destModalBackdrop) closeDestModal();
  });
}

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && destModalBackdrop && destModalBackdrop.classList.contains("active")) {
    closeDestModal();
  }
});

// "Plan Trip Here" CTA inside modal
function planTripForModalDestination() {
  if (!activeModalDestId) return;
  const data = DESTINATIONS_DATA[activeModalDestId];
  closeDestModal();

  const tripStart = document.getElementById("trip-start");
  if (tripStart && data) {
    showToast(`✈️ Destination set to "${data.name}". Customise your dates below!`);
  }

  const plannerSection = document.getElementById("trip-planner");
  if (plannerSection) {
    const navHeight = navbar ? navbar.offsetHeight : 80;
    const top = plannerSection.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

// Allow card clicks to open modal (unless user clicked favorite button or links)
document.querySelectorAll(".dest-card").forEach(card => {
  card.addEventListener("click", (e) => {
    if (e.target.closest(".dest-card-fav") || e.target.closest(".dest-card-link")) return;
    const destId = card.dataset.id;
    if (destId) openDestModal(destId);
  });
});

// ─── STYLE CHIPS & TRIP PLANNER FORM ─────────────────────────────────────────
const styleChips = document.querySelectorAll(".style-chip");
styleChips.forEach(chip => {
  chip.addEventListener("click", () => chip.classList.toggle("active"));
});

function handlePlannerForm(e) {
  e.preventDefault();
  const start = document.getElementById("trip-start")?.value.trim() || "Bhubaneswar";
  const duration = document.getElementById("trip-duration")?.value || "3";
  const budget = document.getElementById("trip-budget")?.value || "mid";
  const selectedStyles = [...document.querySelectorAll(".style-chip.active")]
    .map(c => c.textContent)
    .join(", ") || "Custom";

  const budgetLabel = budget === "budget" ? "Budget Friendly (₹1.5k/day)" : budget === "mid" ? "Mid-Range Comfort (₹4k/day)" : "Luxury (₹8k+/day)";

  showToast(`🎉 Generating ${duration}-Day ${selectedStyles} Odyssey from ${start} [${budgetLabel}]! Opening planner...`);
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
  if (!testimonialCards[0]) return 340 + 24;
  return testimonialCards[0].getBoundingClientRect().width + 24;
}

function goToTestimonial(idx) {
  if (!testimonialTrack) return;
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
    const max = Math.max(0, testimonialCards.length - visible);
    goToTestimonial(currentTestimonial >= max ? 0 : currentTestimonial + 1);
  });
}

if (tNavPrev) {
  tNavPrev.addEventListener("click", () => {
    resetAutoplay();
    const visible = getVisibleCount();
    const max = Math.max(0, testimonialCards.length - visible);
    goToTestimonial(currentTestimonial <= 0 ? max : currentTestimonial - 1);
  });
}

tDots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    resetAutoplay();
    goToTestimonial(i);
  });
});

// Touch and swipe support
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
      const max = Math.max(0, testimonialCards.length - visible);
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
    const max = Math.max(0, testimonialCards.length - visible);
    goToTestimonial(currentTestimonial >= max ? 0 : currentTestimonial + 1);
  }, 5000);
}

function resetAutoplay() {
  clearInterval(testimonialAutoplay);
  startAutoplay();
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!prefersReducedMotion) {
  startAutoplay();
}

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => goToTestimonial(0), 150);
});

// ─── NEWSLETTER FORM ────────────────────────────────────────────────────────
function handleNewsletter(e) {
  e.preventDefault();
  const input = document.getElementById("newsletter-email");
  const email = input ? input.value.trim() : "";
  if (!email) return;
  const name = email.split("@")[0];
  showToast(`🎉 Subscribed! Welcome to the Odisha 360 community, ${name}!`);
  e.target.reset();
}

// ─── CONTACT FORM ───────────────────────────────────────────────────────────
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById("contact-name")?.value.trim();
  if (!name) return;
  showToast(`✅ Thank you, ${name}! Your inquiry has been received. We will respond within 24 hours.`);
  e.target.reset();
}

// ─── BACK TO TOP ─────────────────────────────────────────────────────────────
const backToTop = document.getElementById("back-to-top");
function toggleBackToTop() {
  if (backToTop) {
    backToTop.classList.toggle("visible", window.scrollY > 450);
  }
}
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ─── TOAST NOTIFICATION SYSTEM ──────────────────────────────────────────────
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
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });

document.querySelectorAll(".dest-card, .category-card, .culture-card, .why-platform-card, .why-card").forEach((el, i) => {
  el.classList.add("reveal-on-scroll");
  el.style.transitionDelay = `${(i % 3) * 70}ms`;
  revealObserver.observe(el);
});

// Injected Keyframes for reveal & pop animation
const injectStyle = document.createElement("style");
injectStyle.textContent = `
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}
.reveal-on-scroll.revealed {
  opacity: 1;
  transform: translateY(0);
}
@keyframes card-pop-in {
  from { opacity: 0; transform: scale(0.95) translateY(12px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
`;
document.head.appendChild(injectStyle);

// ─── SMOOTH SCROLL OFFSET FOR ANCHOR LINKS ─────────────────────────────────
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

// ─── INITIALIZATION ON DOM READY ───────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  updateSavedCounters();
  updateActiveNavLink();
  initOdishaMap();
});

// In case script runs after DOMContentLoaded:
updateSavedCounters();
updateActiveNavLink();
if (document.readyState === "complete" || document.readyState === "interactive") {
  initOdishaMap();
}

// ============================================================
// INTERACTIVE LEAFLET.JS MAP OF ODISHA
// ============================================================
const MAP_DESTINATIONS = [
  {
    id: "konark",
    name: "Konark Sun Temple",
    district: "Puri District",
    category: "heritage",
    lat: 19.8876,
    lng: 86.0945,
    badge: "UNESCO Heritage",
    img: "assets/images/konark.jpg",
    desc: "13th-century chariot temple with 24 carved stone wheels dedicated to Sun God Surya."
  },
  {
    id: "puri",
    name: "Puri Jagannath & Golden Beach",
    district: "Puri District",
    category: "beach spiritual",
    lat: 19.8135,
    lng: 85.8312,
    badge: "Char Dham",
    img: "assets/images/puri.jpg",
    desc: "Sacred abode of Lord Jagannath, Rath Yatra festival, and Blue Flag Golden Beach."
  },
  {
    id: "chilika",
    name: "Chilika Lake & Satapada",
    district: "Khurda & Puri",
    category: "wildlife nature",
    lat: 19.7042,
    lng: 85.3188,
    badge: "Ramsar Wetland",
    img: "assets/images/chilika.jpg",
    desc: "Asia's largest brackish lagoon with Irrawaddy dolphins and migratory winter birds."
  },
  {
    id: "bhubaneswar",
    name: "Bhubaneswar Temple City",
    district: "Khurda District",
    category: "heritage spiritual",
    lat: 20.2961,
    lng: 85.8245,
    badge: "Temple City",
    img: "assets/images/bhubaneswar.jpg",
    desc: "Capital hub with 1,000+ ancient sandstone temples and Udayagiri-Khandagiri rock caves."
  },
  {
    id: "simlipal",
    name: "Similipal Tiger Reserve",
    district: "Mayurbhanj District",
    category: "wildlife nature",
    lat: 21.8497,
    lng: 86.4259,
    badge: "Biosphere Reserve",
    img: "assets/images/simlipal.jpg",
    desc: "Dense sal biosphere, Royal Bengal tigers, wild elephants, and Barehipani waterfalls."
  },
  {
    id: "daringbadi",
    name: "Daringbadi Hill Station",
    district: "Kandhamal District",
    category: "hills nature",
    lat: 19.9079,
    lng: 84.1352,
    badge: "Kashmir of Odisha",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    desc: "Eastern Ghats hill retreat with pine valleys, coffee plantations, and cool mountain air."
  },
  {
    id: "dhauli",
    name: "Dhauli Shanti Stupa",
    district: "Bhubaneswar / Puri",
    category: "heritage spiritual",
    lat: 20.1919,
    lng: 85.8394,
    badge: "Peace Memorial",
    img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80",
    desc: "Ashokan rock edicts and peaceful white stupa marking the historic 261 BCE Kalinga War site."
  },
  {
    id: "bhitarkanika",
    name: "Bhitarkanika Mangroves",
    district: "Kendrapara District",
    category: "wildlife nature",
    lat: 20.7248,
    lng: 86.8689,
    badge: "Mini Amazon",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    desc: "Mangrove wetland sanctuary for giant saltwater crocodiles and Olive Ridley turtle beaches."
  },
  {
    id: "gopalpur",
    name: "Gopalpur-on-Sea",
    district: "Ganjam District",
    category: "beach",
    lat: 19.2608,
    lng: 84.9082,
    badge: "Colonial Port",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    desc: "Tranquil coastal resort with golden sands, red-striped 1871 lighthouse, and gentle surf."
  },
  {
    id: "raghurajpur",
    name: "Raghurajpur Heritage Crafts",
    district: "Puri District",
    category: "heritage",
    lat: 19.8794,
    lng: 85.8281,
    badge: "Artisan Village",
    img: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=600&q=80",
    desc: "Traditional artisan village where every family creates master Pattachitra cloth paintings."
  },
  {
    id: "chandrabhaga",
    name: "Chandrabhaga Beach",
    district: "Puri District",
    category: "beach",
    lat: 19.8654,
    lng: 86.1154,
    badge: "Sunset Point",
    img: "assets/images/puri.jpg",
    desc: "Pristine beach near Konark Sun Temple, renowned for dramatic sunrises and surf."
  },
  {
    id: "hirakud",
    name: "Hirakud Dam & Reservoir",
    district: "Sambalpur District",
    category: "heritage nature",
    lat: 21.5204,
    lng: 83.8703,
    badge: "Longest Dam",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    desc: "One of the longest earthen dams in the world across the Mahanadi River with Gandhi Minar."
  }
];

let odishaMapInstance = null;
let activeMapMarkerEntries = [];

function createCustomPinIcon(category) {
  let pinClass = "pin-heritage";
  let iconText = "🏛️";
  if (category.includes("beach")) {
    pinClass = "pin-beach";
    iconText = "🏖️";
  } else if (category.includes("wildlife")) {
    pinClass = "pin-wildlife";
    iconText = "🐅";
  } else if (category.includes("spiritual")) {
    pinClass = "pin-spiritual";
    iconText = "🛕";
  } else if (category.includes("hills")) {
    pinClass = "pin-hills";
    iconText = "⛰️";
  }

  return L.divIcon({
    className: `custom-map-pin ${pinClass}`,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
    html: `<div class="custom-map-pin-inner">${iconText}</div>`
  });
}

function initOdishaMap() {
  const mapElement = document.getElementById("odisha-map");
  if (!mapElement || odishaMapInstance) return;

  if (typeof L === "undefined") {
    console.warn("Leaflet library not ready, retrying in 300ms...");
    setTimeout(initOdishaMap, 300);
    return;
  }

  try {
    // Center of Odisha geographic coordinates
    odishaMapInstance = L.map("odisha-map", {
      center: [20.5, 84.8],
      zoom: 7.3,
      minZoom: 6,
      maxZoom: 14,
      scrollWheelZoom: false
    });

    // OpenStreetMap standard tile layer
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors | Odisha 360'
    }).addTo(odishaMapInstance);

    // Enable scroll zoom on user click
    odishaMapInstance.on("click", () => odishaMapInstance.scrollWheelZoom.enable());
    mapElement.addEventListener("mouseleave", () => odishaMapInstance.scrollWheelZoom.disable());

    // Populate markers
    activeMapMarkerEntries = [];

    MAP_DESTINATIONS.forEach(dest => {
      const pinIcon = createCustomPinIcon(dest.category);
      const marker = L.marker([dest.lat, dest.lng], { icon: pinIcon }).addTo(odishaMapInstance);

      const popupHtml = `
        <div class="map-popup-card">
          <div class="map-popup-img-wrap">
            <img src="${dest.img}" alt="${dest.name}" class="map-popup-img" onerror="this.onerror=null; this.src='assets/images/hero.jpg';">
            <span class="map-popup-badge">${dest.badge}</span>
          </div>
          <div class="map-popup-body">
            <div class="map-popup-location">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              ${dest.district}
            </div>
            <h4 class="map-popup-title">${dest.name}</h4>
            <p class="map-popup-desc">${dest.desc}</p>
            <div class="map-popup-actions">
              <button class="map-popup-btn map-popup-btn-primary" onclick="openDestModal('${dest.id}')">Explore &rarr;</button>
              <button class="map-popup-btn map-popup-btn-outline" onclick="planTripFromMap('${dest.name}')">Plan Trip</button>
            </div>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { maxWidth: 300, minWidth: 260 });
      activeMapMarkerEntries.push({ data: dest, marker: marker });
    });

    // Map Category Filter buttons
    const mapFilterBtns = document.querySelectorAll(".map-filter-btn");
    mapFilterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        mapFilterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filterKey = btn.dataset.mapFilter;

        const bounds = [];
        activeMapMarkerEntries.forEach(({ data, marker }) => {
          const match = filterKey === "all" || data.category.includes(filterKey);
          if (match) {
            if (!odishaMapInstance.hasLayer(marker)) marker.addTo(odishaMapInstance);
            bounds.push([data.lat, data.lng]);
          } else {
            if (odishaMapInstance.hasLayer(marker)) odishaMapInstance.removeLayer(marker);
          }
        });

        if (bounds.length > 0 && filterKey !== "all") {
          odishaMapInstance.fitBounds(bounds, { padding: [40, 40], maxZoom: 9 });
        } else if (filterKey === "all") {
          resetMapView();
        }
      });
    });

    // Invalidate size when scrolling near map
    const mapObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        odishaMapInstance.invalidateSize();
      }
    }, { threshold: 0.1 });
    mapObserver.observe(mapElement);

  } catch (err) {
    console.error("Map initialization error:", err);
  }
}

function resetMapView() {
  if (odishaMapInstance) {
    odishaMapInstance.setView([20.5, 84.8], 7.3, { animate: true });
    showToast("Map view reset to Odisha state overview");
  }
}

function planTripFromMap(destName) {
  if (odishaMapInstance) {
    odishaMapInstance.closePopup();
  }
  const tripStart = document.getElementById("trip-start");
  if (tripStart) {
    showToast(`✈️ Destination "${destName}" added to Trip Builder!`);
  }
  const planner = document.getElementById("trip-planner");
  if (planner) {
    const navHeight = navbar ? navbar.offsetHeight : 80;
    const top = planner.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top, behavior: "smooth" });
  }
}
