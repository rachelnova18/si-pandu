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
    
    // Hero Section
    heroPill: "✨ Portal Resmi Dinas Pariwisata & Kebudayaan",
    heroTitle: "Discover Your Perfect<br>Island Getaway in Banggai Laut",
    heroDesc: "Jelajahi gugusan pulau karang eksotis, laguna sebening kristal, serta warisan sejarah Kerajaan Banggai melalui sistem navigasi pariwisata terpadu.",
    searchPlaceholder: "Cari destinasi pantai, pulau, sejarah, hotel, kuliner...",
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

    // Intro Section
    mapFloatingLabel: "🗺️ Peta Gugusan Kepulauan Banggai Laut",
    introTag: "Mengenal Daerah & Instansi",
    introTitle: "Pesona Maritim Kepulauan Banggai Laut & Peran Disparbud",
    introP1: "<strong>Kabupaten Banggai Laut (Balut)</strong> adalah wilayah kepulauan eksotis di Provinsi Sulawesi Tengah yang beribu kota di Banggai. Wilayah ini terdiri dari gugusan pulau indah—mulai dari Pulau Banggai, Pulau Labobo, Pulau Bangkurung, hingga Kepulauan Bokan—yang menyimpan kekayaan terumbu karang dunia dan warisan sejarah Kerajaan Banggai.",
    introP2: "<strong>Dinas Pariwisata dan Kebudayaan (Disparbud) Kabupaten Banggai Laut</strong> hadir melalui inovasi <em>Si-PANDU</em> sebagai pusat informasi terpadu untuk memudahkan wisatawan merencanakan rute pelayaran antar-pulau, menemukan destinasi terbaik, sekaligus melestarikan cagar budaya leluhur.",
    stat1Num: "4+",
    stat1Label: "Gugusan Pulau Utama",
    stat2Num: "94%",
    stat2Label: "Wilayah Perairan & Bahari",
    stat3Num: "2 Bahasa",
    stat3Label: "Layanan Informasi Wisata",

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

    // Kadis Section
    kadisTag: "Sambutan Kepala Dinas",
    kadisTitle: "Menyambut Wisatawan di Permata Bahari Sulawesi Tengah",
    kadisQuote: "\"Selamat datang di portal resmi Si-PANDU. Kabupaten Banggai Laut menyimpan potensi pariwisata bahari, keindahan bawah laut, serta warisan sejarah Kerajaan Banggai yang luar biasa. Melalui platform digital Dinas Pariwisata dan Kebudayaan ini, kami berkomitmen menghadirkan informasi destinasi dan jadwal transportasi laut yang akurat, ramah, dan mudah diakses oleh seluruh wisatawan.\"",
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

    // Hero Section
    heroPill: "✨ Official Tourism & Culture Agency Portal",
    heroTitle: "Discover Your Perfect<br>Island Getaway in Banggai Laut",
    heroDesc: "Explore exotic coral archipelagos, crystal-clear lagoons, and historical heritage of the Banggai Kingdom through an integrated tourism navigation system.",
    searchPlaceholder: "Search beaches, islands, history, hotels, culinary...",
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

    // Intro Section
    mapFloatingLabel: "🗺️ Banggai Laut Archipelago Map",
    introTag: "About The Region & Agency",
    introTitle: "Maritime Splendor of Banggai Laut & Disparbud's Role",
    introP1: "<strong>Banggai Laut Regency (Balut)</strong> is an exotic island realm in Central Sulawesi Province with Banggai as its capital. Comprising pristine island chains—from Banggai Island, Labobo, Bangkurung, to the Bokan Archipelago—it preserves world-class coral reefs and the royal history of the Banggai Kingdom.",
    introP2: "The <strong>Tourism and Culture Office (Disparbud) of Banggai Laut Regency</strong> introduces <em>Si-PANDU</em> as an integrated digital portal to help travelers navigate inter-island ferry schedules, find top attractions, and preserve authentic cultural heritage.",
    stat1Num: "4+",
    stat1Label: "Main Island Groups",
    stat2Num: "94%",
    stat2Label: "Marine & Water Territory",
    stat3Num: "Bilingual",
    stat3Label: "Visitor Information Services",

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

    // Kadis Section
    kadisTag: "Head of Agency's Welcome",
    kadisTitle: "Welcoming Travelers to Central Sulawesi's Maritime Jewel",
    kadisQuote: "\"Welcome to the official Si-PANDU portal. Banggai Laut Regency preserves extraordinary marine tourism potentials, underwater wonders, and the historical legacy of the Banggai Kingdom. Through this digital platform, we are committed to delivering accurate, hospitable, and accessible destination information and sea transportation schedules for all travelers.\"",
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
  if (document.getElementById('destinasiGrid')) {
    filterWisata();
  }
  if (document.getElementById('transportasiGrid')) {
    renderKapal(allKapal);
    renderPanduan(defaultPanduanData);
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
  const backdrop = document.getElementById('navBackdrop');

  if (!toggleBtn || !navLinks) return;

  function toggleMenu(show) {
    const isOpen = show !== undefined ? show : !navLinks.classList.contains('open');
    if (isOpen) {
      navLinks.classList.add('open');
      toggleBtn.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      if (backdrop) backdrop.classList.add('visible');
      document.body.style.overflow = 'hidden'; // cegah scroll background di HP
    } else {
      navLinks.classList.remove('open');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      if (backdrop) backdrop.classList.remove('visible');
      document.body.style.overflow = '';
    }
  }

  toggleBtn.addEventListener('click', () => toggleMenu());
  if (backdrop) backdrop.addEventListener('click', () => toggleMenu(false));

  // Tutup menu saat salah satu link diklik di HP
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
}

