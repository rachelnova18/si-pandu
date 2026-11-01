/**
 * SI-PANDU - Sistem Pariwisata & Navigasi Terpadu Banggai Laut
 * Frontend Core Script (Interaktivitas, Responsif HP, Multi-Bahasa ID/EN, Carousel, Katalog, Kapal, Detail)
 */

// =========================================================
// 1. KAMUS MULTI-BAHASA (INDONESIAN & ENGLISH)
// =========================================================
const TRANSLATIONS = {
  id: {
    logoSub: "BANGGAI LAUT",
    navHome: "Beranda",
    navProfile: "Profil & Peta",
    navDestinasi: "Destinasi",
    navSambutan: "Sambutan",
    navJadwalKapal: "Jadwal Kapal",
    navPanduan: "Jadwal Kapal & Panduan",
    navCta: "Rute & Kapal",

    // Editorial Theme Keys
    heroBadge: "Edisi Wisata Bahari",
    agencyBadge: "Dinas Pariwisata & Kebudayaan",
    portalBy: "Disparbud Balut",
    webType: "Si-PANDU Portal",
    heroSub: "Pesona Alam",
    featureNav: "Pesona Maritim Balut",
    featureQuote: "Indonesia is not just wonderland,<br>Indonesia is a wonderful",
    featureDesc: "Di antara gugusan ratusan pulau karang eksotis dan biota laut langka, Banggai Laut menghadirkan ketenangan surgawi yang memikat pelancong dari seluruh penjuru dunia. Dinas Pariwisata dan Kebudayaan menyambut Anda dalam kehangatan budaya, cagar sejarah, serta pesona bahari tak terlupakan. Semoga kita semua senantiasa menikmati dan menjaga anugerah kelestarian alam ini.",
    
    // Hero Section
    heroPill: "✨ Portal Resmi Dinas Pariwisata & Kebudayaan",
    heroTitle: "Discover Your Perfect<br>Island Getaway in Banggai Laut",
    heroDesc: "Indonesia merupakan negara kepulauan terbesar di dunia dengan keindahan bahari tak tertandingi. Di Sulawesi Tengah, Kabupaten Banggai Laut membentang dengan gugusan pulau karang eksotis, laguna ubur-ubur tanpa sengat, pantai pasir putih jernih, serta warisan luhur Kerajaan Banggai.",
    searchPlaceholder: "Search...",
    searchBtn: "Cari Destinasi",

    // Hero Slides
    slide1Badge: "🔥 HITS BULAN INI • EVENT BUDAYA",
    slide1Caption: "<strong>Festival Pesona Banggai Laut 2026</strong> — Saksikan parade ratusan perahu hias dan pameran kuliner bahari terbesar bulan ini!",
    slide2Badge: "🌟 TRENDING #1 • WISATA BAHARI",
    slide2Caption: "<strong>Ekowisata Mbuang-Mbuang & Danau Ubur-Ubur</strong> — Destinasi paling ramai dikunjungi wisatawan bulan ini di Kepulauan Bokan.",
    slide3Badge: "🏛️ AGENDA ADAT • SEJARAH",
    slide3Caption: "<strong>Upacara Adat Malabot Tumbe</strong> — Tradisi sakral warisan leluhur Kerajaan Banggai yang memikat wisatawan mancanegara.",
    slide4Badge: "📸 SPOT FOTO POPULER • ALAM",
    slide4Caption: "<strong>Senja Eksotis di Tanjung Gundul & Pasir Putih</strong> — Rekomendasi utama akhir pekan bersama keluarga di Banggai Laut.",

    // Quickbar
    qbAllTitle: "Semua Destinasi",
    qbAllSub: "12+ Lokasi Pilihan",
    qbBahariTitle: "Wisata Bahari",
    qbBahariSub: "Pantai & Pulau",
    qbSejarahTitle: "Sejarah & Budaya",
    qbSejarahSub: "Kerajaan Banggai",
    qbKulinerTitle: "Hotel & Kuliner",
    qbKulinerSub: "Akomodasi Lokal",
    qbNearby: "📍 Terdekat",

    // Intro Section (Tentang Banggai Laut & Fakta Menarik)
    mapFloatingLabel: "Peta Gugusan Kepulauan Banggai Laut",
    introTag: "Tentang Daerah & Kepulauan",
    introTitle: "Tentang Banggai Laut (Balut)",
    introP1: "Kabupaten Banggai Laut adalah gugusan kepulauan eksotis di ujung pesisir timur Sulawesi Tengah. Dikelilingi oleh perairan Teluk Tolo dan Laut Maluku, kawasan ini menawarkan pesona bahari yang otentik, warisan sejarah maritim, dan keajaiban ekologi yang terjaga di zona Waktu Indonesia Tengah (WITA).",
    funFactsTag: "Pesona & Keunikan",
    funFactsTitle: "Fakta Menarik (Fun Facts) Banggai Laut",
    fact1Title: "Rumah Banggai Cardinalfish",
    fact1Desc: "Satu-satunya perairan di dunia yang menjadi habitat asli ikan hias laut eksotis <em>Banggai Cardinalfish</em> (<em>Pterapogon kauderni</em>).",
    fact2Title: "Ubur-Ubur Tanpa Sengat",
    fact2Desc: "Terdapat danau air asin tersembunyi di Pulau Mbuang-Mbuang tempat wisatawan bisa berenang aman bersama ribuan ubur-ubur tanpa sengat.",
    fact3Title: "Pusat Kerajaan Banggai",
    fact3Desc: "Ibu kota kepulauan ini merupakan pusat peradaban dan pemerintahan asli Kerajaan Banggai, lengkap dengan peninggalan keraton bersejarah.",
    fact4Title: "Matahari Terbit Lebih Awal",
    fact4Desc: "Berada di zona WITA, wisatawan dari wilayah barat (WIB) akan menikmati waktu dan matahari terbit satu jam lebih cepat.",
    stat1Num: "200+",
    stat1Label: "Gugusan Pulau",
    stat2Num: "94%",
    stat2Label: "Wilayah Bahari",
    stat3Num: "WITA",
    stat3Label: "Zona Waktu (UTC+8)",

    island1Title: "Pulau Banggai (Pusat Kota & Sejarah)",
    island1Desc: "Pusat Keraton Banggai, Pantai Bontolan & Lambangan Pauno",
    island2Title: "Gugusan Kepulauan Bokan",
    island2Desc: "Surga bawah laut Mbuang-Mbuang & Danau Ubur-Ubur",
    island3Title: "Pulau Bandang & Labobo",
    island3Desc: "Spot snorkeling air sebening kristal & laguna pasir putih",

    // Destinasi Section
    destTag: "Rekomendasi Terbaik",
    destTitle: "Destinasi Wisata Pilihan Banggai Laut",
    destSubtitle: "Pilih kategori atau ketik di kolom pencarian untuk menjelajahi keindahan alam, pantai, dan budaya kami.",
    destNotFound: "Destinasi yang Anda cari belum ditemukan.",
    destBtnDetail: "Lihat Detail & Rute ➔",
    nearbyAlert: "📍 Menampilkan destinasi terurut dari jarak terdekat.",
    katalogHeroSubtitle: "Katalog Lengkap Kepulauan",
    katalogHeroTitle: "Seluruh Destinasi Wisata Banggai Laut",
    katalogHeroDesc: "Temukan keindahan bahari tropis, pantai berpasir putih, keajaiban danau ubur-ubur, peninggalan Kerajaan Banggai, serta air terjun tersembunyi dengan filter kategori dan pencarian cerdas.",
    filterAll: "Semua Destinasi",
    filterBahari: "🌊 Bahari",
    filterSejarah: "🏛️ Sejarah",
    filterAlam: "🌿 Alam",
    filterBudaya: "🎭 Budaya",
    filterNearby: "Terdekat dari Lokasi Saya",
    searchPlaceholder: "Cari pantai, pulau, air terjun, keraton bersejarah...",
    destViewMore: "Jelajahi Seluruh Destinasi (12 Lokasi) ➔",

    // Kadis Section
    kadisTag: "Sambutan Kepala Dinas",
    kadisTitle: "Menyambut Wisatawan di Permata Bahari Sulawesi Tengah",
    kadisQuote: "\"Tabea! Selamat datang di portal resmi Si-PANDU. Kabupaten Banggai Laut dianugerahi potensi pariwisata bahari kelas dunia, keindahan danau ubur-ubur langka, serta keluhuran cagar budaya Kerajaan Banggai yang berusia lima abad. Melalui platform digital Dinas Pariwisata dan Kebudayaan ini, kami berkomitmen menghadirkan panduan destinasi yang ramah, akurat, dan terintegrasi demi kenyamanan kunjungan Anda.\"",
    kadisName: "Rachel Nova Sari, S.STP., M.Si",
    kadisRole: "Kepala Dinas Pariwisata dan Kebudayaan Kabupaten Banggai Laut",
    kadisCta: "Lihat Panduan & Jadwal Kapal ➔",

    // Footer
    footerAbout: "Sistem Pariwisata dan Navigasi Terpadu resmi milik Dinas Pariwisata dan Kebudayaan Kabupaten Banggai Laut, Provinsi Sulawesi Tengah.",
    footerNavTitle: "Navigasi Cepat",
    footerOfficeTitle: "Kantor Disparbud Balut",
    footerOfficeInfo: "⛴️ Pusat Informasi Navigasi & Wisata Kepulauan",
    footerRights: "© 2026 Dinas Pariwisata dan Kebudayaan Kabupaten Banggai Laut. All Rights Reserved.",

    // Panduan Page
    panduanHeroSubtitle: "Navigasi Logistik Kepulauan",
    panduanHeroTitle: "Jadwal Kapal & Panduan Rute",
    panduanHeroDesc: "Informasi terpadu jadwal pelayaran antar-pulau, estimasi tiket penyeberangan, serta panduan akses menuju Kabupaten Banggai Laut.",
    maritimeSubtitle: "Banggai Maritime Hub",
    maritimeTitle: "⛴️ Jadwal Pelayaran & Kapal Antar-Pulau",
    searchKapalPlaceholder: "Cari rute atau nama kapal (misal: Luwuk, Bokan, Ferry)...",
    guideSubtitle: "Rute Wisatawan Luar Daerah",
    guideTitle: "🧭 Panduan Perjalanan Menuju Banggai Laut",
    guideDesc: "Langkah demi langkah moda transportasi udara, darat, dan laut untuk mencapai surga bahari Banggai Laut.",
    shipOperating: "● Beroperasi",
    shipDepart: "Keberangkatan",
    shipArrive: "Tujuan",
    tableShipName: "Nama Armada & Jenis",
    tableRoute: "Rute Perjalanan",
    tableDay: "Hari Berangkat",
    tableDeparture: "Jam Berangkat",
    tableArrival: "Estimasi Tiba",
    tableFare: "Tarif Tiket",
    tableStatus: "Status Operasional",
    tableAction: "Pemesanan",
    btnTableBook: "Pesan / Info ➔",
    emptySchedule: "Tidak ada jadwal kapal yang sesuai dengan pencarian Anda.",

    // Detail Page
    detailAboutTitle: "Tentang Destinasi",
    detailHighlightsTitle: "✨ Daya Tarik Utama",
    detailTipsTitle: "💡 Tips & Saran Berkunjung",
    detailMapTitle: "🗺️ Peta Navigasi",
    detailInfoTitle: "📌 Informasi Kunjungan",
    infoCategory: "Kategori",
    infoHours: "Jam Operasional",
    infoTicket: "Tiket Masuk",
    infoGuide: "Pemandu Lokal",
    routeBoatTitle: "⛴️ Rekomendasi Akses Kapal",
    viewFullSchedule: "Lihat Jadwal Lengkap Kapal ➔",
    btnGmaps: "Buka di Google Maps ↗",
    btnShare: "🔗 Bagikan Halaman Ini",
    btnBackHome: "← Kembali ke Destinasi",
    relatedTitle: "Destinasi Menarik Lainnya",
    copiedToast: "Tautan berhasil disalin ke papan klip!"
  },

  en: {
    logoSub: "BANGGAI LAUT",
    navHome: "Home",
    navProfile: "Profile & Map",
    navDestinasi: "Destinations",
    navSambutan: "Greeting",
    navJadwalKapal: "Ship Schedule",
    navPanduan: "Ferry Schedule & Guide",
    navCta: "Routes & Ferries",

    // Editorial Theme Keys
    heroBadge: "Maritime Tourism Edition",
    agencyBadge: "Tourism & Culture Agency",
    portalBy: "Disparbud Balut",
    webType: "Si-PANDU Portal",
    heroSub: "Natural & Marine Charm",
    featureNav: "Maritime Splendor",
    featureQuote: "Indonesia is not just wonderland,<br>Indonesia is a wonderful",
    featureDesc: "Among the clusters of exotic coral islands and rare marine wildlife, Banggai Laut offers heavenly serenity that captivates travelers from around the globe. The Tourism and Culture Office welcomes you with genuine hospitality, rich heritage, and unforgettable maritime splendor. May we all continuously appreciate and protect this precious natural sanctuary.",

    // Hero Section
    heroPill: "✨ Official Tourism & Culture Agency Portal",
    heroTitle: "Discover Your Perfect<br>Island Getaway in Banggai Laut",
    heroDesc: "Indonesia is the world's largest archipelago with unmatched marine splendor. In Central Sulawesi, Banggai Laut Regency unfolds with exotic coral island chains, stingless jellyfish lagoons, powdery white sands, and royal heritage.",
    searchPlaceholder: "Search...",
    searchBtn: "Search Destination",

    // Hero Slides
    slide1Badge: "🔥 THIS MONTH'S HITS • CULTURAL EVENT",
    slide1Caption: "<strong>Banggai Laut Charm Festival 2026</strong> — Witness a parade of hundreds of decorated boats and the largest maritime culinary exhibition this month!",
    slide2Badge: "🌟 TRENDING #1 • MARINE TOURISM",
    slide2Caption: "<strong>Mbuang-Mbuang Ecotourism & Jellyfish Lake</strong> — The most popular destination visited by travelers this month in the Bokan Islands.",
    slide3Badge: "🏛️ TRADITIONAL AGENDA • HISTORY",
    slide3Caption: "<strong>Malabot Tumbe Sacred Ceremony</strong> — Sacred ancestral tradition of the Banggai Kingdom that captivates international visitors.",
    slide4Badge: "📸 POPULAR PHOTO SPOT • NATURE",
    slide4Caption: "<strong>Exotic Sunset at Tanjung Gundul & White Sand Beach</strong> — Top weekend getaway for families in Banggai Laut.",

    // Quickbar
    qbAllTitle: "All Destinations",
    qbAllSub: "12+ Curated Places",
    qbBahariTitle: "Marine Tourism",
    qbBahariSub: "Beaches & Islands",
    qbSejarahTitle: "History & Heritage",
    qbSejarahSub: "Banggai Kingdom",
    qbKulinerTitle: "Hotels & Culinary",
    qbKulinerSub: "Local Stays & Food",
    qbNearby: "📍 Nearby",

    // Intro Section (About Banggai Laut & Fun Facts)
    mapFloatingLabel: "Banggai Laut Archipelago Map",
    introTag: "About The Region & Archipelago",
    introTitle: "About Banggai Laut (Balut)",
    introP1: "Banggai Laut Regency is an exotic island realm on the eastern coast of Central Sulawesi. Surrounded by the pristine waters of the Tolo Gulf and Maluku Sea, this archipelago offers authentic marine wonders, maritime heritage, and ecological marvels preserved in the Central Indonesia Time (WITA) zone.",
    funFactsTag: "Highlights & Ecology",
    funFactsTitle: "Interesting Facts (Fun Facts) of Banggai Laut",
    fact1Title: "Home of Banggai Cardinalfish",
    fact1Desc: "The only waters in the world that are the native habitat of the exotic marine ornamental fish <em>Banggai Cardinalfish</em> (<em>Pterapogon kauderni</em>).",
    fact2Title: "Stingless Jellyfish Lake",
    fact2Desc: "A secluded saltwater marine lake on Mbuang-Mbuang Island where visitors can swim safely amidst thousands of gentle stingless jellyfish.",
    fact3Title: "Seat of Banggai Kingdom",
    fact3Desc: "The archipelago's capital was the historic seat of civilization and royal administration of the Banggai Kingdom, complete with royal palace heritage.",
    fact4Title: "Earlier Sunrise & WITA Zone",
    fact4Desc: "Situated in the WITA time zone (UTC+8), travelers from western Indonesia (WIB) experience time and sunrise one hour earlier.",
    stat1Num: "200+",
    stat1Label: "Island Clusters",
    stat2Num: "94%",
    stat2Label: "Marine Territory",
    stat3Num: "WITA",
    stat3Label: "Time Zone (UTC+8)",

    island1Title: "Banggai Island (Center & History)",
    island1Desc: "Royal Keraton Palace, Bontolan Beach & Lambangan Pauno",
    island2Title: "Bokan Islands Archipelago",
    island2Desc: "Mbuang-Mbuang marine sanctuary & stingless Jellyfish Lake",
    island3Title: "Bandang & Labobo Island",
    island3Desc: "Crystal turquoise snorkeling spots & powdery sandbars",

    // Destinasi Section
    destTag: "Top Recommendations",
    destTitle: "Featured Destinations in Banggai Laut",
    destSubtitle: "Select a category or search below to explore our pristine nature, beaches, and heritage.",
    destNotFound: "No destinations found matching your criteria.",
    destBtnDetail: "View Details & Route ➔",
    nearbyAlert: "📍 Showing destinations sorted by nearest distance.",
    katalogHeroSubtitle: "Complete Archipelago Directory",
    katalogHeroTitle: "All Banggai Laut Travel Destinations",
    katalogHeroDesc: "Discover tropical marine wonders, pristine beaches, stingless jellyfish lakes, royal Banggai heritage, and hidden waterfalls with smart filtering and live search.",
    filterAll: "All Destinations",
    filterBahari: "🌊 Marine",
    filterSejarah: "🏛️ History",
    filterAlam: "🌿 Nature",
    filterBudaya: "🎭 Culture",
    filterNearby: "Nearest from My Location",
    searchPlaceholder: "Search beaches, islands, waterfalls, royal palace...",
    destViewMore: "Explore All Destinations (12 Locations) ➔",

    // Kadis Section
    kadisTag: "Head of Agency's Welcome",
    kadisTitle: "Welcoming Travelers to Central Sulawesi's Maritime Jewel",
    kadisQuote: "\"Welcome to the official Si-PANDU portal. Banggai Laut Regency is blessed with world-class marine tourism potential, rare stingless jellyfish lakes, and the five-century heritage of the Banggai Kingdom. Through this digital platform, we are committed to delivering hospitable, accurate, and integrated destination guidance for your travel convenience.\"",
    kadisName: "Rachel Nova Sari, S.STP., M.Si",
    kadisRole: "Head of Tourism & Culture Office of Banggai Laut Regency",
    kadisCta: "View Travel Guide & Ferry Schedule ➔",

    // Footer
    footerAbout: "Official Integrated Tourism and Navigation System of the Tourism and Culture Office of Banggai Laut Regency, Central Sulawesi.",
    footerNavTitle: "Quick Links",
    footerOfficeTitle: "Disparbud Balut Office",
    footerOfficeInfo: "⛴️ Archipelago Navigation & Tourism Info Hub",
    footerRights: "© 2026 Tourism and Culture Office of Banggai Laut Regency. All Rights Reserved.",

    // Panduan Page
    panduanHeroSubtitle: "Island Logistics & Navigation",
    panduanHeroTitle: "Ferry Schedule & Route Guide",
    panduanHeroDesc: "Integrated information on inter-island ferry schedules, crossing fare estimates, and travel guides to reach Banggai Laut Regency.",
    maritimeSubtitle: "Banggai Maritime Hub",
    maritimeTitle: "⛴️ Inter-Island Sailing & Ship Schedule",
    searchKapalPlaceholder: "Search routes or ship names (e.g. Luwuk, Bokan, Ferry)...",
    guideSubtitle: "Routes for Outside Visitors",
    guideTitle: "🧭 How to Travel to Banggai Laut",
    guideDesc: "Step-by-step air, land, and sea transportation options to arrive safely at the island paradise of Banggai Laut.",
    shipOperating: "● Operating",
    shipDepart: "Departure",
    shipArrive: "Destination",
    tableShipName: "Fleet & Vessel Type",
    tableRoute: "Voyage Route",
    tableDay: "Departure Day",
    tableDeparture: "Departure Time",
    tableArrival: "Est. Arrival",
    tableFare: "Ticket Fare",
    tableStatus: "Operational Status",
    tableAction: "Booking",
    btnTableBook: "Book / Info ➔",
    emptySchedule: "No ship schedules found matching your query.",

    // Detail Page
    detailAboutTitle: "About This Destination",
    detailHighlightsTitle: "✨ Key Highlights",
    detailTipsTitle: "💡 Travel Tips & Suggestions",
    detailMapTitle: "🗺️ Navigation Map",
    detailInfoTitle: "📌 Visitor Information",
    infoCategory: "Category",
    infoHours: "Opening Hours",
    infoTicket: "Entrance Ticket",
    infoGuide: "Local Guides",
    routeBoatTitle: "⛴️ Recommended Boat Access",
    viewFullSchedule: "View Complete Ship Schedule ➔",
    btnGmaps: "Open in Google Maps ↗",
    btnShare: "🔗 Share This Page",
    btnBackHome: "← Back to Destinations",
    relatedTitle: "Other Recommended Destinations",
    copiedToast: "Link copied to clipboard!"
  }
};

