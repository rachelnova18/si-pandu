/**
 * Si-PANDU Banggai Laut - Admin Command Center Script
 * Mengelola Direktori Wisata, Jadwal Kapal, Banner Hero, dan Status Sistem
 */

// Konfigurasi Endpoint REST API Backend Si-PANDU
const API_BASE = (window.location.origin.includes('3000') || window.location.origin.includes('localhost:3000'))
  ? '' 
  : 'http://localhost:3000';

// Master Default Banners
const DEFAULT_HERO_BANNERS = [
  {
    id: 1,
    tag: "CAGAR BUDAYA 5 ABAD • KERATON BANGGAI",
    title: "UPACARA ADAT SAKRAL MALABOT TUMBE",
    subtitle: "Tradisi sakral pelayaran penghantaran telur burung maleo menuju Keraton Banggai oleh pemangku adat Batui.",
    bgImage: "../assets/img/hero-card.jpg"
  },
  {
    id: 2,
    tag: "DESTINASI UNGGULAN • BOKAN KEPULAUAN",
    title: "DANAU UBUR-UBUR MBUANG-MBUANG",
    subtitle: "Berenang bersama jutaan ubur-ubur emas jinak tanpa sengat di laguna karst alami perairan Banggai Laut.",
    bgImage: "../assets/img/ubur-ubur.jpg"
  },
  {
    id: 3,
    tag: "PESONA PASIR TIMBUL • WISATA BAHARI",
    title: "PASIR TIMBUL LAMBANGAN PAUNO",
    subtitle: "Daratan pasir putih memanjang di tengah lautan toska bening untuk pengalaman relaksasi tak terlupakan.",
    bgImage: "../assets/img/lambangan-pauno.jpg"
  },
  {
    id: 4,
    tag: "PANORAMA TEBING LAUT • SUNSET POINT",
    title: "TEBING KARANG TANJUNG GUNDUL",
    subtitle: "Menyaksikan kemegahan matahari terbenam keemasan dari atas tebing batu karst menghadap Laut Maluku.",
    bgImage: "../assets/img/tanjung-gundul.jpg"
  },
  {
    id: 5,
    tag: "KEANEKARAGAMAN HAYATI ENDEMIK DUNIA",
    title: "HABITAT BANGGAI CARDINALFISH",
    subtitle: "Ikan hias laut legendaris Pterapogon kauderni yang hanya ada dan hidup secara alami di perairan Banggai.",
    bgImage: "../assets/img/hero-card.jpg"
  }
];

// Master Default Wisata
const DEFAULT_ADMIN_WISATA = [
  { id: 1, nama_tempat: 'Keraton Banggai & Situs Pusaka', nama_kategori: 'Sejarah & Budaya', lokasi: 'Kel. Lompio, Kec. Banggai', htm: 'Gratis / Donasi', lat: -1.5932, lng: 123.5015, gambar: '../assets/img/hero-card.jpg', deskripsi_id: 'Bangunan peninggalan kembar meriam kuno dan singgasana Kerajaan Banggai abad ke-16.', kontak_wa: '6282292928800' },
  { id: 2, nama_tempat: 'Pantai Bontolan', nama_kategori: 'Wisata Bahari', lokasi: 'Desa Bone Baru, Kec. Banggai Utara', htm: 'Rp 5.000 / Orang', lat: -1.5600, lng: 123.5100, gambar: '../assets/img/pantai-bontolan.jpg', deskripsi_id: 'Pesisir pantai teduh dengan jajaran pohon kelapa dan ombak tenang di Bone Baru.', kontak_wa: '6285241002233' },
  { id: 3, nama_tempat: 'Pasir Timbul Lambangan Pauno', nama_kategori: 'Wisata Bahari', lokasi: 'Kecamatan Banggai', htm: 'Rp 10.000 / Orang', lat: -1.6150, lng: 123.5350, gambar: '../assets/img/lambangan-pauno.jpg', deskripsi_id: 'Bentang pasir timbul putih memanjang dengan gradasi air laut toska jernih.', kontak_wa: '6285241002233' },
  { id: 4, nama_tempat: 'Danau Ubur-Ubur Mbuang-Mbuang', nama_kategori: 'Danau & Geowisata', lokasi: 'Desa Mbuang-Mbuang, Kec. Bokan', htm: 'Rp 20.000 / Orang', lat: -1.7850, lng: 123.5950, gambar: '../assets/img/ubur-ubur.jpg', deskripsi_id: 'Danau air asin tersembunyi habitat ribuan ubur-ubur tanpa sengat langka di dunia.', kontak_wa: '6282292928800' },
  { id: 5, nama_tempat: 'Laguna Karst Paisubatu', nama_kategori: 'Wisata Bahari', lokasi: 'Kecamatan Bokan Kepulauan', htm: 'Rp 15.000 / Orang', lat: -1.7650, lng: 123.5850, gambar: '../assets/img/laguna-paisubatu.jpg', deskripsi_id: 'Laguna air laut toska jernih dikelilingi tebing karst alami dan spot snorkeling kaya koral.', kontak_wa: '6285241002233' },
  { id: 6, nama_tempat: 'Pulau Bandang & Pasir Putih', nama_kategori: 'Wisata Bahari', lokasi: 'Monsongan, Kec. Banggai Tengah', htm: 'Rp 150.000 - Rp 300.000 (Perahu PP)', lat: -1.6420, lng: 123.5500, gambar: '../assets/img/pulau-bandang.jpg', deskripsi_id: 'Pulau tak berpenghuni dengan terumbu karang terjaga, surga snorkeling & diving.', kontak_wa: '6285241002233' },
  { id: 7, nama_tempat: 'Cagar Makam Raja-Raja Banggai', nama_kategori: 'Sejarah & Budaya', lokasi: 'Kelurahan Lompio, Kec. Banggai', htm: 'Gratis', lat: -1.5970, lng: 123.5040, gambar: '../assets/img/hero-card.jpg', deskripsi_id: 'Kompleks pemakaman leluhur raja Banggai sarat nilai sejarah dan spiritual.', kontak_wa: '6282292928800' },
  { id: 8, nama_tempat: 'Tanjung Gundul & Sunset Point', nama_kategori: 'Wisata Bahari', lokasi: 'Desa Tinakin Laut, Kec. Banggai', htm: 'Rp 5.000 / Orang', lat: -1.6350, lng: 123.4750, gambar: '../assets/img/tanjung-gundul.jpg', deskripsi_id: 'Panorama tebing batu eksotis menghadap Laut Maluku dengan pemandangan senja spektakuler.', kontak_wa: '6285241002233' },
  { id: 9, nama_tempat: 'Air Terjun Matube', nama_kategori: 'Geowisata Alam', lokasi: 'Desa Matube, Kec. Banggai', htm: 'Rp 5.000 / Orang', lat: -1.6620, lng: 123.5150, gambar: '../assets/img/hero-card.jpg', deskripsi_id: 'Air terjun sejuk di tengah hutan tropis rindang dengan kolam alami menyegarkan.', kontak_wa: '6285241002233' },
  { id: 10, nama_tempat: 'Sentra Kuliner Pesisir & Sinole', nama_kategori: 'Kuliner Tradisional', lokasi: 'Pusat Kota Banggai', htm: 'Sesuai Menu', lat: -1.5945, lng: 123.5040, gambar: '../assets/img/hero-card.jpg', deskripsi_id: 'Menikmati kuliner otentik Sinole sagu parut kelapa dan ikan cakalang bakar sambal dabu-dabu.', kontak_wa: '6282292928800' }
];

