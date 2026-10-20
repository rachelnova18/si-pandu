// =========================================================
// 1. EFEK SCROLL REVEAL & NAVBAR GLASSMORPHISM
// =========================================================
function initScrollEffects() {
  const header = document.getElementById('mainHeader');
  
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 50) {
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
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
}

// =========================================================
// 2. PINTASAN RAHASIA ADMIN (KLIK 3X DI COPYRIGHT FOOTER)
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
      window.location.href = 'login.html';
    }

    clickTimer = setTimeout(() => {
      clickCount = 0;
    }, 800);
  });
}

// =========================================================
// 3. SLIDESHOW TUMPUK OTOMATIS (HERO SECTION)
// =========================================================
let currentFadeIndex = 0;
function runFadeSlider() {
  const cards = document.querySelectorAll('.fade-card');
  if (cards.length === 0) return;

  cards[currentFadeIndex].classList.remove('active');
  currentFadeIndex = (currentFadeIndex + 1) % cards.length;
  cards[currentFadeIndex].classList.add('active');
}
setInterval(runFadeSlider, 4000);

// =========================================================
// 4. DATA & KATALOG DESTINASI WISATA BANGGAI LAUT
// =========================================================
const defaultWisataData = [
  {
    id: 1,
    nama_tempat: "Keraton Banggai",
    nama_kategori: "Sejarah",
    lokasi: "Kelurahan Lompio, Kec. Banggai",
    deskripsi_id: "Bangunan berkonstruksi kayu khas masa lampau lengkap dengan ruang singgasana raja dan meriam kuno peninggalan Kerajaan Banggai.",
    gambar: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600"
  },
  {
    id: 2,
    nama_tempat: "Pantai Bontolan",
    nama_kategori: "Bahari",
    lokasi: "Desa Bone Baru, Kec. Banggai Utara",
    deskripsi_id: "Suasana pesisir pantai yang tenang dengan ombak relatif tenang dan deretan pohon kelapa yang menyejukkan.",
    gambar: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
  },
  {
    id: 3,
    nama_tempat: "Lambangan Pauno",
    nama_kategori: "Bahari",
    lokasi: "Kecamatan Banggai",
    deskripsi_id: "Bentang pasir putih yang luas dan memanjang dengan perairan laut jernih dan dangkal yang cocok untuk wisata keluarga.",
    gambar: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600"
  },
  {
    id: 4,
    nama_tempat: "Pulau Bandang",
    nama_kategori: "Bahari",
    lokasi: "Monsongan, Kec. Banggai Tengah",
    deskripsi_id: "Pulau eksotis dengan air laut sangat jernih dan terumbu karang terjaga, spot terbaik untuk snorkeling di Banggai Laut.",
    gambar: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600"
  },
  {
    id: 5,
    nama_tempat: "Mbuang-Mbuang (Bokan)",
    nama_kategori: "Bahari",
    lokasi: "Kecamatan Bokan Kepulauan",
    deskripsi_id: "Kawasan desa wisata bahari dengan ekowisata bawah laut serta keunikan danau ubur-ubur tanpa sengat.",
    gambar: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600"
  },
  {
    id: 6,
    nama_tempat: "Banggai Lalongo",
    nama_kategori: "Sejarah",
    lokasi: "Desa Dodung",
    deskripsi_id: "Situs cagar budaya dan sejarah yang menjadi jejak bekas pusat pemerintahan awal Kerajaan Banggai.",
    gambar: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600"
  },
  {
    id: 7,
    nama_tempat: "Makam Raja Banggai",
    nama_kategori: "Sejarah",
    lokasi: "Kawasan Lompio",
    deskripsi_id: "Situs ziarah dan wisata sejarah yang berkaitan erat dengan silsilah kepemimpinan raja-raja Kerajaan Banggai.",
    gambar: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600"
  },
  {
    id: 8,
    nama_tempat: "Pantai Pasir Putih & Tanjung Gundul",
    nama_kategori: "Bahari",
    lokasi: "Desa Pasir Putih, Kec. Banggai",
    deskripsi_id: "Hamparan pasir putih bersih berpadu dengan lanskap perbukitan tanjung yang menjorok langsung ke laut, indah saat senja.",
    gambar: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600"
  },
  {
    id: 9,
    nama_tempat: "Air Terjun Matube",
    nama_kategori: "Bahari",
    lokasi: "Desa Lampa, Kec. Banggai",
    deskripsi_id: "Aliran air terjun alami yang jernih dan segar dengan kolam alami di tengah rimbunnya pepohonan hijau.",
    gambar: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600"
  }
];