let currentLang = localStorage.getItem('sipandu_language') || 'id';

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'id';
  currentLang = lang;
  localStorage.setItem('sipandu_language', lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update badge UI states
  document.querySelectorAll('.lang-badge').forEach(badge => {
    if (badge.getAttribute('data-lang') === lang) {
      badge.classList.add('active');
    } else {
      badge.classList.remove('active');
    }
  });

  const t = TRANSLATIONS[lang];

  // Update text elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Re-render dynamic components if present
  if (document.getElementById('homeDestinasiGrid')) {
    renderHomeDestinasiCards();
  }
  if (document.getElementById('destinasiGrid')) {
    filterWisata();
  }
  if (document.getElementById('transportasiGrid')) {
    renderKapal(allKapal);
    renderPanduan(defaultPanduanData);
  }
  if (document.getElementById('scheduleTableBody')) {
    renderScheduleTable();
  }
  if (document.getElementById('destTitle')) {
    renderDetailPage();
  }
}

function initLanguage() {
  document.querySelectorAll('.lang-badge').forEach(badge => {
    badge.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = badge.getAttribute('data-lang');
      if (lang) {
        setLanguage(lang);
        showToast(lang === 'en' ? 'Language switched to English' : 'Bahasa dialihkan ke Bahasa Indonesia');
      }
    });
  });
  setLanguage(currentLang);
}

// =========================================================
// 2. TOAST NOTIFICATION UTILITY
// =========================================================
function showToast(message, duration = 3000) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// =========================================================
// 3. RESPONSIVE MOBILE NAVIGATION (HAMBURGER & BACKDROP)
// =========================================================
function initMobileNav() {
  const toggleBtn = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navDrawer = document.getElementById('navDrawer');
  const backdrop = document.getElementById('navBackdrop');
  const closeBtn = document.getElementById('drawerCloseBtn');

  if (!toggleBtn) return;

  function toggleMenu(show) {
    const target = navDrawer || navLinks;
    if (!target) return;
    const isOpen = show !== undefined ? show : !target.classList.contains('open');
    if (isOpen) {
      target.classList.add('open');
      if (navDrawer) navDrawer.setAttribute('aria-hidden', 'false');
      toggleBtn.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      if (backdrop) backdrop.classList.add('visible');
      document.body.style.overflow = 'hidden';
    } else {
      target.classList.remove('open');
      if (navDrawer) navDrawer.setAttribute('aria-hidden', 'true');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      if (backdrop) backdrop.classList.remove('visible');
      document.body.style.overflow = '';
    }
  }

  toggleBtn.addEventListener('click', () => toggleMenu());
  if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));
  if (backdrop) backdrop.addEventListener('click', () => toggleMenu(false));

  const linkContainers = [navDrawer, navLinks].filter(Boolean);
  linkContainers.forEach(container => {
    container.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });
  });
}

// =========================================================
// 4. SCROLL REVEAL & HEADER SHADOW
// =========================================================
function initScrollEffects() {
  const header = document.getElementById('mainHeader');
  
  // Parallax subtle tracking & scrolled state for header
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (header) {
      if (scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Parallax background effects
    const heroBg = document.querySelector('.hero-slide-item.active .hero-slide-bg');
    if (heroBg) {
      heroBg.style.transform = `translate3d(0, ${Math.min(scrollY * 0.28, 120)}px, 0)`;
    }
  }, { passive: true });

  // IntersectionObserver multi-direction reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  window.observeReveals = function() {
    document.querySelectorAll('.reveal-item, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade').forEach(el => {
      if (!el.classList.contains('revealed')) {
        observer.observe(el);
      }
    });
  };

  window.observeReveals();
}

// =========================================================
// 5. INSTAGRAM STORY / CAROUSEL SLIDER (HERO SECTION)
// =========================================================
// 5. DATA MASTER POSTER CAROUSEL HERO (5 SLIDES ACARA & HIGHLIGHTS)
// Admin dapat mengupdate array ini atau memanggil window.updateHeroSlides(data)
// =========================================================
window.HERO_SLIDES_DATA = [
  {
    id: 1,
    badge: "SULAWESI TENGAH • INDONESIA",
    tag: "SULAWESI TENGAH • INDONESIA",
    category: "Pesona Maritim Kepulauan",
    title: "BANGGAI &nbsp; LAUT",
    subtitle: "Sistem Pariwisata & Navigasi Bahari Terpadu • Pesona 200+ Pulau Karang & Danau Ubur-Ubur",
    date: "Edisi Wisata Terpadu 2026",
    location: "Kabupaten Banggai Laut, Sulawesi Tengah",
    htm: "Katalog Wisata & Panduan Lengkap",
    bgImage: "assets/img/hero-bg.jpg",
    ctaPrimaryText: "Jelajahi Wisata ➔",
    ctaPrimaryLink: "#destinasi"
  },
  {
    id: 2,
    badge: "DESTINASI UNGGULAN • BOKAN KEPULAUAN",
    tag: "DESTINASI UNGGULAN • BOKAN KEPULAUAN",
    category: "Ekowisata Bahari Langka",
    title: "Danau Ubur-Ubur Mbuang-Mbuang",
    subtitle: "Berenang bersama jutaan ubur-ubur emas jinak tanpa sengat di laguna karst alami.",
    date: "Buka Setiap Hari (07:00 - 17:00 WITA)",
    location: "Desa Mbuang-Mbuang, Kec. Bokan Kepulauan",
    htm: "Rp 25.000 / Orang",
    bgImage: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&q=80",
    ctaPrimaryText: "Jelajahi Danau Ubur-Ubur ➔",
    ctaPrimaryLink: "detail.html?id=4"
  },
  {
    id: 3,
    badge: "CAGAR BUDAYA 5 ABAD • KERATON BANGGAI",
    tag: "CAGAR BUDAYA 5 ABAD • KERATON BANGGAI",
    category: "Upacara Adat Sakral",
    title: "Upacara Adat Sakral Malabot Tumbe",
    subtitle: "Tradisi sakral pelayaran penghantaran telur burung maleo menuju Keraton Banggai.",
    date: "Awal Desember 2026",
    location: "Keraton Kesultanan Banggai & Pelabuhan",
    htm: "Cagar Budaya Adat (Gratis)",
    bgImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80",
    ctaPrimaryText: "Telusuri Keraton Banggai ➔",
    ctaPrimaryLink: "detail.html?id=1"
  },
  {
    id: 4,
    badge: "PANORAMA SENJA • PANTAI PASIR PUTIH",
    tag: "PANORAMA SENJA • PANTAI PASIR PUTIH",
    category: "Panorama Senja Bahari",
    title: "Pesona Senja Tebing Tanjung Gundul",
    subtitle: "Gradasi langit jingga keemasan berpadu dengan tebing karang dan birunya laut kepulauan.",
    date: "Waktu Terbaik: 16:30 - 18:30 WITA",
    location: "Desa Pasir Putih, Kec. Banggai",
    htm: "Rp 5.000 / Retribusi",
    bgImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&q=80",
    ctaPrimaryText: "Lihat Spot Sunset ➔",
    ctaPrimaryLink: "detail.html?id=8"
  },
  {
    id: 5,
    badge: "KULINER OTENTIK • TRADISI PESISIR",
    tag: "KULINER OTENTIK • TRADISI PESISIR",
    category: "Pesta Kuliner Bahari",
    title: "Kuliner Ikan Bakar & Sinole Tradisional",
    subtitle: "Cita rasa otentik sagu sangrai gurih, ikan cakalang bumbu rempah, dan kue perahu Tetu.",
    date: "Setiap Hari & Akhir Pekan",
    location: "Sentra Wisata Kuliner Pesisir Banggai",
    htm: "Mulai Rp 15.000 / Porsi",
    bgImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
    ctaPrimaryText: "Cek Rekomendasi Kuliner ➔",
    ctaPrimaryLink: "detail.html?id=10"
  }
];

// =========================================================
// 6. DATA LENGKAP KATALOG WISATA (DENGAN GALERI, HTM, FASILITAS, WA API)
// =========================================================
const defaultWisataData = [
  {
    id: 1,
    nama_tempat: "Keraton Banggai",
    nama_tempat_en: "Banggai Royal Palace",
    nama_kategori: "Sejarah",
    lokasi: "Kelurahan Lompio, Kec. Banggai",
    lokasi_en: "Lompio Village, Banggai Sub-district",
    deskripsi_id: "Bangunan kayu bersejarah peninggalan Kerajaan Banggai lengkap dengan ruang singgasana raja asli, cagar pusaka, dan meriam kuno bernilai sejarah tinggi.",
    deskripsi_en: "Historic wooden palace of the Banggai Kingdom featuring royal throne chambers, heirloom artifacts, and centuries-old defensive cannons.",
    gambar: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600",
    galeri: [
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1200",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200"
    ],
    lat: -1.594,
    lng: 123.501,
    jam: "08:00 - 17:00 WITA",
    htm: "Gratis / Donasi Sukarela",
    htm_en: "Free / Voluntary Donation",
    tiket: "Gratis / Donasi Sukarela",
    tiket_en: "Free / Voluntary Donation",
    fasilitas: ["Ruang Pamer Pusaka", "Pemandu Adat Lokal", "Area Parkir Luas", "Spot Foto Bersejarah", "Toilet Bersih"],
    fasilitas_en: ["Royal Relics Gallery", "Local Cultural Guide", "Spacious Parking", "Historical Photo Spots", "Restrooms"],
    kontak_wa: "6282299887766",
    kontak_nama: "Lembaga Adat Keraton Banggai",
    highlights: ["Singgasana Raja Banggai Asli", "Koleksi Meriam Kuno Kolonial", "Pusat Kebudayaan & Sejarah"],
    highlights_en: ["Original Banggai Royal Throne", "Colonial Cannon Collection", "Cultural & Historical Heritage"]
  },
  {
    id: 2,
    nama_tempat: "Pantai Bontolan",
    nama_tempat_en: "Bontolan Beach",
    nama_kategori: "Bahari",
    lokasi: "Desa Bone Baru, Kec. Banggai Utara",
    lokasi_en: "Bone Baru Village, North Banggai Sub-district",
    deskripsi_id: "Pesisir pantai tenang dengan ombak jernih teduh, deretan pohon kelapa menjulang, dan hamparan pasir halus yang sangat aman untuk rekreasi keluarga.",
    deskripsi_en: "A serene coast with calm, crystalline waters, swaying palm trees, and soft sands, ideal for family leisure and water dipping.",
    gambar: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
    galeri: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200"
    ],
    lat: -1.542,
    lng: 123.518,
    jam: "Setiap Hari (24 Jam)",
    htm: "Rp 5.000 / Orang",
    htm_en: "IDR 5,000 / Person",
    tiket: "Rp 5.000 / Org",
    tiket_en: "IDR 5,000 / Person",
    fasilitas: ["Gazebo Peneduh Tepi Laut", "Warung Kelapa Muda", "Kamar Bilas Air Tawar", "Ayunan Tepi Pantai", "Musholla"],
    fasilitas_en: ["Seafront Shaded Gazebos", "Fresh Coconut Stalls", "Freshwater Shower Rooms", "Beach Swings", "Prayer Room"],
    kontak_wa: "6282299887766",
    kontak_nama: "Pokdarwis Bone Baru",
    highlights: ["Air Laut Tenang & Dangkal", "Teduh & Asri Bawah Pohon Kelapa", "Spot Rekreasi Ramah Anak"],
    highlights_en: ["Calm & Shallow Water", "Shaded Palm Grove", "Child-Friendly Leisure Spot"]
  },
  {
    id: 3,
    nama_tempat: "Lambangan Pauno",
    nama_tempat_en: "Lambangan Pauno Sandbar",
    nama_kategori: "Bahari",
    lokasi: "Kecamatan Banggai",
    lokasi_en: "Banggai Sub-district",
    deskripsi_id: "Bentang pasir timbul putih memanjang dengan gradasi air laut hijau toska sebening kaca, memikat untuk berenang dan berfoto ria.",
    deskripsi_en: "An expansive pristine white sandbar emerging in turquoise waters, offering an ethereal lagoon for swimming and photography.",
    gambar: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600",
    galeri: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200"
    ],
    lat: -1.612,
    lng: 123.489,
    jam: "07:00 - 18:00 WITA",
    htm: "Rp 10.000 / Orang",
    htm_en: "IDR 10,000 / Person",
    tiket: "Rp 10.000 / Org",
    tiket_en: "IDR 10,000 / Person",
    fasilitas: ["Perahu Akses Sandar", "Sewa Lifejacket & Pelampung", "Spot Foto Air Jernih"],
    fasilitas_en: ["Shuttle Boat Access", "Lifejacket Rental", "Crystal Clear Photo Spots"],
    kontak_wa: "6282299887766",
    kontak_nama: "Pengelola Wisata Lambangan",
    highlights: ["Gusung Pasir Putih Alami", "Gradasi Warna Laut Spektakuler", "Spot Foto Instagramable"],
    highlights_en: ["Natural White Sandbar", "Spectacular Marine Gradients", "Instagrammable Photo Hotspot"]
  },
  {
    id: 4,
    nama_tempat: "Pulau Bandang",
    nama_tempat_en: "Bandang Island",
    nama_kategori: "Bahari",
    lokasi: "Monsongan, Kec. Banggai Tengah",
    lokasi_en: "Monsongan, Central Banggai",
    deskripsi_id: "Pulau eksotis tak berpenghuni dengan air laut sangat jernih dan terumbu karang hidup yang terjaga, spot utama snorkeling dan diving di Balut.",
    deskripsi_en: "An uninhabited tropical islet bordered by vibrant coral gardens and dazzling waters, rated among the finest snorkeling spots in Banggai Laut.",
    gambar: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
    galeri: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200"
    ],
    lat: -1.645,
    lng: 123.465,
    jam: "06:30 - 17:30 WITA",
    htm: "Rp 150.000 - Rp 300.000 / Sewa Perahu PP",
    htm_en: "IDR 150,000 - 300,000 / Boat Charter",
    tiket: "Sewa Perahu / Trip",
    tiket_en: "Boat Charter / Trip",
    fasilitas: ["Spot Snorkeling Terumbu Karang", "Dermaga Kayu Alami", "Pemandu Perahu Lokal", "Alat Snorkel"],
    fasilitas_en: ["Coral Reef Snorkel Spot", "Wooden Jetty", "Local Boat Skipper", "Snorkel Gear"],
    kontak_wa: "6282299887766",
    kontak_nama: "Pemandu Bahari Monsongan",
    highlights: ["Terumbu Karang Kipas & Ikan Badut", "Laguna Snorkeling Sebening Kaca", "Pantai Karang Eksotis"],
    highlights_en: ["Sea Fan Corals & Clownfish", "Glass-Clear Snorkeling Lagoon", "Exotic Coral Beaches"]
  },
  {
    id: 5,
    nama_tempat: "Ekowisata Mbuang-Mbuang & Danau Ubur-Ubur",
    nama_tempat_en: "Mbuang-Mbuang Jellyfish Lake",
    nama_kategori: "Bahari",
    lokasi: "Kecamatan Bokan Kepulauan",
    lokasi_en: "Bokan Islands Sub-district",
    deskripsi_id: "Keajaiban dunia danau air asin alami yang dihuni jutaan ubur-ubur tanpa sengat (stingless jellyfish) di tengah labirin tebing karang karst megah.",
    deskripsi_en: "A global wonder: a secluded marine lake harboring millions of stingless jellyfish enclosed by dramatic limestone karst formations.",
    gambar: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600",
    galeri: [
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200"
    ],
    lat: -1.782,
    lng: 123.612,
    jam: "07:00 - 17:00 WITA",
    htm: "Rp 25.000 / Orang (Retribusi Konservasi)",
    htm_en: "IDR 25,000 / Person (Conservation Fee)",
    tiket: "Rp 25.000 / Org",
    tiket_en: "IDR 25,000 / Person",
    fasilitas: ["Pemandu Konservasi Lokal", "Penyewaan Kacamata Renang", "Dermaga Apung Kayu", "Homestay Terapung Warga", "Pondok Santai"],
    fasilitas_en: ["Conservation Guides", "Goggles Rental", "Floating Wooden Jetty", "Overwater Community Homestays", "Rest Huts"],
    kontak_wa: "6282299887766",
    kontak_nama: "Pokdarwis Desa Ekowisata Mbuang-Mbuang",
    highlights: ["Berenang Bersama Ubur-Ubur Jinak", "Gugusan Karst Mirip Raja Ampat", "Desa Wisata Ramah Bahari"],
    highlights_en: ["Swim with Harmless Jellyfish", "Karst Maze Resembling Raja Ampat", "Hospitable Marine Eco-Village"]
  },
  {
    id: 6,
    nama_tempat: "Banggai Lalongo",
    nama_tempat_en: "Banggai Lalongo Historical Site",
    nama_kategori: "Sejarah",
    lokasi: "Desa Dodung, Kec. Banggai",
    lokasi_en: "Dodung Village, Banggai",
    deskripsi_id: "Situs cagar budaya sakral yang merekam jejak awal mula berdirinya peradaban dan pusat pemerintahan Kerajaan Banggai di masa silam.",
    deskripsi_en: "A sacred cultural sanctuary holding original architectural stones and early administrative roots of the ancient Banggai Kingdom.",
    gambar: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600",
    galeri: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200",
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1200",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200"
    ],
    lat: -1.587,
    lng: 123.512,
    jam: "08:00 - 17:00 WITA",
    htm: "Gratis / Donasi Sukarela",
    htm_en: "Free / Voluntary Donation",
    tiket: "Gratis / Donasi",
    tiket_en: "Free / Donation",
    fasilitas: ["Papan Informasi Sejarah", "Jalur Jalan Setapak", "Pohon Rindang Teduh", "Pemandu Adat"],
    fasilitas_en: ["Historical Info Boards", "Paved Walking Trail", "Shaded Ancient Trees", "Cultural Guides"],
    kontak_wa: "6282299887766",
    kontak_nama: "Juru Pelihara Cagar Budaya Balut",
    highlights: ["Situs Cagar Budaya Bersejarah", "Mata Air Keramat Tradisional", "Pohon Rindang Ratusan Tahun"],
    highlights_en: ["Protected Heritage Sanctuary", "Traditional Sacred Spring", "Centuries-Old Banyan Trees"]
  },
  {
    id: 7,
    nama_tempat: "Makam Raja-Raja Banggai",
    nama_tempat_en: "Tombs of Banggai Kings",
    nama_kategori: "Sejarah",
    lokasi: "Kawasan Lompio, Kec. Banggai",
    lokasi_en: "Lompio, Banggai",
    deskripsi_id: "Kompleks pemakaman leluhur raja-raja Banggai yang sarat nilai spiritual dan tradisi adat, rutin diziarahi tokoh adat saat upacara Malabot Tumbe.",
    deskripsi_en: "The solemn burial complex of Banggai royal dynasties, honored through sacred rituals and spiritual Malabot Tumbe ceremonies.",
    gambar: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600",
    galeri: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1200"
    ],
    lat: -1.598,
    lng: 123.504,
    jam: "08:00 - 17:00 WITA",
    htm: "Gratis / Donasi Sukarela",
    htm_en: "Free / Voluntary Donation",
    tiket: "Gratis / Donasi",
    tiket_en: "Free / Donation",
    fasilitas: ["Pagar Cagar Budaya", "Area Ziarah Khidmat", "Pemandu Sejarah"],
    fasilitas_en: ["Heritage Fencing", "Solemn Pilgrimage Area", "Heritage Guide"],
    kontak_wa: "6282299887766",
    kontak_nama: "Pengelola Makam Kerajaan Banggai",
    highlights: ["Makam Kuno Batu Pahat Tradisional", "Pusat Ziarah Upacara Tumbe", "Suasana Hening Penuh Khidmat"],
    highlights_en: ["Traditional Carved Stone Tombs", "Pilgrimage Core for Tumbe Rites", "Peaceful & Reverent Atmosphere"]
  },
  {
    id: 8,
    nama_tempat: "Pantai Pasir Putih & Tanjung Gundul",
    nama_tempat_en: "Pasir Putih & Tanjung Gundul Cape",
    nama_kategori: "Bahari",
    lokasi: "Desa Pasir Putih, Kec. Banggai",
    lokasi_en: "Pasir Putih Village, Banggai",
    deskripsi_id: "Perpaduan tebing bukit karang tanjung dengan bentang pantai berpasir putih luas, spot terfavorit menyaksikan matahari terbenam (sunset) di Balut.",
    deskripsi_en: "A scenic fusion of coastal cliff headlands and powdery white shoreline, celebrated as the best vantage point for breathtaking sunsets.",
    gambar: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
    galeri: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200"
    ],
    lat: -1.621,
    lng: 123.535,
    jam: "Setiap Hari (24 Jam)",
    htm: "Rp 5.000 / Kendaraan",
    htm_en: "IDR 5,000 / Vehicle",
    tiket: "Rp 5.000 / Kendaraan",
    tiket_en: "IDR 5,000 / Vehicle",
    fasilitas: ["Gardu Pandang Sunset", "Gazebo Tepi Pantai", "Warung Makanan Ringan & Kopi", "Area Parkir Motor & Mobil"],
    fasilitas_en: ["Sunset Viewpoint Deck", "Beachside Gazebos", "Snack & Coffee Stalls", "Vehicle Parking Area"],
    kontak_wa: "6282299887766",
    kontak_nama: "Pokdarwis Pasir Putih",
    highlights: ["Sunset Jingga Terindah di Balut", "Bukit Pandang Tanjung Karang", "Pantai Luas Bersih"],
    highlights_en: ["Finest Golden Sunset Panorama", "Scenic Cape Lookout Hill", "Expansive Clean Beach"]
  },
  {
    id: 9,
    nama_tempat: "Air Terjun Matube",
    nama_tempat_en: "Matube Fresh Waterfall",
    nama_kategori: "Bahari",
    lokasi: "Desa Lampa, Kec. Banggai",
    lokasi_en: "Lampa Village, Banggai",
    deskripsi_id: "Aliran air terjun alami nan sejuk di tengah hutan tropis lebat dengan kolam batu alami yang menyegarkan tubuh sehabis menjelajah pulau.",
    deskripsi_en: "A refreshing forest waterfall nestled within lush tropical greenery, featuring natural freshwater rock pools for a relaxing dip.",
    gambar: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600",
    galeri: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1200",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200"
    ],
    lat: -1.572,
    lng: 123.491,
    jam: "07:30 - 17:00 WITA",
    htm: "Rp 5.000 / Orang",
    htm_en: "IDR 5,000 / Person",
    tiket: "Rp 5.000 / Org",
    tiket_en: "IDR 5,000 / Person",
    fasilitas: ["Kolam Alami Air Tawar", "Tempat Duduk Alami", "Jalur Tracking Sejuk"],
    fasilitas_en: ["Natural Freshwater Pool", "Rest Seating", "Scenic Shaded Trail"],
    kontak_wa: "6282299887766",
    kontak_nama: "Pengelola Desa Lampa",
    highlights: ["Kolam Alami Air Tawar Sejuk", "Suasana Hutan Teduh & Damai", "Akses Jalan Mudah Dijangkau"],
    highlights_en: ["Cool Natural Freshwater Pool", "Peaceful Tropical Canopy", "Easily Accessible Trail"]
  },
  {
    id: 10,
    nama_tempat: "Sentra Kuliner Sinole & Ikan Bakar Balut",
    nama_tempat_en: "Sinole & Grilled Seafood Culinary Hub",
    nama_kategori: "Kuliner",
    lokasi: "Kawasan Pesisir Pelabuhan Banggai",
    lokasi_en: "Banggai Harbor Waterfront",
    deskripsi_id: "Pusat kuliner khas Banggai Laut yang menyajikan Sinole (olahan sagu kelapa gurih), Ikan Bakar cakalang segar berbumbu dabu-dabu, dan sup kuah asam.",
    deskripsi_en: "Waterfront gastronomic hub serving traditional Sinole (savory toasted sago & coconut), ultra-fresh grilled fish with zesty dabu-dabu sambal, and sour fish soup.",
    gambar: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600",
    galeri: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200"
    ],
    lat: -1.592,
    lng: 123.503,
    jam: "16:00 - 23:00 WITA",
    htm: "Mulai Rp 20.000 / Porsi",
    htm_en: "From IDR 20,000 / Portion",
    tiket: "Mulai Rp 15.000 / Porsi",
    tiket_en: "From IDR 15,000 / Portion",
    fasilitas: ["Pondok Kuliner Tepi Laut", "Tempat Duduk Lesehan & Meja", "Toilet & Cuci Tangan", "Live Akustik Malam"],
    fasilitas_en: ["Waterfront Dining Sheds", "Floor & Table Seating", "Hand Wash & Restroom", "Night Acoustic Music"],
    kontak_wa: "6282299887766",
    kontak_nama: "Pusat UMKM Kuliner Pesisir Banggai",
    highlights: ["Menu Otentik Sinole & Kuah Asam", "Ikan Segar Hasil Tangkapan Nelayan", "Pemandangan Malam Laut Banggai"],
    highlights_en: ["Authentic Sinole & Sour Fish Soup", "Fresh Daily Catch from Fishermen", "Banggai Night Sea Breeze"]
  },
  {
    id: 11,
    nama_tempat: "Mbuang-Mbuang Island Homestay & Resort",
    nama_tempat_en: "Mbuang-Mbuang Overwater Homestay",
    nama_kategori: "Kuliner",
    lokasi: "Desa Ekowisata Mbuang-Mbuang",
    lokasi_en: "Mbuang-Mbuang Eco-Village",
    deskripsi_id: "Akomodasi penginapan terapung tradisional di atas laguna jernih yang menyajikan sarapan kuliner lokal bahari dengan pemandangan sunrise kepulauan.",
    deskripsi_en: "Traditional overwater cottages perched directly above a crystalline lagoon, serving authentic island breakfast with panoramic sunrise vistas.",
    gambar: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600",
    galeri: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200"
    ],
    lat: -1.785,
    lng: 123.615,
    jam: "Check-in 14:00 | Check-out 12:00",
    htm: "Rp 250.000 - Rp 500.000 / Malam",
    htm_en: "IDR 250,000 - 500,000 / Night",
    tiket: "Mulai Rp 250.000 / Malam",
    tiket_en: "From IDR 250,000 / Night",
    fasilitas: ["Kamar Panggung Terapung", "Sarapan Seafood Termasuk", "Dermaga Pribadi", "Sewa Kano & Snorkel"],
    fasilitas_en: ["Overwater Stilt Chalets", "Island Breakfast Included", "Private Jetty", "Kayak & Snorkel Rental"],
    kontak_wa: "6282299887766",
    kontak_nama: "Pengelola Homestay Mbuang-Mbuang",
    highlights: ["Kamar Panggung di Atas Air Jernih", "Paket Kuliner Laut Nelayan", "Sewa Alat Snorkeling Lengkap"],
    highlights_en: ["Overwater Stilt Chalets", "Fresh Seafood Dining Packages", "Complete Snorkeling Gear Rental"]
  },
  {
    id: 12,
    nama_tempat: "Warung Kopi & Kuliner Tradisional Lompio",
    nama_tempat_en: "Lompio Heritage Coffee & Bites",
    nama_kategori: "Kuliner",
    lokasi: "Jl. Keraton Banggai, Lompio",
    lokasi_en: "Keraton Street, Lompio, Banggai",
    deskripsi_id: "Tempat bersantai menikmati kue tradisional Banggai seperti lalampa, tetu (kue perahu pandan), serta kopi susu khas Sulawesi Tengah.",
    deskripsi_en: "Cozy local café to savor authentic Banggai pastries including warm lalampa, fragrant tetu pandan cakes, and rich Central Sulawesi coffee.",
    gambar: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
    galeri: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1200"
    ],
    lat: -1.595,
    lng: 123.502,
    jam: "06:00 - 22:00 WITA",
    htm: "Mulai Rp 10.000",
    htm_en: "From IDR 10,000",
    tiket: "Mulai Rp 10.000",
    tiket_en: "From IDR 10,000",
    fasilitas: ["Wi-Fi Gratis", "Meja Santai Outdoor", "Kopi Rempah Khas", "Kue Tradisional Fresh"],
    fasilitas_en: ["Free Wi-Fi", "Outdoor Seating", "Traditional Spiced Coffee", "Fresh Local Pastries"],
    kontak_wa: "6282299887766",
    kontak_nama: "Pengelola Kedai Lompio",
    highlights: ["Kue Tetu Daun Pandan Asli", "Kopi Hitam Tradisional Banggai", "Suasana Santai Dekat Keraton"],
    highlights_en: ["Authentic Tetu Pandan Cakes", "Traditional Banggai Black Coffee", "Cozy Ambience Near the Palace"]
  }
];