// Master Default Kapal
const DEFAULT_ADMIN_KAPAL = [
  { id: 1, nama_kapal: "KM Express Priscilia 88", jenis: "Kapal Cepat Express", rute_asal: "Pelabuhan Luwuk", rute_tujuan: "Pelabuhan Banggai", hari: "Setiap Hari", jam_berangkat: "09:00 WITA", jam_tiba: "11:30 WITA", tarif: "Rp 180.000 (Eks) / Rp 220.000 (VIP)", status: "Beroperasi Normal" },
  { id: 2, nama_kapal: "KM Cantika Lestari 99", jenis: "Kapal Cepat Express", rute_asal: "Pelabuhan Banggai", rute_tujuan: "Pelabuhan Luwuk", hari: "Setiap Hari", jam_berangkat: "09:00 WITA", jam_tiba: "11:45 WITA", tarif: "Rp 180.000 (Eks) / Rp 220.000 (VIP)", status: "Beroperasi Normal" },
  { id: 3, nama_kapal: "KMP Tanjung Api (ASDP)", jenis: "Kapal Feri Ro-Ro", rute_asal: "Pelabuhan Lalong (Luwuk)", rute_tujuan: "Pelabuhan ASDP Banggai", hari: "Selasa, Kamis, Sabtu", jam_berangkat: "14:00 WITA", jam_tiba: "22:00 WITA", tarif: "Rp 85.000 (Org) | Rp 140.000 (Motor)", status: "Beroperasi Normal" },
  { id: 4, nama_kapal: "KM Barcelona II", jenis: "Kapal Kayu Cepat", rute_asal: "Salakan (Bangkep)", rute_tujuan: "Banggai (Balut)", hari: "Setiap Hari", jam_berangkat: "07:30 WITA", jam_tiba: "09:30 WITA", tarif: "Rp 70.000 / Orang", status: "Beroperasi Normal" },
  { id: 5, nama_kapal: "KM Fungka Permata", jenis: "Kapal Motor Reguler", rute_asal: "Banggai (Balut)", rute_tujuan: "Salakan (Bangkep)", hari: "Setiap Hari", jam_berangkat: "13:30 WITA", jam_tiba: "15:30 WITA", tarif: "Rp 70.000 / Orang", status: "Beroperasi Normal" },
  { id: 6, nama_kapal: "KM Bokan Indah", jenis: "Kapal Kayu Antar-Pulau", rute_asal: "Pelabuhan Banggai", rute_tujuan: "Mbuang-Mbuang", hari: "Sen, Rab, Jum, Sab", jam_berangkat: "08:00 WITA", jam_tiba: "11:30 WITA", tarif: "Rp 60.000 – Rp 75.000", status: "Beroperasi Normal" },
  { id: 7, nama_kapal: "KM Nelayan Mansalean", jenis: "Perahu Penyeberangan", rute_asal: "Pelabuhan Banggai", rute_tujuan: "Pulau Labobo", hari: "Setiap Hari", jam_berangkat: "08:30 WITA", jam_tiba: "10:00 WITA", tarif: "Rp 45.000 / Orang", status: "Beroperasi Normal" },
  { id: 8, nama_kapal: "KM Sangiang (PELNI)", jenis: "Kapal Penumpang Nasional", rute_asal: "Kendari / Bau-Bau", rute_tujuan: "Banggai – Bitung (PP)", hari: "Kalender Resmi PELNI", jam_berangkat: "2x Sebulan", jam_tiba: "Sesuai Maklumat", tarif: "Rp 165.000 – Rp 280.000", status: "Jadwal Berkala" },
  { id: 9, nama_kapal: "KM Sabuk Nusantara 78", jenis: "Kapal Tol Laut Perintis", rute_asal: "Luwuk", rute_tujuan: "Banggai – Bobong – Kendari", hari: "Jadwal Mingguan", jam_berangkat: "20:00 WITA", jam_tiba: "06:00 WITA (Pagi)", tarif: "Rp 40.000 – Rp 75.000", status: "Jadwal Berkala" }
];