// =========================================================
// 4. SCROLL REVEAL & HEADER SHADOW
// =========================================================
function initScrollEffects() {
  const header = document.getElementById('mainHeader');
  
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
}

// =========================================================
// 5. INSTAGRAM STORY / CAROUSEL SLIDER (HERO SECTION)
// =========================================================
let currentSlideIndex = 0;
let slideInterval = null;
const SLIDE_DURATION = 5000;

function initHeroSlider() {
  const slides = document.querySelectorAll('.ig-slide');
  const bars = document.querySelectorAll('.ig-bar');
  const dots = document.querySelectorAll('.ig-dot');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  const heroSection = document.getElementById('heroSection');

  if (slides.length === 0) return;

  function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    currentSlideIndex = index;

    // Active slide
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    // Active story progress bar
    bars.forEach((bar, i) => {
      bar.classList.toggle('active', i === index);
      const fill = bar.querySelector('.ig-fill');
      if (fill) {
        if (i < index) {
          fill.style.width = '100%';
        } else if (i === index) {
          fill.style.width = '0%';
          // Trigger CSS transition animation
          setTimeout(() => { fill.style.width = '100%'; }, 20);
        } else {
          fill.style.width = '0%';
        }
      }
    });

    // Active dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function next() {
    showSlide(currentSlideIndex + 1);
  }

  function prev() {
    showSlide(currentSlideIndex - 1);
  }

  function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(next, SLIDE_DURATION);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      next();
      resetTimer();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prev();
      resetTimer();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      if (!isNaN(idx)) {
        showSlide(idx);
        resetTimer();
      }
    });
  });

  // Touch Swipe ala Instagram Stories untuk HP
  let touchStartX = 0;
  let touchEndX = 0;

  if (heroSection) {
    heroSection.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroSection.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const swipeThreshold = 45;
    if (touchEndX < touchStartX - swipeThreshold) {
      // Geser ke kiri (Next)
      next();
      resetTimer();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      // Geser ke kanan (Prev)
      prev();
      resetTimer();
    }
  }

  showSlide(0);
  resetTimer();
}

