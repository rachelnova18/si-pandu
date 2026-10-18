let currentLang = 'id';
let selectedCategory = 'Semua';

// Data Dummy Sementara (Nanti diganti dengan fetch ke API Backend temanmu)
let dataWisata = [
  {
    id: 1,
    nama_tempat: "Pantai Bongo",
    kategori: "Bahari",
    deskripsi_id: "Pantai pasir putih eksotis dengan air laut jernih dan terumbu karang indah.",
    deskripsi_en: "Exotic white sandy beach with crystal clear water and beautiful coral reefs.",
    harga_mulai: 10000,
    latitude: -1.5833,
    longitude: 123.5000,
    kontak_wa: "6281234567890",
    foto: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
    jarak: null
  },
  {
    id: 2,
    nama_tempat: "Keraton Banggai",
    kategori: "Sejarah & Budaya",
    deskripsi_id: "Situs bersejarah peninggalan Kerajaan Banggai di pusat kota.",
    deskripsi_en: "Historical heritage site of the Banggai Kingdom in the city center.",
    harga_mulai: 5000,
    latitude: -1.5910,
    longitude: 123.4920,
    kontak_wa: "6289876543210",
    foto: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600",
    jarak: null
  },
  {
    id: 3,
    nama_tempat: "Penginapan Laut Biru",
    kategori: "Hotel",
    deskripsi_id: "Akomodasi nyaman dekat pelabuhan dengan pemandangan langsung ke laut.",
    deskripsi_en: "Comfortable accommodation near the port with a direct sea view.",
    harga_mulai: 250000,
    latitude: -1.5880,
    longitude: 123.4950,
    kontak_wa: "6281122334455",
    foto: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
    jarak: null
  }
];

// Fungsi Menampilkan Kartu Wisata ke Layar
function renderWisata(list) {
  const container = document.getElementById('wisata-list');
  container.innerHTML = '';

  if (list.length === 0) {
    container.innerHTML = `<p>${currentLang === 'id' ? 'Destinasi tidak ditemukan.' : 'No destination found.'}</p>`;
    return;
  }

  list.forEach(item => {
    const deskripsi = currentLang === 'id' ? item.deskripsi_id : item.deskripsi_en;
    const teksWa = currentLang === 'id' ? '💬 Hubungi via WA' : '💬 Contact via WA';
    const teksPeta = currentLang === 'id' ? '🗺️ Buka Peta' : '🗺️ Open Map';
    const infoJarak = item.jarak ? `📍 ${item.jarak.toFixed(1)} km` : '';

    const card = `
      <div class="card">
        <img src="${item.foto}" alt="${item.nama_tempat}">
        <div class="card-body">
          <div class="badge-row">
            <span class="badge-cat">${item.kategori}</span>
            <span class="badge-dist">${infoJarak}</span>
          </div>
          <h3>${item.nama_tempat}</h3>
          <p style="font-size: 0.85rem; color: #555;">${deskripsi}</p>
          <p class="price">Rp ${item.harga_mulai.toLocaleString('id-ID')}</p>
          <div class="card-actions">
            <a href="https://wa.me/${item.kontak_wa}" target="_blank" class="btn-wa">${teksWa}</a>
            <a href="https://www.google.com/maps?q=${item.latitude},${item.longitude}" target="_blank" class="btn-map">${teksPeta}</a>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

// Fungsi Filter Pencarian & Kategori
function filterWisata() {
  const keyword = document.getElementById('search-input').value.toLowerCase();
  const hasil = dataWisata.filter(item => {
    const cocokKategori = selectedCategory === 'Semua' || item.kategori === selectedCategory;
    const cocokKeyword = item.nama_tempat.toLowerCase().includes(keyword);
    return cocokKategori && cocokKeyword;
  });
  renderWisata(hasil);
}

function pilihKategori(kategori) {
  selectedCategory = kategori;
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-id') === kategori);
  });
  filterWisata();
}

// Fungsi Ganti Bahasa (ID / EN)
function setLanguage(lang) {
  currentLang = lang;
  document.getElementById('btn-id').classList.toggle('active', lang === 'id');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');

  document.getElementById('hero-title').innerText = lang === 'id' 
    ? 'Jelajahi Keindahan Banggai Laut' 
    : 'Explore the Beauty of Banggai Laut';
  document.getElementById('hero-subtitle').innerText = lang === 'id' 
    ? 'Temukan destinasi wisata, penginapan, dan jadwal kapal antar pulau.' 
    : 'Find tourist destinations, accommodations, and inter-island ferry schedules.';
  document.getElementById('btn-terdekat').innerText = lang === 'id'
    ? '📍 Cari Destinasi Terdekat dari Lokasi Saya'
    : '📍 Find Nearest Destinations from My Location';

  filterWisata();
}

// Fungsi Hitung Jarak (Rumus Haversine sesuai Proposal Bab II)
function hitungHaversine(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius bumi dalam km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Fungsi Geolocation (Mencari Destinasi Terdekat)
function cariTerdekat() {
  if (!navigator.geolocation) {
    alert("Browser tidak mendukung Geolocation.");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const userLat = pos.coords.latitude;
      const userLon = pos.coords.longitude;

      dataWisata.forEach(item => {
        item.jarak = hitungHaversine(userLat, userLon, item.latitude, item.longitude);
      });

      // Urutkan dari yang paling dekat
      dataWisata.sort((a, b) => a.jarak - b.jarak);
      filterWisata();
    },
    () => {
      alert(currentLang === 'id' 
        ? "Izin lokasi ditolak. Menampilkan urutan default." 
        : "Location permission denied. Showing default order.");
    }
  );
}

// Jalankan pertama kali saat halaman dibuka
renderWisata(dataWisata);