// Data Akomodasi Khusus untuk AI Trip Planner
const HOTELS_DATA = [
  {
    id: "hotel_kota",
    nama: "Hotel Pusat Kota Banggai",
    nama_en: "Banggai City Center Hotel",
    lokasi: "Pelabuhan & Pusat Kota Banggai",
    tipe: "Hotel Kota Nyaman",
    harga: "Rp 350.000 - Rp 600.000 / malam",
    lat: -1.5935,
    lng: 123.5012,
    gambar: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
    deskripsi: "Akomodasi berfasilitas AC, WiFi kencang, kamar mandi dalam, dan hanya 5 menit jalan kaki ke Pelabuhan Banggai & pusat kuliner malam."
  },
  {
    id: "homestay_pantai",
    nama: "Homestay Tepi Pantai Pasir Putih",
    nama_en: "Pasir Putih Coastal Homestay",
    lokasi: "Desa Pasir Putih, Banggai",
    tipe: "Homestay Tepi Laut",
    harga: "Rp 200.000 - Rp 350.000 / malam",
    lat: -1.6210,
    lng: 123.5350,
    gambar: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600",
    deskripsi: "Penginapan asri di bibir pantai pasir putih dengan keramahan keluarga nelayan lokal dan suara deburan ombak tenang."
  },
  {
    id: "resort_apung",
    nama: "Mbuang-Mbuang Overwater Resort",
    nama_en: "Mbuang-Mbuang Eco Overwater Resort",
    lokasi: "Desa Ekowisata Mbuang-Mbuang, Bokan",
    tipe: "Bungalow Apung di Atas Laut",
    harga: "Rp 450.000 - Rp 850.000 / malam",
    lat: -1.7850,
    lng: 123.6150,
    gambar: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600",
    deskripsi: "Pondok panggung kayu di atas laguna air laut toska jernih. Bangun tidur langsung melihat ikan karang dan sunrise kepulauan."
  },
  {
    id: "camping_pantai",
    nama: "Glamping & Camp Ground Tanjung Gundul",
    nama_en: "Tanjung Gundul Sunset Glamping",
    lokasi: "Tanjung Gundul, Banggai",
    tipe: "Glamping Sunset Tepi Tebing",
    harga: "Rp 150.000 - Rp 300.000 / tenda",
    lat: -1.6250,
    lng: 123.5380,
    gambar: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
    deskripsi: "Sensasi berkemah eksklusif di tebing tanjung karang dengan pemandangan sunset terindah dan hamparan bintang malam."
  }
];

let allWisata = [...defaultWisataData];
let activeCategory = 'all';
let isDestinasiExpanded = false;

// Template Generator untuk Kartu Destinasi (Dipakai di Beranda & Katalog)
function createWisataCardHtml(item, index = 0) {
  const title = (currentLang === 'en' && item.nama_tempat_en) ? item.nama_tempat_en : item.nama_tempat;
  const desc = (currentLang === 'en' && item.deskripsi_en) ? item.deskripsi_en : (item.deskripsi_id || item.deskripsi || '');
  const loc = (currentLang === 'en' && item.lokasi_en) ? item.lokasi_en : (item.lokasi || 'Banggai Laut');
  const distanceBadge = item._distanceKm !== undefined ? `<span class="distance-badge"><span class="pin-bounce">📍</span> ${(item._distanceKm).toFixed(1)} km</span>` : '';
  const htmDisplay = (currentLang === 'en' && item.htm_en) ? item.htm_en : (item.htm || 'Gratis');
  const btnLabel = currentLang === 'en' ? 'Lihat Detail ➔' : 'Lihat Detail ➔';
  const delayClass = `reveal-delay-${(index % 4) + 1}`;

  return `
    <article class="wisata-card reveal-item ${delayClass}" data-id="${item.id}" onclick="showQuickDetail('${item.id}')" role="link" tabindex="0" title="Klik untuk melihat galeri foto, fasilitas & HTM">
      <div class="wisata-img-wrapper">
        <img src="${item.gambar || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600'}" alt="${title}" loading="lazy">
        <span class="wisata-cat-badge">${item.nama_kategori || 'Wisata'}</span>
        ${distanceBadge}
      </div>
      <div class="wisata-body">
        <h3 class="ref-card-title"><a href="detail.html?id=${item.id}" onclick="event.stopPropagation()">${title}</a></h3>
        <span class="ref-card-loc">(${loc})</span>
        <p>${desc}</p>
        <div class="card-meta-row">
          <span class="card-htm-pill">🎟️ ${htmDisplay}</span>
          <span class="card-hours-pill"><span class="time-icon">🕒</span> ${item.jam || '06:00 - 18:00'}</span>
        </div>
        <div class="wisata-footer">
          <button type="button" class="wisata-btn" onclick="event.stopPropagation(); showQuickDetail('${item.id}')">${btnLabel}</button>
        </div>
      </div>
    </article>
  `;
}

// 6B. RENDER KARTU WISATA DI BERANDA (TEPAT 1 BARIS = 4 KARTU DENGAN PAGING ‹ ›)
let homeDestinasiPage = 0;
function renderHomeDestinasiCards() {
  const grid = document.getElementById('homeDestinasiGrid');
  if (!grid) return;

  const pageSize = 4;
  const total = allWisata.length;
  const totalPages = Math.ceil(total / pageSize);
  if (homeDestinasiPage >= totalPages) homeDestinasiPage = 0;

  const start = homeDestinasiPage * pageSize;
  const displayItems = allWisata.slice(start, start + pageSize);

  grid.innerHTML = displayItems.map((item, idx) => createWisataCardHtml(item, idx)).join('');
  if (window.observeReveals) {
    window.observeReveals();
  }
}

function initHomeDestinasiNav() {
  const prevBtn = document.getElementById('cardPrevBtn');
  const nextBtn = document.getElementById('cardNextBtn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const pageSize = 4;
      const totalPages = Math.ceil(allWisata.length / pageSize);
      homeDestinasiPage = (homeDestinasiPage - 1 + totalPages) % totalPages;
      renderHomeDestinasiCards();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const pageSize = 4;
      const totalPages = Math.ceil(allWisata.length / pageSize);
      homeDestinasiPage = (homeDestinasiPage + 1) % totalPages;
      renderHomeDestinasiCards();
    });
  }
}

// 6C. RENDER KATALOG DESTINASI LENGKAP (destinasi.html)
function renderWisataCards(dataArray) {
  const grid = document.getElementById('destinasiGrid');
  if (!grid) return;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.id;

  if (dataArray.length === 0) {
    grid.innerHTML = `<div class="empty-state-box" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;"><p style="font-size: 1.1rem; color: var(--text-muted);">${t.destNotFound}</p></div>`;
  } else {
    grid.innerHTML = dataArray.map((item, idx) => createWisataCardHtml(item, idx)).join('');
    if (window.observeReveals) {
      window.observeReveals();
    }
  }

  // Update badge total lokasi yang tersedia
  const countBadge = document.getElementById('destCountBadge');
  if (countBadge) {
    countBadge.textContent = currentLang === 'en' 
      ? `${dataArray.length} Destinations Available` 
      : `${dataArray.length} Destinasi Tersedia`;
  }
}

function filterWisata() {
  const keyword = (document.getElementById('searchInput')?.value || '').trim().toLowerCase();

  const filtered = allWisata.filter(item => {
    const catMatch = activeCategory === 'all' || 
      (item.nama_kategori && item.nama_kategori.toLowerCase().includes(activeCategory.toLowerCase()));
    
    if (!catMatch) return false;

    if (!keyword) return true;

    const nameId = (item.nama_tempat || '').toLowerCase();
    const nameEn = (item.nama_tempat_en || '').toLowerCase();
    const descId = (item.deskripsi_id || '').toLowerCase();
    const descEn = (item.deskripsi_en || '').toLowerCase();
    const locId = (item.lokasi || '').toLowerCase();
    const locEn = (item.lokasi_en || '').toLowerCase();

    return nameId.includes(keyword) || 
           nameEn.includes(keyword) || 
           descId.includes(keyword) || 
           descEn.includes(keyword) || 
           locId.includes(keyword) ||
           locEn.includes(keyword);
  });

  renderWisataCards(filtered);
}

// =========================================================
// 7. FITUR "📍 TERDEKAT" & GEOLOCATION
// =========================================================
function initNearbyFeature() {
  const btnNearby = document.getElementById('btnNearby');
  if (!btnNearby) return;

  btnNearby.addEventListener('click', () => {
    const alertBox = document.getElementById('searchStatusAlert');
    const t = TRANSLATIONS[currentLang] || TRANSLATIONS.id;

    function applyDistanceSort(userLat, userLng, sourceName) {
      allWisata.forEach(item => {
        const destLat = item.lat || -1.594;
        const destLng = item.lng || 123.501;
        item._distanceKm = calculateDistance(userLat, userLng, destLat, destLng);
      });

      allWisata.sort((a, b) => a._distanceKm - b._distanceKm);
      filterWisata();

      if (alertBox) {
        alertBox.style.display = 'block';
        alertBox.innerHTML = `<strong>📍 ${t.nearbyAlert}</strong> (${sourceName})`;
      }

      showToast(t.nearbyAlert);

      const destSec = document.getElementById('destinasi');
      if (destSec) {
        destSec.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          applyDistanceSort(pos.coords.latitude, pos.coords.longitude, 'Berdasarkan GPS HP Anda');
        },
        () => {
          // Fallback bila izin lokasi ditolak: Gunakan Pelabuhan Banggai sebagai titik awal pusat kota
          applyDistanceSort(-1.5935, 123.5012, currentLang === 'en' ? 'Calculated from Banggai City Center' : 'Dihitung dari Pusat Kota Pelabuhan Banggai');
        },
        { timeout: 5000 }
      );
    } else {
      applyDistanceSort(-1.5935, 123.5012, 'Pusat Kota Banggai');
    }
  });
}