let allWisata = [...defaultWisataData];
let activeCategory = 'all';

function renderWisataCards(dataArray) {
  const grid = document.getElementById('destinasiGrid');
  if (!grid) return;

  if (dataArray.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #a0aec0; padding: 40px;">Destinasi yang Anda cari belum ditemukan.</p>`;
    return;
  }

  grid.innerHTML = dataArray.map(item => `
    <div class="wisata-card reveal-item revealed">
      <div class="wisata-img-wrapper">
        <img src="${item.gambar || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600'}" alt="${item.nama_tempat}">
        <span class="wisata-cat-badge">${item.nama_kategori || 'Wisata'}</span>
      </div>
      <div class="wisata-body">
        <span class="wisata-loc">📍 ${item.lokasi || 'Banggai Laut'}</span>
        <h3>${item.nama_tempat}</h3>
        <p>${item.deskripsi_id || item.deskripsi || 'Destinasi wisata unggulan di Kabupaten Banggai Laut.'}</p>
        <div class="wisata-footer">
          <a href="detail.html?id=${item.id}" class="wisata-btn">Lihat Detail & Rute ➔</a>
        </div>
      </div>
    </div>
  `).join('');
}

function filterWisata() {
  const keyword = (document.getElementById('searchInput')?.value || '').toLowerCase();

  const filtered = allWisata.filter(item => {
    const matchCategory = activeCategory === 'all' || 
      (item.nama_kategori && item.nama_kategori.toLowerCase().includes(activeCategory.toLowerCase()));
    
    const matchKeyword = item.nama_tempat.toLowerCase().includes(keyword) ||
      (item.deskripsi_id && item.deskripsi_id.toLowerCase().includes(keyword)) ||
      (item.lokasi && item.lokasi.toLowerCase().includes(keyword));

    return matchCategory && matchKeyword;
  });

  renderWisataCards(filtered);
}

// =========================================================
// 5. FITUR JADWAL KAPAL & PANDUAN PERJALANAN (panduan.html)
// =========================================================
const defaultKapalData = [
  {
    nama_kapal: "KMP. Tanjung Api / Ferry ASDP",
    jenis: "Kapal Ferry Roro",
    rute_asal: "Pelabuhan Luwuk",
    rute_tujuan: "Pelabuhan Banggai",
    jadwal: "Setiap Hari | 14:00 WITA (Estimasi 6-7 Jam)",
    harga: "Rp 95.000 / Org"
  },
  {
    nama_kapal: "KM. Cepat Express Bahari",
    jenis: "Speedboat / Kapal Cepat",
    rute_asal: "Pelabuhan Rakyat Luwuk",
    rute_tujuan: "Pelabuhan Banggai Laut",
    jadwal: "Senin - Sabtu | 09:00 WITA (Estimasi 3 Jam)",
    harga: "Rp 180.000 / Org"
  },
  {
    nama_kapal: "Kapal Kayu Reguler Bokan",
    jenis: "Transportasi Antar-Pulau",
    rute_asal: "Pelabuhan Banggai",
    rute_tujuan: "Mbuang-Mbuang (Bokan Kepulauan)",
    jadwal: "Setiap Pagi | 08:00 WITA",
    harga: "Rp 60.000 / Org"
  },
  {
    nama_kapal: "Perahu Wisata Pulau Bandang",
    jenis: "Charter / Hopping Island",
    rute_asal: "Dermaga Monsongan",
    rute_tujuan: "Pulau Bandang",
    jadwal: "Fleksibel (07:00 - 17:00 WITA)",
    harga: "Rp 150.000 / Trip"
  }
];

const defaultPanduanData = [
  {
    tahap: "Tahap 1: Jalur Udara",
    judul: "Penerbangan Menuju Bandara Syukuran Aminuddin Amir (LUW)",
    deskripsi: "Bagi wisatawan dari Jakarta, Makassar, atau Manado, ambil penerbangan menuju Bandara Luwuk (Kabupaten Banggai) dengan transit melalui Makassar (UPG)."
  },
  {
    tahap: "Tahap 2: Transit Pelabuhan",
    judul: "Perjalanan Darat ke Pelabuhan Luwuk",
    deskripsi: "Dari Bandara Luwuk, gunakan taksi bandara atau angkutan lokal menuju Pelabuhan Rakyat Luwuk atau Pelabuhan Ferry Luwuk dengan waktu tempuh sekitar 20-30 menit."
  },
  {
    tahap: "Tahap 3: Penyeberangan Laut",
    judul: "Menyeberang ke Ibu Kota Banggai Laut",
    deskripsi: "Pilih moda Kapal Cepat (sekitar 3 jam perjalanan) atau Kapal Ferry ASDP / Kapal Kayu malam menuju Pelabuhan Banggai Laut."
  }
];