// Data state
let adminBanners = [];
let adminWisata = [];
let adminKapal = [];

// =========================================================
// 1. INITIALIZATION
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  initAdminLiveClock();
  initAdminData();
  initSidebarTabs();
  initHeroBannerEditor();
  renderWisataTable(adminWisata);
  renderKapalTable(adminKapal);
  updateMetricsCount();

  // Mobile sidebar toggle
  const toggleBtn = document.getElementById('sidebarToggleBtn');
  const sidebar = document.getElementById('adminSidebar');
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  // Logout button
  const btnLogout = document.getElementById('btnLogout');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      if (confirm('Apakah Anda yakin ingin keluar dari Admin Command Center?')) {
        localStorage.removeItem('sipandu_admin_session');
        window.location.href = 'login.html';
      }
    });
  }
});

// =========================================================
// 2. JAM WITA REAL-TIME
// =========================================================
function initAdminLiveClock() {
  const clockEl = document.getElementById('adminLiveClock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    // Konversi UTC+8 WITA
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const wita = new Date(utc + (3600000 * 8));
    
    const hrs = String(wita.getHours()).padStart(2, '0');
    const mins = String(wita.getMinutes()).padStart(2, '0');
    const secs = String(wita.getSeconds()).padStart(2, '0');
    clockEl.textContent = `${hrs}:${mins}:${secs} WITA`;
  }
  update();
  setInterval(update, 1000);
}

// =========================================================
// 3. LOAD DATA (LOCALSTORAGE / BACKEND)
// =========================================================
function initAdminData() {
  // 1. Session admin info
  const session = localStorage.getItem('sipandu_admin_session');
  if (session) {
    try {
      const sess = JSON.parse(session);
      const nameEl = document.getElementById('adminNameDisplay');
      if (nameEl) nameEl.textContent = sess.username || 'Admin Disparbud';
    } catch (e) {}
  }

  // 2. Banners (Fast-cache client)
  const storedBanners = localStorage.getItem('sipandu_hero_banners');
  if (storedBanners) {
    try { adminBanners = JSON.parse(storedBanners); } catch (e) { adminBanners = [...DEFAULT_HERO_BANNERS]; }
  } else {
    adminBanners = [...DEFAULT_HERO_BANNERS];
  }

  // 3. Wisata (Fast-cache client)
  const storedWisata = localStorage.getItem('sipandu_admin_wisata');
  if (storedWisata) {
    try { adminWisata = JSON.parse(storedWisata); } catch (e) { adminWisata = []; }
  } else {
    adminWisata = [];
  }

  // 4. Kapal (Fast-cache client)
  const storedKapal = localStorage.getItem('sipandu_admin_kapal');
  if (storedKapal) {
    try { adminKapal = JSON.parse(storedKapal); } catch (e) { adminKapal = [...DEFAULT_ADMIN_KAPAL]; }
  } else {
    adminKapal = [...DEFAULT_ADMIN_KAPAL];
  }

  // 5. Hubungkan langsung ke Backend REST API
  syncAdminWithBackend();
}

async function syncAdminWithBackend() {
  const statusEl = document.getElementById('liveServerStatusBadge');
  const systemDisplay = document.getElementById('tabSystemStatusDisplay');
  try {
    // A. Ambil status server & database
    const resStatus = await fetch(`${API_BASE}/api/status`);
    if (resStatus.ok) {
      const statusData = await resStatus.json();
      const dbBadge = statusData.database?.connected 
        ? '<span style="color: #2dd4bf; font-weight: 700;">● PostgreSQL Online</span>' 
        : '<span style="color: #93c5fd; font-weight: 700;">● File-Store Disk Aktif</span>';
      
      if (statusEl) {
        statusEl.innerHTML = `<span style="color: #2dd4bf; font-weight: 700;">● Server :${statusData.port}</span> <span style="color: rgba(255,255,255,0.3);">|</span> ${dbBadge}`;
      }
      if (systemDisplay) {
        systemDisplay.innerHTML = `
          <div style="line-height: 1.8;">
            <p><strong>Status Backend:</strong> <span style="color: #2dd4bf;">Online & Berjalan Normal (Port ${statusData.port})</span></p>
            <p><strong>Database Layer:</strong> ${statusData.database?.connected ? '<span style="color: #2dd4bf;">PostgreSQL Terhubung (Port 5433)</span>' : '<span style="color: #93c5fd;">File-Store Disk Fallback (Zero Crash Active)</span>'}</p>
            <p><strong>Item Tersimpan:</strong> Destinasi: <strong>${statusData.counts?.wisata ?? adminWisata.length}</strong> | Poster: <strong>${statusData.counts?.banners ?? adminBanners.length}</strong> | Kapal: <strong>${statusData.counts?.kapal ?? adminKapal.length}</strong></p>
            <p><strong>Server Uptime:</strong> ${Math.floor(statusData.uptimeSeconds / 60)} menit ${statusData.uptimeSeconds % 60} detik</p>
          </div>
        `;
      }
    }

    // B. Ambil daftar destinasi terbaru dari backend
    const resWisata = await fetch(`${API_BASE}/api/wisata`);
    if (resWisata.ok) {
      const wData = await resWisata.json();
      if (Array.isArray(wData.data)) {
        adminWisata = wData.data;
        localStorage.setItem('sipandu_admin_wisata', JSON.stringify(adminWisata));
        renderWisataTable(adminWisata);
        updateMetricsCount();
      }
    }

    // C. Ambil banner hero terbaru dari backend
    const resBanners = await fetch(`${API_BASE}/api/hero-banners`);
    if (resBanners.ok) {
      const bData = await resBanners.json();
      if (Array.isArray(bData.data) && bData.data.length > 0) {
        adminBanners = bData.data;
        localStorage.setItem('sipandu_hero_banners', JSON.stringify(adminBanners));
        loadSelectedBannerSlot();
        updateMetricsCount();
      }
    }

    // D. Ambil jadwal kapal terbaru dari backend
    const resKapal = await fetch(`${API_BASE}/api/transportasi`);
    if (resKapal.ok) {
      const kData = await resKapal.json();
      if (Array.isArray(kData.data) && kData.data.length > 0) {
        adminKapal = kData.data;
        localStorage.setItem('sipandu_admin_kapal', JSON.stringify(adminKapal));
        renderKapalTable(adminKapal);
        updateMetricsCount();
      }
    }
  } catch (err) {
    console.warn('Backend server belum terhubung / mode client lokal:', err.message);
    if (statusEl) {
      statusEl.innerHTML = `<span style="color: #fbbf24;">● Mode Lokal / Client Standalone</span>`;
    }
    if (systemDisplay) {
      systemDisplay.innerHTML = `<p style="color: #fbbf24;">Server Node.js belum aktif atau berjalan terpisah. Menggunakan penyimpanan browser lokal.</p>`;
    }
  }
}

