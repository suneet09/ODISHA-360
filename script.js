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
  },

  taratarini: {
    "id": "taratarini",
    "name": "Maa Taratarini Temple",
    "district": "Ganjam",
    "category": "religious",
    "badge": "Adi Shakti Peetha",
    "rating": "4.8",
    "reviewCount": "1.6k",
    "lat": 19.4939,
    "lng": 84.8967,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Taratarini_temple.jpg/800px-Taratarini_temple.jpg",
    "fallbackImg": "assets/images/hero.jpg",
    "season": "Oct – Mar (Chaitra Mela)",
    "budget": "₹800 – ₹1,800 / day",
    "airport": "Bhubaneswar BBI (165 km) / Berhampur Rly (32 km)",
    "duration": "1 Day",
    "desc": "Ancient Adi Shakti Peetha on Kumari hills along Rushikulya river, revered by sea-faring Odia merchants for over 2,000 years.",
    "overview": "Perched atop the scenic Kumari hills on the bank of the holy Rushikulya river, Maa Taratarini is one of the four ancient Adi Shakti Peethas of India (the Sthana Peetha representing the breasts of Goddess Sati). The twin goddesses Tara and Tarini are revered as the patron deities of sea-faring Odia merchants (Sadhabas) and millions of global devotees.",
    "history": "Mentioned in ancient Puranic texts, this sacred shrine dates back over two millennia. Sailors in ancient Kalinga performed elaborate pujas here before departing on voyages to Java and Sumatra. A 999-step stone stairway and modern ropeway ascend 708 feet to the hilltop.",
    "attractions": [
        "Rushikulya River panoramic vantage point from hilltop",
        "Modern Hilltop Ropeway Cable Car ride",
        "Twin Brass Idols of Goddesses Tara and Tarini",
        "Chaitra Yatra festival on Tuesdays of Chaitra month",
        "Nearby historic Jaugada Ashokan Rock Edict (10 km)"
    ],
    "tips": "Ropeway runs daily from 8:00 AM to 6:00 PM. Tuesdays during Chaitra month attract huge crowds; plan for early morning visits."
},

  tarini_ghatagaon: {
    "id": "tarini_ghatagaon",
    "name": "Maa Tarini Temple, Ghatagaon",
    "district": "Keonjhar",
    "category": "religious",
    "badge": "Sacred Shakti Shrine",
    "rating": "4.9",
    "reviewCount": "2.8k",
    "lat": 21.5832,
    "lng": 85.9083,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Maa_Tarini_Temple_Ghatagaon.jpg/800px-Maa_Tarini_Temple_Ghatagaon.jpg",
    "fallbackImg": "assets/images/hero.jpg",
    "season": "Oct – Mar (Chaiti Yatra)",
    "budget": "₹1,000 – ₹2,200 / day",
    "airport": "Bhubaneswar BBI (180 km) / Keonjhar Rly (45 km)",
    "duration": "1 Day",
    "desc": "Revered living goddess of Odisha surrounded by sal forests; famous for the unique state-wide coconut offering tradition.",
    "overview": "Surrounded by dense sal forests of Keonjhar, the temple of Maa Tarini at Ghatagaon is one of the most culturally revered shrines in Odisha. Maa Tarini is regarded as the wish-fulfilling living goddess. A famous unique tradition across Odisha is sending coconuts to the deity via long-distance buses and trucks, all of which safely reach the temple.",
    "history": "According to legend, King Govinda Bhanja of Keonjhar brought Goddess Tarini from Puri with the assistance of General Kanchi Vijaya during the 15th century. The deity traveled on horseback, accompanied by the clatter of horse hooves.",
    "attractions": [
        "Sacred Coconut Offering Mandap where thousands offer coconuts daily",
        "Annual Chaiti Yatra festival with Chhou dance recitals",
        "Sanaghagara Waterfall (40 km away)",
        "Badaghagara Waterfall (45 km away)",
        "Ghatagaon sal forest trails and tribal craft markets"
    ],
    "tips": "Devotees offer coconuts; pre-packaged sacred prasad and sweet bhog are available at trust-managed counters."
},

  lingaraj: {
    "id": "lingaraj",
    "name": "Lingaraj Temple",
    "district": "Khurda",
    "category": "religious heritage",
    "badge": "11th-Century Kalinga Marvel",
    "rating": "4.9",
    "reviewCount": "3.5k",
    "lat": 20.2382,
    "lng": 85.8336,
    "img": "assets/images/bhubaneswar.jpg",
    "fallbackImg": "assets/images/hero.jpg",
    "season": "Oct – Mar (Maha Shivaratri)",
    "budget": "₹1,000 – ₹2,500 / day",
    "airport": "Bhubaneswar BBI (4 km)",
    "duration": "Half Day",
    "desc": "The largest and most majestic temple in Bhubaneswar, dedicated to Lord Harihara with an imposing 180-foot stone vimana.",
    "overview": "The magnificent Lingaraj Temple is the centerpiece of Ekamra Kshetra and the largest temple in Bhubaneswar. Built from dark sandstone, its 180-foot towering vimana dominates the city skyline. Dedicated to Lord Harihara (a harmonious blend of Lord Shiva and Lord Vishnu), the temple is enclosed within a massive compound with 108 subsidiary shrines.",
    "history": "Commissioned by King Jajati Keshari of the Somavamsi dynasty in the 11th century CE, the temple represents the absolute zenith of the architectural evolution of Kalinga deula temples.",
    "attractions": [
        "180-ft Sanctum Spire (Sri Mandir) with intricate stone friezes",
        "Sacred Bindusagar Lake and holy ghats",
        "108 stone shrines within courtyards",
        "Elevated viewing platform outside perimeter for all visitors",
        "Maha Shivaratri festival of light"
    ],
    "tips": "Photography and leather items are strictly prohibited inside. Non-Hindus can enjoy a sweeping panoramic view from the raised ASI viewing platform next to the north wall."
},

  udayagiri_khandagiri: {
    "id": "udayagiri_khandagiri",
    "name": "Udayagiri & Khandagiri Caves",
    "district": "Khurda",
    "category": "heritage hills",
    "badge": "2nd Century BCE Rock Caves",
    "rating": "4.7",
    "reviewCount": "2.1k",
    "lat": 20.2604,
    "lng": 85.7865,
    "img": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
    "fallbackImg": "assets/images/bhubaneswar.jpg",
    "season": "Oct – Mar",
    "budget": "₹600 – ₹1,500 / day",
    "airport": "Bhubaneswar BBI (6 km)",
    "duration": "Half Day",
    "desc": "Ancient rock-cut monastic caves of Jain ascetics featuring Emperor Kharavela's historic Hathigumpha Brahmi inscription.",
    "overview": "Rising abruptly from the outskirts of Bhubaneswar, Udayagiri (Sunrise Hill) and Khandagiri (Broken Hill) feature 33 rock-hewn caves carved in the 2nd century BCE for Jain ascetics during the golden reign of King Kharavela of Kalinga.",
    "history": "The caves contain the celebrated Hathigumpha (Elephant Cave) inscription consisting of 17 lines incised in deep Brahmi script, detailing the military conquests, civic works, and patronages of King Kharavela.",
    "attractions": [
        "Ranigumpha (Queen's Cave - two-storeyed monastery with elaborate friezes)",
        "Hathigumpha 17-line Brahmi royal inscription",
        "Ganesha Gumpha with stone elephant guardians",
        "Hilltop Jain Temple on Khandagiri",
        "Panoramic views over the capital city"
    ],
    "tips": "Visit early in the morning to climb both hills before the midday heat. Keep food items packed to avoid inquisitive langur monkeys."
},

  nandankanan: {
    "id": "nandankanan",
    "name": "Nandankanan Zoological Park",
    "district": "Khurda",
    "category": "wildlife nature",
    "badge": "Premier Sanctuary & Zoo",
    "rating": "4.8",
    "reviewCount": "4.2k",
    "lat": 20.3957,
    "lng": 85.8242,
    "img": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80",
    "fallbackImg": "assets/images/simlipal.jpg",
    "season": "Oct – Mar (Closed Mondays)",
    "budget": "₹800 – ₹1,800 / day",
    "airport": "Bhubaneswar BBI (18 km)",
    "duration": "1 Day",
    "desc": "World-famous 437-hectare sanctuary and zoo abutting Kanjia Lake; first in the world to breed white and melanistic tigers.",
    "overview": "Spread across 437 hectares of natural moist deciduous forest abutting the scenic Kanjia Lake, Nandankanan ('Garden of Heavens') is an internationally acclaimed zoo, botanical sanctuary, and wildlife breeding center. It is world-renowned as the birthplace of white tiger and melanistic tiger captive breeding.",
    "history": "Established in 1960, Nandankanan became the first zoo in the world to breed endangered white tigers from normal-colored parents. In 2009, it became the first Indian zoo to join WAZA (World Association of Zoos and Aquariums).",
    "attractions": [
        "White Tiger Safari and Lion Safari in natural forest enclosures",
        "Kanjia Lake boating and wetland bird observation",
        "Reptile Park with king cobras and gharials",
        "Nocturnal Animal house and Pangolin conservation breeding center",
        "Toy train ride around the forest periphery"
    ],
    "tips": "Closed on Mondays. Rent an eco-friendly battery vehicle inside if traveling with children or seniors due to the large park area."
},

  barabati_fort: {
    "id": "barabati_fort",
    "name": "Barabati Fort",
    "district": "Cuttack",
    "category": "heritage",
    "badge": "14th-Century Citadel",
    "rating": "4.5",
    "reviewCount": "1.1k",
    "lat": 20.4851,
    "lng": 85.8647,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Barabati_fort_cuttack.jpg/800px-Barabati_fort_cuttack.jpg",
    "fallbackImg": "assets/images/bhubaneswar.jpg",
    "season": "Oct – Mar (Bali Yatra)",
    "budget": "₹800 – ₹1,800 / day",
    "airport": "Bhubaneswar BBI (30 km) / Cuttack Rly (8 km)",
    "duration": "Half Day",
    "desc": "Historic Ganga dynasty fortress at the Mahanadi-Kathajodi delta with an ornate stone gateway, palace ruins, and moat.",
    "overview": "Situated at the apex of the Mahanadi and Kathajodi river delta in the Millennium City of Cuttack, Barabati Fort is a 14th-century fortress built by the Ganga dynasty. Famous for its carved arched stone gateway, 9-storeyed palace ruins, and moat.",
    "history": "Founded around 989 CE by King Marakata Keshari and expanded by King Anangabhima Deva III in the 13th century. It successfully withstood Maratha and Mughal invasions before falling to the British in 1803.",
    "attractions": [
        "Monumental Barabati stone gateway with defensive loopholes",
        "20-meter wide moat filled with water lilies",
        "Excavated stone palace foundations and mosque",
        "Historic Barabati Cricket Stadium adjacent to the fort",
        "Cuttack Silver Filigree (Tarakasi) artisan workshops nearby"
    ],
    "tips": "Visit during the grand Bali Yatra festival in November on the adjacent Mahanadi riverbank, celebrated as Asia's largest open-air trade fair."
},

  ansupa_lake: {
    "id": "ansupa_lake",
    "name": "Ansupa Lake",
    "district": "Cuttack",
    "category": "waterfalls nature",
    "badge": "Largest Freshwater Oxbow Lake",
    "rating": "4.6",
    "reviewCount": "850",
    "lat": 20.4633,
    "lng": 85.6022,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Ansupa_Lake_Odisha.jpg/800px-Ansupa_Lake_Odisha.jpg",
    "fallbackImg": "assets/images/chilika.jpg",
    "season": "Nov – Feb (Winter Birds)",
    "budget": "₹1,000 – ₹2,200 / day",
    "airport": "Bhubaneswar BBI (60 km) / Cuttack (50 km)",
    "duration": "1 Day",
    "desc": "Horseshoe-shaped freshwater oxbow lake cradled between Saranda and Bishnupur hills, teeming with floating water lilies.",
    "overview": "Odisha's largest freshwater oxbow lake, horseshoe-shaped Ansupa covers 141 hectares nestled between the verdant Saranda and Bishnupur hills along the Mahanadi river basin. Teeming with floating lotus flowers and winter migratory waterfowl.",
    "history": "Formed naturally as a cutoff meander of the Mahanadi river over hundreds of years. The nearby Saranda hill contains ruins of an ancient medieval fort of King Subarnakeshari.",
    "attractions": [
        "Ansupa Eco-Park with bamboo bridges and floating gazebos",
        "Paddle and motor boating on clear freshwater",
        "Saranda Hilltop watchtower and sunset viewpoint",
        "Winter birdwatching (gadwalls, teals, and jacanas)",
        "Community eco-cottage stays managed by local eco-societies"
    ],
    "tips": "Winter months (November to February) are best for birdwatching. Try fresh freshwater fish curries prepared at local village homestays."
},

  gahirmatha: {
    "id": "gahirmatha",
    "name": "Gahirmatha Marine Sanctuary",
    "district": "Kendrapara",
    "category": "wildlife beach",
    "badge": "World's Largest Turtle Rookery",
    "rating": "4.8",
    "reviewCount": "980",
    "lat": 20.73,
    "lng": 86.99,
    "img": "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=800&q=80",
    "fallbackImg": "assets/images/chilika.jpg",
    "season": "Nov – Apr (Mass Nesting: Jan–Mar)",
    "budget": "₹1,800 – ₹3,500 / day",
    "airport": "Bhubaneswar BBI (175 km)",
    "duration": "2 Days",
    "desc": "The world's largest nesting beach for endangered Olive Ridley sea turtles, spanning 1,435 sq km of marine sanctuary.",
    "overview": "Extending along the Bay of Bengal coastline from Dhamra to the Mahanadi mouth, Gahirmatha is the world's most critical mass nesting beach ('Arribada') for hundreds of thousands of endangered Olive Ridley sea turtles. Covering 1,435 sq km, it is Odisha's sole marine wildlife sanctuary.",
    "history": "Declared a marine sanctuary in 1997 to protect the turtles that travel thousands of kilometers from the South Pacific and Indian Oceans to lay eggs on its isolated sands.",
    "attractions": [
        "Mass nesting phenomenon of Olive Ridley turtles (Jan–Mar)",
        "Virgin coastline of Ekakula and Habalikhati",
        "Forest department boat patrol routes and hatchling releases",
        "Marine biodiversity including dolphins and white-bellied sea eagles",
        "Eco-cottages on secluded sandy barrier islands"
    ],
    "tips": "Motorized fishing is banned in the sanctuary to safeguard turtles. Overnight eco-camps are available at Habalikhati with advance forest permits."
},

  talsari: {
    "id": "talsari",
    "name": "Talsari Beach",
    "district": "Balasore",
    "category": "beach",
    "badge": "Serene Virgin Coast",
    "rating": "4.6",
    "reviewCount": "1.1k",
    "lat": 21.6021,
    "lng": 87.4526,
    "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "fallbackImg": "assets/images/puri.jpg",
    "season": "Oct – Mar",
    "budget": "₹1,200 – ₹2,600 / day",
    "airport": "Kolkata CCU (180 km) / Balasore Rly (85 km)",
    "duration": "1 to 2 Days",
    "desc": "Pristine palm-fringed beach along Subarnarekha estuary; famous for red ghost crab colonies and vast low-tide sandy plains.",
    "overview": "Located near the Odisha-West Bengal border where the Subarnarekha River meets the Bay of Bengal, Talsari takes its name from 'Tala' (palm tree rows) and 'Sari' (pattern). A tranquil beach lined with casuarina groves, tranquil lagoons, and millions of red ghost crabs scuttling across wide sandy shores.",
    "history": "Long appreciated as a serene coastal retreat, Talsari's waters recede significantly during low tide, allowing visitors to walk deep into the sea bed safely.",
    "attractions": [
        "Extensive red ghost crab colonies along the shoreline",
        "Subarnarekha River confluence boat rides",
        "Casuarina forest trails and sand dunes",
        "Fresh seafood stalls serving pomfret, hilsa, and tiger prawns",
        "Nearby Digha border promenade (8 km away)"
    ],
    "tips": "Check tide schedules: during low tide, crossing the shallow backwater creek to reach the main beach on small wooden boats is a memorable experience."
},

  bichitrapur: {
    "id": "bichitrapur",
    "name": "Bichitrapur Mangrove Sanctuary",
    "district": "Balasore",
    "category": "wildlife nature",
    "badge": "Coastal Mangrove Reserve",
    "rating": "4.7",
    "reviewCount": "760",
    "lat": 21.6214,
    "lng": 87.4357,
    "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    "fallbackImg": "assets/images/chilika.jpg",
    "season": "Oct – Mar",
    "budget": "₹1,200 – ₹2,400 / day",
    "airport": "Kolkata CCU (185 km) / Balasore (90 km)",
    "duration": "1 Day",
    "desc": "Unique 563-hectare tidal mangrove forest on the Bay of Bengal with creek boat safaris and prehistoric horseshoe crabs.",
    "overview": "Spreading over 563 hectares on the mouth of the Subarnarekha river, Bichitrapur is a thriving mangrove wetland managed by the Odisha Forest Department. Featuring dense mangrove canopies, tidal creeks, sandbars, and living colonies of prehistoric horseshoe crabs.",
    "history": "Developed as an eco-tourism and coastal defense initiative, Bichitrapur has become a prime model for coastal community mangrove conservation.",
    "attractions": [
        "Forest department motorized boat safaris through tidal mangrove channels",
        "Rare Horseshoe Crab conservation habitat",
        "Sand dune watchtower with panoramic Bay of Bengal views",
        "Rich birdlife including white-bellied sea eagles, egrets, and kingfishers",
        "Eco-tourism tents managed by local forest protection committees"
    ],
    "tips": "Book the forest boat safari from the ticket counter at the entrance. Carry sun protection and insect repellent."
},

  panchalingeswar: {
    "id": "panchalingeswar",
    "name": "Panchalingeswar Temple",
    "district": "Balasore",
    "category": "religious nature",
    "badge": "Five Submerged Lingas",
    "rating": "4.7",
    "reviewCount": "1.8k",
    "lat": 21.4642,
    "lng": 86.7214,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Panchalingeswar_Temple_Hill.jpg/800px-Panchalingeswar_Temple_Hill.jpg",
    "fallbackImg": "assets/images/hero.jpg",
    "season": "Oct – Mar",
    "budget": "₹1,000 – ₹2,000 / day",
    "airport": "Bhubaneswar BBI (200 km) / Balasore Rly (30 km)",
    "duration": "1 Day",
    "desc": "Scenic hilltop shrine in Nilagiri where five natural Shiva Lingas remain submerged under a crystal mountain stream.",
    "overview": "Nestled high in the verdant Nilagiri hills, Panchalingeswar is a sacred hill shrine where five natural stone Shiva Lingas remain perpetually submerged under a sparkling perennial mountain stream that flows over polished granite boulders. Devotees lie flat on the rocks to feel the submerged sacred stones.",
    "history": "According to local folklore, these five Lingas were established by King Banasura, the devotee king mentioned in the Mahabharata, due to the serenity of the hills.",
    "attractions": [
        "263-step stone trek through sal forests",
        "Sacred stream touching ritual on granite rocks",
        "Historic Nilagiri Jagannath Temple and Rajbati Palace (10 km)",
        "Gateway to Kuldiha Wildlife Sanctuary",
        "Panoramic views of Nilagiri lush green valleys"
    ],
    "tips": "Wear non-slip footwear as the wet granite rocks near the stream are slick. Morning climbs are peaceful and cool."
},

  kuldiha: {
    "id": "kuldiha",
    "name": "Kuldiha Wildlife Sanctuary",
    "district": "Balasore",
    "category": "wildlife nature",
    "badge": "Elephant Corridor Sanctuary",
    "rating": "4.6",
    "reviewCount": "690",
    "lat": 21.4089,
    "lng": 86.685,
    "img": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
    "fallbackImg": "assets/images/simlipal.jpg",
    "season": "Nov – Apr (Closed Monsoons)",
    "budget": "₹1,500 – ₹3,200 / day",
    "airport": "Bhubaneswar BBI (210 km) / Balasore Rly (35 km)",
    "duration": "1 to 2 Days",
    "desc": "Dense mixed deciduous forest sanctuary of Nilagiri hills; vital elephant corridor home to wild herds, gaur, and hornbills.",
    "overview": "Spanning 272 sq km across the Nilagiri hills, Kuldiha is a rich mixed deciduous forest sanctuary that forms a critical elephant corridor linking Similipal to the Hadgarh reserve. Dense sal trees shelter Asian wild elephants, Indian gaur (bison), leopards, giant squirrels, and diverse hornbill species.",
    "history": "Declared a sanctuary in 1984, Kuldiha serves as a sanctuary and transit corridor for Mayurbhanj's wild elephant herds.",
    "attractions": [
        "Rissia waterhole watchtower for observing wild elephant herds",
        "Jungle safari tracks through evergreen canopy",
        "Gohirabhin eco-tourism tent camp",
        "Birdwatching for Malabar Pied Hornbills and emerald doves",
        "Trek to Sukhuapada and Nato hill ridges"
    ],
    "tips": "Obtain vehicle entry permits from Nilagiri forest office. Stay at the Forest Eco-Cottages at Gohirabhin for early morning wildlife sightings."
},

  kapilash: {
    "id": "kapilash",
    "name": "Kapilash Temple & Mountain",
    "district": "Dhenkanal",
    "category": "religious hills",
    "badge": "Kailash of Odisha",
    "rating": "4.8",
    "reviewCount": "1.9k",
    "lat": 20.6869,
    "lng": 85.7661,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Kapilash_Temple_Dhenkanal.jpg/800px-Kapilash_Temple_Dhenkanal.jpg",
    "fallbackImg": "assets/images/hero.jpg",
    "season": "Oct – Mar (Maha Shivaratri)",
    "budget": "₹1,000 – ₹2,200 / day",
    "airport": "Bhubaneswar BBI (85 km) / Dhenkanal Rly (20 km)",
    "duration": "1 Day",
    "desc": "Summit shrine of Lord Chandrasekhar at 2,239 feet reached by 1,352 stone steps or a winding 12-ghat serpentine hill road.",
    "overview": "Rising 2,239 feet above sea level, Kapilash mountain is revered as the 'Kailash of Odisha'. At the summit sits the ancient temple of Lord Chandrasekhar (Shiva), reached either by climbing 1,352 stone steps through thick forests or by driving along a scenic 12-hairpin ghat road.",
    "history": "The main temple was constructed in 1246 CE by King Narasinghadeva I of the Eastern Ganga Dynasty. Medieval sage shrines of Kapila Muni and Patita Pavana are located nearby.",
    "attractions": [
        "1,352-step pilgrim hill stairway through dense woods",
        "Mountain spring shrine (Marichi Kunda and Payamruta Kunda)",
        "Kapilash Science Park and Deer Sanctuary at the base",
        "Saptasajya scenic hill retreat (35 km away)",
        "Maha Shivaratri festival with thousands carrying holy water"
    ],
    "tips": "A drivable road leads directly to the top parking lot for visitors unable to take the 1,352 steps. Maha Shivaratri brings thousands carrying holy water jugs."
},

  joranda: {
    "id": "joranda",
    "name": "Joranda Mahima Gadi",
    "district": "Dhenkanal",
    "category": "religious heritage",
    "badge": "Seat of Mahima Dharma",
    "rating": "4.7",
    "reviewCount": "1.2k",
    "lat": 20.7228,
    "lng": 85.6425,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Joranda_Gadi_Mandir.jpg/800px-Joranda_Gadi_Mandir.jpg",
    "fallbackImg": "assets/images/bhubaneswar.jpg",
    "season": "Oct – Mar (Magha Purnima)",
    "budget": "₹800 – ₹1,800 / day",
    "airport": "Bhubaneswar BBI (95 km) / Dhenkanal (24 km)",
    "duration": "1 Day",
    "desc": "International spiritual headquarters of Mahima Dharma where worshippers meditate upon the formless divine Alekha.",
    "overview": "The international supreme spiritual seat (Mahima Gadi) of Mahima Dharma, a unique casteless, monotheistic spiritual philosophy founded in 19th-century Odisha by Mahima Gosain. Worshippers revere 'Sunya Brahma' (the Formless Absolute Divine) through simple asceticism without idol worship.",
    "history": "Founded in the mid-19th century as an egalitarian social reform and spiritual movement. The great saint-poet Bhima Bhoi composed visionary Odia devotional hymns propagating universal brotherhood.",
    "attractions": [
        "Sunya Mandir (Temple of the Void)",
        "Dhuni Mandir (perpetually burning sacred holy fire)",
        "Gadi Mandir and sacred samadhi grounds",
        "Grand annual Joranda Mela held during Magha Purnima",
        "Saffron-clad Kaupuni and Bakala sanyasi monastic life"
    ],
    "tips": "Footwear is left outside the complex. Observe absolute quiet and decorum inside the peaceful prayer grounds."
},

  samaleswari: {
    "id": "samaleswari",
    "name": "Maa Samaleswari Temple",
    "district": "Sambalpur",
    "category": "religious heritage",
    "badge": "Presiding Deity of Western Odisha",
    "rating": "4.9",
    "reviewCount": "3.1k",
    "lat": 21.4682,
    "lng": 83.9667,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Samaleswari_Temple_Sambalpur.jpg/800px-Samaleswari_Temple_Sambalpur.jpg",
    "fallbackImg": "assets/images/hero.jpg",
    "season": "Sep – Mar (Nuakhai Festival)",
    "budget": "₹1,200 – ₹2,500 / day",
    "airport": "Jharsuguda JRG (60 km) / Sambalpur Rly (3 km)",
    "duration": "1 Day",
    "desc": "Patron goddess of Western Odisha on the Mahanadi riverbank; epicenter of Nuakhai festival, now with modern SAMALEI corridor.",
    "overview": "The spiritual heart of Western Odisha, the temple of Shree Shree Maa Samaleswari stands on the banks of the sacred Mahanadi river. Constructed in the mid-16th century, the deity is worshipped with intense devotion and is the focal point of the grand agricultural harvest festival 'Nuakhai'.",
    "history": "Built by King Balaram Dev, the Chauhan founder of Sambalpur kingdom, who was led to the spot after seeing a miraculous hare turning to fight a hunting hound. Recently upgraded with the grand SAMALEI riverfront heritage corridor.",
    "attractions": [
        "Historic Chauhan-era temple architecture and sanctum",
        "Newly inaugurated SAMALEI riverfront promenade and musical fountains",
        "Nuakhai harvest festival ceremonies",
        "Sambalpuri Ikat handloom showrooms in Sambalpur city",
        "Mahanadi river sunset boat views"
    ],
    "tips": "The SAMALEI riverfront heritage promenade is beautifully illuminated in the evenings; ideal for peaceful riverside walks after darshan."
},

  huma_temple: {
    "id": "huma_temple",
    "name": "Huma Leaning Temple",
    "district": "Sambalpur",
    "category": "heritage religious",
    "badge": "World's Only Leaning Shiva Temple",
    "rating": "4.7",
    "reviewCount": "1.4k",
    "lat": 21.2828,
    "lng": 83.9878,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Huma_Leaning_Temple.jpg/800px-Huma_Leaning_Temple.jpg",
    "fallbackImg": "assets/images/konark.jpg",
    "season": "Oct – Mar",
    "budget": "₹800 – ₹1,800 / day",
    "airport": "Jharsuguda JRG (85 km) / Sambalpur (23 km)",
    "duration": "Half Day",
    "desc": "17th-century leaning temple on the Mahanadi river, famous for its distinct architectural tilt and sacred tame Kudo fish.",
    "overview": "Located on the rocky banks of the Mahanadi river at Huma, this 17th-century temple dedicated to Lord Bimaleswar is famous worldwide for its enigmatic tilt. The main temple structure, subsidiary shrines, and compound walls all lean at distinct angles, yet the pinnacle remains stable.",
    "history": "Built in 1670 CE by King Baliar Singh of Sambalpur's Chauhan dynasty. Geologists attribute the tilt to geological tectonic movement or riverbed foundation displacement, though the temple has stood securely for over 350 years.",
    "attractions": [
        "Remarkable leaning stone architecture tilting visibly",
        "Sacred tame Kudo fish in the Mahanadi river that feed from human hands",
        "Scenic boat crossings on the rocky Mahanadi riverbed",
        "Maha Shivaratri annual riverfront fair",
        "Rustic village setting of Huma on the river bank"
    ],
    "tips": "Buy puffed rice (kudo) from vendors on the river ghat to feed the tame fish. Catching or harming the fish is strictly forbidden by tradition."
},

  harishankar: {
    "id": "harishankar",
    "name": "Harishankar Temple & Stream",
    "district": "Balangir",
    "category": "religious waterfalls",
    "badge": "Dual Deity Healing Springs",
    "rating": "4.8",
    "reviewCount": "2.2k",
    "lat": 20.8522,
    "lng": 82.8686,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Harishankar_temple_stream.jpg/800px-Harishankar_temple_stream.jpg",
    "fallbackImg": "assets/images/simlipal.jpg",
    "season": "Oct – Mar",
    "budget": "₹1,000 – ₹2,200 / day",
    "airport": "Jharsuguda JRG (180 km) / Balangir Rly (80 km)",
    "duration": "1 Day",
    "desc": "Sacred shrine on the Gandhamardan hills where Lord Vishnu and Shiva are worshipped together alongside healing mountain waters.",
    "overview": "Set against the southern slopes of the legendary Gandhamardan mountain range, Harishankar is a place of deep spiritual serenity where Lord Vishnu (Hari) and Lord Shiva (Shankar) are worshipped together. A clear perennial mountain stream cascades over granite rocks, creating natural bathing pools amid rare medicinal herbs.",
    "history": "Built around the 14th century, the shrine is described in ancient local ballads. The Gandhamardan range is historically linked to the Ramayana as the mountain containing the Sanjeevani herb brought by Hanuman.",
    "attractions": [
        "Natural granite water-slide stream and holy bathing pools",
        "Dense medicinal herbal forests of Gandhamardan range",
        "16 km cross-mountain ridge trek to Nrusinghanath",
        "Harishankar eco-park and deer sanctuary",
        "Nearby Ranipur-Jharial 64-Yogini temple (45 km away)"
    ],
    "tips": "Carry a change of clothes if you plan to bathe in the cool, refreshing mountain stream. Visit nearby Ranipur-Jharial 64-Yogini temple (45 km away)."
},

  nrusinghanath: {
    "id": "nrusinghanath",
    "name": "Nrusinghanath Temple",
    "district": "Bargarh",
    "category": "religious waterfalls",
    "badge": "14th-Century Feline Deity",
    "rating": "4.8",
    "reviewCount": "2.0k",
    "lat": 20.9022,
    "lng": 82.8528,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Nrusinghanath_temple.jpg/800px-Nrusinghanath_temple.jpg",
    "fallbackImg": "assets/images/hero.jpg",
    "season": "Oct – Mar (Baisakha Mela)",
    "budget": "₹1,000 – ₹2,200 / day",
    "airport": "Raipur RPR (160 km) / Bargarh Rly (100 km)",
    "duration": "1 Day",
    "desc": "14th-century temple on northern Gandhamardan slopes dedicated to Lord Vishnu as Marjara Kesari, with four scenic waterfalls.",
    "overview": "Located at the northern foothills of the Gandhamardan mountains in Bargarh district, Nrusinghanath is an exquisite 14th-century temple. The deity is worshipped as 'Marjara Kesari' — an incarnation of Lord Vishnu with a feline head and lion's body, vanquishing the demon Musika Daitya.",
    "history": "The stone temple was erected in 1395 CE by King Baijal Singh Dev of the Chauhan dynasty. The mountain stream forming four sacred waterfalls along the pilgrim trail is mentioned in medieval inscriptions.",
    "attractions": [
        "Four scenic waterfalls along the mountain path (Kapildhar, Bhimdhar, Gadadhar, Chaldhar)",
        "Ornate stone carvings of the 24 Avataras of Vishnu",
        "Scenic herbal forest trails of Gandhamardan biosphere",
        "Historic Baisakha Mela pilgrimage fair",
        "Cross-mountain hiking trail to Harishankar"
    ],
    "tips": "The 2-hour hike up to Kapildhar waterfall along the mountain stream is deeply rewarding. Local guides can identify rare Ayurvedic plants along the trail."
},

  gupteswar: {
    "id": "gupteswar",
    "name": "Gupteswar Cave Temple",
    "district": "Koraput",
    "category": "religious hills",
    "badge": "Sacred Stalagmite Cave",
    "rating": "4.7",
    "reviewCount": "1.7k",
    "lat": 18.8256,
    "lng": 82.1644,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Gupteswar_Cave_entrance.jpg/800px-Gupteswar_Cave_entrance.jpg",
    "fallbackImg": "assets/images/simlipal.jpg",
    "season": "Oct – Mar (Shivaratri & Shravan)",
    "budget": "₹1,200 – ₹2,800 / day",
    "airport": "Visakhapatnam VTZ (220 km) / Jeypore Rly (55 km)",
    "duration": "1 to 2 Days",
    "desc": "Cavernous limestone cave temple in Ramagiri forest housing a 2-meter natural stalagmite Shiva Linga alongside Sabari river.",
    "overview": "Tucked inside the dense Ramagiri forest reserve on the banks of the murmuring Kolab (Sabari) river in southern Odisha, Gupteswar ('The Hidden God') is a dramatic limestone cavern sheltering a massive 2-meter tall natural stalagmite Shiva Linga that continues to grow.",
    "history": "Discovered during the 17th century by a tribal hunter and patronized by the Maharaja of Jeypore, King Vir Vikram Dev. The surrounding hills were designated a biodiversity heritage site in 2024.",
    "attractions": [
        "Natural limestone cave chambers with growing stalagmite linga",
        "Tranquil Kolab (Sabari) river flowing past the mountain base",
        "Rich tribal culture of the Dhuruba and Paraja communities",
        "Ramagiri dense evergreen forest canopy and biodiversity trail",
        "Deomali mountain peak (Odisha's highest point, 90 km away)"
    ],
    "tips": "Wear shoes with good grip for navigating the stone steps inside the moist cave. A flashlight is helpful for viewing deep limestone rock formations."
},

  khandadhar: {
    "id": "khandadhar",
    "name": "Khandadhar Waterfall",
    "district": "Sundargarh",
    "category": "waterfalls hills",
    "badge": "244-Meter Sword-Edge Fall",
    "rating": "4.8",
    "reviewCount": "1.5k",
    "lat": 21.7583,
    "lng": 85.0239,
    "img": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
    "fallbackImg": "assets/images/simlipal.jpg",
    "season": "Oct – Feb (Post-Monsoon Peak)",
    "budget": "₹1,000 – ₹2,400 / day",
    "airport": "Rourkela RRK (85 km) / Jharsuguda (130 km)",
    "duration": "1 Day",
    "desc": "Odisha's 2nd highest waterfall plunging 244 meters (801 ft) in a sheer sword-shaped drop amidst virgin sal jungles.",
    "overview": "Plunging 244 meters (801 feet) in a single sheer drop over a precipitous vertical cliff, Khandadhar is the second highest waterfall in Odisha. The cascade creates a shimmering ribbon of water shaped like the razor edge of a sword ('Khanda Dhara'), surrounded by virgin sal forests.",
    "history": "Revered by the indigenous Paudi Bhuyan tribal communities of the Bonaigarh highlands as a sacred source of life.",
    "attractions": [
        "244-meter thunderous waterfall view tower and rainbow mist",
        "Hiking trails through dense virgin sal and bamboo canopy",
        "Forest department eco-tourism nature cottages at the base",
        "Traditional hamlets of the Paudi Bhuyan tribe",
        "Scenic Bonaigarh mountain range drive"
    ],
    "tips": "The pathway down to the base involves climbing roughly 300 well-constructed steps. Best visited between October and February when water volume is strong and skies are clear."
},

  kichakeswari: {
    "id": "kichakeswari",
    "name": "Kichakeswari Temple, Khiching",
    "district": "Mayurbhanj",
    "category": "heritage religious",
    "badge": "Black Chlorite Architectural Wonder",
    "rating": "4.7",
    "reviewCount": "1.3k",
    "lat": 21.9217,
    "lng": 85.8344,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Khiching_Temple_Mayurbhanj.jpg/800px-Khiching_Temple_Mayurbhanj.jpg",
    "fallbackImg": "assets/images/konark.jpg",
    "season": "Oct – Mar",
    "budget": "₹1,000 – ₹2,200 / day",
    "airport": "Bhubaneswar BBI (240 km) / Baripada (95 km)",
    "duration": "1 Day",
    "desc": "10th-century architectural marvel built entirely from black chlorite stone, featuring sculptures rivaling Konark.",
    "overview": "Located at Khiching, the ancient capital of the Bhanja monarchs, the 100-foot Kichakeswari Temple is unique in India as it is constructed entirely out of black chlorite stone (muguni pathara). The temple walls feature masterwork carvings of dancing Nataraja, Mahishasuramardini, and nayikas rivaling Konark.",
    "history": "Built in the 10th century CE by the early Bhanja kings of Khijjinga Kota. Extensively restored in the 1930s by Maharaja Purna Chandra Bhanja Deo of Mayurbhanj using the original carved stone blocks without mortar.",
    "attractions": [
        "100-ft Black Chlorite Temple Sanctum with exquisite sculptures",
        "Khiching Archaeological Site Museum with 8th–12th century idols",
        "Virata Garh archaeological mounds and royal ruins",
        "Traditional black stone carving artisan workshops in Khiching town",
        "Nearby Chandaneshwar and Sukruli scenic countryside"
    ],
    "tips": "Visit the on-site Archaeological Museum beside the temple to inspect remarkably preserved master sculptures excavated from surrounding Bhanja dynasty sites."
},

  manikeswari: {
    "id": "manikeswari",
    "name": "Maa Manikeswari Temple",
    "district": "Kalahandi",
    "category": "religious heritage",
    "badge": "Presiding Goddess of Kalahandi",
    "rating": "4.8",
    "reviewCount": "1.6k",
    "lat": 19.9075,
    "lng": 83.1656,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Manikeswari_Temple_Bhawanipatna.jpg/800px-Manikeswari_Temple_Bhawanipatna.jpg",
    "fallbackImg": "assets/images/hero.jpg",
    "season": "Sep – Mar (Chhatar Yatra)",
    "budget": "₹1,000 – ₹2,400 / day",
    "airport": "Jharsuguda JRG (240 km) / Kesinga Rly (35 km)",
    "duration": "1 Day",
    "desc": "Patron deity of the Kalahandi kingdom famous for the vibrant annual Chhatar Yatra festival celebrating folk Shakti heritage.",
    "overview": "Located inside the royal palace complex in Bhawanipatna, Maa Manikeswari is the presiding deity of the historic princely state of Kalahandi. The deity is world-famous for the grand annual Chhatar Yatra festival, where the symbolic sacred bamboo umbrella (Chhatar) is carried in a massive cultural procession.",
    "history": "The temple was patronized by the Nagavansi rulers of Kalahandi for centuries. The deity represents the synthesis of tribal and classical Shakti worship in Southwestern Odisha.",
    "attractions": [
        "Historic Kalahandi Royal Palace architecture and temple sanctum",
        "Grand Chhatar Yatra festival (Maha Ashtami of Dashahara)",
        "Asurgarh 3rd-century BCE fortified archaeological site (35 km)",
        "Dokrichanchra waterfall and scenic valley",
        "Kalahandi tribal bell-metal and terracotta handicraft clusters"
    ],
    "tips": "Dashahara (September-October) is the best time to experience the electric cultural devotion during the Chhatar Yatra festival."
},

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
  { name: "Mangalajodi Bird Sanctuary", district: "Khurda", cat: "Avian Paradise" },
  { name: "Maa Taratarini Temple", district: "Ganjam", cat: "Adi Shakti Peetha" },
  { name: "Maa Tarini Temple, Ghatagaon", district: "Keonjhar", cat: "Sacred Shakti Shrine" },
  { name: "Lingaraj Temple", district: "Khurda", cat: "11th-Century Kalinga Marvel" },
  { name: "Udayagiri & Khandagiri Caves", district: "Khurda", cat: "2nd Century BCE Rock Caves" },
  { name: "Nandankanan Zoological Park", district: "Khurda", cat: "Premier Sanctuary & Zoo" },
  { name: "Barabati Fort", district: "Cuttack", cat: "14th-Century Citadel" },
  { name: "Ansupa Lake", district: "Cuttack", cat: "Largest Freshwater Oxbow Lake" },
  { name: "Gahirmatha Marine Sanctuary", district: "Kendrapara", cat: "World's Largest Turtle Rookery" },
  { name: "Talsari Beach", district: "Balasore", cat: "Serene Virgin Coast" },
  { name: "Bichitrapur Mangrove Sanctuary", district: "Balasore", cat: "Coastal Mangrove Reserve" },
  { name: "Panchalingeswar Temple", district: "Balasore", cat: "Five Submerged Lingas" },
  { name: "Kuldiha Wildlife Sanctuary", district: "Balasore", cat: "Elephant Corridor Sanctuary" },
  { name: "Kapilash Temple & Mountain", district: "Dhenkanal", cat: "Kailash of Odisha" },
  { name: "Joranda Mahima Gadi", district: "Dhenkanal", cat: "Seat of Mahima Dharma" },
  { name: "Maa Samaleswari Temple", district: "Sambalpur", cat: "Presiding Deity of Western Odisha" },
  { name: "Huma Leaning Temple", district: "Sambalpur", cat: "World's Only Leaning Shiva Temple" },
  { name: "Harishankar Temple & Stream", district: "Balangir", cat: "Dual Deity Healing Springs" },
  { name: "Nrusinghanath Temple", district: "Bargarh", cat: "14th-Century Feline Deity" },
  { name: "Gupteswar Cave Temple", district: "Koraput", cat: "Sacred Stalagmite Cave" },
  { name: "Khandadhar Waterfall", district: "Sundargarh", cat: "244-Meter Sword-Edge Fall" },
  { name: "Kichakeswari Temple, Khiching", district: "Mayurbhanj", cat: "Black Chlorite Architectural Wonder" },
  { name: "Maa Manikeswari Temple", district: "Kalahandi", cat: "Presiding Goddess of Kalahandi" }
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
  },

  {
    "id": "taratarini",
    "name": "Maa Taratarini Temple",
    "district": "Ganjam District",
    "category": "religious",
    "lat": 19.4939,
    "lng": 84.8967,
    "badge": "Adi Shakti Peetha",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Taratarini_temple.jpg/800px-Taratarini_temple.jpg",
    "desc": "Ancient Adi Shakti Peetha on Kumari hills along Rushikulya river, revered by sea-faring Odia merchants for over 2,000 years."
},
  {
    "id": "tarini_ghatagaon",
    "name": "Maa Tarini Temple, Ghatagaon",
    "district": "Keonjhar District",
    "category": "religious",
    "lat": 21.5832,
    "lng": 85.9083,
    "badge": "Sacred Shakti Shrine",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Maa_Tarini_Temple_Ghatagaon.jpg/800px-Maa_Tarini_Temple_Ghatagaon.jpg",
    "desc": "Revered living goddess of Odisha surrounded by sal forests; famous for the unique state-wide coconut offering tradition."
},
  {
    "id": "lingaraj",
    "name": "Lingaraj Temple",
    "district": "Khurda District",
    "category": "religious heritage",
    "lat": 20.2382,
    "lng": 85.8336,
    "badge": "11th-Century Kalinga Marvel",
    "img": "assets/images/bhubaneswar.jpg",
    "desc": "The largest and most majestic temple in Bhubaneswar, dedicated to Lord Harihara with an imposing 180-foot stone vimana."
},
  {
    "id": "udayagiri_khandagiri",
    "name": "Udayagiri & Khandagiri Caves",
    "district": "Khurda District",
    "category": "heritage hills",
    "lat": 20.2604,
    "lng": 85.7865,
    "badge": "2nd Century BCE Rock Caves",
    "img": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
    "desc": "Ancient rock-cut monastic caves of Jain ascetics featuring Emperor Kharavela's historic Hathigumpha Brahmi inscription."
},
  {
    "id": "nandankanan",
    "name": "Nandankanan Zoological Park",
    "district": "Khurda District",
    "category": "wildlife nature",
    "lat": 20.3957,
    "lng": 85.8242,
    "badge": "Premier Sanctuary & Zoo",
    "img": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80",
    "desc": "World-famous 437-hectare sanctuary and zoo abutting Kanjia Lake; first in the world to breed white and melanistic tigers."
},
  {
    "id": "barabati_fort",
    "name": "Barabati Fort",
    "district": "Cuttack District",
    "category": "heritage",
    "lat": 20.4851,
    "lng": 85.8647,
    "badge": "14th-Century Citadel",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Barabati_fort_cuttack.jpg/800px-Barabati_fort_cuttack.jpg",
    "desc": "Historic Ganga dynasty fortress at the Mahanadi-Kathajodi delta with an ornate stone gateway, palace ruins, and moat."
},
  {
    "id": "ansupa_lake",
    "name": "Ansupa Lake",
    "district": "Cuttack District",
    "category": "waterfalls nature",
    "lat": 20.4633,
    "lng": 85.6022,
    "badge": "Largest Freshwater Oxbow Lake",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Ansupa_Lake_Odisha.jpg/800px-Ansupa_Lake_Odisha.jpg",
    "desc": "Horseshoe-shaped freshwater oxbow lake cradled between Saranda and Bishnupur hills, teeming with floating water lilies."
},
  {
    "id": "gahirmatha",
    "name": "Gahirmatha Marine Sanctuary",
    "district": "Kendrapara District",
    "category": "wildlife beach",
    "lat": 20.73,
    "lng": 86.99,
    "badge": "World's Largest Turtle Rookery",
    "img": "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=800&q=80",
    "desc": "The world's largest nesting beach for endangered Olive Ridley sea turtles, spanning 1,435 sq km of marine sanctuary."
},
  {
    "id": "talsari",
    "name": "Talsari Beach",
    "district": "Balasore District",
    "category": "beach",
    "lat": 21.6021,
    "lng": 87.4526,
    "badge": "Serene Virgin Coast",
    "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "desc": "Pristine palm-fringed beach along Subarnarekha estuary; famous for red ghost crab colonies and vast low-tide sandy plains."
},
  {
    "id": "bichitrapur",
    "name": "Bichitrapur Mangrove Sanctuary",
    "district": "Balasore District",
    "category": "wildlife nature",
    "lat": 21.6214,
    "lng": 87.4357,
    "badge": "Coastal Mangrove Reserve",
    "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    "desc": "Unique 563-hectare tidal mangrove forest on the Bay of Bengal with creek boat safaris and prehistoric horseshoe crabs."
},
  {
    "id": "panchalingeswar",
    "name": "Panchalingeswar Temple",
    "district": "Balasore District",
    "category": "religious nature",
    "lat": 21.4642,
    "lng": 86.7214,
    "badge": "Five Submerged Lingas",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Panchalingeswar_Temple_Hill.jpg/800px-Panchalingeswar_Temple_Hill.jpg",
    "desc": "Scenic hilltop shrine in Nilagiri where five natural Shiva Lingas remain submerged under a crystal mountain stream."
},
  {
    "id": "kuldiha",
    "name": "Kuldiha Wildlife Sanctuary",
    "district": "Balasore District",
    "category": "wildlife nature",
    "lat": 21.4089,
    "lng": 86.685,
    "badge": "Elephant Corridor Sanctuary",
    "img": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
    "desc": "Dense mixed deciduous forest sanctuary of Nilagiri hills; vital elephant corridor home to wild herds, gaur, and hornbills."
},
  {
    "id": "kapilash",
    "name": "Kapilash Temple & Mountain",
    "district": "Dhenkanal District",
    "category": "religious hills",
    "lat": 20.6869,
    "lng": 85.7661,
    "badge": "Kailash of Odisha",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Kapilash_Temple_Dhenkanal.jpg/800px-Kapilash_Temple_Dhenkanal.jpg",
    "desc": "Summit shrine of Lord Chandrasekhar at 2,239 feet reached by 1,352 stone steps or a winding 12-ghat serpentine hill road."
},
  {
    "id": "joranda",
    "name": "Joranda Mahima Gadi",
    "district": "Dhenkanal District",
    "category": "religious heritage",
    "lat": 20.7228,
    "lng": 85.6425,
    "badge": "Seat of Mahima Dharma",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Joranda_Gadi_Mandir.jpg/800px-Joranda_Gadi_Mandir.jpg",
    "desc": "International spiritual headquarters of Mahima Dharma where worshippers meditate upon the formless divine Alekha."
},
  {
    "id": "samaleswari",
    "name": "Maa Samaleswari Temple",
    "district": "Sambalpur District",
    "category": "religious heritage",
    "lat": 21.4682,
    "lng": 83.9667,
    "badge": "Presiding Deity of Western Odisha",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Samaleswari_Temple_Sambalpur.jpg/800px-Samaleswari_Temple_Sambalpur.jpg",
    "desc": "Patron goddess of Western Odisha on the Mahanadi riverbank; epicenter of Nuakhai festival, now with modern SAMALEI corridor."
},
  {
    "id": "huma_temple",
    "name": "Huma Leaning Temple",
    "district": "Sambalpur District",
    "category": "heritage religious",
    "lat": 21.2828,
    "lng": 83.9878,
    "badge": "World's Only Leaning Shiva Temple",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Huma_Leaning_Temple.jpg/800px-Huma_Leaning_Temple.jpg",
    "desc": "17th-century leaning temple on the Mahanadi river, famous for its distinct architectural tilt and sacred tame Kudo fish."
},
  {
    "id": "harishankar",
    "name": "Harishankar Temple & Stream",
    "district": "Balangir District",
    "category": "religious waterfalls",
    "lat": 20.8522,
    "lng": 82.8686,
    "badge": "Dual Deity Healing Springs",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Harishankar_temple_stream.jpg/800px-Harishankar_temple_stream.jpg",
    "desc": "Sacred shrine on the Gandhamardan hills where Lord Vishnu and Shiva are worshipped together alongside healing mountain waters."
},
  {
    "id": "nrusinghanath",
    "name": "Nrusinghanath Temple",
    "district": "Bargarh District",
    "category": "religious waterfalls",
    "lat": 20.9022,
    "lng": 82.8528,
    "badge": "14th-Century Feline Deity",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Nrusinghanath_temple.jpg/800px-Nrusinghanath_temple.jpg",
    "desc": "14th-century temple on northern Gandhamardan slopes dedicated to Lord Vishnu as Marjara Kesari, with four scenic waterfalls."
},
  {
    "id": "gupteswar",
    "name": "Gupteswar Cave Temple",
    "district": "Koraput District",
    "category": "religious hills",
    "lat": 18.8256,
    "lng": 82.1644,
    "badge": "Sacred Stalagmite Cave",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Gupteswar_Cave_entrance.jpg/800px-Gupteswar_Cave_entrance.jpg",
    "desc": "Cavernous limestone cave temple in Ramagiri forest housing a 2-meter natural stalagmite Shiva Linga alongside Sabari river."
},
  {
    "id": "khandadhar",
    "name": "Khandadhar Waterfall",
    "district": "Sundargarh District",
    "category": "waterfalls hills",
    "lat": 21.7583,
    "lng": 85.0239,
    "badge": "244-Meter Sword-Edge Fall",
    "img": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
    "desc": "Odisha's 2nd highest waterfall plunging 244 meters (801 ft) in a sheer sword-shaped drop amidst virgin sal jungles."
},
  {
    "id": "kichakeswari",
    "name": "Kichakeswari Temple, Khiching",
    "district": "Mayurbhanj District",
    "category": "heritage religious",
    "lat": 21.9217,
    "lng": 85.8344,
    "badge": "Black Chlorite Architectural Wonder",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Khiching_Temple_Mayurbhanj.jpg/800px-Khiching_Temple_Mayurbhanj.jpg",
    "desc": "10th-century architectural marvel built entirely from black chlorite stone, featuring sculptures rivaling Konark."
},
  {
    "id": "manikeswari",
    "name": "Maa Manikeswari Temple",
    "district": "Kalahandi District",
    "category": "religious heritage",
    "lat": 19.9075,
    "lng": 83.1656,
    "badge": "Presiding Goddess of Kalahandi",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Manikeswari_Temple_Bhawanipatna.jpg/800px-Manikeswari_Temple_Bhawanipatna.jpg",
    "desc": "Patron deity of the Kalahandi kingdom famous for the vibrant annual Chhatar Yatra festival celebrating folk Shakti heritage."
},
];