// Haversine Formula untuk hitung jarak dalam KM
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius bumi KM
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// =========================================================
// 8. DATA JADWAL KAPAL & PANDUAN RUTE (panduan.html)
// =========================================================
const defaultKapalData = [
  {
    nama_kapal: "KMP. Tanjung Api / Ferry ASDP",
    jenis: "Kapal Ferry Roro",
    jenis_en: "ASDP Roro Ferry",
    rute_asal: "Pelabuhan Luwuk",
    rute_asal_en: "Luwuk Port",
    rute_tujuan: "Pelabuhan Banggai",
    rute_tujuan_en: "Banggai Sea Port",
    jadwal: "Setiap Hari | 14:00 WITA (Estimasi 6-7 Jam)",
    jadwal_en: "Daily | 14:00 WITA (Est. 6-7 Hours)",
    harga: "Rp 95.000 / Org",
    harga_en: "IDR 95,000 / Pax"
  },
  {
    nama_kapal: "KM. Cepat Express Bahari",
    jenis: "Speedboat / Kapal Cepat",
    jenis_en: "Fast Passenger Speedboat",
    rute_asal: "Pelabuhan Rakyat Luwuk",
    rute_asal_en: "Luwuk Public Harbor",
    rute_tujuan: "Pelabuhan Banggai Laut",
    rute_tujuan_en: "Banggai Laut Harbor",
    jadwal: "Senin - Sabtu | 09:00 WITA (Estimasi 3 Jam)",
    jadwal_en: "Mon - Sat | 09:00 WITA (Est. 3 Hours)",
    harga: "Rp 180.000 / Org",
    harga_en: "IDR 180,000 / Pax"
  },
  {
    nama_kapal: "Kapal Kayu Reguler Bokan",
    jenis: "Transportasi Antar-Pulau",
    jenis_en: "Inter-Island Wooden Boat",
    rute_asal: "Pelabuhan Banggai",
    rute_asal_en: "Banggai Main Harbor",
    rute_tujuan: "Mbuang-Mbuang (Bokan Kepulauan)",
    rute_tujuan_en: "Mbuang-Mbuang (Bokan Islands)",
    jadwal: "Setiap Pagi | 08:00 WITA",
    jadwal_en: "Daily Morning | 08:00 WITA",
    harga: "Rp 60.000 / Org",
    harga_en: "IDR 60,000 / Pax"
  },
  {
    nama_kapal: "Perahu Wisata Pulau Bandang",
    jenis: "Charter / Hopping Island",
    jenis_en: "Island Hopping Charter",
    rute_asal: "Dermaga Monsongan",
    rute_asal_en: "Monsongan Jetty",
    rute_tujuan: "Pulau Bandang & Pasir Putih",
    rute_tujuan_en: "Bandang Island & Sandbar",
    jadwal: "Fleksibel (07:00 - 17:00 WITA)",
    jadwal_en: "Flexible (07:00 - 17:00 WITA)",
    harga: "Rp 150.000 / Trip",
    harga_en: "IDR 150,000 / Trip"
  }
];

const defaultPanduanData = [
  {
    tahap: "Tahap 1: Jalur Udara",
    tahap_en: "Step 1: Flight Route",
    judul: "Penerbangan Menuju Bandara Syukuran Aminuddin Amir (LUW)",
    judul_en: "Flight to Syukuran Aminuddin Amir Airport (LUW)",
    deskripsi: "Bagi wisatawan dari Jakarta, Makassar, Bali, atau Manado, ambil penerbangan menuju Bandara Luwuk (Kabupaten Banggai) dengan transit via Makassar (UPG).",
    deskripsi_en: "From Jakarta, Makassar, Bali, or Manado, take a commercial flight to Luwuk Airport (LUW) connecting through Sultan Hasanuddin Makassar (UPG)."
  },
  {
    tahap: "Tahap 2: Transit Pelabuhan",
    tahap_en: "Step 2: Harbor Transfer",
    judul: "Perjalanan Darat ke Pelabuhan Luwuk",
    judul_en: "Ground Transfer to Luwuk Harbor",
    deskripsi: "Dari Bandara Luwuk, gunakan taksi bandara atau angkutan lokal menuju Pelabuhan Rakyat Luwuk (untuk kapal cepat) atau Pelabuhan Ferry Luwuk dengan waktu 20-30 menit.",
    deskripsi_en: "From Luwuk Airport, take an airport taxi or private transfer to Luwuk Public Port (for fast boats) or Luwuk Ferry Terminal in 20-30 minutes."
  },
  {
    tahap: "Tahap 3: Penyeberangan Laut",
    tahap_en: "Step 3: Sea Crossing",
    judul: "Menyeberang ke Ibu Kota Banggai Laut",
    judul_en: "Sea Crossing to Banggai Laut Capital",
    deskripsi: "Pilih moda Kapal Cepat Express (sekitar 3 jam perjalanan) atau Kapal Ferry ASDP / Kapal Kayu malam menuju Pelabuhan Utama Banggai Laut.",
    deskripsi_en: "Board the Express Fast Speedboat (approx. 3 hours) or overnight ASDP Car Ferry directly to Banggai Laut's central harbor."
  }
];

let allKapal = [...defaultKapalData];

