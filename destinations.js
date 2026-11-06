"use strict";

window.ODISHA_DESTINATIONS = [
  {
    id: "puri", name: "Puri", district: "Puri", category: "Spiritual", tags: ["Beach", "Spiritual"],
    description: "A historic pilgrimage city on the Bay of Bengal, known for the Jagannath Temple, its lively seafront and a long tradition of visitors.",
    bestSeason: "October to February; Rath Yatra dates vary by the Hindu lunar calendar.",
    entryFee: 0, entryFeeLabel: "Public beach is free; temple access rules apply",
    avgDailyCost: { budget: 2200, mid: 4800, luxury: 10500 },
    attractions: ["Shree Jagannath Temple (check visitor rules)", "Puri Sea Beach", "Raghurajpur heritage crafts village"],
    localFood: ["Mahaprasad (at Ananda Bazaar)", "Khaja", "Pakhala"],
    lat: 19.8135, lng: 85.8312, image: "assets/images/puri.jpg"
  },
  {
    id: "konark", name: "Konark Sun Temple", district: "Puri", category: "Heritage", tags: ["Heritage"],
    description: "The 13th-century Sun Temple is a UNESCO World Heritage Site celebrated for its monumental Kalinga-style design and stone chariot form.",
    bestSeason: "November to February; the Konark Dance Festival is usually held in December.",
    entryFee: 50, entryFeeLabel: "Planning estimate ₹50 for Indian adult entry; verify current ASI rates",
    avgDailyCost: { budget: 1900, mid: 4300, luxury: 9200 },
    attractions: ["Sun Temple and carved stone wheels", "Archaeological Museum", "Chandrabhaga Beach"],
    localFood: ["Mahaprasad in nearby Puri", "Chhena poda", "Fresh coastal fish"],
    lat: 19.8876, lng: 86.0945, image: "assets/images/konark.jpg"
  },
  {
    id: "bhubaneswar", name: "Bhubaneswar", district: "Khordha", category: "Heritage", tags: ["Heritage", "Spiritual"],
    description: "Odisha's capital is also known as the Temple City, with historic Kalinga-style shrines, museums and modern civic life.",
    bestSeason: "October to March.",
    entryFee: 0, entryFeeLabel: "Many city temples are free; individual site fees may apply",
    avgDailyCost: { budget: 2100, mid: 4600, luxury: 10500 },
    attractions: ["Lingaraj Temple (non-Hindus cannot enter the inner complex)", "Mukteswar Temple", "Odisha State Museum"],
    localFood: ["Dahibara aludum", "Chhena poda", "Dalma with rice"],
    lat: 20.2961, lng: 85.8245, image: "assets/images/bhubaneswar.jpg"
  },
  {
    id: "chilika", name: "Chilika Lake", district: "Puri, Khordha and Ganjam", category: "Wildlife", tags: ["Nature", "Wildlife"],
    description: "A large brackish-water lagoon on Odisha's coast, internationally recognised as a Ramsar wetland and noted for migratory birds and Irrawaddy dolphins.",
    bestSeason: "November to February for migratory birds; boat access depends on weather and local operators.",
    entryFee: 0, entryFeeLabel: "Lake access varies; boat fares and permits are extra",
    avgDailyCost: { budget: 2300, mid: 5000, luxury: 11000 },
    attractions: ["Boat trip from Satapada", "Nalabana Bird Sanctuary (viewing rules apply)", "Kalijai Island"],
    localFood: ["Fresh lagoon fish", "Crab curry", "Pakhala"],
    lat: 19.7147, lng: 85.3194, image: "assets/images/chilika.jpg"
  },
  {
    id: "simlipal", name: "Similipal National Park", district: "Mayurbhanj", category: "Wildlife", tags: ["Nature", "Wildlife"],
    description: "A protected landscape in the Eastern Ghats with forest, waterfalls and diverse wildlife; access is regulated and seasonal.",
    bestSeason: "November to February; check official opening dates, entry gates and safari availability before travel.",
    entryFee: 100, entryFeeLabel: "Planning allowance ₹100; permits, vehicle and guide fees vary",
    avgDailyCost: { budget: 2600, mid: 5600, luxury: 12000 },
    attractions: ["Barehipani Falls", "Joranda Falls", "Forest safari from an authorised entry gate"],
    localFood: ["Mayurbhanj mudhi mansa", "Local rice dishes", "Seasonal forest-edge produce"],
    lat: 21.9300, lng: 86.3400, image: "assets/images/simlipal.jpg"
  },
  {
    id: "bhitarkanika", name: "Bhitarkanika", district: "Kendrapara", category: "Wildlife", tags: ["Nature", "Wildlife"],
    description: "A protected mangrove wetland known for saltwater crocodiles and rich estuarine birdlife, explored through designated forest and boat routes.",
    bestSeason: "November to February; access and boat operations are subject to forest rules and tides.",
    entryFee: 100, entryFeeLabel: "Planning allowance ₹100; boat, guide and permit charges vary",
    avgDailyCost: { budget: 2800, mid: 5900, luxury: 12500 },
    attractions: ["Authorised mangrove boat routes", "Dangmal interpretation area", "Nature trails open to visitors"],
    localFood: ["Fresh river fish", "Crab curry", "Pakhala"],
    lat: 20.7210, lng: 86.8660, image: "assets/images/odisha-placeholder.svg"
  },
  {
    id: "gopalpur", name: "Gopalpur-on-Sea", district: "Ganjam", category: "Beach", tags: ["Beach"],
    description: "A coastal town and beach south of Berhampur with a quieter seafront, local seafood and nearby cultural destinations.",
    bestSeason: "October to March; follow local sea and weather advisories.",
    entryFee: 0, entryFeeLabel: "Beach access is free",
    avgDailyCost: { budget: 2100, mid: 4700, luxury: 10500 },
    attractions: ["Gopalpur Beach", "Old port-area streets", "Tara Tarini hill shrine (day excursion)"],
    localFood: ["Ganjam seafood curry", "Prawn preparations", "Chhena poda"],
    lat: 19.2586, lng: 84.9052, image: "assets/images/odisha-placeholder.svg"
  },
  {
    id: "chandipur", name: "Chandipur", district: "Balasore", category: "Beach", tags: ["Beach", "Nature"],
    description: "A beach on the Balasore coast where the sea recedes a long way at low tide; visitors should respect tide times and safety advice.",
    bestSeason: "November to February; consult tide tables and local advisories.",
    entryFee: 0, entryFeeLabel: "Beach access is generally free",
    avgDailyCost: { budget: 1900, mid: 4200, luxury: 9000 },
    attractions: ["Chandipur Beach at a safe low tide", "Balaramgadi estuary area", "Khirochora Gopinath Temple in Remuna"],
    localFood: ["Balasore seafood", "Chhena poda", "Local sweets"],
    lat: 21.4650, lng: 87.0300, image: "assets/images/odisha-placeholder.svg"
  },
  {
    id: "cuttack", name: "Cuttack", district: "Cuttack", category: "Heritage", tags: ["Heritage"],
    description: "A historic city between the Mahanadi and Kathajodi rivers, known for its silver filigree craft, old fort remains and Durga Puja traditions.",
    bestSeason: "October to February; Durga Puja dates follow the Hindu lunar calendar.",
    entryFee: 0, entryFeeLabel: "Public city sites are free; museum fees may apply",
    avgDailyCost: { budget: 1900, mid: 4200, luxury: 9500 },
    attractions: ["Barabati Fort remains", "Cuttack Chandi Temple", "Silver filigree craft workshops and markets"],
    localFood: ["Dahibara aludum", "Cuttack bara-ghuguni", "Rasagola"],
    lat: 20.4625, lng: 85.8828, image: "assets/images/odisha-placeholder.svg"
  },
  {
    id: "raghurajpur", name: "Raghurajpur", district: "Puri", category: "Heritage", tags: ["Heritage"],
    description: "A craft village near Puri widely associated with Pattachitra painting and other traditional arts; visitors can meet artists with permission.",
    bestSeason: "October to March; contact artists ahead for workshop visits.",
    entryFee: 0, entryFeeLabel: "Village access is free; workshops and purchases are separate",
    avgDailyCost: { budget: 1800, mid: 3900, luxury: 8500 },
    attractions: ["Pattachitra artist homes", "Gotipua performance traditions (when scheduled)", "Local palm-leaf and mask craft"],
    localFood: ["Odia home-style meals", "Pakhala", "Chhena poda"],
    lat: 19.9006, lng: 85.8378, image: "assets/images/odisha-placeholder.svg"
  },
  {
    id: "dhauli", name: "Dhauli Shanti Stupa", district: "Khordha", category: "Spiritual", tags: ["Heritage", "Spiritual"],
    description: "A hill south of Bhubaneswar associated with the Kalinga War and Ashoka's inscriptions; the white Shanti Stupa was built in the 20th century.",
    bestSeason: "October to March; visit in daylight for the hilltop views.",
    entryFee: 0, entryFeeLabel: "Public hilltop access is generally free",
    avgDailyCost: { budget: 1700, mid: 3700, luxury: 8200 },
    attractions: ["Dhauli Shanti Stupa", "Ashokan rock edicts", "Daya River viewpoint"],
    localFood: ["Bhubaneswar dahibara aludum", "Dalma", "Chhena poda"],
    lat: 20.1920, lng: 85.8390, image: "assets/images/odisha-placeholder.svg"
  },
  {
    id: "udayagiri-khandagiri", name: "Udayagiri & Khandagiri Caves", district: "Khordha", category: "Heritage", tags: ["Heritage"],
    description: "Rock-cut caves near Bhubaneswar include inscriptions and sculptural details associated with ancient Jain monastic life and the Mahameghavahana period.",
    bestSeason: "October to February; visit early to avoid midday heat.",
    entryFee: 25, entryFeeLabel: "Planning estimate ₹25; verify current Archaeological Survey rates",
    avgDailyCost: { budget: 1800, mid: 4000, luxury: 8800 },
    attractions: ["Udayagiri cave complex", "Khandagiri cave complex", "Nearby Jain temples and viewpoints"],
    localFood: ["Bhubaneswar dahibara aludum", "Dalma", "Chhena poda"],
    lat: 20.2610, lng: 85.7860, image: "assets/images/odisha-placeholder.svg"
  },
  {
    id: "daringbadi", name: "Daringbadi", district: "Kandhamal", category: "Nature", tags: ["Nature"],
    description: "A hill town in Kandhamal district with forested slopes, coffee and spice cultivation, and a cooler climate than the coast.",
    bestSeason: "October to March; monsoon brings heavy rain and can affect road access.",
    entryFee: 0, entryFeeLabel: "Public viewpoints are generally free",
    avgDailyCost: { budget: 2200, mid: 4800, luxury: 10000 },
    attractions: ["Hill View Park", "Coffee and spice plantations (with permission)", "Nearby waterfalls in season"],
    localFood: ["Kandhamal turmeric-seasoned meals", "Local rice dishes", "Seasonal tribal cuisine"],
    lat: 19.9070, lng: 84.1320, image: "assets/images/odisha-placeholder.svg"
  },
  {
    id: "satkosia", name: "Satkosia Gorge", district: "Angul and Nayagarh", category: "Wildlife", tags: ["Nature", "Wildlife"],
    description: "The Mahanadi cuts through a dramatic gorge within a protected landscape; visitor activities and accommodation depend on current forest permissions.",
    bestSeason: "November to February; check sanctuary access, boating and camp availability before travelling.",
    entryFee: 100, entryFeeLabel: "Planning allowance ₹100; sanctuary, boat and guide fees vary",
    avgDailyCost: { budget: 2600, mid: 5600, luxury: 12000 },
    attractions: ["Mahanadi gorge viewpoints", "Authorised nature camps", "Seasonal boat or guided activities where permitted"],
    localFood: ["Local river fish", "Odia rice and dal", "Seasonal produce"],
    lat: 20.5500, lng: 84.7800, image: "assets/images/odisha-placeholder.svg"
  },
  {
    id: "hirakud", name: "Hirakud Dam", district: "Sambalpur", category: "Nature", tags: ["Nature"],
    description: "The Hirakud multipurpose dam spans the Mahanadi near Sambalpur; viewpoints and visitor access are subject to operating rules.",
    bestSeason: "October to February; check reservoir and dam access notices before visiting.",
    entryFee: 0, entryFeeLabel: "Viewpoint access varies; boating, if available, is extra",
    avgDailyCost: { budget: 2000, mid: 4400, luxury: 9800 },
    attractions: ["Gandhi Minar viewpoint", "Jawahar Minar viewpoint", "Hirakud reservoir viewpoints"],
    localFood: ["Sambalpuri cuisine", "Bara and ghuguni", "Local rice dishes"],
    lat: 21.5240, lng: 83.8720, image: "assets/images/odisha-placeholder.svg"
  }
];