function updateMetricsCount() {
  const dCount = document.getElementById('statDestinasiCount');
  const kCount = document.getElementById('statKapalCount');
  const bCount = document.getElementById('statBannerCount');

  if (dCount) dCount.textContent = adminWisata.length;
  if (kCount) kCount.textContent = adminKapal.length;
  if (bCount) bCount.textContent = adminBanners.length;
}

// =========================================================
// 4. SIDEBAR NAVIGATION TABS
// =========================================================
function initSidebarTabs() {
  const links = document.querySelectorAll('.sidebar-link[data-tab]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = link.getAttribute('data-tab');
      switchAdminTab(tabId);

      // Close mobile sidebar if open
      const sidebar = document.getElementById('adminSidebar');
      if (sidebar) sidebar.classList.remove('open');
    });
  });
}

window.switchAdminTab = function(tabId) {
  // Update links
  document.querySelectorAll('.sidebar-link[data-tab]').forEach(l => {
    if (l.getAttribute('data-tab') === tabId) l.classList.add('active');
    else l.classList.remove('active');
  });

  // Update panes
  document.querySelectorAll('.admin-tab-pane').forEach(p => {
    if (p.id === tabId) p.classList.add('active');
    else p.classList.remove('active');
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// =========================================================
// 5. BANNER HERO & POSTER MANAGEMENT (USER REQUEST)
// =========================================================
function initHeroBannerEditor() {
  loadSelectedBannerSlot();

  // Real-time preview input listeners
  const tagInput = document.getElementById('bannerTag');
  const titleInput = document.getElementById('bannerTitle');
  const descInput = document.getElementById('bannerDesc');
  const imgInput = document.getElementById('bannerImg');

  if (tagInput) tagInput.addEventListener('input', (e) => {
    const el = document.getElementById('previewBadge');
    if (el) el.textContent = e.target.value.toUpperCase() || 'KATEGORI POSTER';
  });

  if (titleInput) titleInput.addEventListener('input', (e) => {
    const el = document.getElementById('previewTitle');
    if (el) el.textContent = e.target.value.toUpperCase() || 'JUDUL EVENT BERJALAN';
  });

  if (descInput) descInput.addEventListener('input', (e) => {
    const el = document.getElementById('previewDesc');
    if (el) el.textContent = e.target.value || 'Deskripsi singkat pengumuman event...';
  });

  if (imgInput) imgInput.addEventListener('input', (e) => {
    const el = document.getElementById('previewImg');
    if (el) el.src = e.target.value || '../assets/img/hero-card.jpg';
  });
}

window.loadSelectedBannerSlot = function() {
  const slotSelect = document.getElementById('bannerSlot');
  if (!slotSelect) return;
  const slotId = parseInt(slotSelect.value, 10);
  const currentBanner = adminBanners.find(b => b.id === slotId) || adminBanners[0];

  if (!currentBanner) return;

  const tagInput = document.getElementById('bannerTag');
  const titleInput = document.getElementById('bannerTitle');
  const descInput = document.getElementById('bannerDesc');
  const imgInput = document.getElementById('bannerImg');

  if (tagInput) tagInput.value = currentBanner.tag || '';
  if (titleInput) titleInput.value = currentBanner.title || '';
  if (descInput) descInput.value = currentBanner.subtitle || '';
  if (imgInput) imgInput.value = currentBanner.bgImage || '';

  // Update preview
  const prevBadge = document.getElementById('previewBadge');
  const prevTitle = document.getElementById('previewTitle');
  const prevDesc = document.getElementById('previewDesc');
  const prevImg = document.getElementById('previewImg');

  if (prevBadge) prevBadge.textContent = currentBanner.tag || 'EVENT UTAMA';
  if (prevTitle) prevTitle.textContent = currentBanner.title || 'JUDUL POSTER';
  if (prevDesc) prevDesc.textContent = currentBanner.subtitle || '';
  if (prevImg) prevImg.src = currentBanner.bgImage || '../assets/img/hero-card.jpg';
};

window.simpanHeroBanner = async function(e) {
  e.preventDefault();
  const slotId = parseInt(document.getElementById('bannerSlot').value, 10);
  const tag = document.getElementById('bannerTag').value.trim();
  const title = document.getElementById('bannerTitle').value.trim();
  const desc = document.getElementById('bannerDesc').value.trim();
  const img = document.getElementById('bannerImg').value.trim();

  let target = adminBanners.find(b => b.id === slotId);
  if (target) {
    target.tag = tag;
    target.badge = tag;
    target.title = title;
    target.subtitle = desc;
    target.bgImage = img;
  } else {
    target = { id: slotId, tag, badge: tag, title, subtitle: desc, bgImage: img };
    adminBanners.push(target);
  }

  // 1. Simpan ke cache lokal
  localStorage.setItem('sipandu_hero_banners', JSON.stringify(adminBanners));

  // 2. Kirim update ke Backend REST API
  try {
    const res = await fetch(`${API_BASE}/api/hero-banners`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(target)
    });
    if (res.ok) {
      showAdminToast(`Poster Hero Slide ${slotId} tersimpan ke server backend & beranda!`);
      return;
    }
  } catch (err) {
    console.warn('Backend offline, tersimpan di penyimpanan lokal:', err.message);
  }
  showAdminToast(`Poster Hero Slide ${slotId} berhasil diperbarui di beranda!`);
};

// =========================================================
// 6. KELOLA DESTINASI WISATA (FRAMEWORK CMS & TEMPLATE)
// =========================================================
function renderWisataTable(list) {
  const tbody = document.getElementById('adminWisataTableBody');
  if (!tbody) return;

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 40px; color: #94a3b8;">
      <p style="font-size: 1rem; margin-bottom: 8px;">Belum ada slot destinasi.</p>
      <button type="button" class="btn-framework-tool" onclick="tambahSlotKosong()">+ Buat Slot Kosong Pertama</button>
      <button type="button" class="btn-framework-tool" onclick="muatContohData()" style="margin-left: 8px;">Muat Data Contoh</button>
    </td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(item => {
    const isDraft = (item.status === 'Draf') || (item.nama_tempat && item.nama_tempat.includes('[Slot Template'));
    const statusBadge = isDraft 
      ? `<span style="background: rgba(245, 158, 11, 0.2); border: 1px solid rgba(245, 158, 11, 0.5); color: #fbbf24; padding: 4px 10px; border-radius: 9999px; font-size: 0.72rem; font-weight: 700;">Draf</span>`
      : `<span style="background: rgba(45, 212, 191, 0.2); border: 1px solid rgba(45, 212, 191, 0.5); color: #2dd4bf; padding: 4px 10px; border-radius: 9999px; font-size: 0.72rem; font-weight: 700;">Terbit</span>`;

    return `
      <tr>
        <td style="font-family: monospace; font-weight: bold; color: var(--gold-accent);">#${item.id}</td>
        <td>
          <img src="${item.gambar || 'assets/img/hero-card.jpg'}" alt="${item.nama_tempat}" class="table-thumb-img" onerror="this.src='../assets/img/hero-card.jpg'">
        </td>
        <td>
          <span class="table-place-title">${item.nama_tempat}</span>
          <span class="table-place-sub">${item.lokasi || 'Kecamatan Banggai'}</span>
        </td>
        <td>
          <span class="table-badge-cat">${item.nama_kategori}</span>
        </td>
        <td style="font-size: 0.82rem; color: #cbd5e1;">
          ${item.lokasi || 'Kec. Banggai'}
        </td>
        <td>
          <strong>${item.htm || 'Gratis'}</strong>
        </td>
        <td>
          ${statusBadge}
        </td>
        <td>
          <div class="table-actions-cell">
            <button type="button" class="btn-action-edit" onclick="openWisataModal(${item.id})">Edit</button>
            <button type="button" class="btn-action-edit" style="background: rgba(96, 165, 250, 0.15); border-color: rgba(96, 165, 250, 0.4); color: #93c5fd;" onclick="duplikatWisata(${item.id})" title="Duplikat Template">Duplikat</button>
            <a href="../detail.html?id=${item.id}" target="_blank" class="btn-action-view">Lihat</a>
            <button type="button" class="btn-action-del" onclick="hapusWisata(${item.id})">Hapus</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

window.filterAdminWisataTable = function() {
  const q = (document.getElementById('wisataSearchInput')?.value || '').toLowerCase().trim();
  const cat = document.getElementById('wisataCategoryFilter')?.value || 'all';

  const filtered = adminWisata.filter(item => {
    const matchQ = (item.nama_tempat && item.nama_tempat.toLowerCase().includes(q)) ||
                   (item.nama_kategori && item.nama_kategori.toLowerCase().includes(q)) ||
                   (item.lokasi && item.lokasi.toLowerCase().includes(q));

    const matchCat = (cat === 'all') || (item.nama_kategori && item.nama_kategori.toLowerCase().includes(cat.toLowerCase()));

    return matchQ && matchCat;
  });

  renderWisataTable(filtered);
};

// =========================================================
// FRAMEWORK ACTION TOOLS: TAMBAH SLOT, EKSPOR, IMPOR, RESET
// =========================================================
window.tambahSlotKosong = async function() {
  const nextId = adminWisata.length > 0 ? Math.max(...adminWisata.map(w => Number(w.id) || 0)) + 1 : 1;
  const newSlot = {
    id: nextId,
    nama_tempat: `[Slot Template #${nextId}] Nama Tempat Wisata Baru`,
    nama_kategori: 'Wisata Bahari',
    lokasi: 'Kecamatan Banggai',
    status: 'Draf',
    htm: 'Menunggu Survei / Verifikasi',
    jam_buka: '08:00 - 17:00 WITA',
    kontak_wa: '6282292928800',
    pengelola: 'Pokdarwis / Pengurus Wisata',
    lat: -1.5932,
    lng: 123.5015,
    gambar: '../assets/img/hero-card.jpg',
    deskripsi_id: 'Informasi dan foto objek wisata ini sedang dalam tahap survei lapangan oleh tim Disparbud Banggai Laut.',
    deskripsi_en: 'Information and photos for this destination are currently being compiled by Disparbud Banggai Laut.',
    fasilitas: ['Spot Foto Estetik', 'Gazebo Santai', 'Toilet & Kamar Bilas']
  };

  try {
    const res = await fetch(`${API_BASE}/api/wisata`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSlot)
    });
    if (res.ok) {
      const json = await res.json();
      if (json.data && json.data.id) newSlot.id = json.data.id;
    }
  } catch (e) {
    console.warn('Backend offline, slot tersimpan secara lokal:', e.message);
  }

  adminWisata.unshift(newSlot);
  localStorage.setItem('sipandu_admin_wisata', JSON.stringify(adminWisata));
  renderWisataTable(adminWisata);
  updateMetricsCount();
  showAdminToast(`Slot Template #${newSlot.id} berhasil dibuat! Klik "Edit" untuk melengkapi informasi.`);
  
  // Buka modal langsung untuk kemudahan admin
  openWisataModal(newSlot.id);
};

window.duplikatWisata = async function(id) {
  const item = adminWisata.find(w => Number(w.id) === Number(id));
  if (!item) return;

  const nextId = adminWisata.length > 0 ? Math.max(...adminWisata.map(w => Number(w.id) || 0)) + 1 : 1;
  const cloned = {
    ...item,
    id: nextId,
    nama_tempat: `[Salinan] ${item.nama_tempat}`,
    status: 'Draf'
  };

  try {
    const res = await fetch(`${API_BASE}/api/wisata`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cloned)
    });
    if (res.ok) {
      const json = await res.json();
      if (json.data && json.data.id) cloned.id = json.data.id;
    }
  } catch (e) {}

  adminWisata.unshift(cloned);
  localStorage.setItem('sipandu_admin_wisata', JSON.stringify(adminWisata));
  renderWisataTable(adminWisata);
  updateMetricsCount();
  showAdminToast(`Destinasi berhasil diduplikat menjadi Slot #${cloned.id}!`);
};