// =========================================================
// 6. DATA LENGKAP KATALOG WISATA (BILINGUAL & KULINER)
// =========================================================
const defaultWisataData = [
  {
    id: 1,
    nama_tempat: "Keraton Banggai",
    nama_tempat_en: "Banggai Royal Palace",
    nama_kategori: "Sejarah",
    lokasi: "Kelurahan Lompio, Kec. Banggai",
    lokasi_en: "Lompio Village, Banggai Sub-district",
    deskripsi_id: "Bangunan kayu bersejarah peninggalan Kerajaan Banggai lengkap dengan ruang singgasana raja, cagar pusaka, dan meriam kuno bernilai sejarah tinggi.",
    deskripsi_en: "Historic wooden palace of the Banggai Kingdom featuring royal throne chambers, heirloom artifacts, and centuries-old defensive cannons.",
    gambar: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600",
    lat: -1.594,
    lng: 123.501,
    jam: "08:00 - 17:00 WITA",
    tiket: "Gratis / Donasi Sukarela",
    tiket_en: "Free / Voluntary Donation",
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
    lat: -1.542,
    lng: 123.518,
    jam: "Setiap Hari (24 Jam)",
    tiket: "Rp 5.000 / Org",
    tiket_en: "IDR 5,000 / Person",
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
    lat: -1.612,
    lng: 123.489,
    jam: "07:00 - 18:00 WITA",
    tiket: "Rp 10.000 / Org",
    tiket_en: "IDR 10,000 / Person",
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
    lat: -1.645,
    lng: 123.465,
    jam: "06:30 - 17:30 WITA",
    tiket: "Sewa Perahu / Trip",
    tiket_en: "Boat Charter / Trip",
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
    deskripsi_id: "Keajaiban dunia danau air asin alami yang dihuni jutaan ubur-ubur tanpa sengat (stingless jellyfish) di tengah labirin tebing karang karst.",
    deskripsi_en: "A global wonder: a secluded marine lake harboring millions of stingless jellyfish enclosed by dramatic limestone karst formations.",
    gambar: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600",
    lat: -1.782,
    lng: 123.612,
    jam: "07:00 - 17:00 WITA",
    tiket: "Rp 25.000 / Org",
    tiket_en: "IDR 25,000 / Person",
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
    lat: -1.587,
    lng: 123.512,
    jam: "08:00 - 17:00 WITA",
    tiket: "Gratis / Donasi",
    tiket_en: "Free / Donation",
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
    lat: -1.598,
    lng: 123.504,
    jam: "08:00 - 17:00 WITA",
    tiket: "Gratis / Donasi",
    tiket_en: "Free / Donation",
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
    lat: -1.621,
    lng: 123.535,
    jam: "Setiap Hari (24 Jam)",
    tiket: "Rp 5.000 / Kendaraan",
    tiket_en: "IDR 5,000 / Vehicle",
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
    lat: -1.572,
    lng: 123.491,
    jam: "07:30 - 17:00 WITA",
    tiket: "Rp 5.000 / Org",
    tiket_en: "IDR 5,000 / Person",
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
    deskripsi_id: "Pusat kuliner khas Banggai Laut yang menyajikan Sinole (olahan sagu kelapa gurih), Ikan Bakar cakalang segar berbumbu dabu-dabu, dan kopi rempah.",
    deskripsi_en: "Waterfront gastronomic hub serving traditional Sinole (savory toasted sago & coconut), ultra-fresh grilled fish with zesty dabu-dabu sambal, and spiced coffee.",
    gambar: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600",
    lat: -1.592,
    lng: 123.503,
    jam: "16:00 - 23:00 WITA",
    tiket: "Mulai Rp 15.000 / Porsi",
    tiket_en: "From IDR 15,000 / Portion",
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
    lat: -1.785,
    lng: 123.615,
    jam: "Check-in 14:00 | Check-out 12:00",
    tiket: "Mulai Rp 250.000 / Malam",
    tiket_en: "From IDR 250,000 / Night",
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
    lat: -1.595,
    lng: 123.502,
    jam: "06:00 - 22:00 WITA",
    tiket: "Mulai Rp 10.000",
    tiket_en: "From IDR 10,000",
    highlights: ["Kue Tetu Daun Pandan Asli", "Kopi Hitam Tradisional Banggai", "Suasana Santai Dekat Keraton"],
    highlights_en: ["Authentic Tetu Pandan Cakes", "Traditional Banggai Black Coffee", "Cozy Ambience Near the Palace"]
  }
];

let allWisata = [...defaultWisataData];
let activeCategory = 'all';