// New destinations are kept in this canonical collection. Fees and cost bands
// need local confirmation, so new records are explicitly marked unverified.
const odishaAdditions = [
  ["Maa Taratarini Temple","Ganjam","Spiritual",19.482,84.885,["Hilltop shrine","Rushikulya River valley","Temple complex"],["Mahaprasad","Odia thali"]],
  ["Taptapani","Ganjam","Nature",19.491,84.409,["Hot spring","Hill scenery","Nearby tribal villages"],["Odia thali","Local rice dishes"]],
  ["Maa Tarini Temple (Ghatagaon)","Keonjhar","Spiritual",21.492,85.939,["Maa Tarini shrine","Temple complex","Ghatagaon market"],["Prasad","Odia thali"]],
  ["Deomali Hills","Koraput","Nature",18.673,82.976,["Deomali summit","Mountain viewpoints","Nearby Koraput landscapes"],["Millet dishes","Local rice meals"]],
  ["Gupteswar Cave","Koraput","Spiritual",18.853,82.150,["Limestone cave shrine","Kolab River valley","Forest surroundings"],["Koraput coffee","Millet dishes"]],
  ["Duduma Waterfall","Koraput","Nature",18.146,82.217,["Duduma Falls viewpoint","Machkund valley","Nearby viewpoints"],["Millet dishes","Local rice meals"]],
  ["Maa Samaleswari Temple","Sambalpur","Spiritual",21.467,83.974,["Samaleswari Temple","Mahanadi riverfront","Sambalpur markets"],["Sambalpuri food","Arisa pitha"]],
  ["Huma Leaning Temple","Sambalpur","Heritage",21.269,83.868,["Bimaleswar Temple","Mahanadi riverbank","Huma village"],["Sambalpuri food","Local sweets"]],
  ["Talsari Beach","Balasore","Beach",21.584,87.452,["Talsari shoreline","Subarnarekha estuary","Coastal casuarina groves"],["Seafood","Local sweets"]],
  ["Bichitrapur Mangrove","Balasore","Wildlife",21.610,87.430,["Mangrove boat routes","Estuary landscape","Coastal birdlife"],["Seafood","Odia meals"]],
  ["Panchalingeswar Temple","Balasore","Spiritual",21.352,86.696,["Panchalingeswar shrine","Nilagiri hills","Forest setting"],["Odia thali","Local snacks"]],
  ["Kuldiha Wildlife Sanctuary","Balasore","Wildlife",21.385,86.596,["Kuldiha forest","Rissia reservoir","Authorised nature trails"],["Odia meals","Local rice dishes"]],
  ["Ramachandi Temple","Puri","Spiritual",19.856,86.105,["Ramachandi shrine","Kushabhadra river mouth","Nearby coast"],["Seafood","Mahaprasad in Puri"]],
  ["Astaranga Beach","Puri","Beach",19.978,86.276,["Astaranga shoreline","Coastal sunset views","Nearby fishing village"],["Seafood","Odia meals"]],
  ["Lingaraj Temple","Khordha","Spiritual",20.238,85.834,["Lingaraj Temple exterior","Bindusagar tank","Old Town temple precinct"],["Dahibara aludum","Dalma"]],
  ["Nandankanan Zoological Park","Khordha","Wildlife",20.398,85.818,["Zoological park","Botanical garden","Kanjia Lake"],["Bhubaneswar Odia cuisine","Dahibara aludum"]],
  ["Rajarani Temple","Khordha","Heritage",20.247,85.835,["Rajarani Temple","Temple garden","Old Town temples"],["Dahibara aludum","Chhena poda"]],
  ["Mukteswar Temple","Khordha","Heritage",20.246,85.836,["Mukteswar Temple","Torana gateway","Old Town temple precinct"],["Dahibara aludum","Dalma"]],
  ["Barabati Fort","Cuttack","Heritage",20.493,85.878,["Barabati Fort ruins","Barabati Stadium surroundings","Mahanadi riverfront"],["Dahibara aludum","Bara-ghuguni"]],
  ["Ansupa Lake","Cuttack","Nature",20.433,85.617,["Ansupa Lake","Saranda hills","Seasonal birdlife"],["Freshwater fish","Odia meals"]],
  ["Dhabaleswar Temple","Cuttack","Spiritual",20.488,85.785,["Dhabaleswar shrine","Mahanadi island setting","Suspension bridge approach"],["Prasad","Odia snacks"]],
  ["Gahirmatha Marine Sanctuary","Kendrapara","Wildlife",20.760,87.070,["Marine sanctuary coast","Olive ridley nesting habitat","Designated visitor areas"],["Seafood","Odia meals"]],
  ["Kapilash Temple","Dhenkanal","Spiritual",20.673,85.596,["Kapilash hill shrine","Hill steps and forest","Dhenkanal landscape"],["Odia thali","Local sweets"]],
  ["Joranda Mahima Gadi","Dhenkanal","Spiritual",20.669,85.516,["Mahima Gadi complex","Sunya Mandira","Joranda fair traditions"],["Odia meals","Local rice dishes"]],
  ["Harishankar Temple","Balangir","Spiritual",20.580,82.768,["Harishankar shrine","Hill stream and falls","Gandhamardan foothills"],["Odia thali","Local snacks"]],
  ["Nrusinghanath Temple","Bargarh","Spiritual",20.841,82.831,["Nrusinghanath Temple","Gandhamardan foothills","Nearby waterfall route"],["Odia thali","Local sweets"]],
  ["Debrigarh Wildlife Sanctuary","Bargarh","Wildlife",21.578,83.636,["Hirakud reservoir edge","Authorised wildlife safari","Nature trails"],["Sambalpuri cuisine","Local rice dishes"]],
  ["Khandadhar Waterfall","Sundargarh","Nature",21.710,85.155,["Khandadhar Falls","Forest viewpoint","Nearby trekking route"],["Odia meals","Local rice dishes"]],
  ["Kichakeswari Temple","Mayurbhanj","Spiritual",21.927,85.589,["Kichakeswari Temple","Khiching stone carvings","Temple museum area"],["Mayurbhanj cuisine","Mudhi mansa"]],
  ["Barehipani Waterfall","Mayurbhanj","Nature",21.927,86.370,["Barehipani Falls viewpoint","Similipal forest","Joranda Falls area"],["Mayurbhanj cuisine","Local rice meals"]],
  ["Devkund Waterfall","Mayurbhanj","Nature",21.686,86.431,["Devkund waterfall","Maa Ambika shrine","Forest trekking route"],["Odia meals","Local rice dishes"]],
  ["Maa Manikeswari Temple","Kalahandi","Spiritual",19.907,83.167,["Manikeswari Temple","Bhawanipatna town","Local festival traditions"],["Kalahandi cuisine","Local rice dishes"]],
  ["Paradip Beach","Jagatsinghpur","Beach",20.267,86.697,["Paradip shoreline","Marine drive area","Mahanadi estuary region"],["Seafood","Odia meals"]]
];