window.eksporDataJSON = function() {
  if (adminWisata.length === 0) {
    alert('Tidak ada data destinasi untuk diekspor.');
    return;
  }
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(adminWisata, null, 2));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `sipandu_destinasi_framework_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(dlAnchor);
  dlAnchor.click();
  dlAnchor.remove();
  showAdminToast('Data destinasi berhasil diekspor ke file JSON!');
};

window.triggerImporJSON = function() {
  const input = document.getElementById('jsonFileInput');
  if (input) input.click();
};

window.prosesImporJSON = function(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const parsed = JSON.parse(evt.target.result);
      if (!Array.isArray(parsed)) {
        alert('Format file JSON tidak valid. File harus berisi array daftar destinasi.');
        return;
      }
      adminWisata = parsed;
      localStorage.setItem('sipandu_admin_wisata', JSON.stringify(adminWisata));
      renderWisataTable(adminWisata);
      updateMetricsCount();
      showAdminToast(`Berhasil mengimpor ${adminWisata.length} destinasi dari file JSON!`);
    } catch (err) {
      alert('Gagal membaca file JSON: ' + err.message);
    }
  };
  reader.readAsText(file);
  e.target.value = '';
};

window.muatContohData = function() {
  if (confirm('Apakah Anda ingin memuat data contoh 12 destinasi Banggai Laut? Data saat ini akan digantikan.')) {
    adminWisata = [...DEFAULT_ADMIN_WISATA];
    localStorage.setItem('sipandu_admin_wisata', JSON.stringify(adminWisata));
    renderWisataTable(adminWisata);
    updateMetricsCount();
    showAdminToast('12 Destinasi contoh Banggai Laut berhasil dimuat!');
  }
};

window.kosongkanData = async function() {
  if (confirm('PERINGATAN: Apakah Anda yakin ingin mengosongkan seluruh data destinasi? Seluruh slot akan dihapus agar Anda bisa mulai mengisi dari template nol.')) {
    try {
      await fetch(`${API_BASE}/api/wisata/reset`, { method: 'POST' });
    } catch (e) {}

    adminWisata = [];
    localStorage.setItem('sipandu_admin_wisata', JSON.stringify(adminWisata));
    renderWisataTable(adminWisata);
    updateMetricsCount();
    showAdminToast('Seluruh data direktori berhasil dibersihkan.');
  }
};

// Preset Helpers
window.setGpsPreset = function(lat, lng, kec) {
  const latEl = document.getElementById('modalLat');
  const lngEl = document.getElementById('modalLng');
  const kecEl = document.getElementById('modalKecamatan');
  if (latEl) latEl.value = lat;
  if (lngEl) lngEl.value = lng;
  if (kecEl && kec) kecEl.value = kec;
  showAdminToast(`Koordinat diset ke: ${kec} (${lat}, ${lng})`);
};

window.setFotoPreset = function(cat) {
  const imgEl = document.getElementById('modalGambar');
  if (!imgEl) return;
  const presets = {
    bahari: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    ubur: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&q=80',
    keraton: '../assets/img/hero-card.jpg',
    sunset: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',
    kuliner: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80'
  };
  imgEl.value = presets[cat] || presets.bahari;
  showAdminToast(`Preset gambar ${cat.toUpperCase()} berhasil diterapkan!`);
};

// =========================================================
// MODAL LOGIC (OPEN, SUBMIT, CLOSE)
// =========================================================
window.openWisataModal = function(id = null) {
  const modal = document.getElementById('wisataModalBackdrop');
  const title = document.getElementById('wisataModalTitle');
  const form = document.getElementById('formWisataModal');

  if (!modal) return;

  if (id) {
    const item = adminWisata.find(w => w.id === id);
    if (!item) return;

    title.textContent = `Edit Destinasi: ${item.nama_tempat}`;
    document.getElementById('modalWisataId').value = item.id;
    document.getElementById('modalNamaTempat').value = item.nama_tempat || '';
    document.getElementById('modalKategori').value = item.nama_kategori || 'Wisata Bahari';
    if (document.getElementById('modalKecamatan')) document.getElementById('modalKecamatan').value = item.lokasi || 'Kecamatan Banggai';
    if (document.getElementById('modalStatusPublikasi')) document.getElementById('modalStatusPublikasi').value = item.status || 'Terbit';
    document.getElementById('modalDeskripsiId').value = item.deskripsi_id || '';
    document.getElementById('modalDeskripsiEn').value = item.deskripsi_en || '';
    document.getElementById('modalLat').value = item.lat || '';
    document.getElementById('modalLng').value = item.lng || '';
    document.getElementById('modalHtm').value = item.htm || '';
    if (document.getElementById('modalJamBuka')) document.getElementById('modalJamBuka').value = item.jam_buka || '08:00 - 17:00 WITA';
    document.getElementById('modalWa').value = item.kontak_wa || '';
    if (document.getElementById('modalPengelola')) document.getElementById('modalPengelola').value = item.pengelola || '';
    document.getElementById('modalGambar').value = item.gambar || '';

    // Set checkboxes fasilitas
    const itemFasilitas = Array.isArray(item.fasilitas) ? item.fasilitas : [];
    document.querySelectorAll('#modalFasilitasGrid input[name="fasilitas"]').forEach(cb => {
      cb.checked = itemFasilitas.includes(cb.value);
    });

  } else {
    title.textContent = 'Tambah Destinasi Wisata Baru';
    form.reset();
    document.getElementById('modalWisataId').value = '';
    document.getElementById('modalLat').value = '-1.5932';
    document.getElementById('modalLng').value = '123.5015';
    document.getElementById('modalGambar').value = 'assets/img/hero-card.jpg';
    if (document.getElementById('modalJamBuka')) document.getElementById('modalJamBuka').value = '08:00 - 17:00 WITA';
    if (document.getElementById('modalStatusPublikasi')) document.getElementById('modalStatusPublikasi').value = 'Terbit';

    // Default checklist
    document.querySelectorAll('#modalFasilitasGrid input[name="fasilitas"]').forEach((cb, idx) => {
      cb.checked = idx < 3;
    });
  }

  modal.classList.add('open');
};

window.closeWisataModal = function() {
  const modal = document.getElementById('wisataModalBackdrop');
  if (modal) modal.classList.remove('open');
};

window.submitWisataModal = async function(e) {
  e.preventDefault();
  const idVal = document.getElementById('modalWisataId').value;
  const nama_tempat = document.getElementById('modalNamaTempat').value.trim();
  const nama_kategori = document.getElementById('modalKategori').value;
  const lokasi = document.getElementById('modalKecamatan') ? document.getElementById('modalKecamatan').value : 'Kecamatan Banggai';
  const status = document.getElementById('modalStatusPublikasi') ? document.getElementById('modalStatusPublikasi').value : 'Terbit';
  const deskripsi_id = document.getElementById('modalDeskripsiId').value.trim();
  const deskripsi_en = document.getElementById('modalDeskripsiEn').value.trim();
  const lat = parseFloat(document.getElementById('modalLat').value) || -1.5932;
  const lng = parseFloat(document.getElementById('modalLng').value) || 123.5015;
  const htm = document.getElementById('modalHtm').value.trim() || 'Gratis';
  const jam_buka = document.getElementById('modalJamBuka') ? document.getElementById('modalJamBuka').value.trim() : '08:00 - 17:00 WITA';
  const kontak_wa = document.getElementById('modalWa').value.trim() || '6282292928800';
  const pengelola = document.getElementById('modalPengelola') ? document.getElementById('modalPengelola').value.trim() : '';
  const gambar = document.getElementById('modalGambar').value.trim() || 'assets/img/hero-card.jpg';

  // Fasilitas array
  const fasilitas = Array.from(document.querySelectorAll('#modalFasilitasGrid input[name="fasilitas"]:checked')).map(cb => cb.value);

  const payload = {
    nama_tempat,
    nama_kategori,
    lokasi,
    status,
    deskripsi_id,
    deskripsi_en,
    lat,
    lng,
    htm,
    jam_buka,
    kontak_wa,
    pengelola,
    gambar,
    fasilitas
  };

  if (idVal) {
    // Edit
    const id = parseInt(idVal, 10);
    const idx = adminWisata.findIndex(w => Number(w.id) === id);
    if (idx !== -1) {
      adminWisata[idx] = { ...adminWisata[idx], ...payload, id };
    }
    try {
      await fetch(`${API_BASE}/api/wisata/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (err) {}
    showAdminToast(`Destinasi "${nama_tempat}" berhasil diperbarui!`);
  } else {
    // Tambah baru
    let createdItem = null;
    try {
      const res = await fetch(`${API_BASE}/api/wisata`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const json = await res.json();
        createdItem = json.data;
      }
    } catch (err) {}

    if (!createdItem) {
      const newId = adminWisata.length > 0 ? Math.max(...adminWisata.map(w => Number(w.id) || 0)) + 1 : 1;
      createdItem = { id: newId, ...payload };
    }
    adminWisata.unshift(createdItem);
    showAdminToast(`Destinasi baru "${nama_tempat}" berhasil disimpan!`);
  }

  // Simpan ke storage & render
  localStorage.setItem('sipandu_admin_wisata', JSON.stringify(adminWisata));
  renderWisataTable(adminWisata);
  updateMetricsCount();
  closeWisataModal();
};