let odishaMapInstance = null;
let activeMapMarkerEntries = [];

function createCustomPinIcon(category) {
  let pinClass = "pin-heritage";
  let iconText = "🏛️";
  if (category.includes("beach")) {
    pinClass = "pin-beach";
    iconText = "🏖️";
  } else if (category.includes("waterfalls")) {
    pinClass = "pin-waterfalls";
    iconText = "🌊";
  } else if (category.includes("wildlife") || category.includes("nature")) {
    pinClass = "pin-wildlife";
    iconText = "🐅";
  } else if (category.includes("religious") || category.includes("spiritual")) {
    pinClass = "pin-religious";
    iconText = "🛕";
  } else if (category.includes("hills")) {
    pinClass = "pin-hills";
    iconText = "⛰️";
  } else if (category.includes("heritage")) {
    pinClass = "pin-heritage";
    iconText = "🏛️";
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


// ─── DISTRICT FILTER FUNCTIONALITY ──────────────────────────────────────────
function filterByDistrict(districtName) {
  const destCards = document.querySelectorAll(".dest-card");
  const statusBar = document.getElementById("search-status-bar");
  const termDisplay = document.getElementById("search-term-display");
  const countDisplay = document.getElementById("search-count-display");
  const emptyState = document.getElementById("destinations-empty");

  // Reset category filter buttons
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  const filterAll = document.getElementById("filter-all");
  if (districtName === "all" && filterAll) filterAll.classList.add("active");

  let count = 0;
  destCards.forEach(card => {
    const cardDistrict = (card.dataset.district || "").toLowerCase();
    const match = districtName === "all" || cardDistrict.includes(districtName.toLowerCase());

    if (match) {
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

  if (statusBar && termDisplay && countDisplay) {
    if (districtName !== "all") {
      statusBar.classList.add("show");
      termDisplay.textContent = `District: "${districtName}"`;
      countDisplay.textContent = count;
    } else {
      statusBar.classList.remove("show");
    }
  }

  if (emptyState) emptyState.classList.toggle("show", count === 0);
  showToast(districtName === "all" ? "Showing all 31 destinations" : `Showing ${count} destinations in ${districtName} District`);
}