for (const [name, district, category, lat, lng, topAttractions, localFood] of odishaAdditions) {
  const id = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\([^)]*\)/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const description = `${name} is a destination in ${district} district of Odisha. Visitors come to experience its ${category.toLowerCase()} setting and the surrounding landscape. The exact visitor facilities, seasonal access, local rules and current charges can change, so confirm details with official tourism or site authorities before setting out. Plan travel time with local road conditions in mind.`;
  window.ODISHA_DESTINATIONS.push({
    id, name, district, category, tags: [category], description,
    bestSeason: "Seasonal conditions vary; check local advisories before travel.",
    entryFee: 0, entryFeeLabel: "Not verified; confirm current charges locally",
    avgDailyCost: { budget: 2200, mid: 4800, luxury: 10000 },
    attractions: topAttractions, topAttractions, localFood,
    nearestCity: district, lat, lng,
    image: `assets/images/destinations/${id}.jpg`, alt: `${name} in ${district}, Odisha`, verified: false
  });
}

// Align older records to the same public schema while keeping legacy UI aliases.
for (const destination of window.ODISHA_DESTINATIONS) {
  destination.topAttractions ||= destination.attractions;
  destination.attractions ||= destination.topAttractions;
  destination.alt ||= `${destination.name} in ${destination.district}, Odisha`;
  destination.nearestCity ||= destination.district.split(",")[0];
  destination.verified ??= false;
  destination.image = `assets/images/destinations/${destination.id}.jpg`;
  if (destination.description.trim().split(/\s+/).length < 40) {
    destination.description += " Visitors should confirm current opening hours, access requirements, transport options and local guidance before travelling; these details may vary with season, weather, religious observances and operating conditions.";
  }
}