window.hapusWisata = async function(id) {
  const item = adminWisata.find(w => Number(w.id) === Number(id));
  if (!item) return;

  if (confirm(`Apakah Anda yakin ingin menghapus "${item.nama_tempat}" dari direktori wisata?`)) {
    try {
      await fetch(`${API_BASE}/api/wisata/${id}`, { method: 'DELETE' });
    } catch (err) {}

    adminWisata = adminWisata.filter(w => Number(w.id) !== Number(id));
    localStorage.setItem('sipandu_admin_wisata', JSON.stringify(adminWisata));
    renderWisataTable(adminWisata);
    updateMetricsCount();
    showAdminToast(`Destinasi "${item.nama_tempat}" berhasil dihapus.`);
  }
};

// =========================================================
// 7. KELOLA JADWAL KAPAL
// =========================================================
function renderKapalTable(list) {
  const tbody = document.getElementById('adminKapalTableBody');
  if (!tbody) return;

  tbody.innerHTML = list.map(item => `
    <tr>
      <td style="font-weight: 700; color: #ffffff;">${item.nama_kapal}</td>
      <td><span class="table-badge-cat">${item.jenis}</span></td>
      <td>${item.rute_asal} ➔ ${item.rute_tujuan}</td>
      <td>${item.hari}</td>
      <td style="font-family: monospace; color: var(--teal-accent); font-weight: bold;">${item.jam_berangkat}</td>
      <td style="font-family: monospace;">${item.jam_tiba}</td>
      <td style="font-weight: 700;">${item.tarif}</td>
      <td>
        <button type="button" class="btn-action-del" onclick="hapusKapal(${item.id})">Hapus</button>
      </td>
    </tr>
  `).join('');
}