function renderKapal(dataArray) {
  const grid = document.getElementById('transportasiGrid');
  if (!grid) return;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.id;

  grid.innerHTML = dataArray.map(item => {
    const jenis = (currentLang === 'en' && item.jenis_en) ? item.jenis_en : item.jenis;
    const ruteAsal = (currentLang === 'en' && item.rute_asal_en) ? item.rute_asal_en : item.rute_asal;
    const ruteTujuan = (currentLang === 'en' && item.rute_tujuan_en) ? item.rute_tujuan_en : item.rute_tujuan;
    const jadwal = (currentLang === 'en' && item.jadwal_en) ? item.jadwal_en : item.jadwal;
    const harga = (currentLang === 'en' && item.harga_en) ? item.harga_en : item.harga;

    return `
      <div class="ship-card reveal-item revealed">
        <div class="ship-top">
          <span class="ship-type-badge">${jenis || 'Kapal Penyeberangan'}</span>
          <span class="ship-status">${t.shipOperating}</span>
        </div>
        <h3 class="ship-name">${item.nama_kapal || 'Armada Pelayaran Banggai'}</h3>
        <div class="ship-route-box">
          <div class="port-point">
            <span class="port-label">${t.shipDepart}</span>
            <span class="port-name">${ruteAsal}</span>
          </div>
          <span class="route-arrow">➔</span>
          <div class="port-point" style="text-align: right;">
            <span class="port-label">${t.shipArrive}</span>
            <span class="port-name">${ruteTujuan}</span>
          </div>
        </div>
        <div class="ship-Meta">
          <span>🕒 ${jadwal}</span>
          <span class="ship-price">${harga}</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderPanduan(dataArray) {
  const grid = document.getElementById('panduanGrid');
  if (!grid) return;

  grid.innerHTML = dataArray.map((item, idx) => {
    const tahap = (currentLang === 'en' && item.tahap_en) ? item.tahap_en : (item.tahap || `Langkah ${idx + 1}`);
    const judul = (currentLang === 'en' && item.judul_en) ? item.judul_en : item.judul;
    const desc = (currentLang === 'en' && item.deskripsi_en) ? item.deskripsi_en : item.deskripsi;

    return `
      <div class="guide-step-card reveal-item revealed">
        <span class="step-num">${tahap}</span>
        <h3>${judul}</h3>
        <p>${desc}</p>
      </div>
    `;
  }).join('');
}

// Inisialisasi Papan Jadwal Kapal di Beranda
function initHomeShipsBoard() {
  const grid = document.getElementById('homeShipsGrid');
  if (!grid) return;

  const shipsToDisplay = defaultKapalData.slice(0, 4);
  grid.innerHTML = shipsToDisplay.map(item => `
    <div class="home-ship-card">
      <div class="home-ship-badge">${item.jenis}</div>
      <h4 class="home-ship-title">${item.nama_kapal}</h4>
      <div class="home-ship-route">
        <span>📍 ${item.rute_asal}</span>
        <span class="route-dash">➔</span>
        <span>🏁 ${item.rute_tujuan}</span>
      </div>
      <div class="home-ship-meta">
        <span class="home-ship-time">🕒 ${item.jadwal}</span>
        <span class="home-ship-price">${item.harga}</span>
      </div>
    </div>
  `).join('');
}

// =========================================================
// 8B. DATA TABEL JADWAL LENGKAP & FILTER RUTE (panduan.html)
// =========================================================
const armadaKapalData = [
  {
    id: "express-priscilia",
    nama_kapal: "KM Express Priscilia 88",
    jenis: "Kapal Cepat Express",
    jenis_en: "Express Speedboat",
    kategori: "luwuk",
    rute_asal: "Pelabuhan Rakyat Luwuk",
    rute_asal_en: "Luwuk Public Port",
    rute_tujuan: "Pelabuhan Banggai (Balut)",
    rute_tujuan_en: "Banggai Sea Port (Balut)",
    hari: "Setiap Hari (Senin – Minggu)",
    hari_en: "Daily (Mon – Sun)",
    jam_berangkat: "09:00 WITA",
    jam_berangkat_en: "09:00 AM WITA",
    jam_tiba: "11:30 WITA",
    jam_tiba_en: "11:30 AM WITA",
    durasi: "~2.5 Jam",
    durasi_en: "~2.5 Hours",
    tarif: "Rp 180.000 (Eks) / Rp 220.000 (VIP)",
    tarif_en: "IDR 180k (Exec) / IDR 220k (VIP)",
    status_type: "active",
    wa_link: "https://wa.me/6282292928800?text=Halo%20Admin%20Tiket%20Kapal%20Banggai%2C%20saya%20ingin%20pesan%20tiket%20KM%20Express%20Priscilia%2088%20rute%20Luwuk-Banggai."
  },
  {
    id: "cantika-lestari-balut",
    nama_kapal: "KM Cantika Lestari 99",
    jenis: "Kapal Cepat Express",
    jenis_en: "Express Speedboat",
    kategori: "luwuk",
    rute_asal: "Pelabuhan Banggai (Balut)",
    rute_asal_en: "Banggai Sea Port (Balut)",
    rute_tujuan: "Pelabuhan Rakyat Luwuk",
    rute_tujuan_en: "Luwuk Public Port",
    hari: "Setiap Hari (Senin – Minggu)",
    hari_en: "Daily (Mon – Sun)",
    jam_berangkat: "09:00 WITA",
    jam_berangkat_en: "09:00 AM WITA",
    jam_tiba: "11:45 WITA",
    jam_tiba_en: "11:45 AM WITA",
    durasi: "~2.5 Jam",
    durasi_en: "~2.5 Hours",
    tarif: "Rp 180.000 (Eks) / Rp 220.000 (VIP)",
    tarif_en: "IDR 180k (Exec) / IDR 220k (VIP)",
    status_type: "active",
    wa_link: "https://wa.me/6282292928800?text=Halo%20Admin%20Tiket%20Kapal%20Banggai%2C%20saya%20ingin%20pesan%20tiket%20KM%20Cantika%20Lestari%2099%20rute%20Banggai-Luwuk."
  },
  {
    id: "kmp-tanjung-api-luwuk",
    nama_kapal: "KMP Tanjung Api (ASDP Ro-Ro)",
    jenis: "Kapal Feri Ro-Ro (Mobil/Motor)",
    jenis_en: "ASDP Car & Passenger Ferry",
    kategori: "luwuk",
    rute_asal: "Pelabuhan Lalong (Luwuk)",
    rute_asal_en: "Lalong Ferry Port (Luwuk)",
    rute_tujuan: "Pelabuhan ASDP Banggai",
    rute_tujuan_en: "Banggai ASDP Port",
    hari: "Selasa, Kamis, Sabtu",
    hari_en: "Tue, Thu, Sat",
    jam_berangkat: "14:00 WITA",
    jam_berangkat_en: "02:00 PM WITA",
    jam_tiba: "22:00 WITA",
    jam_tiba_en: "10:00 PM WITA",
    durasi: "~8 Jam",
    durasi_en: "~8 Hours",
    tarif: "Rp 85.000 (Org) | Rp 140.000 (Motor)",
    tarif_en: "IDR 85k (Pax) | IDR 140k (Bike)",
    status_type: "active",
    wa_link: "https://wa.me/6285241002233?text=Halo%20Disparbud%2C%20mohon%20konfirmasi%20jadwal%20Feri%20ASDP%20Luwuk-Banggai."
  },
  {
    id: "kmp-tanjung-api-balut",
    nama_kapal: "KMP Tanjung Api (ASDP Ro-Ro)",
    jenis: "Kapal Feri Ro-Ro (Mobil/Motor)",
    jenis_en: "ASDP Car & Passenger Ferry",
    kategori: "luwuk",
    rute_asal: "Pelabuhan ASDP Banggai",
    rute_asal_en: "Banggai ASDP Port",
    rute_tujuan: "Pelabuhan Lalong (Luwuk)",
    rute_tujuan_en: "Lalong Ferry Port (Luwuk)",
    hari: "Rabu, Jumat, Minggu",
    hari_en: "Wed, Fri, Sun",
    jam_berangkat: "13:00 WITA",
    jam_berangkat_en: "01:00 PM WITA",
    jam_tiba: "21:00 WITA",
    jam_tiba_en: "09:00 PM WITA",
    durasi: "~8 Jam",
    durasi_en: "~8 Hours",
    tarif: "Rp 85.000 (Org) | Rp 140.000 (Motor)",
    tarif_en: "IDR 85k (Pax) | IDR 140k (Bike)",
    status_type: "active",
    wa_link: "https://wa.me/6285241002233?text=Halo%20Disparbud%2C%20mohon%20konfirmasi%20jadwal%20Feri%20ASDP%20Banggai-Luwuk."
  },
  {
    id: "km-barcelona-salakan",
    nama_kapal: "KM Barcelona II",
    jenis: "Kapal Kayu Reguler Cepat",
    jenis_en: "Fast Wooden Passenger Boat",
    kategori: "salakan",
    rute_asal: "Pelabuhan Salakan (Bangkep)",
    rute_asal_en: "Salakan Port (Bangkep)",
    rute_tujuan: "Pelabuhan Banggai (Balut)",
    rute_tujuan_en: "Banggai Port (Balut)",
    hari: "Setiap Hari (Senin – Minggu)",
    hari_en: "Daily (Mon – Sun)",
    jam_berangkat: "07:30 WITA",
    jam_berangkat_en: "07:30 AM WITA",
    jam_tiba: "09:30 WITA",
    jam_tiba_en: "09:30 AM WITA",
    durasi: "~2 Jam",
    durasi_en: "~2 Hours",
    tarif: "Rp 70.000 / Orang",
    tarif_en: "IDR 70,000 / Pax",
    status_type: "active",
    wa_link: "https://wa.me/6285241002233?text=Halo%20Disparbud%2C%20mohon%20info%20tiket%20KM%20Barcelona%20Salakan-Banggai."
  },
  {
    id: "km-fungka-permata",
    nama_kapal: "KM Fungka Permata",
    jenis: "Kapal Motor Reguler",
    jenis_en: "Regular Motor Boat",
    kategori: "salakan",
    rute_asal: "Pelabuhan Banggai (Balut)",
    rute_asal_en: "Banggai Port (Balut)",
    rute_tujuan: "Pelabuhan Salakan (Bangkep)",
    rute_tujuan_en: "Salakan Port (Bangkep)",
    hari: "Setiap Hari (Senin – Minggu)",
    hari_en: "Daily (Mon – Sun)",
    jam_berangkat: "13:30 WITA",
    jam_berangkat_en: "01:30 PM WITA",
    jam_tiba: "15:30 WITA",
    jam_tiba_en: "03:30 PM WITA",
    durasi: "~2 Jam",
    durasi_en: "~2 Hours",
    tarif: "Rp 70.000 / Orang",
    tarif_en: "IDR 70,000 / Pax",
    status_type: "active",
    wa_link: "https://wa.me/6285241002233?text=Halo%20Disparbud%2C%20mohon%20info%20tiket%20KM%20Fungka%20Banggai-Salakan."
  },
  {
    id: "km-bokan-mbuang",
    nama_kapal: "KM Bokan Indah",
    jenis: "Kapal Kayu Antar-Pulau",
    jenis_en: "Inter-Island Wooden Boat",
    kategori: "balut",
    rute_asal: "Pelabuhan Banggai",
    rute_asal_en: "Banggai Main Port",
    rute_tujuan: "Mbuang-Mbuang (Danau Ubur-Ubur)",
    rute_tujuan_en: "Mbuang-Mbuang (Jellyfish Lake)",
    hari: "Senin, Rabu, Jumat, Sabtu",
    hari_en: "Mon, Wed, Fri, Sat",
    jam_berangkat: "08:00 WITA",
    jam_berangkat_en: "08:00 AM WITA",
    jam_tiba: "11:30 WITA",
    jam_tiba_en: "11:30 AM WITA",
    durasi: "~3.5 Jam",
    durasi_en: "~3.5 Hours",
    tarif: "Rp 60.000 – Rp 75.000 / Org",
    tarif_en: "IDR 60k – 75k / Pax",
    status_type: "active",
    wa_link: "https://wa.me/6285241002233?text=Halo%20Disparbud%2C%20mohon%20info%20kapal%20Banggai-MbuangMbuang."
  },
  {
    id: "km-labobo-berkah",
    nama_kapal: "KM Nelayan Mansalean",
    jenis: "Perahu Motor Penyeberangan",
    jenis_en: "Commuter Passenger Boat",
    kategori: "balut",
    rute_asal: "Pelabuhan Banggai",
    rute_asal_en: "Banggai Main Port",
    rute_tujuan: "Pulau Labobo (Mansalean)",
    rute_tujuan_en: "Labobo Island (Mansalean)",
    hari: "Setiap Hari (Senin – Minggu)",
    hari_en: "Daily (Mon – Sun)",
    jam_berangkat: "08:30 WITA",
    jam_berangkat_en: "08:30 AM WITA",
    jam_tiba: "10:00 WITA",
    jam_tiba_en: "10:00 AM WITA",
    durasi: "~1.5 Jam",
    durasi_en: "~1.5 Hours",
    tarif: "Rp 45.000 / Orang",
    tarif_en: "IDR 45,000 / Pax",
    status_type: "active",
    wa_link: "https://wa.me/6285241002233?text=Halo%20Disparbud%2C%20mohon%20info%20kapal%20Banggai-Labobo."
  },
  {
    id: "pelni-km-sangiang",
    nama_kapal: "KM Sangiang (PELNI)",
    jenis: "Kapal Penumpang Nasional",
    jenis_en: "National Passenger Ship",
    kategori: "pelni",
    rute_asal: "Kendari / Bau-Bau",
    rute_asal_en: "Kendari / Bau-Bau",
    rute_tujuan: "Banggai – Bitung (PP)",
    rute_tujuan_en: "Banggai – Bitung (RT)",
    hari: "Kalender Resmi PT PELNI",
    hari_en: "Official PELNI Calendar",
    jam_berangkat: "Berkala (2x Sebulan)",
    jam_berangkat_en: "Bi-Weekly",
    jam_tiba: "Sesuai Maklumat",
    jam_tiba_en: "Per Schedule",
    durasi: "Lintas Provinsi",
    durasi_en: "Inter-Province",
    tarif: "Rp 165.000 – Rp 280.000",
    tarif_en: "IDR 165k – 280k",
    status_type: "info",
    wa_link: "https://wa.me/628111621162?text=Halo%20PELNI%2C%20mohon%20info%20jadwal%20KM%20Sangiang%20singgah%20Banggai."
  },
  {
    id: "pelni-sabuk-nusantara",
    nama_kapal: "KM Sabuk Nusantara 78",
    jenis: "Kapal Tol Laut / Perintis",
    jenis_en: "Pioneer Sea Highway Ship",
    kategori: "pelni",
    rute_asal: "Luwuk",
    rute_asal_en: "Luwuk",
    rute_tujuan: "Banggai – Bobong – Kendari",
    rute_tujuan_en: "Banggai – Bobong – Kendari",
    hari: "Jadwal Mingguan Hubla",
    hari_en: "Weekly Hubla Schedule",
    jam_berangkat: "20:00 WITA",
    jam_berangkat_en: "08:00 PM WITA",
    jam_tiba: "06:00 WITA (Pagi)",
    jam_tiba_en: "06:00 AM WITA",
    durasi: "~10 Jam",
    durasi_en: "~10 Hours",
    tarif: "Rp 40.000 – Rp 75.000",
    tarif_en: "IDR 40k – 75k",
    status_type: "info",
    wa_link: "https://wa.me/6285241002233?text=Halo%20Disparbud%2C%20mohon%20jadwal%20KM%20Sabuk%20Nusantara%20singgah%20Banggai."
  }
];

let currentScheduleFilter = 'all';
let currentScheduleSearch = '';

function renderScheduleTable() {
  const tbody = document.getElementById('scheduleTableBody');
  if (!tbody) return;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.id;
  const isEn = currentLang === 'en';

  const filtered = armadaKapalData.filter(item => {
    const matchCat = (currentScheduleFilter === 'all') || (item.kategori === currentScheduleFilter);
    if (!matchCat) return false;

    if (!currentScheduleSearch) return true;
    const q = currentScheduleSearch.toLowerCase();
    const name = (item.nama_kapal || '').toLowerCase();
    const type = (item.jenis || '').toLowerCase();
    const typeEn = (item.jenis_en || '').toLowerCase();
    const origin = (item.rute_asal || '').toLowerCase();
    const originEn = (item.rute_asal_en || '').toLowerCase();
    const dest = (item.rute_tujuan || '').toLowerCase();
    const destEn = (item.rute_tujuan_en || '').toLowerCase();
    const day = (item.hari || '').toLowerCase();
    const dayEn = (item.hari_en || '').toLowerCase();

    return name.includes(q) || type.includes(q) || typeEn.includes(q) ||
           origin.includes(q) || originEn.includes(q) ||
           dest.includes(q) || destEn.includes(q) ||
           day.includes(q) || dayEn.includes(q);
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="schedule-empty-state">
          <div class="empty-state-content">
            <span class="empty-state-icon">⚓</span>
            <p>${t.emptySchedule}</p>
          </div>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(item => {
    const jenis = isEn && item.jenis_en ? item.jenis_en : item.jenis;
    const ruteAsal = isEn && item.rute_asal_en ? item.rute_asal_en : item.rute_asal;
    const ruteTujuan = isEn && item.rute_tujuan_en ? item.rute_tujuan_en : item.rute_tujuan;
    const hari = isEn && item.hari_en ? item.hari_en : item.hari;
    const jamBerangkat = isEn && item.jam_berangkat_en ? item.jam_berangkat_en : item.jam_berangkat;
    const jamTiba = isEn && item.jam_tiba_en ? item.jam_tiba_en : item.jam_tiba;
    const durasi = isEn && item.durasi_en ? item.durasi_en : item.durasi;
    const tarif = isEn && item.tarif_en ? item.tarif_en : item.tarif;
    const statusText = item.status_type === 'info'
      ? (isEn ? 'Scheduled' : 'Jadwal Berkala')
      : (isEn ? 'Normal Service' : 'Beroperasi Normal');
    const statusClass = item.status_type === 'info' ? 'status-pill-info' : 'status-pill-active';

    return `
      <tr class="schedule-row">
        <td data-label="${t.tableShipName}">
          <div class="ship-col-name">
            <strong>${item.nama_kapal}</strong>
            <span class="ship-sub-type">${jenis}</span>
          </div>
        </td>
        <td data-label="${t.tableRoute}">
          <div class="ship-col-route">
            <span class="route-point origin">${ruteAsal}</span>
            <span class="route-arrow">➔</span>
            <span class="route-point dest">${ruteTujuan}</span>
          </div>
        </td>
        <td data-label="${t.tableDay}">
          <span class="day-badge">${hari}</span>
        </td>
        <td data-label="${t.tableDeparture}">
          <span class="time-pill depart">${jamBerangkat}</span>
        </td>
        <td data-label="${t.tableArrival}">
          <div class="time-arrive-box">
            <span class="time-pill arrive">${jamTiba}</span>
            <span class="duration-hint">${durasi}</span>
          </div>
        </td>
        <td data-label="${t.tableFare}">
          <div class="price-highlight">${tarif}</div>
        </td>
        <td data-label="${t.tableStatus}">
          <span class="status-pill ${statusClass}">
            <span class="status-dot"></span>
            ${statusText}
          </span>
        </td>
        <td data-label="${t.tableAction}">
          <a href="${item.wa_link}" target="_blank" rel="noopener noreferrer" class="btn-table-book">
            ${t.btnTableBook}
          </a>
        </td>
      </tr>
    `;
  }).join('');
}

function initScheduleTable() {
  const tabsWrap = document.getElementById('scheduleTabs');
  const searchInput = document.getElementById('schedSearchInput');

  if (tabsWrap) {
    const tabs = tabsWrap.querySelectorAll('.sched-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentScheduleFilter = tab.getAttribute('data-filter') || 'all';
        renderScheduleTable();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentScheduleSearch = e.target.value.trim();
      renderScheduleTable();
    });
  }

  renderScheduleTable();
}

// =========================================================
// 9. DETAIL DESTINASI DINAMIS (detail.html)
// =========================================================
function renderDetailPage() {
  const destTitleEl = document.getElementById('destTitle');
  if (!destTitleEl) return;

  const urlParams = new URLSearchParams(window.location.search);
  const rawId = urlParams.get('id');

  const item = allWisata.find(d => String(d.id) === String(rawId)) || 
               allWisata.find(d => Number(d.id) === Number(rawId)) || 
               allWisata[0];
  if (!item) return;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.id;

  const title = (currentLang === 'en' && item.nama_tempat_en) ? item.nama_tempat_en : item.nama_tempat;
  const desc = (currentLang === 'en' && item.deskripsi_en) ? item.deskripsi_en : (item.deskripsi_id || '');
  const loc = (currentLang === 'en' && item.lokasi_en) ? item.lokasi_en : (item.lokasi || 'Banggai Laut');
  const cat = item.nama_kategori || 'Wisata';

  document.title = `${title} - Si-PANDU Banggai Laut`;

  const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = title;

  destTitleEl.textContent = title;

  const catEl = document.getElementById('destCategory');
  if (catEl) catEl.textContent = cat;

  const locEl = document.getElementById('destLocation');
  if (locEl) locEl.textContent = `📍 ${loc}`;

  const descEl = document.getElementById('destDesc');
  if (descEl) descEl.textContent = desc;

  const heroImg = document.getElementById('destHeroImg');
  if (heroImg) {
    heroImg.src = item.gambar || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600';
    heroImg.alt = title;
  }

  // Galeri Foto Thumbnails
  const galleryContainer = document.getElementById('destGalleryContainer');
  if (galleryContainer) {
    const photos = item.galeri && item.galeri.length > 0 ? item.galeri : [item.gambar];
    galleryContainer.innerHTML = photos.map((p, idx) => `
      <div class="gallery-thumb-item ${idx === 0 ? 'active' : ''}" onclick="changeDetailHeroImg('${p}', this)">
        <img src="${p}" alt="${title} photo ${idx + 1}" loading="lazy">
      </div>
    `).join('');
  }

  // Fasilitas
  const fasilitasList = document.getElementById('destFasilitasList');
  if (fasilitasList && item.fasilitas) {
    fasilitasList.innerHTML = item.fasilitas.map(f => `<span class="detail-facility-badge">✓ ${f}</span>`).join('');
  }

  // Highlights list
  const highlightsList = document.getElementById('destHighlightsList');
  if (highlightsList) {
    const list = (currentLang === 'en' && item.highlights_en) ? item.highlights_en : (item.highlights || [
      "Pemandangan bahari dan gugusan karang alami",
      "Kejernihan air laut sebening kristal",
      "Kearifan lokal dan suasana damai khas kepulauan"
    ]);
    highlightsList.innerHTML = list.map(h => `<li>${h}</li>`).join('');
  }

  // Sidebar values
  const infoCat = document.getElementById('destInfoCat');
  if (infoCat) infoCat.textContent = cat;

  const infoHours = document.getElementById('destInfoHours');
  if (infoHours) infoHours.textContent = item.jam || '07:00 - 18:00 WITA';

  const infoTicket = document.getElementById('destInfoTicket');
  if (infoTicket) infoTicket.textContent = item.htm || ((currentLang === 'en' && item.tiket_en) ? item.tiket_en : (item.tiket || 'Gratis'));

  // WhatsApp Hubungi Pengurus
  const btnWa = document.getElementById('btnWhatsappPengurus');
  if (btnWa) {
    const waPhone = item.kontak_wa || '6282291234567';
    const waText = encodeURIComponent(`Halo Pengelola ${item.nama_tempat} (${item.kontak_nama || 'Pengurus Setempat'}), saya berencana berkunjung melalui Portal Si-PANDU Banggai Laut. Mohon informasi tiket dan panduan reservasi.`);
    btnWa.href = `https://api.whatsapp.com/send?phone=${waPhone}&text=${waText}`;
  }

  // External Maps Link
  const btnGmaps = document.getElementById('btnGmapsExternal');
  if (btnGmaps) {
    btnGmaps.href = `https://maps.google.com/?q=${encodeURIComponent(item.nama_tempat + ' Banggai Laut')}`;
  }

  // Google Maps Embed Iframe
  const mapIframe = document.getElementById('destMapIframe');
  if (mapIframe && item.lat && item.lng) {
    mapIframe.src = `https://maps.google.com/maps?q=${item.lat},${item.lng}&hl=${currentLang}&z=14&output=embed`;
  }

  // Share button
  const btnShare = document.getElementById('btnShareDest');
  if (btnShare) {
    btnShare.onclick = () => {
      if (navigator.share) {
        navigator.share({
          title: `${title} - Si-PANDU`,
          text: desc.substring(0, 100) + '...',
          url: window.location.href
        }).catch(() => {});
      } else {
        navigator.clipboard.writeText(window.location.href).then(() => {
          showToast(t.copiedToast || 'Tautan berhasil disalin!');
        });
      }
    };
  }

  // Render related destinations
  const relatedGrid = document.getElementById('relatedGrid');
  if (relatedGrid) {
    const others = allWisata.filter(d => d.id !== item.id).slice(0, 3);
    relatedGrid.innerHTML = others.map(other => {
      const otherTitle = (currentLang === 'en' && other.nama_tempat_en) ? other.nama_tempat_en : other.nama_tempat;
      return `
        <article class="wisata-card reveal-item revealed">
          <div class="wisata-img-wrapper">
            <img src="${other.gambar}" alt="${otherTitle}" loading="lazy">
            <span class="wisata-cat-badge">${other.nama_kategori}</span>
          </div>
          <div class="wisata-body">
            <span class="wisata-loc">📍 ${other.lokasi}</span>
            <h3>${otherTitle}</h3>
            <div class="wisata-footer">
              <a href="detail.html?id=${other.id}" class="wisata-btn">${t.destBtnDetail}</a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }
}

// Thumbnail switcher di detail.html
window.changeDetailHeroImg = function(url, el) {
  const heroImg = document.getElementById('destHeroImg');
  if (heroImg) heroImg.src = url;
  document.querySelectorAll('.gallery-thumb-item').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
};

// =========================================================
// 9B. QUICK DETAIL MODAL (DENGAN GALERI, HTM, FASILITAS, WA & HALAMAN LENGKAP)
// =========================================================
window.showQuickDetail = function(destId) {
  const item = allWisata.find(d => String(d.id) === String(destId));
  if (!item) {
    window.location.href = `detail.html?id=${destId}`;
    return;
  }

  let modal = document.getElementById('quickDetailModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'quick-detail-backdrop';
    modal.id = 'quickDetailModal';
    modal.setAttribute('aria-hidden', 'true');
    document.body.appendChild(modal);
  }

  const title = (currentLang === 'en' && item.nama_tempat_en) ? item.nama_tempat_en : item.nama_tempat;
  const desc = (currentLang === 'en' && item.deskripsi_en) ? item.deskripsi_en : (item.deskripsi_id || item.deskripsi || '');
  const loc = (currentLang === 'en' && item.lokasi_en) ? item.lokasi_en : (item.lokasi || 'Banggai Laut');
  const cat = item.nama_kategori || 'Destinasi Wisata';
  const htmDisplay = (currentLang === 'en' && item.htm_en) ? item.htm_en : (item.htm || item.tiket || 'Gratis');
  const hoursDisplay = item.jam || '07:00 - 18:00 WITA';
  const photos = item.galeri && item.galeri.length > 0 ? item.galeri : [item.gambar || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600'];
  const facs = (currentLang === 'en' && item.fasilitas_en) ? item.fasilitas_en : (item.fasilitas || ['Pemandu Lokal', 'Spot Foto Estetik', 'Area Parkir / Dermaga']);
  const waPhone = item.kontak_wa || '6282299887766';
  const waText = encodeURIComponent(`Halo Pengelola ${item.nama_tempat} (${item.kontak_nama || 'Pengurus Setempat'}), saya ingin info operasional dan tiket kunjungan via Portal Si-PANDU.`);
  const waUrl = `https://api.whatsapp.com/send?phone=${waPhone}&text=${waText}`;
  const gmapsUrl = `https://maps.google.com/?q=${encodeURIComponent(item.nama_tempat + ' Banggai Laut')}`;
  const fullDetailUrl = `detail.html?id=${item.id}`;

  const labelHtm = currentLang === 'en' ? '🎟️ Admission / Ticket' : '🎟️ Tiket Masuk / HTM';
  const labelHours = currentLang === 'en' ? '🕒 Operating Hours' : '🕒 Jam Operasional';
  const labelFacilities = currentLang === 'en' ? '🏷️ Available Facilities' : '🏷️ Fasilitas di Lokasi';
  const labelWa = currentLang === 'en' ? '💬 Contact via WhatsApp' : '💬 Hubungi Pengurus via WhatsApp';
  const labelGmaps = currentLang === 'en' ? '🗺️ Google Maps' : '🗺️ Buka Google Maps';
  const labelFull = currentLang === 'en' ? '📄 Full Destination Page ➔' : '📄 Buka Halaman Lengkap ➔';

  modal.innerHTML = `
    <div class="quick-detail-modal" role="dialog" aria-labelledby="quickDetailTitle" onclick="event.stopPropagation()">
      <div class="quick-detail-header">
        <img id="quickDetailImg" src="${photos[0]}" alt="${title}" class="quick-detail-hero-img">
        <div class="quick-detail-header-overlay">
          <span class="wisata-cat-badge" id="quickDetailCategory" style="align-self: flex-start; margin-bottom: 8px;">${cat}</span>
          <h2 id="quickDetailTitle" style="color: #ffffff; font-size: 1.6rem; font-weight: 800; margin-bottom: 4px; font-family: var(--font-heading);">${title}</h2>
          <span id="quickDetailLocation" style="color: var(--gold-light); font-size: 0.88rem; font-weight: 600;">📍 ${loc}</span>
        </div>
        <button type="button" class="quick-detail-close" id="quickDetailClose" aria-label="Tutup Detail" onclick="closeQuickDetailModal()">✕</button>
      </div>
      <div class="quick-detail-body" id="quickDetailBody">
        <div class="quick-gallery-strip" id="quickDetailGallery">
          ${photos.map((p, idx) => `
            <img src="${p}" alt="${title} photo ${idx + 1}" class="quick-gal-thumb ${idx === 0 ? 'active' : ''}" onclick="changeQuickModalPhoto('${p}', this)">
          `).join('')}
        </div>
        <p id="quickDetailDesc" style="color: rgba(255, 255, 255, 0.9); font-size: 0.95rem; line-height: 1.65; margin-bottom: 18px;">${desc}</p>
        <div class="quick-info-grid">
          <div class="quick-info-item">
            <span class="quick-info-label">${labelHtm}</span>
            <span class="quick-info-val" id="quickDetailHtm">${htmDisplay}</span>
          </div>
          <div class="quick-info-item">
            <span class="quick-info-label">${labelHours}</span>
            <span class="quick-info-val" id="quickDetailHours">${hoursDisplay}</span>
          </div>
        </div>
        <div style="margin-top: 16px;">
          <span class="quick-info-label" style="display: block; margin-bottom: 8px;">${labelFacilities}</span>
          <div id="quickDetailFacilities">
            ${facs.map(f => `<span class="quick-fac-pill">✓ ${f}</span>`).join('')}
          </div>
        </div>
        <div class="quick-actions-bar">
          <a id="quickDetailWhatsapp" href="${waUrl}" target="_blank" rel="noopener noreferrer" class="quick-btn-wa">
            ${labelWa}
          </a>
          <a id="quickDetailGmaps" href="${gmapsUrl}" target="_blank" rel="noopener noreferrer" class="quick-btn-full" style="background: rgba(45, 212, 191, 0.15); border-color: rgba(45, 212, 191, 0.4); color: #2dd4bf;">
            ${labelGmaps}
          </a>
          <a id="quickDetailFullLink" href="${fullDetailUrl}" class="quick-btn-full">
            ${labelFull}
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

window.closeQuickDetailModal = function() {
  const modal = document.getElementById('quickDetailModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
};

window.changeQuickModalPhoto = function(url, el) {
  const mainImg = document.getElementById('quickDetailImg');
  if (mainImg) mainImg.src = url;
  document.querySelectorAll('.quick-gal-thumb').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
};

function initQuickDetailModal() {
  const modal = document.getElementById('quickDetailModal');
  if (!modal) return;

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      window.closeQuickDetailModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      window.closeQuickDetailModal();
    }
  });
}

// =========================================================
// 9C. WIDGET JAM REAL-TIME WITA (UTC+8) BANGGAI LAUT
// =========================================================
function initBalutLiveClock() {
  const clockEl = document.getElementById('balutLiveClock');
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    // Konversi ke zona waktu WITA (Asia/Makassar, UTC+8)
    const optionsTime = {
      timeZone: 'Asia/Makassar',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    const optionsDate = {
      timeZone: 'Asia/Makassar',
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };

    const timeString = new Intl.DateTimeFormat('id-ID', optionsTime).format(now);
    const dateString = new Intl.DateTimeFormat('id-ID', optionsDate).format(now);

    clockEl.innerHTML = `
      <div class="clock-time-val">${timeString} <span class="clock-tz">WITA</span></div>
      <div class="clock-date-val">${dateString}</div>
    `;
  }

  updateClock();
  setInterval(updateClock, 1000);
}

// =========================================================
// =========================================================
// 9D. HERO BANNER SLIDER EVENT & POSTER TERBARU (5 SLIDES)
// Mendukung auto-slide otomatis, pause pintar saat berinteraksi,
// tombol panah kiri-kanan (next/prev), titik indikator (dots),
// swipe mobile, tombol keyboard, serta mudah diupdate oleh admin
// =========================================================
let heroBannerTimer = null;
let currentHeroBannerIndex = 0;
const HERO_AUTO_SLIDE_DELAY = 5000;

function initHeroBannerSlider() {
  const heroSection = document.getElementById('heroSection');
  const viewport = document.getElementById('heroSlidesViewport');
  const dotsContainer = document.getElementById('heroSliderDots');
  const counterEl = document.getElementById('heroSlideCounter');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');
  const stripNotice = document.getElementById('heroStripSlideNotice');
  const progressBar = document.getElementById('heroSliderProgressBar');

  if (!viewport || !window.HERO_SLIDES_DATA || window.HERO_SLIDES_DATA.length === 0) return;

  const slidesData = window.HERO_SLIDES_DATA;
  const total = slidesData.length;

  // 1. Render 5 Slides ke DOM (Bersih & Elegan, Tanpa Teks Padat Berlebihan)
  viewport.innerHTML = slidesData.map((slide, idx) => `
    <div class="hero-slide-item ${idx === 0 ? 'active' : ''}" data-slide-index="${idx}">
      <div class="hero-slide-bg" style="background-image: url('${slide.bgImage}');"></div>
      <div class="hero-slide-overlay"></div>
      <div class="hero-slide-inner">
        <div class="hero-slide-content">
          <div class="hero-clean-tag">
            <span class="badge-pulse-dot"></span>
            <span>${slide.tag || slide.badge}</span>
          </div>
          <h1 class="hero-clean-title">${slide.title}</h1>
          <p class="hero-clean-sub">${slide.subtitle}</p>
          <div class="hero-clean-action">
            <a href="${slide.ctaPrimaryLink || 'panduan.html'}" class="hero-clean-btn">
              <span>${slide.ctaPrimaryText || 'Lihat Informasi ➔'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // 2. Render Dots Indikator (Titik Navigasi)
  if (dotsContainer) {
    dotsContainer.innerHTML = slidesData.map((slide, idx) => `
      <button type="button" class="hero-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Slide ${idx + 1}: ${slide.title}" title="Buka Slide ${idx + 1}"></button>
    `).join('');

    dotsContainer.querySelectorAll('.hero-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const idx = parseInt(dot.getAttribute('data-index'), 10);
        if (!isNaN(idx)) {
          goToSlide(idx);
          resetTimer();
        }
      });
    });
  }

  // 3. Fungsi Pindah ke Slide Tertentu
  function goToSlide(index) {
    // Sirkular loop: jika lewat batas akhir kembali ke awal, jika sebelum 0 kembali ke akhir
    index = ((index % total) + total) % total;
    currentHeroBannerIndex = index;

    // Update active class pada slide item
    const slideItems = viewport.querySelectorAll('.hero-slide-item');
    slideItems.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });

    // Update active dot
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.hero-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }

    // Update nomor urut counter (misal 01 / 05)
    if (counterEl) {
      const currStr = String(index + 1).padStart(2, '0');
      const totalStr = String(total).padStart(2, '0');
      counterEl.innerHTML = `<span class="counter-curr">${currStr}</span> <span class="counter-sep">/</span> <span class="counter-total">${totalStr}</span>`;
    }

    // Update strip announcement text jika ada
    if (stripNotice && slidesData[index]) {
      stripNotice.textContent = `${slidesData[index].category} • ${slidesData[index].title}`;
    }

    // Jalankan animasi progress bar autoplay
    triggerProgressBar();
  }

  // Animasi Progress Bar visual
  function triggerProgressBar() {
    if (!progressBar) return;
    progressBar.classList.add('resetting');
    progressBar.style.width = '0%';
    void progressBar.offsetWidth; // Force DOM reflow
    progressBar.classList.remove('resetting');
    progressBar.style.width = '100%';
  }

  // 4. Fungsi Navigasi Maju (Next) dan Mundur (Prev)
  function nextSlide() {
    goToSlide(currentHeroBannerIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentHeroBannerIndex - 1);
  }

  // 5. Timer Autoplay Otomatis
  function resetTimer() {
    clearInterval(heroBannerTimer);
    heroBannerTimer = setInterval(nextSlide, HERO_AUTO_SLIDE_DELAY);
    triggerProgressBar();
  }

  function stopTimer() {
    clearInterval(heroBannerTimer);
    heroBannerTimer = null;
    if (progressBar) {
      progressBar.classList.add('resetting');
      progressBar.style.width = '0%';
    }
  }

  // 6. Pasang Event Listener Tombol Panah Kiri & Kanan
  if (nextBtn) {
    nextBtn.onclick = null; // Bersihkan handler lama
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      nextSlide();
      resetTimer();
    });
  }

  if (prevBtn) {
    prevBtn.onclick = null; // Bersihkan handler lama
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      prevSlide();
      resetTimer();
    });
  }

  // 7. Pause hanya saat kursor diarahkan langsung ke tombol navigasi (panah / dots)
  const navControls = [prevBtn, nextBtn, dotsContainer].filter(Boolean);
  navControls.forEach(ctrl => {
    ctrl.addEventListener('mouseenter', () => {
      clearInterval(heroBannerTimer);
      if (progressBar) {
        progressBar.style.transition = 'none';
      }
    });
    ctrl.addEventListener('mouseleave', () => {
      resetTimer();
    });
  });

  // 8. Navigasi Tombol Keyboard (Panah Kiri dan Panah Kanan)
  window.addEventListener('keydown', (e) => {
    // Jangan ganggu jika pengguna sedang mengetik di form/input chat AI
    const activeEl = document.activeElement;
    if (activeEl && (['INPUT', 'TEXTAREA', 'SELECT'].includes(activeEl.tagName) || activeEl.isContentEditable)) {
      return;
    }

    if (e.key === 'ArrowLeft') {
      prevSlide();
      resetTimer();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      resetTimer();
    }
  });

  // 9. Dukungan Touch Swipe untuk Layar Sentuh / Smartphone
  if (heroSection) {
    let touchStartX = 0;
    let touchStartY = 0;

    heroSection.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length > 0) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    heroSection.addEventListener('touchend', (e) => {
      if (e.changedTouches && e.changedTouches.length > 0) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        // Hanya jalankan swipe horizontal jika dominan
        if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX < 0) {
            nextSlide(); // Geser kiri -> berikutnya
          } else {
            prevSlide(); // Geser kanan -> sebelumnya
          }
          resetTimer();
        }
      }
    }, { passive: true });
  }

  // 10. Pause timer saat tab browser tidak aktif, lanjutkan saat aktif kembali
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopTimer();
    } else {
      resetTimer();
    }
  });

  // Inisialisasi awal ke slide pertama & mulai auto-slide
  goToSlide(0);
  resetTimer();
}

