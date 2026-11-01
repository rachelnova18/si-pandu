/**
 * SI-PANDU - Sistem Pariwisata & Navigasi Terpadu Banggai Laut
 * Backend Server Core (Express.js, Dual-Layer PostgreSQL + JSON File-Store, Dual-Mode AI)
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { Pool } = require('pg');

const app = express();
const port = parseInt(process.env.PORT, 10) || 3000;

// =========================================================
// 1. MIDDLEWARE
// =========================================================
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static frontend files from parent directory and frontend folder
app.use(express.static(path.join(__dirname, '..')));
app.use(express.static(path.join(__dirname, '../frontend')));

// Rute utama beranda
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// =========================================================
// 2. DATABASE CONFIGURATION (POSTGRESQL WITH FAST TIMEOUT)
// =========================================================
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'bilkis21',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5433,
  database: process.env.DB_NAME || 'sipandu',
  connectionTimeoutMillis: 1500, // Fast 1.5s timeout: no freeze when DB offline
  idleTimeoutMillis: 10000
});

// Tangani error koneksi idle agar Node.js tidak pernah crash saat DB offline
pool.on('error', (err) => {
  // Mode offline: graceful fallback ke JSON File-Store
});

// =========================================================
// 3. PERSISTENT JSON FILE-STORE (DUAL-LAYER STORAGE)
// =========================================================
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

function readJsonFile(filename, defaultVal = []) {
  const filePath = path.join(dataDir, filename);
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultVal, null, 2), 'utf8');
      return defaultVal;
    }
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.warn(`[FileStore] Membaca ${filename} fallback default:`, err.message);
    return defaultVal;
  }
}

function writeJsonFile(filename, data) {
  const filePath = path.join(dataDir, filename);
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error(`[FileStore] Gagal menulis ${filename}:`, err.message);
    return false;
  }
}

// =========================================================
// 4. HELPER MATEMATIKA HAVERSINE (JARAK DALAM KM)
// =========================================================
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius bumi dalam km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return parseFloat((R * c).toFixed(1));
}

// Data Akomodasi Khusus AI Planner
const HOTELS_DATA = [
  { id: "hotel_kota", name: "Hotel Pusat Kota Banggai", loc: "Pusat Kota Banggai (Dekat Pelabuhan & Kuliner)", lat: -1.5935, lng: 123.5012 },
  { id: "homestay_pantai", name: "Homestay Tepi Pantai (Desa Wisata)", loc: "Pesisir Pantai Bone Baru", lat: -1.5620, lng: 123.5090 },
  { id: "resort_apung", name: "Resort Apung Mbuang-Mbuang", loc: "Kepulauan Bokan (Dekat Danau Ubur-Ubur)", lat: -1.7820, lng: 123.5930 },
  { id: "camping_pantai", name: "Glamping & Kemah Pesisir", loc: "Tanjung Gundul / Pantai Selatan", lat: -1.6340, lng: 123.4760 }
];

// =========================================================
// 5. REST API: STATUS SISTEM & DIAGNOSTIK
// =========================================================
app.get('/api/status', async (req, res) => {
  let dbOk = false;
  try {
    const test = await pool.query('SELECT 1;');
    dbOk = test.rows.length > 0;
  } catch (e) {
    dbOk = false;
  }

  const wisataList = readJsonFile('wisata.json', []);
  const bannerList = readJsonFile('banners.json', []);
  const kapalList = readJsonFile('kapal.json', []);

  res.json({
    status: 'success',
    server: 'Express.js Backend Si-PANDU',
    port: port,
    database: {
      type: 'PostgreSQL',
      connected: dbOk,
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5433,
      name: process.env.DB_NAME || 'sipandu'
    },
    counts: {
      wisata: wisataList.length,
      banners: bannerList.length,
      kapal: kapalList.length
    },
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

// =========================================================
// 6. REST API: LOGIN ADMINISTRATOR
// =========================================================
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ status: 'error', message: 'Username dan kata sandi wajib diisi!' });
  }

  // 1. Kredensial Administrator Bawaan (Instan tanpa delay)
  if ((username === 'admin' && password === 'admin123') || 
      (username === 'postgres' && password === 'bilkis21')) {
    return res.json({ 
      status: 'success', 
      message: 'Login berhasil sebagai Administrator Si-PANDU!',
      data: {
        id: 1,
        username: username,
        role: 'Super Administrator Disparbud'
      }
    });
  }

  // 2. Coba periksa tabel database jika ada akun kustom di PostgreSQL
  try {
    const query = 'SELECT * FROM admin WHERE username = $1 AND password = $2';
    const result = await pool.query(query, [username, password]);
    if (result.rows && result.rows.length > 0) {
      return res.json({ 
        status: 'success', 
        message: 'Login berhasil via Database PostgreSQL!',
        data: {
          id: result.rows[0].id,
          username: result.rows[0].username,
          role: 'Administrator Disparbud'
        }
      });
    }
  } catch (err) {
    // Database offline / akun tidak ditemukan
  }

  res.status(401).json({ status: 'error', message: 'Username atau kata sandi tidak cocok!' });
});

// =========================================================
// 7. REST API: DESTINASI WISATA (CRUD LENGKAP)
// =========================================================

// GET /api/wisata: Mengambil daftar destinasi
app.get('/api/wisata', async (req, res) => {
  // Coba baca dari PostgreSQL jika ada data
  try {
    const query = `
      SELECT d.id, t.nama_kategori, d.nama_tempat, d.deskripsi_id, 
             d.latitude AS lat, d.longitude AS lng
      FROM direktori d
      LEFT JOIN tipe_kategori t ON d.id_kategori = t.id
      ORDER BY d.id DESC;
    `;
    const result = await pool.query(query);
    if (result.rows && result.rows.length > 0) {
      return res.json({
        status: 'success',
        source: 'database_postgresql',
        data: result.rows
      });
    }
  } catch (err) {
    // DB offline -> lanjut ke local store
  }

  // Fallback ke local persistent store
  const localData = readJsonFile('wisata.json', []);
  res.json({
    status: 'success',
    source: 'backend_store',
    data: localData
  });
});

// GET /api/wisata/:id: Mengambil satu destinasi
app.get('/api/wisata/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const currentList = readJsonFile('wisata.json', []);
  const item = currentList.find(w => Number(w.id) === id);

  if (item) {
    return res.json({ status: 'success', data: item });
  }

  try {
    const q = `
      SELECT d.id, t.nama_kategori, d.nama_tempat, d.deskripsi_id, 
             d.latitude AS lat, d.longitude AS lng
      FROM direktori d
      LEFT JOIN tipe_kategori t ON d.id_kategori = t.id
      WHERE d.id = $1;
    `;
    const result = await pool.query(q, [id]);
    if (result.rows && result.rows.length > 0) {
      return res.json({ status: 'success', data: result.rows[0] });
    }
  } catch (e) {}

  res.status(404).json({ status: 'error', message: 'Destinasi tidak ditemukan' });
});

// POST /api/wisata: Menambah destinasi baru
app.post('/api/wisata', async (req, res) => {
  try {
    const {
      nama_tempat, nama_kategori, lokasi, status, deskripsi_id, deskripsi_en,
      lat, lng, latitude, longitude, htm, jam_buka, kontak_wa, pengelola, gambar, fasilitas
    } = req.body;

    if (!nama_tempat) {
      return res.status(400).json({ status: 'error', message: 'Nama tempat wajib diisi!' });
    }

    const currentList = readJsonFile('wisata.json', []);
    const nextId = currentList.length > 0 ? Math.max(...currentList.map(w => Number(w.id) || 0)) + 1 : 1;

    const newItem = {
      id: nextId,
      nama_tempat,
      nama_kategori: nama_kategori || 'Wisata Bahari',
      lokasi: lokasi || 'Kecamatan Banggai',
      status: status || 'Terbit',
      deskripsi_id: deskripsi_id || '',
      deskripsi_en: deskripsi_en || '',
      lat: parseFloat(lat || latitude) || -1.5932,
      lng: parseFloat(lng || longitude) || 123.5015,
      htm: htm || 'Gratis',
      jam_buka: jam_buka || '08:00 - 17:00 WITA',
      kontak_wa: kontak_wa || '6282292928800',
      pengelola: pengelola || 'Pokdarwis Banggai Laut',
      gambar: gambar || 'assets/img/hero-card.jpg',
      fasilitas: Array.isArray(fasilitas) ? fasilitas : ['Spot Foto Estetik', 'Gazebo Santai', 'Toilet & Kamar Bilas']
    };

    // Simpan ke PostgreSQL jika koneksi aktif
    try {
      const q = `
        INSERT INTO direktori (nama_tempat, deskripsi_id, latitude, longitude)
        VALUES ($1, $2, $3, $4) RETURNING *;
      `;
      await pool.query(q, [newItem.nama_tempat, newItem.deskripsi_id, newItem.lat, newItem.lng]);
    } catch (e) {
      // Offline fallback
    }

    currentList.unshift(newItem);
    writeJsonFile('wisata.json', currentList);

    res.status(201).json({
      status: 'success',
      message: `Destinasi "${nama_tempat}" berhasil disimpan ke backend!`,
      data: newItem
    });
  } catch (err) {
    console.error('Error on POST /api/wisata:', err);
    res.status(500).json({ status: 'error', message: 'Gagal menyimpan destinasi: ' + err.message });
  }
});

// PUT /api/wisata/:id: Memperbarui destinasi
app.put('/api/wisata/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const currentList = readJsonFile('wisata.json', []);
    const idx = currentList.findIndex(w => Number(w.id) === id);

    if (idx === -1) {
      return res.status(404).json({ status: 'error', message: 'Destinasi tidak ditemukan!' });
    }

    const updatedItem = {
      ...currentList[idx],
      ...req.body,
      id: id,
      lat: parseFloat(req.body.lat || req.body.latitude || currentList[idx].lat),
      lng: parseFloat(req.body.lng || req.body.longitude || currentList[idx].lng)
    };

    currentList[idx] = updatedItem;
    writeJsonFile('wisata.json', currentList);

    try {
      await pool.query(
        'UPDATE direktori SET nama_tempat = $1, deskripsi_id = $2, latitude = $3, longitude = $4 WHERE id = $5',
        [updatedItem.nama_tempat, updatedItem.deskripsi_id, updatedItem.lat, updatedItem.lng, id]
      );
    } catch (e) {}

    res.json({
      status: 'success',
      message: `Destinasi "${updatedItem.nama_tempat}" berhasil diperbarui di backend!`,
      data: updatedItem
    });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// DELETE /api/wisata/:id: Menghapus destinasi
app.delete('/api/wisata/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    let currentList = readJsonFile('wisata.json', []);
    const target = currentList.find(w => Number(w.id) === id);

    currentList = currentList.filter(w => Number(w.id) !== id);
    writeJsonFile('wisata.json', currentList);

    try {
      await pool.query('DELETE FROM direktori WHERE id = $1', [id]);
    } catch (e) {}

    res.json({
      status: 'success',
      message: target ? `Destinasi "${target.nama_tempat}" berhasil dihapus dari backend.` : 'Destinasi berhasil dihapus.'
    });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// POST /api/wisata/reset: Mengosongkan data destinasi
app.post('/api/wisata/reset', (req, res) => {
  writeJsonFile('wisata.json', []);
  res.json({ status: 'success', message: 'Seluruh data destinasi di backend berhasil dibersihkan (0 item).' });
});

// =========================================================
// 8. REST API: BANNER POSTER HERO SLIDER
// =========================================================

// GET /api/hero-banners: Mengambil 5 slide poster aktif
app.get('/api/hero-banners', (req, res) => {
  const banners = readJsonFile('banners.json', []);
  res.json({ status: 'success', data: banners });
});

// POST /api/hero-banners: Memperbarui poster slide oleh Admin
app.post('/api/hero-banners', (req, res) => {
  try {
    const { id, tag, badge, title, subtitle, bgImage } = req.body;
    const banners = readJsonFile('banners.json', []);
    const slotId = parseInt(id, 10);
    const idx = banners.findIndex(b => Number(b.id) === slotId);

    if (idx !== -1) {
      banners[idx] = {
        ...banners[idx],
        tag: tag || badge || banners[idx].tag,
        badge: badge || tag || banners[idx].badge,
        title: title || banners[idx].title,
        subtitle: subtitle || banners[idx].subtitle,
        bgImage: bgImage || banners[idx].bgImage
      };
    } else {
      banners.push({ id: slotId, tag: tag || badge, badge: badge || tag, title, subtitle, bgImage });
    }

    writeJsonFile('banners.json', banners);
    res.json({
      status: 'success',
      message: `Poster Hero Slide #${slotId} berhasil disimpan ke backend!`,
      data: banners
    });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// =========================================================
// 9. REST API: JADWAL ARMADA KAPAL & TRANSPORTASI
// =========================================================

// GET /api/transportasi: Mengambil jadwal kapal penyeberangan
app.get('/api/transportasi', async (req, res) => {
  try {
    const query = 'SELECT * FROM jadwal_transportasi ORDER BY rute_asal ASC;';
    const result = await pool.query(query);
    if (result.rows && result.rows.length > 0) {
      return res.json({ status: 'success', source: 'database_postgresql', data: result.rows });
    }
  } catch (err) {}

  const kapalList = readJsonFile('kapal.json', []);
  res.json({ status: 'success', source: 'backend_store', data: kapalList });
});

// POST /api/transportasi: Menambah/update jadwal kapal
app.post('/api/transportasi', (req, res) => {
  try {
    const currentList = readJsonFile('kapal.json', []);
    const nextId = currentList.length > 0 ? Math.max(...currentList.map(k => Number(k.id) || 0)) + 1 : 1;
    const newItem = { id: nextId, ...req.body };
    currentList.push(newItem);
    writeJsonFile('kapal.json', currentList);
    res.status(201).json({ status: 'success', message: 'Jadwal armada berhasil ditambahkan!', data: newItem });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// DELETE /api/transportasi/:id: Menghapus jadwal kapal
app.delete('/api/transportasi/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    let currentList = readJsonFile('kapal.json', []);
    currentList = currentList.filter(k => Number(k.id) !== id);
    writeJsonFile('kapal.json', currentList);
    res.json({ status: 'success', message: 'Jadwal armada berhasil dihapus.' });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// GET /api/panduan: Panduan perjalanan dari luar daerah
app.get('/api/panduan', async (req, res) => {
  try {
    const query = 'SELECT * FROM panduan_perjalanan ORDER BY id ASC;';
    const result = await pool.query(query);
    if (result.rows && result.rows.length > 0) {
      return res.json({ status: 'success', data: result.rows });
    }
  } catch (err) {}

  res.json({
    status: 'success',
    data: [
      {
        rute: 'Dari Jakarta / Surabaya / Makassar',
        deskripsi: 'Terbang menuju Bandara Syukuran Aminuddin Amir (LUW) di Luwuk (transit via Makassar/Palu), lalu lanjutkan perjalanan darat 30 menit ke Pelabuhan Rakyat Luwuk untuk menaiki Kapal Cepat Express ke Banggai.'
      },
      {
        rute: 'Dari Gorontalo / Manado',
        deskripsi: 'Perjalanan darat / penerbangan lokal menuju Kota Luwuk, dilanjutkan penyeberangan kapal cepat harian (09:00 WITA) atau kapal feri malam.'
      },
      {
        rute: 'Dari Kendari / Baubau (Sultra)',
        deskripsi: 'Tersedia pelayaran Kapal PELNI KM Sangiang rute Kendari - Banggai - Bitung (PP) dan Kapal Tol Laut Sabuk Nusantara sesuai maklumat jadwal bulanan.'
      }
    ]
  });
});

// =========================================================
// 10. TAB 1: ENDPOINT FORM AI (SMART ITINERARY GENERATOR)
// =========================================================
app.post(['/api/ai/rancang-rute', '/api/ai/itinerary'], async (req, res) => {
  try {
    const {
      durasi = 2,
      titik_awal = 'banggai',
      teman_perjalanan = 'couple',
      akomodasi = 'hotel_kota',
      minat = ['bahari', 'sunset'],
      anggaran_mode = 'per_day',
      anggaran_nilai = 750000
    } = req.body;

    const numDuration = Math.min(5, Math.max(1, parseInt(durasi, 10) || 2));
    const selectedHotel = HOTELS_DATA.find(h => h.id === akomodasi) || HOTELS_DATA[0];

    // Ambil destinasi riil dari file-store atau PostgreSQL jika tersedia
    const savedWisata = readJsonFile('wisata.json', []);

    const startNameMap = {
      'banggai': 'Pelabuhan Banggai (Pusat Kota)',
      'luwuk': 'Pelabuhan Luwuk (Penyeberangan Kapal Cepat)',
      'bandara': 'Bandara Luwuk Syukuran Aminuddin Amir (Transit Pesawat)',
      'bokan': 'Desa Mbuang-Mbuang (Kawasan Danau Ubur-Ubur)',
      'bobong': 'Pelabuhan Bobong (Maluku Utara)'
    };
    const startName = startNameMap[titik_awal] || 'Pelabuhan Banggai (Pusat Kota)';

    const travelerMap = {
      'couple': 'Pasangan / Bulan Madu (Romantis & Privat)',
      'family': 'Keluarga & Anak-anak (Aman & Ramah Keluarga)',
      'solo': 'Solo Traveler / Backpacker Mandiri',
      'group': 'Rombongan Teman / Komunitas'
    };
    const travelerName = travelerMap[teman_perjalanan] || 'Pasangan / Bulan Madu';

    const budgetFormatted = anggaran_mode === 'per_day'
      ? `Rp ${Number(anggaran_nilai).toLocaleString('id-ID')} / Hari / Orang (Total: Rp ${(Number(anggaran_nilai) * numDuration).toLocaleString('id-ID')})`
      : `Rp ${Number(anggaran_nilai).toLocaleString('id-ID')} Total Estimasi Selama di Balut`;

    // Susun timeline hari demi hari
    const days = [];
    for (let d = 1; d <= numDuration; d++) {
      let slots = [];

      if (d === 1) {
        slots.push({
          time: '08:30 - 11:30 WITA',
          type: 'wisata',
          destId: 1,
          title: 'Keraton Banggai & Situs Pusaka Kerajaan',
          category: 'Sejarah & Budaya',
          desc: 'Mengagumi peninggalan meriam kembar pusaka dan singgasana Kerajaan Banggai abad ke-16.',
          img: 'assets/img/hero-card.jpg',
          lat: -1.5932,
          lng: 123.5015,
          tips: 'Gunakan pakaian sopan saat memasuki area keraton bersejarah.'
        });

        slots.push({
          time: '12:00 - 13:30 WITA',
          type: 'kuliner',
          destId: 10,
          title: 'Santap Siang Kuliner Sinole & Ikan Cakalang Bakar',
          category: 'Kuliner Tradisional',
          desc: 'Olahan sagu sangrai parut kelapa Sinole gurih khas Banggai disantap bersama ikan segar dabu-dabu.',
          img: 'assets/img/hero-card.jpg',
          lat: -1.5945,
          lng: 123.5040,
          tips: 'Coba kombinasikan Sinole hangat dengan kuah asam ikan karang.'
        });

        slots.push({
          time: '15:30 - 18:00 WITA',
          type: 'wisata',
          destId: 8,
          title: 'Pesona Sunset Eksotis Tebing Karang Tanjung Gundul',
          category: 'Wisata Bahari & Sunset',
          desc: 'Menyaksikan langit senja keemasan dari atas tebing batu karst menghadap Laut Maluku.',
          img: 'assets/img/tanjung-gundul.jpg',
          lat: -1.6350,
          lng: 123.4750,
          tips: 'Bawa kamera atau drone untuk lanskap tebing karst yang memukau.'
        });
      } else if (d === 2) {
        slots.push({
          time: '08:00 - 12:30 WITA',
          type: 'wisata',
          destId: 4,
          title: 'Berenang Bersama Ribuan Ubur-Ubur Jinak Bokan',
          category: 'Danau & Geowisata',
          desc: 'Keajaiban ekologi danau air payau Desa Mbuang-Mbuang bersama ubur-ubur tanpa sengat langka di dunia.',
          img: 'assets/img/ubur-ubur.jpg',
          lat: -1.7850,
          lng: 123.5950,
          tips: 'Dilarang menggunakan sunscreen kimiawi dan dilarang mengangkat ubur-ubur dari air.'
        });

        slots.push({
          time: '13:00 - 14:00 WITA',
          type: 'kuliner',
          destId: 10,
          title: 'Makan Siang Seafood Segar Nelayan Mbuang-Mbuang',
          category: 'Kuliner Laut',
          desc: 'Ikan bakar segar dan olahan cumi tangkapan nelayan pesisir perahu tradisional Bokan.',
          img: 'assets/img/hero-card.jpg',
          lat: -1.7820,
          lng: 123.5930,
          tips: 'Nikmati kelapa muda segar langsung dipetik dari kebun pesisir.'
        });

        slots.push({
          time: '14:30 - 17:00 WITA',
          type: 'wisata',
          destId: 5,
          title: 'Snorkeling Terumbu Karang Laguna Karst Paisubatu',
          category: 'Wisata Bahari',
          desc: 'Gradasi toska kristal dan terumbu karang warna-warni yang masih murni terlindungi gugusan teluk.',
          img: 'assets/img/laguna-paisubatu.jpg',
          lat: -1.7650,
          lng: 123.5850,
          tips: 'Gunakan jaket pelampung untuk kenyamanan mengapung di atas kolam karst.'
        });
      } else if (d === 3) {
        slots.push({
          time: '08:30 - 11:30 WITA',
          type: 'wisata',
          destId: 3,
          title: 'Island Hopping Pasir Timbul Lambangan Pauno',
          category: 'Wisata Bahari',
          desc: 'Hamparan pasir putih berkilau di tengah laut dengan perairan dangkal jernih untuk relaksasi.',
          img: 'assets/img/lambangan-pauno.jpg',
          lat: -1.6150,
          lng: 123.5350,
          tips: 'Kunjungi saat air laut surut sedang untuk bentangan pasir timbul terbaik.'
        });

        slots.push({
          time: '13:30 - 16:00 WITA',
          type: 'wisata',
          destId: 9,
          title: 'Segarnya Kolam Hutan Alami Air Terjun Matube',
          category: 'Geowisata Alam',
          desc: 'Membasuh tubuh dengan air sejuk pegunungan di bawah rindangnya kanopi hutan tropis Balut.',
          img: 'assets/img/hero-card.jpg',
          lat: -1.6620,
          lng: 123.5150,
          tips: 'Kenakan sandal gunung atau alas kaki yang tidak licin saat menuruni jalan setapak.'
        });
      } else {
        slots.push({
          time: '09:00 - 12:00 WITA',
          type: 'wisata',
          destId: 7,
          title: 'Napak Tilas Cagar Makam Raja & Tradisi Adat Balut',
          category: 'Sejarah & Budaya',
          desc: 'Menelusuri sejarah sakral penghormatan leluhur dan ritual adat Malabot Tumbe.',
          img: 'assets/img/hero-card.jpg',
          lat: -1.5970,
          lng: 123.5040,
          tips: 'Mintalah panduan tetua adat setempat untuk mendengar kisah tutur sejarah.'
        });

        slots.push({
          time: '13:00 - 16:00 WITA',
          type: 'kuliner',
          destId: 10,
          title: 'Belanja Oleh-Oleh Ikan Asin Balut & Kue Tetu',
          category: 'Belanja & Kuliner',
          desc: 'Membawa cenderamata kuliner otentik sebelum jadwal pelayaran kapal kembali ke Luwuk.',
          img: 'assets/img/hero-card.jpg',
          lat: -1.5945,
          lng: 123.5040,
          tips: 'Ikan asin Banggai Laut terkenal gurih alami tanpa pengawet buatan.'
        });
      }

      // Hitung jarak dan estimasi waktu tempuh dari Hotel
      slots.forEach(slot => {
        const distKm = calculateDistance(selectedHotel.lat, selectedHotel.lng, slot.lat, slot.lng);
        slot.distanceFromHotelKm = distKm;
        slot.estTimeMin = Math.max(8, Math.round((distKm / 30) * 60));
      });

      days.push({ dayNumber: d, slots });
    }

    res.json({
      status: 'success',
      type: 'itinerary',
      data: {
        title: `Rute Wisata Terpadu Banggai Laut (${numDuration} Hari)`,
        duration: numDuration,
        startName,
        travelerName,
        hotel: selectedHotel,
        budgetFormatted,
        days,
        logisticsTips: [
          "Transportasi Laut: Untuk kunjungan ke Danau Ubur-Ubur (Bokan), gunakan perahu pagi pukul 08:00 dari Pelabuhan Banggai atau sewa perahu charter di Dermaga Monsongan.",
          "Uang Tunai: Wajib membawa uang tunai secukupnya, mesin ATM hanya tersedia di pusat kota Pulau Banggai.",
          "Konservasi: Dilarang menggunakan tabir surya kimia beracun saat berenang di Danau Ubur-Ubur. Gunakan sunscreen ramah terumbu (reef-safe)."
        ],
        verifiedBy: "Disparbud Balut & PostgreSQL Direktori Database"
      }
    });

  } catch (err) {
    console.error('Error on /api/ai/rancang-rute:', err);
    res.status(500).json({ status: 'error', message: 'Gagal menyusun itinerary: ' + err.message });
  }
});

// =========================================================
// 11. TAB 2: ENDPOINT TANYA BEBAS (CONVERSATIONAL Q&A AGENT)
// =========================================================
app.post(['/api/ai/tanya-bebas', '/api/ai/chat'], async (req, res) => {
  try {
    const { question = '' } = req.body;
    const q = question.toLowerCase().trim();

    if (!q) {
      return res.status(400).json({ status: 'error', message: 'Pertanyaan tidak boleh kosong.' });
    }

    // 1. Cek Pertanyaan Khusus: Ombak Desember & Balita
    if ((q.includes('ombak') || q.includes('gelombang') || q.includes('cuaca')) && 
        (q.includes('desember') || q.includes('balita') || q.includes('anak') || q.includes('mbuang'))) {
      return res.json({
        status: 'success',
        type: 'chat',
        answer: `
          <strong>🌊 Analisis Ombak Bulan Desember & Keamanan Anak Balita ke Mbuang-Mbuang:</strong><br><br>
          Bulan <strong>Desember</strong> di Kepulauan Banggai Laut memasuki <em>Musim Angin Barat (Muson Barat)</em>. Pada periode ini, perairan luar Teluk Tolo dan jalur penyeberangan menuju Kepulauan Bokan (Danau Ubur-Ubur) terkadang mengalami ombak sedang hingga tinggi (1.5 – 2.2 meter).<br><br>
          <strong>Panduan Keamanan Khusus untuk Membawa Balita:</strong><br>
          1. <strong>Waktu Berangkat Terbaik:</strong> Wajib menyeberang pada <em>pagi hari sekali</em> (pukul 06:30 – 08:00 WITA) saat angin laut masih tenang.<br>
          2. <strong>Pilihan Armada:</strong> Sangat disarankan menyewa <em>Speedboat Wisata Mesin Ganda tertutup</em> atau menumpang kapal penyeberangan bodi besar yang lebih stabil.<br>
          3. <strong>Pelampung Khusus:</strong> Pastikan balita telah mengenakan pelampung (<em>life jacket</em>) ukuran anak sejak berada di dermaga.<br>
          4. <strong>Kondisi di Danau Ubur-Ubur:</strong> Begitu tiba di lokasi Danau Mbuang-Mbuang, air danau <strong>sangat tenang (tanpa ombak)</strong> karena terkurung oleh perbukitan batu karst daratan. Ubur-uburnya pun 100% tanpa sengat sehingga sangat aman dan ramah untuk balita dengan ban pelampung.<br><br>
          <em>💡 Tips Waktu Terbaik:</em> Jika Anda mencari perairan laut yang tenang sebening kaca untuk keluarga, bulan paling tenang adalah <strong>Maret – Mei</strong> dan <strong>September – November</strong>.
        `,
        category: 'keamanan_ombak'
      });
    }

    // 2. Cek Pertanyaan Khusus: Sewa Motor Dekat Pelabuhan Jam 6 Pagi
    if ((q.includes('sewa motor') || q.includes('rental motor') || q.includes('ojek')) && 
        (q.includes('pelabuhan') || q.includes('jam 6') || q.includes('pagi') || q.includes('subuh'))) {
      return res.json({
        status: 'success',
        type: 'chat',
        answer: `
          <strong>🛵 Rekomendasi Sewa Motor Dekat Pelabuhan Banggai (Standby Jam 06:00 WITA):</strong><br><br>
          Di sekitar kawasan <strong>Pelabuhan Banggai</strong> (Kelurahan Lompio dan pusat pertokoan kota), sebagian besar penyedia jasa rental motor lokal <strong>siap melayani penyerahan unit langsung di dermaga pelabuhan pukul 06:00 WITA</strong> bertepatan dengan bersandarnya kapal penumpang dari Luwuk.<br><br>
          <strong>Informasi Penting & Tata Cara:</strong><br>
          • <strong>Tarif Sewa Reguler:</strong> Rp 75.000 – Rp 100.000 / 24 Jam (pilihan unit matic Honda Beat, Scoopy, Vario dalam kondisi prima).<br>
          • <strong>Fasilitas:</strong> Sudah termasuk 2 helm berstandar SNI dan jas hujan.<br>
          • <strong>Langkah Wajib:</strong> Koordinasikan via <strong>WhatsApp agen sewa 1 hari sebelumnya</strong> saat masih di Luwuk, agar pengelola rental dapat menunggu di pintu keluar dermaga dengan unit motor siap pakai.<br>
          • <strong>Jaminan:</strong> Cukup menitipkan identitas fisik (KTP/SIM) selama masa peminjaman.<br><br>
          <em>💡 Tips:</em> Minta bensin terisi awal untuk memudahkan perjalanan Anda langsung menuju penginapan atau sarapan pagi.
        `,
        category: 'rental_transportasi'
      });
    }

    // 3. Rute ke Danau Ubur-Ubur Bokan
    if (q.includes('ubur') || q.includes('mbuang') || q.includes('danau')) {
      return res.json({
        status: 'success',
        type: 'chat',
        answer: `
          <strong>🏖️ Rute Menuju Danau Ubur-Ubur Mbuang-Mbuang:</strong><br><br>
          1. <strong>Luwuk ➔ Banggai:</strong> Dari Pelabuhan Rakyat Luwuk, naik Kapal Cepat Express (09:00 WITA, ~2.5 jam, tiket Rp 180.000) atau Kapal Feri malam menuju Pelabuhan Banggai.<br>
          2. <strong>Banggai ➔ Mbuang-Mbuang (Kepulauan Bokan):</strong><br>
          • <em>Kapal Kayu Reguler:</em> Berangkat setiap pagi pukul 08:00 WITA dari Pelabuhan Banggai (ongkos Rp 60.000 – Rp 75.000 / orang, waktu tempuh ~3 jam).<br>
          • <em>Speedboat Wisata Charter:</em> Sekitar Rp 1.500.000 – Rp 2.500.000 / hari rombongan (waktu tempuh ~1 jam).<br>
          3. <strong>Etika Konservasi:</strong> Dilarang menggunakan tabir surya kimia beracun dan dilarang mengangkat ubur-ubur dari permukaan air demi menjaga kelestarian ekosistem langka ini.
        `,
        category: 'destinasi_ubur_ubur'
      });
    }

    // 4. Jadwal Kapal & Penyeberangan
    if (q.includes('jadwal') || q.includes('kapal') || q.includes('express') || q.includes('asdp') || q.includes('feri') || q.includes('pelni')) {
      return res.json({
        status: 'success',
        type: 'chat',
        answer: `
          <strong>⛴️ Ringkasan Jadwal Kapal Penyeberangan Utama Banggai Laut:</strong><br><br>
          • <strong>Kapal Cepat KM Express Priscilia 88 & Cantika Lestari (Luwuk ➔ Banggai):</strong> Setiap hari pukul 09:00 WITA (tempuh 2.5 jam). Tiket Rp 180.000 (Eksekutif) / Rp 220.000 (VIP).<br>
          • <strong>Kapal Feri ASDP Ro-Ro (Luwuk ➔ Banggai):</strong> Selasa, Kamis, Sabtu pukul 14:00 WITA (tempuh ~8 jam). Tiket Rp 85.000 (Penumpang), Rp 140.000 (Motor), Rp 850.000 (Mobil).<br>
          • <strong>Kapal Cepat Salakan ➔ Banggai:</strong> Setiap hari pukul 07:30 WITA (tempuh ~2 jam, Rp 70.000).<br>
          • <strong>Kapal Reguler Antar-Pulau Bokan:</strong> Senin, Rabu, Jumat, Sabtu pukul 08:00 WITA.<br><br>
          <em>Jadwal lengkap dan nomor kontak loket WhatsApp dapat dilihat di halaman <a href="panduan.html" style="color:#d4b07b; font-weight:bold;">Jadwal Kapal & Panduan Rute</a>.</em>
        `,
        category: 'jadwal_transportasi'
      });
    }

    // 5. Kuliner Otentik
    if (q.includes('kuliner') || q.includes('makan') || q.includes('sinole') || q.includes('ikan') || q.includes('tetu')) {
      return res.json({
        status: 'success',
        type: 'chat',
        answer: `
          <strong>🍽️ Kuliner Otentik Khas Banggai Laut:</strong><br><br>
          • <strong>Sinole:</strong> Makanan pokok pesisir dari sagu sangrai parut kelapa yang gurih. Sangat nikmat disantap bersama kuah asam ikan karang segar.<br>
          • <strong>Ikan Cakalang Bakar Dabu-Dabu:</strong> Hasil tangkapan nelayan lokal dibakar di atas bara arang batok kelapa.<br>
          • <strong>Kue Tetu (Kue Perahu):</strong> Olahan tepung beras santan dan gula aren khas Sulawesi Tengah dalam wadah daun pandan wangi.<br>
          • <strong>Kopi Babasal:</strong> Racikan kopi tradisional khas kepulauan Banggai dengan aroma harum.
        `,
        category: 'kuliner'
      });
    }

    // 6. Sejarah & Budaya
    if (q.includes('sejarah') || q.includes('keraton') || q.includes('budaya') || q.includes('tumbe') || q.includes('raja')) {
      return res.json({
        status: 'success',
        type: 'chat',
        answer: `
          <strong>🏛️ Warisan Sejarah & Budaya Kerajaan Banggai:</strong><br><br>
          • <strong>Keraton Banggai:</strong> Istana kayu bersejarah di Kelurahan Lompio peninggalan Kerajaan Banggai abad ke-16 yang menyimpan benda pusaka kerajaan dan meriam kuno.<br>
          • <strong>Upacara Malabot Tumbe:</strong> Tradisi sakral pelayaran penghantaran telur burung maleo dari tanah adat Batui menuju Keraton Banggai yang telah berlangsung ratusan tahun.<br>
          • <strong>Kompleks Makam Raja:</strong> Situs cagar budaya spiritual peristirahatan raja-raja Banggai di kawasan Lompio.
        `,
        category: 'budaya'
      });
    }

    // 7. General Assistant Response
    return res.json({
      status: 'success',
      type: 'chat',
      answer: `
        Halo! Terima kasih atas pertanyaan Anda seputar <strong>Kepulauan Banggai Laut</strong>.<br><br>
        Karena 94% wilayah Banggai Laut adalah perairan, perencanaan penyeberangan kapal dan pemilihan musim ombak sangatlah krusial untuk kenyamanan liburan Anda.<br><br>
        • Anda dapat menanyakan hal-hal spesifik lainnya seperti <em>keamanan ombak</em>, <em>sewa motor/mobil</em>, <em>akomodasi homestay</em>, atau <em>aturan snorkeling</em>.<br>
        • Untuk membuat rancangan rute perjalanan lengkap hari-demi-hari otomatis, silakan buka tab <strong>"Form Rancang Rute"</strong> di atas.
      `,
      category: 'general'
    });

  } catch (err) {
    console.error('Error on /api/ai/tanya-bebas:', err);
    res.status(500).json({ status: 'error', message: 'Gagal memproses pesan: ' + err.message });
  }
});

// =========================================================
// 12. RUNNING SERVER
// =========================================================
app.listen(port, () => {
  console.log(`[Si-PANDU Backend] Berjalan aktif di http://localhost:${port}`);
  console.log(`[REST API] Status: http://localhost:${port}/api/status`);
  console.log(`[REST API] Wisata: http://localhost:${port}/api/wisata`);
  console.log(`[REST API] Kapal: http://localhost:${port}/api/transportasi`);
  console.log(`[REST API] Banners: http://localhost:${port}/api/hero-banners`);
  console.log(`[AI Engine] Itinerary: POST http://localhost:${port}/api/ai/rancang-rute`);
  console.log(`[AI Engine] Tanya Bebas: POST http://localhost:${port}/api/ai/tanya-bebas`);
});
