/* ============================================================
   ODISHA 360 — MINI EARTH JavaScript
   Interactive 3D globe using Globe.gl (Three.js)
   Journey: Earth → India → Odisha → Destinations
   ============================================================ */

"use strict";

/* ── Destination data (reused from main site) ──────────────── */
const ME_DESTINATIONS = [
  /* Core 9 — original Odisha 360 destinations */
  { id:"konark",    name:"Konark Sun Temple",         district:"Puri District",          cat:"heritage",   lat:19.8876, lng:86.0945, badge:"UNESCO World Heritage",        img:"assets/images/konark.jpg",          desc:"13th-century stone chariot temple of the Sun God — 24 sundial wheels, celestial sculptures, 7 mighty stone horses.", season:"Oct – Mar", budget:"₹1,200 – ₹2,500 / day", duration:"1 Day",  airport:"Bhubaneswar BBI (65 km)", attractions:["24 Architectural Sundial Wheels","Natya Mandapa dance hall","Chandrabhaga sunrise beach","ASI Museum & Sound-Light Show","Konark Dance Festival (Dec)"] },
  { id:"puri",      name:"Puri — Sea & Soul",          district:"Puri Coastal District",  cat:"beach",      lat:19.7985, lng:85.8312, badge:"Sacred Char Dham",             img:"assets/images/puri.jpg",            desc:"Sacred Char Dham pilgrimage & Blue Flag certified Golden Beach — 12th-century Jagannath Temple overlooks the Bay of Bengal.", season:"Year-round", budget:"₹1,500 – ₹3,500 / day", duration:"2-3 Days",airport:"Bhubaneswar BBI (60 km)", attractions:["Shree Jagannath Temple","Golden Beach (Blue Flag)","Raghurajpur Crafts Village","Rath Yatra Festival","Mahaprasad Anandabazar"] },
  { id:"chilika",   name:"Chilika Lake & Satapada",    district:"Khurda / Puri / Ganjam", cat:"wildlife",   lat:19.6500, lng:85.3100, badge:"Ramsar Wetland Site",          img:"assets/images/chilika.jpg",         desc:"Asia's largest brackish lagoon — Irrawaddy dolphins, 1 million migratory birds, legendary Kalijai temple island.", season:"Nov – Feb", budget:"₹1,800 – ₹3,200 / day", duration:"1-2 Days",airport:"Bhubaneswar BBI (100 km)", attractions:["Irrawaddy Dolphin safaris","Mangalajodi Bird Sanctuary","Kalijai Temple Island","Flamingo & pelican flocks","Chilika crab seafood"] },
  { id:"bhubaneswar",name:"Bhubaneswar — Temple City", district:"Khurda District",        cat:"heritage",   lat:20.2961, lng:85.8245, badge:"City of Temples",              img:"assets/images/bhubaneswar.jpg",    desc:"2,500-year 'Ekamra Kshetra' once home to 7,000 sandstone temples — Lingaraj, Mukteshwar, Rajarani; gateway to Odisha.", season:"Oct – Mar", budget:"₹1,500 – ₹4,000 / day", duration:"2 Days",  airport:"Bhubaneswar BBI (In-City)", attractions:["Lingaraj Temple (11th-century)","Mukteshwar & Rajarani Temples","Udayagiri-Khandagiri Caves","Nandankanan Zoo White Tigers","Kala Bhoomi Craft Museum"] },
  { id:"simlipal",  name:"Similipal Tiger Reserve",    district:"Mayurbhanj District",    cat:"wildlife",   lat:21.6500, lng:86.5000, badge:"UNESCO Biosphere Reserve",     img:"assets/images/simlipal.jpg",       desc:"Vast 2,750 sq km wilderness — royal Bengal tigers, rare melanistic black tigers, Barehipani & Joranda waterfalls.", season:"Nov – Jun", budget:"₹2,000 – ₹5,000 / day", duration:"2-3 Days",airport:"Baripada Rly (60 km)",      attractions:["Royal Bengal Tiger Safari","Barehipani Waterfall 399m","Joranda Waterfall","Melanistic Tiger sightings","Orchid trails & tribal villages"] },
  { id:"dhauli",    name:"Dhauli Peace Pagoda",        district:"Khurda District",        cat:"heritage",   lat:20.2104, lng:85.8716, badge:"Kalinga War Battlefield",      img:"assets/images/hero.jpg",           desc:"Where Emperor Ashoka renounced war in 261 BCE after the Kalinga conquest. White Shanti Stupa & ancient Daya river.", season:"Oct – Mar", budget:"₹600 – ₹1,500 / day",  duration:"Half Day",airport:"Bhubaneswar BBI (8 km)",    attractions:["Shanti Stupa (white peace pagoda)","Ashoka Rock Edict 261 BCE","Daya River Kalinga battlefield","Buddhist pilgrimage circuit","Night illumination display"] },
  { id:"bhitarkanika",name:"Bhitarkanika Mangroves",  district:"Kendrapara District",    cat:"wildlife",   lat:20.7154, lng:86.8689, badge:"Mini Amazon",                 img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80", desc:"Ramsar wetland — saltwater crocodiles 7m+, Olive Ridley nesting, dense mangrove channels explored by boat.", season:"Oct – Mar", budget:"₹2,000 – ₹4,000 / day", duration:"2 Days",  airport:"Bhubaneswar BBI (160 km)",  attractions:["Saltwater crocodile boat safaris","Olive Ridley nesting beach Gahirmatha","Dangmal nature camp","Bird colonies: kingfishers & herons","Mangrove canoe trails"] },
  { id:"gopalpur",  name:"Gopalpur-on-Sea",            district:"Ganjam District",        cat:"beach",      lat:19.2608, lng:84.9082, badge:"Colonial Port Town",           img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", desc:"Tranquil colonial-era port with golden sands, 1871 red-stripe lighthouse and gentle Bay of Bengal surf.", season:"Oct – Mar", budget:"₹1,000 – ₹2,500 / day", duration:"1-2 Days",airport:"Berhampur Rly (16 km)",      attractions:["1871 Gopalpur Lighthouse (360° views)","Pristine golden beach promenade","Fresh coastal seafood markets","Tampara Lake (20 km, water sports)","Pati Sonapur virgin beach"] },
  { id:"daringbadi",name:"Daringbadi — Kashmir of Odisha",district:"Kandhamal District", cat:"hills",      lat:20.0834, lng:83.9898, badge:"Hill Station",                 img:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80", desc:"Nestled in Kandhamal hills at 3,000 ft, lush pine forests, coffee plantations, and Odisha's only snowfall.", season:"Nov – Feb", budget:"₹1,500 – ₹3,000 / day", duration:"2 Days",  airport:"Bhubaneswar BBI (165 km)",  attractions:["Doluri River Valley viewpoint","Coffee & turmeric plantations","Lover's Point sunrise trail","Putudi waterfall trek","Tribal Kondh market"] },

  /* 22 expanded destinations */
  { id:"taratarini",    name:"Maa Taratarini Temple",         district:"Ganjam District",    cat:"religious", lat:19.4939, lng:84.8967, badge:"Adi Shakti Peetha",              img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Taratarini_temple.jpg/800px-Taratarini_temple.jpg",                       desc:"Ancient twin-goddess shrine on Kumari hills above Rushikulya River — 999-step stairway, modern ropeway, centuries of seafarer devotion.", season:"Oct – Mar (Chaitra Mela)", budget:"₹800 – ₹1,800 / day", duration:"1 Day", airport:"Bhubaneswar BBI (165 km)", attractions:["Rushikulya river panorama from hilltop","Modern ropeway cable car","999-step stone stairway","Chaitra Mela month-long fair","Kumari hills forest trail"] },
  { id:"tarini_ghatagaon",name:"Maa Tarini Temple, Ghatagaon",district:"Keonjhar District",  cat:"religious", lat:21.5832, lng:85.9083, badge:"Sacred Shakti Shrine",          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Maa_Tarini_Temple_Ghatagaon.jpg/800px-Maa_Tarini_Temple_Ghatagaon.jpg", desc:"Revered living goddess shrine nestled in Sal forests — famous state-wide coconut offering tradition.", season:"Year-round",             budget:"₹600 – ₹1,200 / day", duration:"1 Day", airport:"Bhubaneswar BBI (220 km)", attractions:["Sacred coconut ritual (Narali Purnima)","Dense sal forest surrounds","Ghatagaon Mela festival","Peaceful nature trails","Keonjhar district cultural heritage"] },
  { id:"lingaraj",      name:"Lingaraj Temple",               district:"Khurda District",    cat:"religious", lat:20.2382, lng:85.8336, badge:"11th-Century Kalinga Marvel",    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Lingaraj_Temple_Bhubaneswar.jpg/800px-Lingaraj_Temple_Bhubaneswar.jpg",    desc:"Tallest temple in Bhubaneswar at 180 ft, dedicated to Harihara — supreme fusion of Shiva and Vishnu.", season:"Oct – Mar",             budget:"₹600 – ₹1,500 / day", duration:"Half Day", airport:"Bhubaneswar BBI (In-City)", attractions:["180-ft soaring stone vimana","Bindusagar sacred tank","108 subsidiary shrines","ASI Archaeological Museum","Shivaratri grand celebration"] },
  { id:"udayagiri_khandagiri",name:"Udayagiri & Khandagiri Caves",district:"Khurda District",cat:"heritage", lat:20.2604, lng:85.7865, badge:"2nd Century BCE Rock Caves",     img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Udayagiri_Caves_Orissa_India.jpg/800px-Udayagiri_Caves_Orissa_India.jpg", desc:"Jain rock-cut caves carved for the Kalinga king Kharavela — Hathigumpha inscription, Royal Rani Gumpha carvings.", season:"Oct – Mar",             budget:"₹400 – ₹900 / day", duration:"Half Day", airport:"Bhubaneswar BBI (7 km)",   attractions:["Hathigumpha inscription (Ashoka reply)","Rani Gumpha double-storey palace cave","Ganesh Gumpha carved reliefs","Panoramic Bhubaneswar city views","Jain heritage trail"] },
  { id:"nandankanan",   name:"Nandankanan Zoological Park",   district:"Khurda District",    cat:"wildlife",  lat:20.3957, lng:85.8242, badge:"Premier Wildlife Sanctuary",    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/White_tiger_at_the_Nandankanan_zoo.jpg/800px-White_tiger_at_the_Nandankanan_zoo.jpg", desc:"Only zoo in India with White Tiger Safari — set in natural Chandaka forest adjacent to Kanjia Lake.", season:"Oct – Mar",             budget:"₹600 – ₹1,200 / day", duration:"Half Day", airport:"Bhubaneswar BBI (12 km)",  attractions:["White Tiger Safari enclosure","Melanistic black tiger pair","Cable car over Kanjia Lake","Botanical garden & orchidarium","Butterfly park & reptile house"] },
  { id:"barabati_fort", name:"Barabati Fort",                 district:"Cuttack District",   cat:"heritage",  lat:20.4851, lng:85.8647, badge:"14th-Century Citadel",          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Barabati_Fort.jpg/800px-Barabati_Fort.jpg",                                desc:"Medieval Ganga dynasty citadel with historic 9-storey tower ruins, moat, and gateway — flanked by Mahanadi River.", season:"Oct – Mar",             budget:"₹400 – ₹800 / day",  duration:"Half Day", airport:"Bhubaneswar BBI (25 km)",  attractions:["Nine-storey tower ruins","Historic moat and ramparts","Barabati Stadium (India cricket)","Mahanadi riverfront ghats","Cuttack Chandi Temple (adjacent)"] },
  { id:"ansupa_lake",   name:"Ansupa Lake",                   district:"Cuttack District",   cat:"wildlife",  lat:20.4633, lng:85.6022, badge:"Largest Freshwater Oxbow Lake", img:"https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80",                                        desc:"Odisha's largest freshwater oxbow lake nestled against Saranda hills — winter migratory birds and boating.", season:"Nov – Feb",             budget:"₹600 – ₹1,200 / day", duration:"1 Day", airport:"Bhubaneswar BBI (40 km)",  attractions:["Winter migratory bird flocks","Peaceful Saranda hillside backdrop","Boat rides at dawn","Fishing community villages","Kuanria reservoir nearby"] },
  { id:"gahirmatha",   name:"Gahirmatha Marine Sanctuary",   district:"Kendrapara District", cat:"wildlife",  lat:20.7300, lng:86.9900, badge:"World's Largest Turtle Rookery",img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",                                        desc:"Nesting beach for 500,000+ Olive Ridley sea turtles annually — world's largest mass nesting (Arribada) event.", season:"Nov – May",             budget:"₹1,500 – ₹3,000 / day", duration:"1-2 Days",airport:"Bhubaneswar BBI (165 km)",  attractions:["Olive Ridley Arribada nesting","Marine sanctuary boat patrol","Bhitarkanika crocodile sanctum","Pelagic fishing community","Beach sunrise photography"] },
  { id:"talsari",      name:"Talsari Beach",                  district:"Balasore District",  cat:"beach",     lat:21.6021, lng:87.4526, badge:"Serene Virgin Coast",            img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",                                        desc:"Pristine beach at Subarnarekha river mouth — red ghost crabs, virgin sand dunes, and Odisha–West Bengal borderline sunrise.", season:"Oct – Mar",             budget:"₹700 – ₹1,500 / day", duration:"1 Day", airport:"Bhubaneswar BBI (240 km)", attractions:["Red ghost crab colony at dawn","Subarnarekha river mouth crossing","Virgin white sand dunes","Border sunset with Digha visibility","Eco-tourism beach camping"] },
  { id:"bichitrapur",  name:"Bichitrapur Mangrove Sanctuary", district:"Balasore District",  cat:"wildlife",  lat:21.6214, lng:87.4357, badge:"Coastal Mangrove Reserve",      img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",                                        desc:"Tidal mangrove delta with community eco-boat tours — rich birdlife, mud crabs and scenic coastal channels.", season:"Oct – Mar",             budget:"₹600 – ₹1,200 / day", duration:"1 Day", airport:"Bhubaneswar BBI (245 km)", attractions:["Eco-tourist mangrove boat tours","Community fishery co-op visits","Migratory bird spotting","Mud crab foraging experience","Coastal sunset viewpoint"] },
  { id:"panchalingeswar",name:"Panchalingeswar Temple",       district:"Balasore District",  cat:"religious", lat:21.4642, lng:86.7214, badge:"Five Submerged Lingas",          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Panchalingeswar_Temple.jpg/800px-Panchalingeswar_Temple.jpg",           desc:"Five naturally submerged Shiva Lingas in a perennial mountain stream — set in dense Nilagiri hills forest.", season:"Oct – Mar",             budget:"₹600 – ₹1,200 / day", duration:"1 Day", airport:"Bhubaneswar BBI (220 km)", attractions:["5 submerged Shiva Lingas in stream","Perennial spring of Nilagiri hills","Lush Sal forest pilgrimage trail","Shivaratri grand fair","Kuldiha sanctuary trek (nearby)"] },
  { id:"kuldiha",      name:"Kuldiha Wildlife Sanctuary",     district:"Balasore District",  cat:"wildlife",  lat:21.4089, lng:86.6850, badge:"Elephant Corridor",             img:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",                                        desc:"Vital elephant corridor linking Similipal — watchtowers, rare birds and pristine Kuldiha forest streams.", season:"Nov – Jun",             budget:"₹1,200 – ₹2,500 / day", duration:"1-2 Days",airport:"Bhubaneswar BBI (220 km)", attractions:["Elephant corridor watchtower","Giant Indian squirrels","Rare hornbill species","Kuldiha forest stream treks","Connection to Similipal biosphere"] },
  { id:"kapilash",     name:"Kapilash Temple & Mountain",     district:"Dhenkanal District", cat:"hills",     lat:20.6869, lng:85.7661, badge:"Kailash of Odisha",              img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Kapilash_Temple.jpg/800px-Kapilash_Temple.jpg",                        desc:"Shiva temple atop 2,239-ft peak — 1,352 historic stone steps through dense forested slopes offering panoramic Dhenkanal views.", season:"Oct – Apr",             budget:"₹700 – ₹1,500 / day", duration:"1 Day", airport:"Bhubaneswar BBI (90 km)",  attractions:["1,352 stone steps hilltop climb","Kapilash peak forest trail (2,239 ft)","Dhenkanal panoramic sunrise view","Maa Chandikeshwari shrine","Saptasajya hillock (nearby)"] },
  { id:"joranda",      name:"Joranda Mahima Gadi",            district:"Dhenkanal District", cat:"heritage",  lat:20.7228, lng:85.6425, badge:"Seat of Mahima Dharma",         img:"https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=600&q=80",                                        desc:"19th-century monastic seat of the Mahima Dharma ascetic movement — eternal Akhanda Dhuni sacred flame burns uninterrupted.", season:"Year-round",             budget:"₹300 – ₹700 / day",  duration:"Half Day", airport:"Bhubaneswar BBI (90 km)",  attractions:["Akhanda Dhuni eternal sacred flame","Mahima Gosain spiritual heritage","Monastic community ashram","Mahima festival (Makara Sankranti)","Dhenkanal heritage trail"] },
  { id:"samaleswari",  name:"Maa Samaleswari Temple",         district:"Sambalpur District", cat:"religious", lat:21.4682, lng:83.9667, badge:"Presiding Deity of W. Odisha",  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Samaleswari_Temple.jpg/800px-Samaleswari_Temple.jpg",                desc:"16th-century Chauhan dynasty shrine on the Mahanadi riverbank — presiding deity of all of western Odisha.", season:"Oct – Mar",             budget:"₹700 – ₹1,500 / day", duration:"1 Day", airport:"Veer Surendra Sai Airport (20 km)", attractions:["16th-century riverfront shrine","Nuakhai festival (harvest worship)","Hirakud Dam evening (5 km)","Sambalpur silk weaving industry","Mahanadi river ghats at dawn"] },
  { id:"huma_temple",  name:"Huma Leaning Temple",            district:"Sambalpur District", cat:"heritage",  lat:21.2828, lng:83.9878, badge:"World's Only Leaning Shiva Temple",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huma_Temple.jpg/800px-Huma_Temple.jpg",                             desc:"India's only intentionally leaning Shiva temple tilted over the Mahanadi — sacred Kudo fish gather at the ghat.", season:"Oct – Mar",             budget:"₹400 – ₹900 / day",  duration:"Half Day", airport:"Veer Surendra Sai Airport (45 km)", attractions:["Naturally leaning Shiva sanctum","Sacred Kudo fish (hand-fed)","Mahanadi riverside aarti","Pisa-like architectural wonder","Village tribal textile market"] },
  { id:"harishankar",  name:"Harishankar Temple & Stream",    district:"Balangir District",  cat:"hills",     lat:20.8522, lng:82.8686, badge:"Dual Deity Healing Springs",    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Harishankar_Temple.jpg/800px-Harishankar_Temple.jpg",                desc:"Himalayan-feel shrine of Hari (Vishnu) & Shankar (Shiva) on Gandhamardan slopes — natural medicinal springs flow year-round.", season:"Oct – Apr",             budget:"₹700 – ₹1,500 / day", duration:"1 Day", airport:"Veer Surendra Sai Airport (110 km)", attractions:["Dual Hari-Shankar deity temple","Gandhamardan medicinal herb forest","Natural healing spring pools","Nrusinghanath temple trek (10 km)","Breathtaking valley sunrise views"] },
  { id:"nrusinghanath",name:"Nrusinghanath Temple",           district:"Bargarh District",   cat:"religious", lat:20.9022, lng:82.8528, badge:"14th-Century Feline Deity",     img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nrusinghanath_Temple.jpg/800px-Nrusinghanath_Temple.jpg",             desc:"Rare 14th-century temple of the cat-headed Marjara Keshari — form of Narasimha unique to Gandhamardan hills.", season:"Oct – Apr",             budget:"₹500 – ₹1,200 / day", duration:"1 Day", airport:"Veer Surendra Sai Airport (100 km)", attractions:["Rare cat-headed Narasimha idol","Gandhamardan medicinal biodiversity","Annual Nrusingha Chaturdashi fair","Forest trek to Kapilash Ashram","Pristine Ong river origin"] },
  { id:"gupteswar",    name:"Gupteswar Cave Temple",          district:"Koraput District",   cat:"hills",     lat:18.8256, lng:82.1644, badge:"Sacred Stalagmite Cave",        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Gupteswar_Cave_entrance.jpg/800px-Gupteswar_Cave_entrance.jpg",    desc:"Natural limestone cave housing a 2-metre Shiva Linga stalagmite in Ramagiri Forest — Sabari River flows alongside.", season:"Oct – Apr",             budget:"₹700 – ₹1,500 / day", duration:"1 Day", airport:"Jagdalpur (90 km)",          attractions:["2m natural Shiva Linga stalagmite","Underground limestone cave chambers","Sabari river valley viewpoint","Ramagiri forest bat colony","Koraput tribal haat bazaar"] },
  { id:"khandadhar",   name:"Khandadhar Waterfall",           district:"Sundargarh District",cat:"waterfalls", lat:21.7583, lng:85.0239, badge:"244-Metre Sword-Edge Fall",    img:"https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80",                                        desc:"Odisha's 2nd highest waterfall plunging 244 metres in a sheer sword-shaped curtain through virgin Sal jungle.", season:"Jul – Oct (post monsoon)", budget:"₹800 – ₹1,800 / day", duration:"1 Day", airport:"Veer Surendra Sai Airport (95 km)", attractions:["244m sword-edge water curtain","Virgin Sal forest base trek","Khandadhar iron ore hills","Rourkela Steel City day trip","Bonai valley panoramic view"] },
  { id:"kichakeswari", name:"Kichakeswari Temple, Khiching",  district:"Mayurbhanj District",cat:"heritage",  lat:21.9217, lng:85.8344, badge:"Black Chlorite Masterpiece",    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Khiching_Temple_Mayurbhanj.jpg/800px-Khiching_Temple_Mayurbhanj.jpg", desc:"10th-century architectural marvel carved entirely from black chlorite stone — sculptures rivalling Konark's grandeur.", season:"Oct – Mar",             budget:"₹600 – ₹1,200 / day", duration:"Half Day", airport:"Baripada Rly (60 km)",      attractions:["Black chlorite carved deity panels","Khiching ASI protected temple complex","Baripada town cultural heritage","Similipal biosphere (45 km)","Mayurbhanj palace museum"] },
  { id:"manikeswari",  name:"Maa Manikeswari Temple",         district:"Kalahandi District", cat:"religious", lat:19.9075, lng:83.1656, badge:"Presiding Goddess of Kalahandi", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Manikeswari_Temple_Bhawanipatna.jpg/800px-Manikeswari_Temple_Bhawanipatna.jpg",desc:"Patron goddess of the Kalahandi royal kingdom — vibrant annual Chhatar Yatra chariot festival of folk Shakti heritage.", season:"Year-round",             budget:"₹500 – ₹1,000 / day", duration:"1 Day", airport:"Bhawanipatna (In-City)",     attractions:["Chhatar Yatra chariot procession","Kalahandi royal palace heritage","Phurlijharan waterfall (20 km)","Tribal Kondh market bazaar","Harishankar pilgrimage trail (90 km)"] }
];

/* ── Category colour palette ──────────────────────────────── */
const CAT_COLOR = {
  heritage:   "#8E44AD",
  religious:  "#E67E22",
  wildlife:   "#27AE60",
  beach:      "#2980B9",
  waterfalls: "#1ABC9C",
  hills:      "#E91E63",
  default:    "#7F8C8D"
};

function getCatColor(cat) {
  for (const key of Object.keys(CAT_COLOR)) {
    if (cat && cat.includes(key)) return CAT_COLOR[key];
  }
  return CAT_COLOR.default;
}

/* ── Camera presets ──────────────────────────────────────── */
const CAM = {
  earth:  { lat: 20,    lng: 80,     alt: 2.5  },
  india:  { lat: 22.5,  lng: 82.5,   alt: 1.0  },
  odisha: { lat: 20.5,  lng: 85.0,   alt: 0.35 }
};

/* ── Globe label rings ───────────────────────────────────── */
const REGION_RINGS = [
  { lat: 20.5, lng: 85.0, maxR: 4, color: "rgba(213,167,70,0.4)", label: "Odisha" }
];

/* ── State ───────────────────────────────────────────────── */
let globe;
let currentLevel = "earth"; // earth | india | odisha | dest
let activeFilter = "all";
let autoRotate   = true;
let dayMode      = true;
let currentDestId = null;
let shownPoints  = [];

/* ── Utility helpers ──────────────────────────────────────── */
function showToast(msg, duration = 2500) {
  const t = document.getElementById("me-toast");
  t.textContent = msg;
  t.classList.add("visible");
  setTimeout(() => t.classList.remove("visible"), duration);
}

function hideStages() {
  document.querySelectorAll(".me-stage").forEach(s => s.classList.add("hidden"));
}

function showStage(id) {
  hideStages();
  const el = document.getElementById(id);
  if (el) el.classList.remove("hidden");
}

function setActiveCrumb(level) {
  document.querySelectorAll(".me-crumb").forEach(c => {
    c.classList.remove("active", "visited");
    if (c.dataset.level === level) c.classList.add("active");
    // mark previous levels as visited
    const order = ["earth", "india", "odisha"];
    const curIdx = order.indexOf(level);
    const myIdx  = order.indexOf(c.dataset.level);
    if (myIdx < curIdx) c.classList.add("visited");
  });
}

function updateLegendVisibility(show) {
  document.getElementById("me-legend").classList.toggle("visible", show);
}

/* ── Globe point builder ─────────────────────────────────── */
function buildGlobePoints(filter = "all") {
  return ME_DESTINATIONS
    .filter(d => filter === "all" || d.cat.includes(filter))
    .map(d => ({
      ...d,
      color: getCatColor(d.cat),
      size:  0.6,
      label: d.name
    }));
}

/* ── Globe HTML tooltip ───────────────────────────────────── */
function buildPointLabel(d) {
  return `
    <div style="
      background:rgba(6,18,36,0.95);
      border:1px solid rgba(255,255,255,0.12);
      border-radius:10px;
      padding:12px 14px;
      max-width:220px;
      font-family:Inter,sans-serif;
      color:#e8eaf0;
      box-shadow:0 8px 24px rgba(0,0,0,0.6);
      pointer-events:none;
    ">
      <div style="font-size:0.65rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${getCatColor(d.cat)};margin-bottom:5px;">${d.badge || d.cat}</div>
      <div style="font-size:0.9rem;font-weight:700;line-height:1.2;margin-bottom:4px;">${d.name}</div>
      <div style="font-size:0.72rem;color:#8898aa;margin-bottom:8px;">📍 ${d.district}</div>
      <div style="font-size:0.75rem;color:#ccc;line-height:1.4;">${d.desc.substring(0, 100)}…</div>
    </div>`;
}

/* ── Side-panel destination detail ───────────────────────── */
function openDestDetail(d) {
  currentDestId = d.id;
  currentLevel = "dest";

  document.getElementById("me-dest-img").src = d.img;
  document.getElementById("me-dest-img").onerror = function() {
    this.src = "assets/images/hero.jpg";
  };
  document.getElementById("me-dest-badge").textContent  = d.badge || "";
  document.getElementById("me-dest-name").textContent   = d.name;
  document.getElementById("me-dest-district-text").textContent = d.district;
  document.getElementById("me-dest-desc").textContent   = d.desc;
  document.getElementById("me-fact-season").textContent = d.season || "—";
  document.getElementById("me-fact-budget").textContent = d.budget || "—";
  document.getElementById("me-fact-duration").textContent= d.duration || "—";
  document.getElementById("me-fact-airport").textContent= d.airport || "—";

  const ul = document.createElement("ul");
  (d.attractions || []).forEach(a => {
    const li = document.createElement("li");
    li.textContent = a;
    ul.appendChild(li);
  });
  const wrap = document.getElementById("me-dest-attractions");
  wrap.innerHTML = "";
  wrap.appendChild(ul);

  document.getElementById("me-dest-link").href = `index.html#destinations`;
  setActiveCrumb("odisha");
  showStage("stage-dest");
}

/* ── Globe camera helpers ─────────────────────────────────── */
function flyTo(preset, speed = 1500) {
  globe.pointOfView({ lat: preset.lat, lng: preset.lng, altitude: preset.alt }, speed);
}

function zoomIn() {
  const pov = globe.pointOfView();
  globe.pointOfView({ ...pov, altitude: Math.max(0.08, pov.altitude * 0.65) }, 400);
}

function zoomOut() {
  const pov = globe.pointOfView();
  globe.pointOfView({ ...pov, altitude: Math.min(3.5, pov.altitude * 1.5) }, 400);
}

/* ── Category filter ──────────────────────────────────────── */
function applyFilter(cat) {
  activeFilter = cat;
  document.querySelectorAll(".me-cat-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.cat === cat);
  });
  const pts = buildGlobePoints(cat);
  globe.pointsData(pts);
  showToast(`Showing ${pts.length} ${cat === "all" ? "destinations" : cat} destination${pts.length !== 1 ? "s" : ""}`);
}

/* ── Level transitions ───────────────────────────────────── */
function goToIndia() {
  currentLevel = "india";
  flyTo(CAM.india, 2000);
  setActiveCrumb("india");
  showStage("stage-india");
  updateLegendVisibility(false);
  // Show India ring highlight
  globe.ringsData([
    { lat: 22.5, lng: 82.5, maxR: 10, propagationSpeed: 1.5, repeatPeriod: 1000, color: () => `rgba(255,200,80,${1 - 1 * 0.5})` }
  ]);
  setTimeout(() => globe.ringsData([]), 3000);
}

function goToOdisha() {
  currentLevel = "odisha";
  flyTo(CAM.odisha, 2000);
  setActiveCrumb("odisha");
  showStage("stage-odisha");
  updateLegendVisibility(true);
  // Show Odisha ring highlight
  globe.ringsData([
    { lat: 20.5, lng: 85.0, maxR: 5, propagationSpeed: 2, repeatPeriod: 800, color: () => `rgba(213,167,70,${1 - 1 * 0.5})` }
  ]);
  setTimeout(() => globe.ringsData([]), 2500);
  // Show destination pins
  applyFilter("all");
  showToast("🏛️ 31 Odisha destinations now visible on the globe!");
}

function goBackToEarth() {
  currentLevel = "earth";
  flyTo(CAM.earth, 2000);
  setActiveCrumb("earth");
  showStage("stage-earth");
  updateLegendVisibility(false);
  globe.pointsData([]);
  globe.ringsData([]);
  if (!autoRotate) toggleRotation();
}

function goBackToIndia() {
  currentLevel = "india";
  flyTo(CAM.india, 1500);
  setActiveCrumb("india");
  showStage("stage-india");
  updateLegendVisibility(false);
  globe.pointsData([]);
}

function goBackToOdisha() {
  currentLevel = "odisha";
  flyTo(CAM.odisha, 1500);
  setActiveCrumb("odisha");
  showStage("stage-odisha");
  updateLegendVisibility(true);
  applyFilter(activeFilter);
}

function toggleRotation() {
  autoRotate = !autoRotate;
  globe.controls().autoRotate = autoRotate;
  document.getElementById("btn-toggle-rotation").classList.toggle("active-btn", autoRotate);
  showToast(autoRotate ? "Auto-rotation on" : "Auto-rotation off");
}

function toggleTexture() {
  dayMode = !dayMode;
  globe
    .globeImageUrl(dayMode ? "assets/textures/earth-blue-marble.jpg" : "assets/textures/earth-night.jpg")
    .bumpImageUrl(dayMode ? "assets/textures/earth-topology.png" : null);
  document.getElementById("btn-toggle-texture").classList.toggle("active-btn", !dayMode);
  showToast(dayMode ? "☀️ Day texture" : "🌙 Night texture");
}

function resetCamera() {
  flyTo(CAM[currentLevel] || CAM.earth, 1200);
  showToast("Camera reset");
}

/* ── Fullscreen ───────────────────────────────────────────── */
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
    document.body.classList.add("fs-mode");
    document.getElementById("btn-fullscreen").title = "Exit Full Screen";
  } else {
    document.exitFullscreen();
    document.body.classList.remove("fs-mode");
    document.getElementById("btn-fullscreen").title = "Full Screen";
  }
}
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) document.body.classList.remove("fs-mode");
});

/* ── Animate loading bar ──────────────────────────────────── */
function animateLoader() {
  const fill = document.getElementById("me-loader-fill");
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15 + 5;
    fill.style.width = Math.min(progress, 90) + "%";
    if (progress >= 90) clearInterval(interval);
  }, 200);
  return () => {
    clearInterval(interval);
    fill.style.width = "100%";
  };
}

/* ── Resize handler ───────────────────────────────────────── */
function handleResize() {
  const wrap = document.getElementById("me-globe-wrap");
  globe.width(wrap.clientWidth).height(wrap.clientHeight);
}

/* ── Globe initialisation ─────────────────────────────────── */
function initGlobe() {
  const finishLoader = animateLoader();

  const container = document.getElementById("globeViz");
  const wrap      = document.getElementById("me-globe-wrap");

  globe = Globe({ animateIn: true })(container)
    /* Earth textures */
    .globeImageUrl("assets/textures/earth-blue-marble.jpg")
    .bumpImageUrl("assets/textures/earth-topology.png")
    .backgroundImageUrl("assets/textures/night-sky.png")

    /* Atmosphere glow */
    .showAtmosphere(true)
    .atmosphereColor("#4FC3F7")
    .atmosphereAltitude(0.18)

    /* Destination points */
    .pointsData([])
    .pointLat("lat")
    .pointLng("lng")
    .pointColor("color")
    .pointRadius("size")
    .pointAltitude(0.012)
    .pointResolution(12)
    .pointLabel(buildPointLabel)

    /* Rings (for highlight animations) */
    .ringsData([])
    .ringLat("lat")
    .ringLng("lng")
    .ringMaxRadius("maxR")
    .ringPropagationSpeed("propagationSpeed")
    .ringRepeatPeriod("repeatPeriod")
    .ringColor("color")

    /* Click on point → open detail */
    .onPointClick(d => {
      // Zoom camera to destination
      globe.pointOfView({ lat: d.lat, lng: d.lng, altitude: 0.15 }, 1200);
      openDestDetail(d);
    })

    /* Initial camera */
    .pointOfView(CAM.earth, 0);

  /* Controls */
  const ctrl = globe.controls();
  ctrl.autoRotate      = true;
  ctrl.autoRotateSpeed = 0.4;
  ctrl.enableZoom      = true;
  ctrl.minDistance     = 101;
  ctrl.maxDistance     = 800;
  ctrl.enableDamping   = true;
  ctrl.dampingFactor   = 0.1;

  /* Size */
  globe.width(wrap.clientWidth).height(wrap.clientHeight);
  window.addEventListener("resize", handleResize);

  /* Hide loader after globe ready */
  setTimeout(() => {
    finishLoader();
    setTimeout(() => {
      document.getElementById("me-loader").classList.add("fade-out");
      setTimeout(() => {
        document.getElementById("me-loader").style.display = "none";
      }, 700);
    }, 400);
    showToast("🌍 Mini Earth ready — start your journey!");
  }, 1800);
}

/* ── Event listeners (wired after DOM ready) ─────────────── */
function wireEvents() {
  /* Journey buttons */
  document.getElementById("btn-go-india").addEventListener("click", goToIndia);
  document.getElementById("btn-go-odisha").addEventListener("click", goToOdisha);
  document.getElementById("btn-back-earth").addEventListener("click", goBackToEarth);
  document.getElementById("btn-back-india").addEventListener("click", goBackToIndia);
  document.getElementById("btn-back-odisha").addEventListener("click", goBackToOdisha);

  /* Breadcrumb navigation */
  document.getElementById("crumb-earth").addEventListener("click", () => {
    if (currentLevel !== "earth") goBackToEarth();
  });
  document.getElementById("crumb-india").addEventListener("click", () => {
    if (currentLevel === "odisha" || currentLevel === "dest") goBackToIndia();
    else if (currentLevel === "earth") goToIndia();
  });
  document.getElementById("crumb-odisha").addEventListener("click", () => {
    if (currentLevel === "dest") goBackToOdisha();
    else if (currentLevel === "india") goToOdisha();
  });

  /* Category filters */
  document.querySelectorAll(".me-cat-btn").forEach(btn => {
    btn.addEventListener("click", () => applyFilter(btn.dataset.cat));
  });

  /* Camera controls */
  document.getElementById("btn-zoom-in").addEventListener("click", zoomIn);
  document.getElementById("btn-zoom-out").addEventListener("click", zoomOut);
  document.getElementById("btn-reset-cam").addEventListener("click", resetCamera);
  document.getElementById("btn-toggle-rotation").addEventListener("click", toggleRotation);
  document.getElementById("btn-toggle-texture").addEventListener("click", toggleTexture);
  document.getElementById("btn-fullscreen").addEventListener("click", toggleFullscreen);

  /* Stop auto-rotate on drag start */
  const globeEl = document.getElementById("globeViz");
  globeEl.addEventListener("mousedown", () => {
    if (globe && autoRotate) {
      globe.controls().autoRotate = false;
    }
  });
  globeEl.addEventListener("mouseup", () => {
    if (globe && autoRotate) {
      globe.controls().autoRotate = true;
    }
  });

  /* Keyboard shortcuts */
  document.addEventListener("keydown", e => {
    if (e.key === "+" || e.key === "=") zoomIn();
    if (e.key === "-")                   zoomOut();
    if (e.key === "r" || e.key === "R")  resetCamera();
    if (e.key === "Escape" && currentLevel === "dest") goBackToOdisha();
  });
}

/* ── Bootstrap ───────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  wireEvents();
  initGlobe();
  showStage("stage-earth");
  setActiveCrumb("earth");
});