// Fungsi helper agar Admin dapat mengupdate slide secara dinamis
window.updateHeroSlides = function(newSlidesArray) {
  if (Array.isArray(newSlidesArray) && newSlidesArray.length > 0) {
    window.HERO_SLIDES_DATA = newSlidesArray;
    initHeroBannerSlider();
  }
};

// =========================================================
// 9E. KARTU MENU KATEGORI & FITUR "VIEW MORE" SELURUH DESTINASI
// =========================================================
function initCategoryMenuCards() {
  // Filter pills di search bar (destinasi.html)
  document.querySelectorAll('.category-pill[data-filter], .filter-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.category-pill[data-filter], .filter-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter') || 'all';
      filterWisata();
    });
  });
}

function initViewMoreFeature() {
  const btnMore = document.getElementById('btnViewMoreDest');
  if (!btnMore) return;
  // Jika berupa tag link <a>, biarkan berpindah halaman ke destinasi.html
  if (btnMore.tagName.toLowerCase() === 'a') return;

  btnMore.addEventListener('click', () => {
    isDestinasiExpanded = !isDestinasiExpanded;
    if (isDestinasiExpanded) {
      btnMore.innerHTML = `Tampilkan Lebih Sedikit ▴ <span class="view-more-count">(${allWisata.length} Destinasi)</span>`;
    } else {
      btnMore.innerHTML = `Tampilkan Seluruh Destinasi (${allWisata.length} Lokasi) ▾`;
      const destSection = document.getElementById('destinasi');
      if (destSection) destSection.scrollIntoView({ behavior: 'smooth' });
    }
    filterWisata();
  });
}

// =========================================================
// 10. PINTASAN RAHASIA ADMIN (KLIK 3X COPYRIGHT)
// =========================================================
function initSecretAdminAccess() {
  const secretTrigger = document.getElementById('secretAdminTrigger');
  if (!secretTrigger) return;

  let clickCount = 0;
  let clickTimer;

  secretTrigger.addEventListener('click', () => {
    clickCount++;
    clearTimeout(clickTimer);

    if (clickCount === 3) {
      showToast('Mengalihkan ke Portal Login Admin...');
      setTimeout(() => {
        window.location.href = 'admin/login.html';
      }, 500);
    }

    clickTimer = setTimeout(() => {
      clickCount = 0;
    }, 800);
  });
}

// =========================================================
// 10C. SI-PANDU AI ROUTE & TRAVEL ASSISTANT ENGINE (100% FRONTEND)
// =========================================================
let currentActiveItinerary = null;
let currentSwapContext = null;