window.openKapalModal = async function() {
  const nama = prompt("Nama Armada Kapal (misal: KM Express Bahari 99):");
  if (!nama) return;
  const jenis = prompt("Jenis Kapal (misal: Kapal Cepat Express / Feri ASDP):", "Kapal Cepat Express");
  const ruteAsal = prompt("Rute Asal:", "Pelabuhan Luwuk");
  const ruteTujuan = prompt("Rute Tujuan:", "Pelabuhan Banggai");
  const jam = prompt("Jam Berangkat (WITA):", "09:00 WITA");
  const tarif = prompt("Tarif Tiket:", "Rp 180.000 / Orang");

  const newId = adminKapal.length > 0 ? Math.max(...adminKapal.map(k => Number(k.id) || 0)) + 1 : 1;
  const newKapal = {
    id: newId,
    nama_kapal: nama,
    jenis: jenis || 'Kapal Cepat Express',
    rute_asal: ruteAsal || 'Pelabuhan Luwuk',
    rute_tujuan: ruteTujuan || 'Pelabuhan Banggai',
    hari: 'Setiap Hari',
    jam_berangkat: jam || '09:00 WITA',
    jam_tiba: '~2.5 Jam Tiba',
    tarif: tarif || 'Rp 180.000',
    status: 'Beroperasi Normal'
  };

  try {
    const res = await fetch(`${API_BASE}/api/transportasi`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newKapal)
    });
    if (res.ok) {
      const json = await res.json();
      if (json.data && json.data.id) newKapal.id = json.data.id;
    }
  } catch (err) {}

  adminKapal.unshift(newKapal);
  localStorage.setItem('sipandu_admin_kapal', JSON.stringify(adminKapal));
  renderKapalTable(adminKapal);
  updateMetricsCount();
  showAdminToast(`Armada "${nama}" berhasil ditambahkan ke jadwal.`);
};

window.hapusKapal = async function(id) {
  const item = adminKapal.find(k => Number(k.id) === Number(id));
  if (!item) return;

  if (confirm(`Hapus jadwal armada "${item.nama_kapal}"?`)) {
    try {
      await fetch(`${API_BASE}/api/transportasi/${id}`, { method: 'DELETE' });
    } catch (err) {}

    adminKapal = adminKapal.filter(k => Number(k.id) !== Number(id));
    localStorage.setItem('sipandu_admin_kapal', JSON.stringify(adminKapal));
    renderKapalTable(adminKapal);
    updateMetricsCount();
    showAdminToast(`Jadwal "${item.nama_kapal}" berhasil dihapus.`);
  }
};

// =========================================================
// 8. TOAST NOTIFICATION
// =========================================================
function showAdminToast(msg) {
  const toast = document.getElementById('adminToast');
  if (!toast) return;

  toast.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