let allKapal = [...defaultKapalData];

function renderKapal(dataArray) {
  const grid = document.getElementById('transportasiGrid');
  if (!grid) return;

  grid.innerHTML = dataArray.map(item => `
    <div class="ship-card reveal-item revealed">
      <div class="ship-top">
        <span class="ship-type-badge">${item.jenis || 'Kapal Penyeberangan'}</span>
        <span class="ship-status">● Beroperasi</span>
      </div>
      <h3 class="ship-name">${item.nama_kapal || 'Armada Pelayaran Banggai'}</h3>
      <div class="ship-route-box">
        <div class="port-point">
          <span class="port-label">Keberangkatan</span>
          <span class="port-name">${item.rute_asal}</span>
        </div>
        <span class="route-arrow">➔</span>
        <div class="port-point" style="text-align: right;">
          <span class="port-label">Tujuan</span>
          <span class="port-name">${item.rute_tujuan}</span>
        </div>
      </div>
      <div class="ship-Meta">
        <span>🕒 ${item.jadwal || item.waktu_berangkat || 'Jadwal Reguler'}</span>
        <span class="ship-price">${item.harga || item.estimasi_biaya || 'Tiket Pelabuhan'}</span>
      </div>
    </div>
  `).join('');
}

function renderPanduan(dataArray) {
  const grid = document.getElementById('panduanGrid');
  if (!grid) return;

  grid.innerHTML = dataArray.map((item, idx) => `
    <div class="guide-step-card reveal-item revealed">
      <span class="step-num">${item.tahap || `Langkah ${idx + 1}`}</span>
      <h3>${item.judul || item.rute || 'Panduan Akses'}</h3>
      <p>${item.deskripsi || item.keterangan || ''}</p>
    </div>
  `).join('');
}

// =========================================================
// INISIALISASI SAAT HALAMAN DIMUAT
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  initScrollEffects();
  initSecretAdminAccess();

  // Render Halaman Beranda (jika elemen ada)
  if (document.getElementById('destinasiGrid')) {
    renderWisataCards(allWisata);

    fetch('http://localhost:3000/api/wisata')
      .then(res => res.json())
      .then(result => {
        if (result.status === 'success' && Array.isArray(result.data) && result.data.length > 0) {
          allWisata = result.data;
          renderWisataCards(allWisata);
        }
      }).catch(() => {});

    // Filter Kategori
    document.querySelectorAll('.cat-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeCategory = chip.getAttribute('data-filter') || 'all';
        filterWisata();
      });
    });

    // Live Search Wisata
    document.getElementById('searchInput')?.addEventListener('input', filterWisata);

    // Tombol Lokasi Terdekat
    document.getElementById('btnNearby')?.addEventListener('click', () => {
      document.getElementById('destinasi')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Render Halaman Jadwal Kapal & Panduan (jika elemen ada)
  if (document.getElementById('transportasiGrid')) {
    renderKapal(allKapal);
    renderPanduan(defaultPanduanData);

    fetch('http://localhost:3000/api/transportasi')
      .then(res => res.json())
      .then(result => {
        if (result.status === 'success' && Array.isArray(result.data) && result.data.length > 0) {
          allKapal = result.data;
          renderKapal(allKapal);
        }
      }).catch(() => {});

    fetch('http://localhost:3000/api/panduan')
      .then(res => res.json())
      .then(result => {
        if (result.status === 'success' && Array.isArray(result.data) && result.data.length > 0) {
          renderPanduan(result.data);
        }
      }).catch(() => {});

    // Filter Pencarian Kapal
    document.getElementById('searchKapal')?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      const filtered = allKapal.filter(k => 
        (k.nama_kapal && k.nama_kapal.toLowerCase().includes(q)) ||
        (k.rute_asal && k.rute_asal.toLowerCase().includes(q)) ||
        (k.rute_tujuan && k.rute_tujuan.toLowerCase().includes(q))
      );
      renderKapal(filtered);
    });
  }
});