function renderWisataCards(dataArray) {
  const grid = document.getElementById('destinasiGrid');
  if (!grid) return;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.id;

  if (dataArray.length === 0) {
    grid.innerHTML = `<div class="empty-state-box"><p>${t.destNotFound}</p></div>`;
    return;
  }

  grid.innerHTML = dataArray.map(item => {
    const title = (currentLang === 'en' && item.nama_tempat_en) ? item.nama_tempat_en : item.nama_tempat;
    const desc = (currentLang === 'en' && item.deskripsi_en) ? item.deskripsi_en : (item.deskripsi_id || item.deskripsi || '');
    const loc = (currentLang === 'en' && item.lokasi_en) ? item.lokasi_en : (item.lokasi || 'Banggai Laut');
    const distanceBadge = item._distanceKm !== undefined ? `<span class="distance-badge">📍 ${(item._distanceKm).toFixed(1)} km</span>` : '';

    return `
      <article class="wisata-card reveal-item revealed" data-id="${item.id}">
        <div class="wisata-img-wrapper">
          <img src="${item.gambar || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600'}" alt="${title}" loading="lazy">
          <span class="wisata-cat-badge">${item.nama_kategori || 'Wisata'}</span>
          ${distanceBadge}
        </div>
        <div class="wisata-body">
          <span class="wisata-loc">📍 ${loc}</span>
          <h3>${title}</h3>
          <p>${desc}</p>
          <div class="wisata-footer">
            <a href="detail.html?id=${item.id}" class="wisata-btn">${t.destBtnDetail}</a>
          </div>
        </div>
      </article>
    `;
  }).join('');
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

// =========================================================
// 9. DETAIL DESTINASI DINAMIS (detail.html)
// =========================================================
function renderDetailPage() {
  const destTitleEl = document.getElementById('destTitle');
  if (!destTitleEl) return;

  const urlParams = new URLSearchParams(window.location.search);
  const destId = parseInt(urlParams.get('id'), 10) || 1;

  const item = allWisata.find(d => d.id === destId) || allWisata[0];
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
  if (infoTicket) infoTicket.textContent = (currentLang === 'en' && item.tiket_en) ? item.tiket_en : (item.tiket || 'Gratis');

  // External Maps Link
  const btnGmaps = document.getElementById('btnGmapsExternal');
  if (btnGmaps) {
    btnGmaps.href = `https://maps.google.com/?q=${encodeURIComponent(item.nama_tempat + ' Banggai Laut')}`;
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
// 11. BOOTSTRAP INISIALISASI HALAMAN
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Sistem Bahasa & Efek
  initLanguage();
  initMobileNav();
  initScrollEffects();
  initSecretAdminAccess();

  // 2. Inisialisasi Hero Slider (Halaman Beranda)
  initHeroSlider();

  // 3. Inisialisasi Katalog Wisata & Filter (Halaman Beranda)
  if (document.getElementById('destinasiGrid')) {
    renderWisataCards(allWisata);

    // Filter Kategori (Floating Quickbar)
    document.querySelectorAll('.qb-item').forEach(item => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.qb-item').forEach(c => c.classList.remove('active'));
        item.classList.add('active');
        activeCategory = item.getAttribute('data-filter') || 'all';
        filterWisata();

        // Scroll halus ke katalog di layar HP
        if (window.innerWidth <= 900) {
          const destSec = document.getElementById('destinasi');
          if (destSec) {
            destSec.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // Live Search
    const searchInput = document.getElementById('searchInput');
    const heroSearchForm = document.getElementById('heroSearchForm');

    if (searchInput) {
      searchInput.addEventListener('input', filterWisata);
    }

    if (heroSearchForm) {
      heroSearchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        filterWisata();
        const destSec = document.getElementById('destinasi');
        if (destSec) {
          destSec.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Fitur Terdekat
    initNearbyFeature();

    // Fetch API backend jika tersedia (graceful fallback ke allWisata)
    fetch('http://localhost:3000/api/wisata')
      .then(res => res.json())
      .then(result => {
        if (result.status === 'success' && Array.isArray(result.data) && result.data.length > 0) {
          // Merge data backend dengan data lokal agar gambar dan highlights tetap kaya
          const apiMap = new Map(result.data.map(d => [d.id, d]));
          allWisata = allWisata.map(local => {
            const apiItem = apiMap.get(local.id);
            return apiItem ? { ...local, ...apiItem } : local;
          });
          filterWisata();
        }
      })
      .catch(() => {
        // Backend offline -> defaultWisataData tetap berjalan sempurna
      });
  }

  // 4. Inisialisasi Jadwal Kapal & Panduan (panduan.html)
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