function initAiRouteAssistant() {
  const triggerBtn = document.getElementById('aiTriggerBtn');
  const openPlannerBtn = document.getElementById('btnOpenAiPlanner');
  const drawerTrigger = document.getElementById('drawerAiTrigger');
  const modalBackdrop = document.getElementById('aiModalBackdrop');
  const closeBtn = document.getElementById('aiModalClose');
  const tabBtnGen = document.getElementById('tabBtnGenerator');
  const tabBtnChat = document.getElementById('tabBtnChat');
  const tabGen = document.getElementById('tabGenerator');
  const tabChat = document.getElementById('tabChat');
  const plannerForm = document.getElementById('aiPlannerForm');
  const chatForm = document.getElementById('aiChatForm');
  const chatInput = document.getElementById('aiChatInput');
  const chatHistory = document.getElementById('aiChatHistory');
  const resultContainer = document.getElementById('aiResultContainer');
  const loadingState = document.getElementById('aiLoadingState');
  const outputCard = document.getElementById('aiOutputCard');

  if (!modalBackdrop) return;

  function openModal(tab = 'generator') {
    modalBackdrop.classList.add('open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    switchTab(tab);
  }

  function closeModal() {
    modalBackdrop.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (triggerBtn) triggerBtn.addEventListener('click', () => openModal('generator'));
  if (openPlannerBtn) openPlannerBtn.addEventListener('click', () => openModal('generator'));
  if (drawerTrigger) drawerTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('generator');
    const drawer = document.getElementById('navDrawer');
    if (drawer) drawer.classList.remove('open');
    const backdrop = document.getElementById('navBackdrop');
    if (backdrop) backdrop.classList.remove('visible');
  });
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // General trigger delegation
  document.querySelectorAll('[data-ai-trigger]').forEach(btn => {
    btn.addEventListener('click', () => openModal('generator'));
  });

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });

  // Tab switching
  function switchTab(mode) {
    if (mode === 'generator') {
      if (tabBtnGen) tabBtnGen.classList.add('active');
      if (tabBtnChat) tabBtnChat.classList.remove('active');
      if (tabGen) {
        tabGen.classList.add('active');
        tabGen.style.display = 'block';
      }
      if (tabChat) {
        tabChat.classList.remove('active');
        tabChat.style.display = 'none';
      }
    } else {
      if (tabBtnChat) tabBtnChat.classList.add('active');
      if (tabBtnGen) tabBtnGen.classList.remove('active');
      if (tabChat) {
        tabChat.classList.add('active');
        tabChat.style.display = 'block';
      }
      if (tabGen) {
        tabGen.classList.remove('active');
        tabGen.style.display = 'none';
      }
      if (chatInput) chatInput.focus();
    }
  }

  if (tabBtnGen) tabBtnGen.addEventListener('click', () => switchTab('generator'));
  if (tabBtnChat) tabBtnChat.addEventListener('click', () => switchTab('chat'));

  // Budget mode toggles (Per Hari vs Total Trip)
  let budgetMode = 'per_day';
  const btnBudgetPerDay = document.getElementById('btnBudgetPerDay');
  const btnBudgetTotal = document.getElementById('btnBudgetTotal');
  const budgetUnitLabel = document.getElementById('aiBudgetUnitLabel');
  const budgetInput = document.getElementById('aiBudgetInput') || document.getElementById('aiSelectedBudget');

  if (btnBudgetPerDay && btnBudgetTotal) {
    btnBudgetPerDay.addEventListener('click', () => {
      budgetMode = 'per_day';
      btnBudgetPerDay.classList.add('active');
      btnBudgetTotal.classList.remove('active');
      if (budgetUnitLabel) budgetUnitLabel.textContent = '/ Hari / Orang';
      if (budgetInput && !budgetInput.value) budgetInput.value = '500000';
    });

    btnBudgetTotal.addEventListener('click', () => {
      budgetMode = 'total';
      btnBudgetTotal.classList.add('active');
      btnBudgetPerDay.classList.remove('active');
      if (budgetUnitLabel) budgetUnitLabel.textContent = 'Total Selama di Balut';
      if (budgetInput && (!budgetInput.value || budgetInput.value === '500000')) budgetInput.value = '1500000';
    });
  }

  // Radio button budget mode support
  document.querySelectorAll('input[name="budgetMode"]').forEach(radio => {
    radio.addEventListener('change', () => {
      budgetMode = radio.value;
      const isPerDay = budgetMode === 'per_day';
      const valHemat = document.getElementById('presetValHemat') || document.getElementById('presetValBackpacker');
      const valNyaman = document.getElementById('presetValNyaman');
      const valSultan = document.getElementById('presetValSultan');
      if (valHemat) valHemat.textContent = isPerDay ? 'Rp 350.000 / hari' : 'Rp 1.050.000 total';
      if (valNyaman) valNyaman.textContent = isPerDay ? 'Rp 750.000 / hari' : 'Rp 2.250.000 total';
      if (valSultan) valSultan.textContent = isPerDay ? 'Rp 1.750.000 / hari' : 'Rp 5.250.000 total';
    });
  });

  // Mode toggle buttons support (total vs per person)
  document.querySelectorAll('.mode-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.mode-toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      budgetMode = btn.getAttribute('data-mode') || 'total';
    });
  });

  // Checkbox pills active styling
  document.querySelectorAll('.checkbox-pill input[type="checkbox"], .interest-chip input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const parent = cb.closest('.checkbox-pill') || cb.closest('.interest-chip');
      if (cb.checked) {
        parent?.classList.add('active');
        parent?.classList.add('selected');
      } else {
        parent?.classList.remove('active');
        parent?.classList.remove('selected');
      }
    });
  });

  // Budget Presets
  document.querySelectorAll('.budget-preset-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.budget-preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const val = btn.getAttribute('data-amount') || btn.getAttribute('data-budget');
      const targetInput = document.getElementById('aiSelectedBudget') || document.getElementById('aiBudgetInput');
      if (val && targetInput) {
        targetInput.value = val;
      }
    });
  });

  // Quick Chat Tags
  document.querySelectorAll('.quick-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const q = tag.getAttribute('data-query');
      if (q && chatInput) {
        chatInput.value = q;
        submitChatQuery(q);
      }
    });
  });

  // Generator submit
  if (plannerForm) {
    plannerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const start = document.getElementById('aiStartPoint')?.value || 'banggai';
      const duration = parseInt(document.getElementById('aiDuration')?.value || '2', 10);
      const traveler = document.getElementById('aiTraveler')?.value || document.getElementById('aiTravelerType')?.value || 'couple';
      const hotelKey = document.getElementById('aiHotel')?.value || document.getElementById('aiHotelPreference')?.value || 'hotel_kota';
      
      let rawBudget = 750000;
      const bInput = document.getElementById('aiSelectedBudget') || document.getElementById('aiBudgetInput');
      if (bInput && bInput.value) {
        rawBudget = parseInt(bInput.value, 10) || 750000;
      }

      // Multi-select interests with single-select fallback
      const selectedInterests = [];
      const selectInterest = document.getElementById('aiInterest')?.value;
      if (selectInterest) {
        selectedInterests.push(selectInterest);
      }
      document.querySelectorAll('#aiPlannerForm input[name="interest"]:checked, .ai-interest-checkbox:checked').forEach(cb => {
        if (!selectedInterests.includes(cb.value)) {
          selectedInterests.push(cb.value);
        }
      });
      if (selectedInterests.length === 0) {
        selectedInterests.push('bahari');
      }

      runAiPlanner(start, duration, selectedInterests, traveler, hotelKey, rawBudget, budgetMode);
    });
  }

  // Chat submit
  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = (chatInput?.value || '').trim();
      if (!query) return;
      chatInput.value = '';
      submitChatQuery(query);
    });
  }

  function submitChatQuery(query) {
    if (!chatHistory) return;

    const userMsg = document.createElement('div');
    userMsg.className = 'ai-message ai-user';
    userMsg.innerHTML = `<div class="ai-bubble">${escapeHtml(query)}</div>`;
    chatHistory.appendChild(userMsg);
    chatHistory.scrollTop = chatHistory.scrollHeight;

    const botMsg = document.createElement('div');
    botMsg.className = 'ai-message ai-bot';
    botMsg.innerHTML = `<div class="ai-bubble"><em>Pemandu AI sedang menganalisis logistik maritim & kondisi kepulauan...</em></div>`;
    chatHistory.appendChild(botMsg);
    chatHistory.scrollTop = chatHistory.scrollHeight;

    // Panggil Endpoint Tab 2 (Conversational Q&A Agent) di backend
    fetch('http://localhost:3000/api/ai/tanya-bebas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: query, lang: currentLang })
    })
    .then(res => res.json())
    .then(data => {
      const answer = (data.status === 'success' && data.answer)
        ? data.answer
        : generateAiChatAnswer(query);
      botMsg.innerHTML = `<div class="ai-bubble">${answer}</div>`;
      chatHistory.scrollTop = chatHistory.scrollHeight;
    })
    .catch(() => {
      // Graceful offline fallback ke local engine
      const answer = generateAiChatAnswer(query);
      botMsg.innerHTML = `<div class="ai-bubble">${answer}</div>`;
      chatHistory.scrollTop = chatHistory.scrollHeight;
    });
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[m]);
  }

  // ==========================================
  // SMART ITINERARY GENERATOR KNOWLEDGE LOGIC
  // ==========================================
  function runAiPlanner(start, duration, interests, traveler, hotelKey, rawBudget, bMode) {
    if (!resultContainer || !loadingState || !outputCard) return;

    resultContainer.style.display = 'block';
    loadingState.style.display = 'flex';
    outputCard.style.display = 'none';

    // Smooth scroll inside modal dialog to show processing
    const modalDialog = document.querySelector('.ai-modal-dialog');
    if (modalDialog) {
      modalDialog.scrollTo({ top: modalDialog.scrollHeight, behavior: 'smooth' });
    }

    // Panggil Endpoint Tab 1 (Itinerary Generator Terstruktur) di backend
    const payload = {
      durasi: duration,
      titik_awal: start,
      teman_perjalanan: traveler,
      akomodasi: hotelKey,
      minat: interests,
      anggaran_mode: bMode,
      anggaran_nilai: rawBudget
    };

    fetch('http://localhost:3000/api/ai/rancang-rute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(resData => {
      loadingState.style.display = 'none';
      outputCard.style.display = 'block';

      if (resData.status === 'success' && resData.data) {
        currentActiveItinerary = resData.data;
      } else {
        currentActiveItinerary = generateItineraryModel(start, duration, interests, traveler, hotelKey, rawBudget, bMode);
      }

      renderItineraryView();
      if (modalDialog) {
        modalDialog.scrollTo({ top: resultContainer.offsetTop - 20, behavior: 'smooth' });
      }
    })
    .catch(() => {
      // Graceful offline fallback ke local itinerary model
      loadingState.style.display = 'none';
      outputCard.style.display = 'block';

      currentActiveItinerary = generateItineraryModel(start, duration, interests, traveler, hotelKey, rawBudget, bMode);
      renderItineraryView();

      if (modalDialog) {
        modalDialog.scrollTo({ top: resultContainer.offsetTop - 20, behavior: 'smooth' });
      }
    });
  }

  function generateItineraryModel(start, duration, interests, traveler, hotelKey, rawBudget, bMode) {
    let hotel = HOTELS_DATA.find(h => h.id === hotelKey) || HOTELS_DATA[0] || {
      id: "hotel_kota",
      nama: "Hotel Pusat Kota Banggai",
      lokasi: "Pelabuhan & Pusat Kota Banggai",
      lat: -1.5935,
      lng: 123.5012
    };

    hotel = {
      ...hotel,
      name: hotel.nama || hotel.name || 'Hotel Pusat Kota Banggai',
      loc: hotel.lokasi || hotel.loc || 'Pusat Kota Banggai'
    };

    const startName = start === 'luwuk' ? 'Pelabuhan Luwuk' : 
                      (start === 'bandara' ? 'Bandara Luwuk (Pesawat Transit)' : 
                      (start === 'bokan' ? 'Desa Mbuang-Mbuang (Kep. Bokan)' : 
                      (start === 'bobong' ? 'Pelabuhan Bobong (Maluku Utara)' : 'Pelabuhan Banggai (Pusat Kota)')));

    const travelerName = traveler === 'couple' ? 'Pasangan / Honeymoon' : 
                         (traveler === 'family' ? 'Keluarga & Anak-anak' : 
                         (traveler === 'solo' ? 'Solo Traveler / Backpacker' : 'Rombongan Teman / Komunitas'));

    const budgetFormatted = bMode === 'per_day'
      ? `Rp ${rawBudget.toLocaleString('id-ID')} / Hari / Orang (Total: Rp ${(rawBudget * duration).toLocaleString('id-ID')})`
      : `Rp ${rawBudget.toLocaleString('id-ID')} Total Estimasi Selama di Balut`;

    // Map each day with slot items
    const days = [];
    for (let d = 1; d <= duration; d++) {
      let slots = [];

      if (d === 1) {
        slots.push({
          time: '08:00 - 11:30 WITA',
          type: 'wisata',
          destId: 1, // Keraton Banggai
          title: 'Keraton Banggai & Situs Pusaka',
          category: 'Sejarah & Budaya',
          desc: 'Mengagumi peninggalan kembar meriam kuno dan singgasana raja Kerajaan Banggai.',
          img: allWisata.find(w => w.id === 1)?.gambar || 'assets/img/hero-card.jpg',
          lat: -1.5932,
          lng: 123.5015
        });

        slots.push({
          time: '12:00 - 13:30 WITA',
          type: 'kuliner',
          destId: 10, // Sentra Kuliner Pesisir
          title: 'Santap Siang Sinole & Ikan Bakar Cakalang',
          category: 'Kuliner Tradisional',
          desc: 'Olahan sagu sangrai parut kelapa Sinole gurih disantap hangat bersama ikan segar.',
          img: allWisata.find(w => w.id === 10)?.gambar || 'assets/img/hero-card.jpg',
          lat: -1.5945,
          lng: 123.5040
        });

        slots.push({
          time: '15:30 - 18:00 WITA',
          type: 'wisata',
          destId: 8, // Tanjung Gundul
          title: 'Pesona Sunset Eksotis Tebing Tanjung Gundul',
          category: 'Wisata Bahari & Sunset',
          desc: 'Menyaksikan langit senja keemasan dari atas tanjung batu karang menghadap Laut Maluku.',
          img: allWisata.find(w => w.id === 8)?.gambar || 'assets/img/hero-card.jpg',
          lat: -1.6350,
          lng: 123.4750
        });
      } else if (d === 2) {
        slots.push({
          time: '08:00 - 12:30 WITA',
          type: 'wisata',
          destId: 4, // Danau Ubur-ubur
          title: 'Berenang Bersama Ribuan Ubur-Ubur Jinak Bokan',
          category: 'Danau & Geowisata',
          desc: 'Keajaiban dunia di danau air payau Desa Mbuang-Mbuang bersama ubur-ubur tanpa sengat.',
          img: allWisata.find(w => w.id === 4)?.gambar || 'assets/img/hero-card.jpg',
          lat: -1.7850,
          lng: 123.5950
        });

        slots.push({
          time: '13:00 - 14:00 WITA',
          type: 'kuliner',
          destId: 11, // Homestay Terapung / Cafe
          title: 'Santap Seafood Segar Nelayan Mbuang-Mbuang',
          category: 'Kuliner Laut',
          desc: 'Cumi bakar madu dan kepiting saus rica segar tangkapan nelayan perahu tradisional.',
          img: allWisata.find(w => w.id === 11)?.gambar || 'assets/img/hero-card.jpg',
          lat: -1.7820,
          lng: 123.5930
        });

        slots.push({
          time: '14:30 - 17:00 WITA',
          type: 'wisata',
          destId: 5, // Laguna Paisubatu
          title: 'Snorkeling Karang Alami Laguna Paisubatu',
          category: 'Wisata Bahari',
          desc: 'Gradasi toska kristal dan terumbu karang warna-warni yang masih murni terlindungi teluk.',
          img: allWisata.find(w => w.id === 5)?.gambar || 'assets/img/hero-card.jpg',
          lat: -1.7650,
          lng: 123.5850
        });
      } else if (d === 3) {
        slots.push({
          time: '08:30 - 11:30 WITA',
          type: 'wisata',
          destId: 3, // Pasir Timbul Lambangan Pauno
          title: 'Island Hopping Pasir Timbul Lambangan Pauno',
          category: 'Wisata Bahari',
          desc: 'Hamparan pasir putih berkilau di tengah laut dengan perairan dangkal jernih.',
          img: allWisata.find(w => w.id === 3)?.gambar || 'assets/img/hero-card.jpg',
          lat: -1.6150,
          lng: 123.5350
        });

        slots.push({
          time: '13:30 - 16:00 WITA',
          type: 'wisata',
          destId: 9, // Air Terjun Matube
          title: 'Segarnya Kolam Hutan Alami Air Terjun Matube',
          category: 'Geowisata Alam',
          desc: 'Membasuh tubuh dengan air sejuk pegunungan di bawah rindangnya kanopi hutan tropis.',
          img: allWisata.find(w => w.id === 9)?.gambar || 'assets/img/hero-card.jpg',
          lat: -1.6620,
          lng: 123.5150
        });
      } else {
        slots.push({
          time: '09:00 - 12:00 WITA',
          type: 'wisata',
          destId: 7, // Cagar Makam Raja Banggai
          title: 'Napak Tilas Cagar Makam Raja & Tradisi Adat',
          category: 'Sejarah & Budaya',
          desc: 'Menelusuri sejarah sakral penghormatan leluhur dan ritual adat Malabot Tumbe.',
          img: allWisata.find(w => w.id === 7)?.gambar || 'assets/img/hero-card.jpg',
          lat: -1.5970,
          lng: 123.5040
        });

        slots.push({
          time: '13:00 - 16:00 WITA',
          type: 'kuliner',
          destId: 10,
          title: 'Belanja Oleh-Oleh Ikan Asin Kering Balut & Kue Tetu',
          category: 'Belanja & Kuliner',
          desc: 'Membawa cenderamata kuliner otentik sebelum jadwal pelayaran kapal kembali ke Luwuk.',
          img: allWisata.find(w => w.id === 10)?.gambar || 'assets/img/hero-card.jpg',
          lat: -1.5945,
          lng: 123.5040
        });
      }

      // Calculate distance for each slot from selected hotel
      slots.forEach(slot => {
        const distKm = calculateDistance(hotel.lat, hotel.lng, slot.lat, slot.lng);
        slot.distanceFromHotelKm = parseFloat(distKm.toFixed(1));
        // Estimasi waktu: 30 km/h untuk perahu / mobil
        const estMin = Math.max(8, Math.round((distKm / 30) * 60));
        slot.estTimeMin = estMin;
      });

      days.push({ dayNumber: d, slots });
    }

    return {
      startName,
      duration,
      interests,
      travelerName,
      hotel,
      budgetFormatted,
      days
    };
  }

  function renderItineraryView() {
    if (!currentActiveItinerary || !outputCard) return;

    const data = currentActiveItinerary;
    const hotel = data.hotel;

    // Build Days HTML
    const daysHtml = data.days.map((dayObj, dayIdx) => {
      const slotsHtml = dayObj.slots.map((slot, slotIdx) => `
        <div class="ai-timeline-node">
          <div class="ai-node-time">${slot.time}</div>
          <div class="ai-node-card">
            <div class="ai-node-img-wrap">
              <img src="${slot.img}" alt="${slot.title}" loading="lazy">
              <span class="ai-node-cat">${slot.category}</span>
            </div>
            <div class="ai-node-content">
              <div class="ai-node-header">
                <h4 class="ai-node-title">${slot.title}</h4>
                <div class="ai-dist-badge" title="Jarak dihitung dari penginapan Anda: ${hotel.name}">
                  Jarak: <strong>${slot.distanceFromHotelKm} km</strong> (~${slot.estTimeMin} mnt)
                </div>
              </div>
              <p class="ai-node-desc">${slot.desc}</p>
              
              <div class="ai-node-actions">
                <button type="button" class="btn-swap-recom" onclick="openSwapAlternativeModal(${dayIdx}, ${slotIdx})">
                  Ganti Rekomendasi
                </button>
                <button type="button" class="btn-quick-view-link" onclick="showQuickDetail('${slot.destId}')">
                  Lihat Detail & HTM
                </button>
              </div>
            </div>
          </div>
        </div>
      `).join('');

      return `
        <div class="ai-day-group">
          <div class="ai-day-header">
            <span class="ai-day-num">HARI ${dayObj.dayNumber}</span>
            <span class="ai-day-subtitle">Eksplorasi Rute Terpadu Kepulauan Banggai</span>
          </div>
          <div class="ai-day-nodes-list">
            ${slotsHtml}
          </div>
        </div>
      `;
    }).join('');

    outputCard.innerHTML = `
      <div class="ai-itinerary-header">
        <div class="ai-header-top">
          <span class="ai-plan-badge">REKOMENDASI TERVERIFIKASI DISPARBUD</span>
          <span class="ai-plan-id">ID: BALUT-${Date.now().toString().slice(-4)}</span>
        </div>
        <h3 class="ai-plan-main-title">Rute Wisata Terpadu Banggai Laut (${data.duration} Hari)</h3>
        
        <div class="ai-summary-grid">
          <div class="ai-sum-box">
            <span class="sum-label">Penginapan Basis</span>
            <span class="sum-val">${hotel.name}</span>
            <span class="sum-sub">${hotel.loc}</span>
          </div>
          <div class="ai-sum-box">
            <span class="sum-label">Titik Keberangkatan</span>
            <span class="sum-val">${data.startName}</span>
          </div>
          <div class="ai-sum-box">
            <span class="sum-label">Kategori Wisatawan</span>
            <span class="sum-val">${data.travelerName}</span>
          </div>
          <div class="ai-sum-box">
            <span class="sum-label">Rencana Anggaran</span>
            <span class="sum-val">${data.budgetFormatted}</span>
          </div>
        </div>
      </div>

      <!-- VISUAL INTERACTIVE REALISTIC ROUTE MAP -->
      <div class="ai-map-wrapper">
        <div class="ai-map-header">
          <div>
            <h4 class="ai-map-title">Visualisasi Peta Satelit & Jalur Rute</h4>
            <p class="ai-map-sub">Citra satelit asli kepulauan Banggai Laut menampilkan koordinat nyata hotel basis, rute pelayaran maritim, dan destinasi wisata terpadu.</p>
          </div>
          <div class="ai-map-layer-controls">
            <button type="button" class="map-layer-btn active" id="btnLayerSat">Satelit</button>
            <button type="button" class="map-layer-btn" id="btnLayerDark">Peta Gelap</button>
            <button type="button" class="map-layer-btn" id="btnLayerReset">Pusatkan Rute</button>
          </div>
        </div>
        <div class="ai-map-viewport" id="aiLeafletMap"></div>
        <div class="ai-map-legend">
          <span class="legend-item"><span class="legend-color hotel-dot"></span> Hotel Basis Anda</span>
          <span class="legend-item"><span class="legend-color dest-dot"></span> Titik Destinasi & Kuliner</span>
          <span class="legend-item"><span class="legend-color route-dash"></span> Jalur Pelayaran / Darat</span>
          <span class="legend-item tip-zoom">Klik pin untuk detail lengkap atau scroll untuk zoom in/out</span>
        </div>
      </div>

      <!-- TIMELINE REKOMENDASI -->
      <div class="ai-timeline-stream">
        ${daysHtml}
      </div>

      <!-- TIPS LOGISTIK & AKSI -->
      <div class="ai-itinerary-footer">
        <div class="ai-logistics-box">
          <h5>Panduan Logistik & Tips Perjalanan:</h5>
          <ul>
            <li><strong>Transportasi Laut:</strong> Untuk kunjungan ke Danau Ubur-Ubur (Bokan), gunakan perahu kayu pagi pukul 08:00 dari Pelabuhan Banggai atau sewa perahu charter di Dermaga Monsongan.</li>
            <li><strong>Uang Tunai:</strong> Wajib membawa uang tunai secukupnya, mesin ATM hanya tersedia di pusat kota Pulau Banggai.</li>
            <li><strong>Konservasi:</strong> Jangan memakai tabir surya kimia beracun saat berenang di Danau Ubur-Ubur. Gunakan tabir surya ramah terumbu (reef-safe).</li>
          </ul>
        </div>

        <div class="ai-footer-buttons">
          <button type="button" class="ai-btn-wa-share" id="btnShareWaItinerary">
            Bagikan ke WhatsApp
          </button>
          <button type="button" class="ai-btn-copy" id="btnCopyRawItinerary">
            Salin Teks Rute
          </button>
          <button type="button" class="ai-btn-replan" id="btnReplanAi">
            Atur Ulang Pilihan
          </button>
        </div>
      </div>
    `;

    // Inisialisasi peta Leaflet satelit realistis
    setTimeout(() => {
      initLeafletRouteMap(hotel, data.days);
    }, 60);

    // Pasang listener tombol aksi
    const btnWa = document.getElementById('btnShareWaItinerary');
    if (btnWa) {
      btnWa.addEventListener('click', () => {
        const text = buildWhatsAppItineraryText(data);
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
      });
    }

    const btnCopy = document.getElementById('btnCopyRawItinerary');
    if (btnCopy) {
      btnCopy.addEventListener('click', () => {
        const text = buildWhatsAppItineraryText(data);
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(() => {
            showToast('Seluruh jadwal rute berhasil disalin!');
          });
        }
      });
    }

    const btnReplan = document.getElementById('btnReplanAi');
    if (btnReplan) {
      btnReplan.addEventListener('click', () => {
        resultContainer.style.display = 'none';
        plannerForm.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  // Interactive Realistic Satellite Leaflet Map Engine
  let activeLeafletMapInstance = null;

  function initLeafletRouteMap(hotel, days) {
    const mapEl = document.getElementById('aiLeafletMap');
    if (!mapEl) return;

    if (typeof window.L === 'undefined') {
      console.warn('Leaflet library is not loaded');
      mapEl.innerHTML = '<div style="padding: 40px; text-align: center; color: #94a3b8;">Memuat modul peta satelit...</div>';
      return;
    }

    // Bersihkan instance map lama jika ada agar tidak double init
    if (activeLeafletMapInstance) {
      try {
        activeLeafletMapInstance.remove();
      } catch (e) {
        console.error(e);
      }
      activeLeafletMapInstance = null;
    }

    const hotelLat = hotel.lat || -1.5935;
    const hotelLng = hotel.lng || 123.5012;

    // Inisialisasi Map
    const map = L.map(mapEl, {
      center: [hotelLat, hotelLng],
      zoom: 11,
      minZoom: 8,
      maxZoom: 18,
      zoomControl: true,
      scrollWheelZoom: true
    });
    activeLeafletMapInstance = map;

    // Tile Layers:
    // 1. Esri World Imagery (High-Res Realistic Satellite Banggai Laut)
    const satLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; Esri &mdash; Citra Satelit Banggai Laut',
      maxZoom: 18
    });

    // 2. CartoDB Dark (Sleek Dark Mode Navigation)
    const darkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CartoDB',
      subdomains: 'abcd',
      maxZoom: 19
    });

    // Pasang satelit sebagai default
    satLayer.addTo(map);

    // Kumpulkan seluruh titik koordinat rute
    const routeCoords = [];
    const allBounds = L.latLngBounds();

    // 1. Hotel Marker
    const hotelLatLng = [hotelLat, hotelLng];
    routeCoords.push(hotelLatLng);
    allBounds.extend(hotelLatLng);

    const hotelIcon = L.divIcon({
      className: 'leaflet-custom-div-icon',
      html: `
        <div class="leaflet-hotel-pin" title="${escapeHtml(hotel.name)}">
          <div class="pin-hotel-pulse"></div>
          <div class="pin-hotel-body">
            <span class="hotel-icon">🏨</span>
            <span class="hotel-label">${escapeHtml(hotel.name)}</span>
          </div>
        </div>
      `,
      iconSize: [180, 36],
      iconAnchor: [90, 18]
    });

    const hotelPopupHtml = `
      <div class="leaflet-map-popup">
        <div class="popup-img-wrap">
          <img src="${hotel.gambar || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600'}" alt="${escapeHtml(hotel.name)}">
          <span class="popup-cat-badge">🏨 BASIS PENGINAPAN</span>
        </div>
        <div class="popup-body">
          <span class="popup-badge gold">HOTEL PILIHAN ANDA</span>
          <h4 class="popup-title">${escapeHtml(hotel.name)}</h4>
          <p class="popup-loc">📍 ${escapeHtml(hotel.lokasi || hotel.loc || 'Banggai Laut')}</p>
          <p class="popup-desc">${escapeHtml(hotel.deskripsi || 'Titik awal dan akhir keberangkatan harian Anda.')}</p>
          <div style="font-size:0.75rem; color:#fde68a; font-weight:700; margin-top:4px;">💰 ${escapeHtml(hotel.harga || '')}</div>
        </div>
      </div>
    `;

    L.marker(hotelLatLng, { icon: hotelIcon, zIndexOffset: 1000 })
      .addTo(map)
      .bindPopup(hotelPopupHtml, { maxWidth: 280, className: 'leaflet-custom-popup' });

    // 2. Destinasi Stops Pins
    let stopCounter = 1;
    days.forEach(day => {
      day.slots.forEach(slot => {
        const slotLat = slot.lat || -1.594;
        const slotLng = slot.lng || 123.501;
        const slotLatLng = [slotLat, slotLng];
        routeCoords.push(slotLatLng);
        allBounds.extend(slotLatLng);

        const isCulinary = slot.type === 'kuliner' || (slot.category && slot.category.toLowerCase().includes('kuliner'));
        const shortTitle = slot.title.length > 20 ? slot.title.substring(0, 18) + '...' : slot.title;

        const stopIcon = L.divIcon({
          className: 'leaflet-custom-div-icon',
          html: `
            <div class="leaflet-stop-pin ${isCulinary ? 'culinary' : ''}" title="${escapeHtml(slot.title)}">
              <span class="stop-num">${stopCounter}</span>
              <span class="stop-label">${escapeHtml(shortTitle)}</span>
            </div>
          `,
          iconSize: [160, 32],
          iconAnchor: [16, 16]
        });

        const stopPopupHtml = `
          <div class="leaflet-map-popup">
            <div class="popup-img-wrap">
              <img src="${slot.img}" alt="${escapeHtml(slot.title)}">
              <span class="popup-cat-badge">${escapeHtml(slot.category || 'Wisata')}</span>
            </div>
            <div class="popup-body">
              <span class="popup-time">${slot.time} • Stop #${stopCounter}</span>
              <h4 class="popup-title">${escapeHtml(slot.title)}</h4>
              <p class="popup-dist">Jarak: <strong>${slot.distanceFromHotelKm} km</strong> dari hotel (~${slot.estTimeMin} menit perjalanan)</p>
              <p class="popup-desc">${escapeHtml(slot.desc)}</p>
              <button type="button" class="btn-popup-quick" onclick="showQuickDetail('${slot.destId}')" style="width:100%; margin-top:8px; padding:7px; background:linear-gradient(135deg, #0284c7 0%, #0369a1 100%); border:none; border-radius:8px; color:#fff; font-size:0.75rem; font-weight:800; cursor:pointer;">
                Lihat Detail & HTM Lengkap ➔
              </button>
            </div>
          </div>
        `;

        L.marker(slotLatLng, { icon: stopIcon, zIndexOffset: 500 + stopCounter })
          .addTo(map)
          .bindPopup(stopPopupHtml, { maxWidth: 280, className: 'leaflet-custom-popup' });

        stopCounter++;
      });
    });

    // 3. Garis Rute Pelayaran & Transportasi Terhubung (Glowing Maritime Route)
    if (routeCoords.length > 1) {
      // Outer glow
      L.polyline(routeCoords, {
        color: '#0284c7',
        weight: 6,
        opacity: 0.45,
        lineCap: 'round',
        lineJoin: 'round'
      }).addTo(map);

      // Core animated dashed line
      L.polyline(routeCoords, {
        color: '#38bdf8',
        weight: 2.8,
        opacity: 0.95,
        dashArray: '8, 8',
        lineCap: 'round',
        lineJoin: 'round'
      }).addTo(map);
    }

    // 4. Auto-Fit Bounds
    if (allBounds.isValid()) {
      map.fitBounds(allBounds, {
        padding: [50, 50],
        maxZoom: 13
      });
    }

    // Layer Switcher Buttons
    const btnSat = document.getElementById('btnLayerSat');
    const btnDark = document.getElementById('btnLayerDark');
    const btnReset = document.getElementById('btnLayerReset');

    if (btnSat && btnDark) {
      btnSat.onclick = () => {
        if (!map.hasLayer(satLayer)) {
          map.removeLayer(darkLayer);
          map.addLayer(satLayer);
          btnSat.classList.add('active');
          btnDark.classList.remove('active');
        }
      };

      btnDark.onclick = () => {
        if (!map.hasLayer(darkLayer)) {
          map.removeLayer(satLayer);
          map.addLayer(darkLayer);
          btnDark.classList.add('active');
          btnSat.classList.remove('active');
        }
      };
    }

    if (btnReset && allBounds.isValid()) {
      btnReset.onclick = () => {
        map.fitBounds(allBounds, {
          padding: [50, 50],
          maxZoom: 13
        });
      };
    }

    // Invalidate size agar responsif dan tidak terpotong dalam modal
    setTimeout(() => { map.invalidateSize(); }, 200);
    setTimeout(() => { map.invalidateSize(); }, 500);
  }

  // Format Pesan WhatsApp Terstruktur
  function buildWhatsAppItineraryText(data) {
    let msg = `✨ *RENCANA PERJALANAN BANGGAI LAUT* ✨\n`;
    msg += `_Disusun oleh Si-PANDU AI Trip Planner_\n`;
    msg += `--------------------------------------\n`;
    msg += `⏳ *Durasi:* ${data.duration} Hari\n`;
    msg += `🏨 *Hotel Basis:* ${data.hotel.name} (${data.hotel.loc})\n`;
    msg += `📍 *Titik Berangkat:* ${data.startName}\n`;
    msg += `👥 *Teman Perjalanan:* ${data.travelerName}\n`;
    msg += `💰 *Budget:* ${data.budgetFormatted}\n\n`;

    data.days.forEach(d => {
      msg += `📅 *HARI ${d.dayNumber}*\n`;
      d.slots.forEach(s => {
        msg += `• [${s.time}] *${s.title}*\n  📍 Jarak dari hotel: ${s.distanceFromHotelKm} km (~${s.estTimeMin} menit)\n`;
      });
      msg += `\n`;
    });

    msg += `💡 *Tips:* Sediakan uang tunai cukup & gunakan tabir surya ramah terumbu karang.\n`;
    msg += `Info lengkap: https://si-pandu.banggailautkab.go.id/`;
    return msg;
  }

  // Modal Swap Alternatif
  window.openSwapAlternativeModal = function(dayIdx, slotIdx) {
    if (!currentActiveItinerary) return;
    const day = currentActiveItinerary.days[dayIdx];
    if (!day) return;
    const curSlot = day.slots[slotIdx];
    if (!curSlot) return;

    currentSwapContext = { dayIdx, slotIdx, curSlot };

    const modal = document.getElementById('aiSwapModal');
    const listEl = document.getElementById('aiSwapOptionsList') || document.getElementById('aiSwapList');
    const curTitleEl = document.getElementById('swapCurrentTitle');

    if (curTitleEl) curTitleEl.textContent = curSlot.title;

    // Filter destinasi alternatif (kecualikan yang sedang aktif)
    const hotel = currentActiveItinerary.hotel;
    const alternatives = allWisata.filter(w => w.id !== curSlot.destId);

    if (listEl) {
      listEl.innerHTML = alternatives.map(alt => {
        const distKm = parseFloat(calculateDistance(hotel.lat, hotel.lng, alt.lat || -1.594, alt.lng || 123.501).toFixed(1));
        const estMin = Math.max(8, Math.round((distKm / 30) * 60));

        return `
          <div class="swap-option-card">
            <img src="${alt.gambar}" alt="${alt.nama_tempat}" class="swap-option-img" loading="lazy">
            <div class="swap-option-info">
              <span class="swap-option-cat">${alt.nama_kategori}</span>
              <h4 class="swap-option-title">${alt.nama_tempat}</h4>
              <p class="swap-option-desc">${alt.deskripsi_id ? alt.deskripsi_id.substring(0, 95) + '...' : ''}</p>
              <div class="swap-option-meta">
                <span>📍 ${alt.lokasi}</span>
                <span>📏 ${distKm} km dari hotel (~${estMin} mnt)</span>
                <span>🎟️ ${alt.htm || 'Gratis'}</span>
              </div>
            </div>
            <button type="button" class="btn-select-swap" onclick="applySwapChoice(${alt.id})">
              Pilih Ini ✓
            </button>
          </div>
        `;
      }).join('');
    }

    if (modal) {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  window.applySwapChoice = function(newWisataId) {
    if (!currentSwapContext || !currentActiveItinerary) return;
    const { dayIdx, slotIdx } = currentSwapContext;
    const newWisata = allWisata.find(w => w.id === newWisataId);
    if (!newWisata) return;

    const hotel = currentActiveItinerary.hotel;
    const distKm = parseFloat(calculateDistance(hotel.lat, hotel.lng, newWisata.lat || -1.594, newWisata.lng || 123.501).toFixed(1));
    const estMin = Math.max(8, Math.round((distKm / 30) * 60));

    // Update slot
    const slot = currentActiveItinerary.days[dayIdx].slots[slotIdx];
    slot.destId = newWisata.id;
    slot.title = newWisata.nama_tempat;
    slot.category = newWisata.nama_kategori;
    slot.desc = newWisata.deskripsi_id;
    slot.img = newWisata.gambar;
    slot.lat = newWisata.lat || -1.594;
    slot.lng = newWisata.lng || 123.501;
    slot.distanceFromHotelKm = distKm;
    slot.estTimeMin = estMin;

    // Tutup modal swap
    const modal = document.getElementById('aiSwapModal');
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    showToast(`Rekomendasi diubah menjadi "${newWisata.nama_tempat}"`);

    // Render ulang timeline dan peta
    renderItineraryView();
  };

  // Close swap modal handlers
  const closeSwapBtn = document.getElementById('aiSwapModalClose') || document.getElementById('aiSwapClose');
  const swapModal = document.getElementById('aiSwapModal');
  if (closeSwapBtn && swapModal) {
    closeSwapBtn.addEventListener('click', () => {
      swapModal.classList.remove('open');
      swapModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
    swapModal.addEventListener('click', (e) => {
      if (e.target === swapModal) {
        swapModal.classList.remove('open');
        swapModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

  // ==========================================
  // NATURAL LANGUAGE CHAT KNOWLEDGE ENGINE
  // ==========================================
  function generateAiChatAnswer(query) {
    const q = query.toLowerCase();

    // 1. Pertanyaan Kasus Khusus: Ombak Bulan Desember & Balita
    if ((q.includes('ombak') || q.includes('gelombang') || q.includes('cuaca')) && (q.includes('desember') || q.includes('balita') || q.includes('anak') || q.includes('mbuang'))) {
      return `
        <strong>🌊 Analisis Ombak Bulan Desember & Keamanan Anak Balita ke Mbuang-Mbuang:</strong><br><br>
        Bulan <strong>Desember</strong> di Kepulauan Banggai Laut memasuki <em>Musim Angin Barat (Muson Barat)</em>. Pada periode ini, perairan luar Teluk Tolo dan jalur penyeberangan menuju Kepulauan Bokan (Danau Ubur-Ubur) terkadang mengalami ombak sedang hingga tinggi (1.5 – 2.2 meter).<br><br>
        <strong>Panduan Keamanan Khusus untuk Membawa Balita:</strong><br>
        1. <strong>Waktu Berangkat Terbaik:</strong> Wajib menyeberang pada <em>pagi hari sekali</em> (pukul 06:30 – 08:00 WITA) saat angin laut masih tenang dan permukaan air relatif teduh.<br>
        2. <strong>Pilihan Armada:</strong> Hindari perahu katinting kayu kecil terbuka. Sangat disarankan menyewa <em>Speedboat Wisata Mesin Ganda tertutup</em> atau menumpang kapal penyeberangan bodi besar yang lebih stabil.<br>
        3. <strong>Pelampung Khusus:</strong> Pastikan balita telah mengenakan pelampung (<em>life jacket</em>) ukuran anak sejak berada di dermaga penyeberangan.<br>
        4. <strong>Kondisi di Danau Ubur-Ubur:</strong> Begitu tiba di lokasi Danau Mbuang-Mbuang, air danau <strong>sangat tenang (tanpa ombak)</strong> karena terkurung oleh perbukitan batu karst daratan. Ubur-uburnya pun 100% tanpa sengat sehingga sangat aman dan ramah untuk balita dengan ban pelampung.<br><br>
        <em>💡 Tips Waktu Terbaik:</em> Jika Anda mencari perairan laut yang tenang sebening kaca untuk keluarga, bulan paling tenang adalah <strong>Maret – Mei</strong> dan <strong>September – November</strong>.
      `;
    }

    // 2. Pertanyaan Kasus Khusus: Sewa Motor Dekat Pelabuhan Jam 6 Pagi
    if ((q.includes('sewa motor') || q.includes('rental motor') || q.includes('ojek')) && (q.includes('pelabuhan') || q.includes('jam 6') || q.includes('pagi') || q.includes('subuh'))) {
      return `
        <strong>🛵 Rekomendasi Sewa Motor Dekat Pelabuhan Banggai (Buka / Standby Jam 06:00 WITA):</strong><br><br>
        Di sekitar kawasan <strong>Pelabuhan Banggai</strong> (Kelurahan Lompio dan pusat pertokoan kota), sebagian besar penyedia jasa rental motor lokal <strong>siap melayani penyerahan unit langsung di dermaga pelabuhan pukul 06:00 WITA</strong> bertepatan dengan bersandarnya kapal penumpang dari Luwuk.<br><br>
        <strong>Informasi Penting & Tata Cara:</strong><br>
        • <strong>Tarif Sewa Reguler:</strong> Rp 75.000 – Rp 100.000 / 24 Jam (pilihan unit matic: Honda Beat, Scoopy, Vario dalam kondisi prima).<br>
        • <strong>Fasilitas:</strong> Sudah termasuk 2 helm berstandar SNI dan jas hujan.<br>
        • <strong>Langkah Wajib:</strong> Anda disarankan melakukan koordinasi via <strong>WhatsApp agen sewa 1 hari sebelumnya</strong> saat masih di Luwuk, agar pengelola rental dapat menunggu di pintu keluar dermaga dengan unit motor siap pakai.<br>
        • <strong>Jaminan:</strong> Cukup menitipkan identitas fisik (KTP/SIM) selama masa peminjaman.<br><br>
        <em>💡 Tips:</em> Minta bensin terisi awal untuk memudahkan perjalanan Anda langsung menuju penginapan atau sarapan pagi kuliner khas Banggai.
      `;
    }

    if (q.includes('ubur') || q.includes('mbuang') || q.includes('danau')) {
      return `
        <strong>🏖️ Rute Menuju Danau Ubur-Ubur Mbuang-Mbuang:</strong><br>
        1. Dari <strong>Pelabuhan Luwuk</strong>, naik kapal malam (KM. Fungka Permata) pukul 20:00 WITA menuju Pelabuhan Banggai (tiba ~05:00 WITA, tiket Rp 70.000).<br>
        2. Dari <strong>Pelabuhan Banggai</strong>, lanjutkan pelayaran ke Kepulauan Bokan (Desa Mbuang-Mbuang) menggunakan:<br>
        • <em>Kapal Kayu Reguler</em>: Rp 45.000 / orang (waktu tempuh 2.5 - 3 jam).<br>
        • <em>Speedboat Charter</em>: Sekitar Rp 900.000 - Rp 1.500.000 / rombongan (waktu tempuh 50 menit).<br>
        3. Danau ini adalah habitat <strong>ubur-ubur tanpa sengat</strong> (Golden & Moon Jellyfish) yang sangat langka di dunia!
      `;
    }

    if (q.includes('jadwal') || q.includes('kapal') || q.includes('fungka') || q.includes('barcelona') || q.includes('tiket')) {
      return `
        <strong>⛴️ Ringkasan Jadwal Pelayaran Utama Banggai Laut:</strong><br>
        • <strong>KM. Fungka Permata (Luwuk ➔ Banggai)</strong>: Beroperasi reguler setiap malam pukul 20:00 WITA, tiba pukul 05:00 WITA. Tiket: ~Rp 70.000 - Rp 95.000.<br>
        • <strong>KM. Cepat Express Bahari (Luwuk ➔ Banggai)</strong>: Pagi pukul 09:00 WITA (3 Jam perjalanan). Tiket Rp 180.000.<br>
        • <strong>Kapal Penyeberangan Bokan / Labobo</strong>: Berangkat pagi pukul 08:30 WITA dari Pelabuhan Banggai.<br>
        <em>Tip: Anda bisa melihat daftar jadwal lengkap & jam operasional pada menu <a href="panduan.html" style="color:#f59e0b; font-weight:bold;">Jadwal Kapal & Panduan</a>.</em>
      `;
    }

    if (q.includes('hotel') || q.includes('penginapan') || q.includes('homestay') || q.includes('tidur')) {
      return `
        <strong>🏨 Rekomendasi Akomodasi di Banggai Laut:</strong><br>
        1. <strong>Mbuang-Mbuang Overwater Homestay</strong>: Pondok panggung tradisional di atas air laut jernih toska di Kepulauan Bokan. Cocok untuk menikmati sunrise kepulauan (Rp 250.000 - 450.000/malam).<br>
        2. <strong>Hotel & Wisma Pusat Kota Banggai</strong>: Tersedia beberapa penginapan nyaman berjarak 5 menit dari Pelabuhan Banggai dan Keraton (Rp 150.000 - 300.000/malam).
      `;
    }

    if (q.includes('kuliner') || q.includes('makan') || q.includes('ikan') || q.includes('sinole') || q.includes('tetu')) {
      return `
        <strong>🍽️ Kuliner Wajib Khas Banggai Laut:</strong><br>
        • <strong>Sinole</strong>: Olahan sagu sangrai parut kelapa gurih, pendamping sempurna ikan kuah asam segar.<br>
        • <strong>Ikan Cakalang Bakar Sambal Dabu-Dabu</strong>: Hasil tangkapan segar nelayan Banggai yang dibakar dengan bumbu rempah lokal.<br>
        • <strong>Kue Tetu</strong>: Kue perahu pandan dengan gula aren meleleh, teman santai minum kopi khas Banggai.
      `;
    }

    if (q.includes('budget') || q.includes('biaya') || q.includes('hemat') || q.includes('ongkos')) {
      return `
        <strong>💰 Estimasi Budget Liburan di Banggai Laut:</strong><br>
        • <strong>Trip Backpacker 2D1N</strong>: Sekitar Rp 450.000 - Rp 650.000 / orang.<br>
        • <strong>Trip Island Hopping 3D2N</strong>: Sekitar Rp 900.000 - Rp 1.500.000 / orang (Termasuk sewa perahu ke Bokan, Danau Ubur-Ubur, dan homestay terapung).
      `;
    }

    if (q.includes('sejarah') || q.includes('keraton') || q.includes('budaya') || q.includes('makam') || q.includes('tumbe')) {
      return `
        <strong>🏛️ Warisan Sejarah & Budaya Kerajaan Banggai:</strong><br>
        • <strong>Keraton Banggai</strong>: Bangunan kayu megah abad lampau yang memuat singgasana raja dan pusaka kerajaan.<br>
        • <strong>Upacara Malabot Tumbe</strong>: Ritual sakral penghantaran telur burung maleo oleh masyarakat adat Batui ke Keraton Banggai.<br>
        • <strong>Makam Raja-Raja</strong>: Kompleks cagar budaya spiritual di Lompio yang sakral dan penuh nilai historis.
      `;
    }

    return `
      Terima kasih atas pertanyaannya! Di <strong>Banggai Laut</strong>, Anda bisa menjelajahi keajaiban maritim dunia seperti <strong>Danau Ubur-Ubur Mbuang-Mbuang</strong>, laguna jernih <strong>Paisubatu</strong>, sunset <strong>Tanjung Gundul</strong>, dan cagar sejarah <strong>Keraton Banggai</strong>.<br><br>
      Untuk rute terpadu otomatis sesuai preferensi Anda, Anda bisa mencoba tab <strong>"🧭 Susun Rute Cepat"</strong> di atas, dan AI akan otomatis menghitung jarak dari hotel dan menampilkan peta visual interaktif!
    `;
  }
}

// =========================================================
// 11. BOOTSTRAP INISIALISASI HALAMAN
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Sistem Bahasa & Efek
  initLanguage();
  initMobileNav();
  initScrollEffects();
  initSecretAdminAccess();
  initBalutLiveClock();
  initHeroBannerSlider();
  initCategoryMenuCards();
  initViewMoreFeature();
  initQuickDetailModal();
  initAiRouteAssistant();

  // 2. Inisialisasi Papan Jadwal Kapal di Beranda
  initHomeShipsBoard();

  // 3A. Inisialisasi Kartu Destinasi Beranda (1 Baris Saja / Paging ‹ ›)
  if (document.getElementById('homeDestinasiGrid')) {
    renderHomeDestinasiCards();
    initHomeDestinasiNav();
  }

  // 3B. Inisialisasi Katalog Destinasi Lengkap & Filter (destinasi.html)
  if (document.getElementById('destinasiGrid')) {
    renderWisataCards(allWisata);

    // Live Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', filterWisata);
    }

    // Fitur Terdekat
    initNearbyFeature();
  }

  // Fetch API backend jika tersedia (graceful fallback ke allWisata)
  fetch('http://localhost:3000/api/wisata')
    .then(res => res.json())
    .then(result => {
      if (result.status === 'success' && Array.isArray(result.data) && result.data.length > 0) {
        const apiMap = new Map(result.data.map(d => [d.id, d]));
        allWisata = allWisata.map(local => {
          const apiItem = apiMap.get(local.id);
          return apiItem ? { ...local, ...apiItem } : local;
        });
        if (document.getElementById('homeDestinasiGrid')) renderHomeDestinasiCards();
        if (document.getElementById('destinasiGrid')) filterWisata();
      }
    })
    .catch(() => {
      // Backend offline -> defaultWisataData tetap berjalan sempurna
    });

  // 4. Inisialisasi Jadwal Kapal & Panduan (panduan.html)
  if (document.getElementById('scheduleTableBody')) {
    initScheduleTable();
  }

  if (document.getElementById('transportasiGrid')) {
    renderKapal(allKapal);
    renderPanduan(defaultPanduanData);

    const searchKapal = document.getElementById('searchKapal');
    if (searchKapal) {
      searchKapal.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase().trim();
        const filtered = allKapal.filter(k => 
          (k.nama_kapal && k.nama_kapal.toLowerCase().includes(q)) ||
          (k.rute_asal && k.rute_asal.toLowerCase().includes(q)) ||
          (k.rute_asal_en && k.rute_asal_en.toLowerCase().includes(q)) ||
          (k.rute_tujuan && k.rute_tujuan.toLowerCase().includes(q)) ||
          (k.rute_tujuan_en && k.rute_tujuan_en.toLowerCase().includes(q)) ||
          (k.jenis && k.jenis.toLowerCase().includes(q))
        );
        renderKapal(filtered);
      });
    }

    // Backend fetch untuk kapal
    fetch('http://localhost:3000/api/transportasi')
      .then(res => res.json())
      .then(result => {
        if (result.status === 'success' && Array.isArray(result.data) && result.data.length > 0) {
          allKapal = result.data;
          renderKapal(allKapal);
        }
      })
      .catch(() => {});

    // Backend fetch untuk panduan
    fetch('http://localhost:3000/api/panduan')
      .then(res => res.json())
      .then(result => {
        if (result.status === 'success' && Array.isArray(result.data) && result.data.length > 0) {
          renderPanduan(result.data);
        }
      })
      .catch(() => {});
  }

  // 5. Inisialisasi Detail Page (detail.html)
  if (document.getElementById('destTitle')) {
    renderDetailPage();
  }
});