window.ODISHA_CULTURE = [
  {
    id: "jagannath-rath-yatra", title: "Jagannath Culture & Rath Yatra", icon: "landmark",
    summary: "Puri's Jagannath tradition joins temple ritual, community life and the annual chariot procession.",
    history: "The Jagannath Temple at Puri is a major pilgrimage centre with a long history and a distinctive ritual calendar. Its traditions include daily worship, food offerings and service communities whose roles are organised around the temple.",
    significance: "During Rath Yatra, the deities Jagannath, Balabhadra and Subhadra are taken from the temple in three large, newly constructed chariots to the Gundicha Temple. The procession is an important public religious event and a defining expression of Puri's living culture. Dates follow the Hindu lunar calendar, and crowds and access arrangements are substantial.",
    experience: "Visitors can learn about the tradition through public festival events, local museums and guided interpretation in Puri. Entry to the Jagannath Temple is restricted to Hindus; non-Hindu visitors should use the viewing platform outside the temple rather than attempt entry. Respect local guidance, avoid blocking processions and plan transport well in advance. Festival routes and security arrangements can change annually, so check current official guidance before travel.",
    bestTime: "Rath Yatra dates vary each year, usually in June or July. October to February is more comfortable for a general visit.",
    images: ["assets/images/puri.jpg", "assets/images/hero.jpg", "assets/images/bhubaneswar.jpg"]
  },
  {
    id: "konark-temple", title: "Konark Sun Temple", icon: "sun",
    summary: "A 13th-century temple and UNESCO World Heritage Site, celebrated for its monumental stone architecture.",
    history: "Built in the 13th century under the Eastern Ganga dynasty, the Sun Temple at Konark was conceived as a monumental stone chariot associated with Surya, the sun deity. Its surviving complex preserves a wealth of sculptural work and architectural detail. The temple is part of the Kalinga architectural tradition and was inscribed on UNESCO's World Heritage List in 1984.",
    significance: "The carved wheels, horses and richly ornamented surfaces make the temple a major record of medieval Odisha's artistic and building skills. The monument has suffered structural loss over time, so the surviving fabric and conservation work are important parts of its story. Its design is often interpreted through solar symbolism, but visitors should distinguish documented architectural features from popular legend.",
    experience: "Explore the protected monument and the nearby Archaeological Museum, allowing time to view carvings from several sides. Chandrabhaga Beach is a separate nearby stop. Use the official ticketing and photography guidance, and do not climb or touch fragile stonework.",
    bestTime: "November to February offers cooler weather. The Konark Dance Festival is usually held in December.",
    images: ["assets/images/konark.jpg", "assets/images/hero.jpg", "assets/images/puri.jpg"]
  },
  {
    id: "odissi", title: "Odissi Dance", icon: "music-2",
    summary: "A classical dance tradition of Odisha known for sculptural poses, expressive movement and a strong musical vocabulary.",
    history: "Odissi developed in Odisha through several performance traditions, including temple-linked Mahari practice and the Gotipua tradition in which boys performed dressed as women. Modern Odissi was codified and reconstructed in the twentieth century by dancers, musicians and scholars drawing on treatises, surviving performance knowledge and temple sculpture. Its history is therefore both continuous and shaped by modern revival.",
    significance: "The form is recognised for fluid torso movement, lyrical footwork, expressive storytelling and the tribhangi stance, in which the body bends at three points. Performances commonly draw on devotional poetry, especially compositions associated with Jayadeva's Gita Govinda, while also presenting non-narrative dance. Odissi music shares a regional identity while incorporating broader Indian classical elements.",
    experience: "See performances at Odisha's cultural institutions and festivals in Bhubaneswar, Puri and Konark, or attend a workshop hosted by a qualified local school. Check the programme and artists before travelling; festival dates vary. Audience etiquette is similar to other seated classical performances.",
    bestTime: "The Konark Dance Festival is generally in December; year-round performances are scheduled in major cities.",
    images: ["assets/images/bhubaneswar.jpg", "assets/images/konark.jpg", "assets/images/puri.jpg"]
  },
  {
    id: "pattachitra", title: "Pattachitra Painting", icon: "palette",
    summary: "A meticulous painting tradition associated with Odisha, especially the artist village of Raghurajpur.",
    history: "Pattachitra is a traditional painting practice whose name refers to a painted cloth surface. In Odisha, painters prepare a treated cloth support and work with fine lines, carefully composed figures and a palette traditionally made from natural materials. Stories connected with Jagannath and episodes from Hindu epics are frequent subjects. Palm-leaf engraving is a related but distinct craft.",
    significance: "The work is made through skilled stages: preparing and polishing the surface, drawing outlines, filling colour and finishing decorative borders. Raghurajpur, near Puri, is widely known for Pattachitra artists and for other performance and craft traditions. Designs and methods are transmitted through families and apprenticeships, while contemporary artists also adapt subjects and formats for new audiences.",
    experience: "In Raghurajpur, visit only with residents' welcome, ask before photographing artists or homes, and pay fairly for demonstrations and work. Museums and craft exhibitions in Bhubaneswar and Puri offer additional context. Look closely at line work, border patterns and the time invested rather than treating the art as a souvenir alone.",
    bestTime: "October to March is comfortable for village visits; arrange a workshop with artists in advance.",
    images: ["assets/images/konark.jpg", "assets/images/bhubaneswar.jpg", "assets/images/puri.jpg"]
  },
  {
    id: "sambalpuri-textiles", title: "Sambalpuri Textiles", icon: "swatch-book",
    summary: "Western Odisha's ikat weaving traditions create distinctive patterns through resist-dyed yarns.",
    history: "Sambalpuri textiles are associated with western Odisha and the region's handloom communities. In ikat weaving, sections of yarn are tied and resist-dyed before weaving, so patterns emerge as the warp and weft are interlaced. The labour-intensive process requires planning the design across many individual threads. Different centres and artisan groups maintain related but varied practices.",
    significance: "Common motifs include conch shells, wheels, flowers and geometric forms, each rendered through the alignment of dyed yarn rather than simply printed onto finished cloth. Sambalpuri handloom products are recognised through India's Geographical Indications framework. Weaving supports local livelihoods and carries regional knowledge, though not every product marketed as Sambalpuri is handwoven or made locally.",
    experience: "Visitors can learn about weaving at handloom centres, cooperatives and workshops around Sambalpur, Bargarh and nearby towns. Ask sellers about the weaver, materials and process; purchase from reputable artisan or cooperative outlets when possible. Respect workshop schedules and request permission before photographing looms or workers.",
    bestTime: "Weaving can be visited year-round; October to February is generally more comfortable for travel.",
    images: ["assets/images/bhubaneswar.jpg", "assets/images/konark.jpg", "assets/images/puri.jpg"]
  },
  {
    id: "odia-cuisine", title: "Odia Cuisine", icon: "utensils",
    summary: "A regional food culture shaped by rice, seasonal produce, coastal ingredients and temple traditions.",
    history: "Odia cooking varies across coastal, western and southern Odisha, with rice as a staple and dishes shaped by local produce, climate and community practice. Dalma combines lentils and vegetables and is widely associated with home cooking. Pakhala, fermented or lightly soured rice served cool with accompaniments, is especially valued in hot weather. Temple food traditions, particularly the Mahaprasad of Puri, have their own ritual context.",
    significance: "Chhena poda is a baked cheese dessert associated with Odisha, while regional sweets and savoury dishes differ from town to town. Rasagola is strongly linked to Odisha's food heritage and the Niladri Bije ritual in Puri; its history is also shared in wider regional food discussions. Food is not just a checklist: recipes, ingredients and serving customs express family and community identity.",
    experience: "Try a hygienic local restaurant or an established sweet shop, and ask about ingredients if you have dietary needs. Mahaprasad is available through the temple's food tradition in Puri; visitors must follow local rules. In summer, Pakhala is common, while seafood is prominent in many coastal towns.",
    bestTime: "Cuisine is available throughout the year; Pakhala is especially popular in the hotter months.",
    images: ["assets/images/puri.jpg", "assets/images/chilika.jpg", "assets/images/bhubaneswar.jpg"]
  },
  {
    id: "festivals", title: "Festivals: Raja, Kalinga Mahotsav & Bali Jatra", icon: "sparkles",
    summary: "Seasonal celebrations range from household and community observances to public arts and maritime fairs.",
    history: "Raja is a multi-day festival celebrated in Odisha around the onset of the monsoon and is associated with the earth's fertility, rest and renewal. Kalinga Mahotsav is a contemporary cultural festival held near Dhauli, presenting martial arts and performance against a setting associated with the Kalinga War. Bali Jatra, held in Cuttack near Kartik Purnima, commemorates Odisha's remembered maritime links through a large public fair.",
    significance: "These observances are different in origin and form: Raja is rooted in seasonal community practice, Kalinga Mahotsav is a modern curated arts event, and Bali Jatra combines historic memory with a bustling contemporary fair. Together they show how heritage is both lived locally and interpreted publicly. Event dates, venues and programmes can change, so visitors should verify current official announcements.",
    experience: "During Raja, ask local hosts about customs and join public celebrations respectfully. For Bali Jatra, plan for crowds and use official transport advice. At Kalinga Mahotsav, check the current programme and ticket information before travelling. Do not assume a festival's rituals are performances staged for visitors.",
    bestTime: "Raja is usually in June; Bali Jatra is around Kartik Purnima, usually October or November; Kalinga Mahotsav dates vary.",
    images: ["assets/images/puri.jpg", "assets/images/bhubaneswar.jpg", "assets/images/hero.jpg"]
  },
  {
    id: "tribal-heritage", title: "Tribal Heritage", icon: "users",
    summary: "Odisha is home to many distinct Adivasi communities, languages and living cultural practices.",
    history: "Odisha has a large and diverse Adivasi population, including communities with distinct languages, histories and relationships to land. There is no single 'tribal culture': customs vary widely by community and place. Many communities maintain knowledge connected to forests, agriculture, crafts, music and oral histories, while also engaging with contemporary education, work and civic life.",
    significance: "Recognising this diversity matters because outsiders have often flattened separate peoples into stereotypes. Protected areas, markets and museums can provide context, but community members are not attractions. Cultural practices are living and changing, and knowledge shared publicly does not imply consent to photograph, record or commercialise it. Responsible travel should centre local agency and fair benefit.",
    experience: "Choose community-led visits or reputable local guides, ask permission before photographs or recordings, and respect areas or ceremonies that are not open to visitors. Purchase crafts directly and fairly where possible. Learn from regional museums and published work by Adivasi writers and scholars, rather than expecting one visit to represent many communities.",
    bestTime: "There is no single season for all communities; coordinate visits with local hosts and avoid uninvited festival or village visits.",
    images: ["assets/images/simlipal.jpg", "assets/images/bhubaneswar.jpg", "assets/images/chilika.jpg"]
  },
  {
    id: "lingaraj-kalinga", title: "Lingaraj Temple & Kalinga Architecture", icon: "landmark",
    summary: "Bhubaneswar's temple landscape preserves a major regional architectural tradition.",
    history: "Kalinga architecture is the regional expression of the broader Nagara tradition of north Indian temple building. Odisha temples are often described through components such as the curving deul sanctuary tower and the jagamohana assembly hall, with later examples adding halls for dance and offerings. Bhubaneswar preserves buildings from several periods. Lingaraj Temple, whose central structure dates chiefly to the eleventh century, is among the city's most important historic shrines.",
    significance: "Temple design, sculpture and ritual use developed together, and each building reflects patrons, artisans and religious communities of its time. Lingaraj is a living Shaiva centre, not simply a monument; access and photography rules protect worshippers and the sacred precinct. Nearby temples such as Mukteswar allow visitors to compare plans, stonework and ornament across sites.",
    experience: "Non-Hindus cannot enter the Lingaraj Temple complex; an external viewing platform provides a view of its profile. Visit other publicly accessible temples with modest dress and respect for active worship. A licensed guide or museum visit can help explain architectural terms without reducing the site to decorative detail.",
    bestTime: "October to March is comfortable for temple walks; check festival calendars and site access before visiting.",
    images: ["assets/images/bhubaneswar.jpg", "assets/images/konark.jpg", "assets/images/hero.jpg"]
  }
];
