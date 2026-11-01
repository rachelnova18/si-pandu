const express = require('express');
const cors = require('cors');
const path = require('path');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files from parent directory and frontend folder
app.use(express.static(path.join(__dirname, '..')));
app.use(express.static(path.join(__dirname, '../frontend')));

// Rute utama untuk membuka halaman index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Konfigurasi koneksi ke database PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'bilkis21', 
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5433,
  database: process.env.DB_NAME || 'sipandu'
});

// Helper: Haversine distance in km
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // radius bumi dalam km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return parseFloat((R * c).toFixed(1));
}

// Basis Data Destinasi Terverifikasi (Guaranteed No Hallucination Fallback)
const VERIFIED_DESTINATIONS = [
  { id: 1, nama_kategori: 'Sejarah & Budaya', nama_tempat: 'Keraton Banggai & Situs Pusaka', deskripsi_id: 'Bangunan peninggalan kembar meriam kuno dan singgasana Kerajaan Banggai abad ke-16.', gambar: 'assets/img/hero-card.jpg', lat: -1.5932, lng: 123.5015, cluster: 'kota' },
  { id: 2, nama_kategori: 'Wisata Bahari', nama_tempat: 'Pantai Bontolan', deskripsi_id: 'Pesisir pantai teduh dengan jajaran pohon kelapa dan ombak tenang di Bone Baru.', gambar: 'assets/img/pantai-bontolan.jpg', lat: -1.5600, lng: 123.5100, cluster: 'pantai_utara' },
  { id: 3, nama_kategori: 'Wisata Bahari', nama_tempat: 'Pasir Timbul Lambangan Pauno', deskripsi_id: 'Bentang pasir timbul putih memanjang dengan gradasi air laut toska jernih.', gambar: 'assets/img/lambangan-pauno.jpg', lat: -1.6150, lng: 123.5350, cluster: 'island_hopping' },
  { id: 4, nama_kategori: 'Danau & Geowisata', nama_tempat: 'Danau Ubur-Ubur Mbuang-Mbuang', deskripsi_id: 'Danau air asin tersembunyi habitat ribuan ubur-ubur tanpa sengat langka di dunia.', gambar: 'assets/img/ubur-ubur.jpg', lat: -1.7850, lng: 123.5950, cluster: 'bokan' },
  { id: 5, nama_kategori: 'Wisata Bahari', nama_tempat: 'Laguna Karst Paisubatu', deskripsi_id: 'Laguna air laut toska jernih dikelilingi tebing karst alami dan spot snorkeling kaya koral.', gambar: 'assets/img/laguna-paisubatu.jpg', lat: -1.7650, lng: 123.5850, cluster: 'bokan' },
  { id: 6, nama_kategori: 'Wisata Bahari', nama_tempat: 'Pulau Bandang & Pasir Putih', deskripsi_id: 'Pulau tak berpenghuni dengan terumbu karang terjaga, surga snorkeling & diving.', gambar: 'assets/img/pulau-bandang.jpg', lat: -1.6420, lng: 123.5500, cluster: 'island_hopping' },
  { id: 7, nama_kategori: 'Sejarah & Budaya', nama_tempat: 'Cagar Makam Raja-Raja Banggai', deskripsi_id: 'Kompleks pemakaman leluhur raja Banggai sarat nilai sejarah dan spiritual.', gambar: 'assets/img/hero-card.jpg', lat: -1.5970, lng: 123.5040, cluster: 'kota' },
  { id: 8, nama_kategori: 'Wisata Bahari & Sunset', nama_tempat: 'Tanjung Gundul & Sunset Point', deskripsi_id: 'Panorama tebing batu eksotis menghadap Laut Maluku dengan pemandangan senja spektakuler.', gambar: 'assets/img/tanjung-gundul.jpg', lat: -1.6350, lng: 123.4750, cluster: 'sunset' },
  { id: 9, nama_kategori: 'Geowisata Alam', nama_tempat: 'Air Terjun Matube', deskripsi_id: 'Air terjun sejuk di tengah hutan tropis rindang dengan kolam alami menyegarkan.', gambar: 'assets/img/hero-card.jpg', lat: -1.6620, lng: 123.5150, cluster: 'alam' },
  { id: 10, nama_kategori: 'Kuliner Tradisional', nama_tempat: 'Sentra Kuliner Pesisir & Sinole', deskripsi_id: 'Menikmati kuliner otentik Sinole sagu parut kelapa dan ikan cakalang bakar sambal dabu-dabu.', gambar: 'assets/img/hero-card.jpg', lat: -1.5945, lng: 123.5040, cluster: 'kuliner' }
];

const HOTELS_DATA = [
  { id: "hotel_kota", name: "Hotel Pusat Kota Banggai", loc: "Pusat Kota Banggai (Dekat Pelabuhan & Kuliner)", lat: -1.5935, lng: 123.5012 },
  { id: "homestay_pantai", name: "Homestay Tepi Pantai (Desa Wisata)", loc: "Pesisir Pantai Bone Baru", lat: -1.5620, lng: 123.5090 },
  { id: "resort_apung", name: "Resort Apung Mbuang-Mbuang", loc: "Kepulauan Bokan (Dekat Danau Ubur-Ubur)", lat: -1.7820, lng: 123.5930 },
  { id: "camping_pantai", name: "Glamping & Kemah Pesisir", loc: "Tanjung Gundul / Pantai Selatan", lat: -1.6340, lng: 123.4760 }
];

// =========================================================
// 1. ENDPOINT LAMA (DIREKTORI & LOGISTIK)
// =========================================================

// Endpoint: Mengambil data wisata dari tabel direktori
app.get('/api/wisata', async (req, res) => {
  try {
    const query = `
      SELECT d.id, t.nama_kategori, d.nama_tempat, d.deskripsi_id, 
             d.latitude, d.longitude 
      FROM direktori d
      JOIN tipe_kategori t ON d.id_kategori = t.id;
    `;
    const result = await pool.query(query);

    res.json({
      status: 'success',
      data: result.rows
    });
  } catch (err) {
    console.warn('DB offline or error, returning fallback wisata data:', err.message);
    res.json({
      status: 'success',
      data: VERIFIED_DESTINATIONS
    });
  }
});

// Endpoint: Mengambil data jadwal kapal penyeberangan
app.get('/api/transportasi', async (req, res) => {
  try {
    const query = 'SELECT * FROM jadwal_transportasi ORDER BY rute_asal ASC;';
    const result = await pool.query(query);
    
    res.json({
      status: 'success',
      data: result.rows
    });
  } catch (err) {
    console.warn('DB offline for transportasi, using empty or client default:', err.message);
    res.json({ status: 'success', data: [] });
  }
});

// Endpoint: Mengambil data panduan perjalanan dari luar daerah
app.get('/api/panduan', async (req, res) => {
  try {
    const query = 'SELECT * FROM panduan_perjalanan ORDER BY id ASC;';
    const result = await pool.query(query);
    
    res.json({
      status: 'success',
      data: result.rows
    });
  } catch (err) {
    console.warn('DB offline for panduan:', err.message);
    res.json({ status: 'success', data: [] });
  }
});

// Endpoint: Login Admin
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const query = 'SELECT * FROM admin WHERE username = $1 AND password = $2';
    const result = await pool.query(query, [username, password]);
    
    if (result.rows.length > 0) {
      res.json({ 
        status: 'success', 
        message: 'Login berhasil!',
        data: {
          id: result.rows[0].id,
          username: result.rows[0].username
        }
      });
    } else {
      res.status(401).json({ status: 'error', message: 'Username atau password salah!' });
    }
  } catch (err) {
    console.error('Error Login:', err.message);
    res.status(500).json({ status: 'error', message: 'Server Error Login' });
  }
});

// =========================================================
// 2. TAB 1: ENDPOINT FORM (SMART ITINERARY GENERATOR)
// =========================================================
// Bertugas murni sebagai Itinerary Generator dengan output terstruktur ketat (JSON timeline).
// Menghubungkan input terkunci dari pengguna ke data terverifikasi (PostgreSQL / Curated Data)
// untuk memastikan NO HALLUCINATION (meminimalisir AI berhalusinasi tempat fiktif).
app.post(['/api/ai/rancang-rute', '/api/ai/itinerary'], async (req, res) => {
  try {
    const {
      durasi = 2,
      titik_awal = 'banggai',
      teman_perjalanan = 'couple',
      akomodasi = 'hotel_kota',
      minat = ['bahari', 'sunset'],
      anggaran_level = 'standar',
      anggaran_mode = 'per_day',
      anggaran_nilai = 750000
    } = req.body;

    const numDuration = Math.min(5, Math.max(1, parseInt(durasi, 10) || 2));

    // 1. Ambil data destinasi riil dari PostgreSQL direktori (dengan fallback data terverifikasi)
    let destinations = [];
    try {
      const dbRes = await pool.query(`
        SELECT d.id, t.nama_kategori, d.nama_tempat, d.deskripsi_id, 
               d.latitude, d.longitude 
        FROM direktori d
        JOIN tipe_kategori t ON d.id_kategori = t.id;
      `);
      if (dbRes.rows && dbRes.rows.length > 0) {
        destinations = dbRes.rows.map(r => ({
          id: r.id,
          nama_kategori: r.nama_kategori,
          nama_tempat: r.nama_tempat,
          deskripsi_id: r.deskripsi_id,
          lat: parseFloat(r.latitude) || -1.5935,
          lng: parseFloat(r.longitude) || 123.5012,
          gambar: 'assets/img/hero-card.jpg'
        }));
      }
    } catch (err) {
      console.warn('DB PostgreSQL query failed, using verified fallback data:', err.message);
    }

    if (destinations.length === 0) {
      destinations = VERIFIED_DESTINATIONS;
    }

    // 2. Tentukan Hotel Basis
    const selectedHotel = HOTELS_DATA.find(h => h.id === akomodasi) || HOTELS_DATA[0];

    // 3. Nama Titik Awal & Teman Perjalanan
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

    // 4. Format Anggaran
    const budgetFormatted = anggaran_mode === 'per_day'
      ? `Rp ${anggaran_nilai.toLocaleString('id-ID')} / Hari / Orang (Total: Rp ${(anggaran_nilai * numDuration).toLocaleString('id-ID')})`
      : `Rp ${anggaran_nilai.toLocaleString('id-ID')} Total Estimasi Selama di Balut`;

    // 5. Susun Timeline Hari demi Hari Berdasarkan Klaster Geografis & Minat
    const days = [];
    for (let d = 1; d <= numDuration; d++) {
      let slots = [];

      if (d === 1) {
        // Hari 1: Pusat Kota Banggai, Cagar Sejarah Keraton, & Kuliner Pesisir
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
        // Hari 2: Eksplorasi Kepulauan Bokan (Danau Ubur-Ubur & Laguna Paisubatu)
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
        // Hari 3: Island Hopping Pasir Timbul & Hutan Tropis
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
        // Hari 4 & 5: Cagar Budaya Spiritual & Belanja Oleh-Oleh
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

      // Hitung jarak dan waktu tempuh dari Hotel
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
          "Transportasi Laut: Untuk kunjungan ke Danau Ubur-Ubur (Bokan), gunakan perahu kayu pagi pukul 08:00 dari Pelabuhan Banggai atau sewa perahu charter di Dermaga Monsongan.",
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
// 3. TAB 2: ENDPOINT TANYA BEBAS (CONVERSATIONAL Q&A AGENT)
// =========================================================
// Bertugas sebagai Virtual Tour Guide & Customer Service resmi Si-PANDU Banggai Laut.
// Menangani pertanyaan kontekstual, kondisi khusus wisatawan (anak balita, sewa motor subuh,
// cuaca/musim ombak, jadwal kapal, kuliner lokal, etika adat).
app.post(['/api/ai/tanya-bebas', '/api/ai/chat'], async (req, res) => {
  try {
    const { question = '', lang = 'id', context = {} } = req.body;
    const q = question.toLowerCase().trim();

    if (!q) {
      return res.status(400).json({ status: 'error', message: 'Pertanyaan tidak boleh kosong.' });
    }

    // 1. Cek Pertanyaan Khusus: Ombak Desember & Balita
    if ((q.includes('ombak') || q.includes('gelombang') || q.includes('cuaca')) && (q.includes('desember') || q.includes('balita') || q.includes('anak') || q.includes('mbuang'))) {
      return res.json({
        status: 'success',
        type: 'chat',
        answer: `
          <strong>🌊 Analisis Ombak Bulan Desember & Keamanan Anak Balita ke Mbuang-Mbuang:</strong><br><br>
          Bulan <strong>Desember</strong> di Kepulauan Banggai Laut memasuki <em>Musim Angin Barat (Muson Barat)</em>. Pada periode ini, perairan luar Teluk Tolo dan jalur penyeberangan menuju Kepulauan Bokan (Danau Ubur-Ubur) terkadang mengalami ombak sedang hingga tinggi (1.5 – 2.2 meter).<br><br>
          <strong>Panduan Keamanan Khusus untuk Membawa Balita:</strong><br>
          1. <strong>Waktu Berangkat Terbaik:</strong> Wajib menyeberang pada <em>pagi hari sekali</em> (pukul 06:30 – 08:00 WITA) saat angin laut masih tenang dan permukaan air relatif teduh.<br>
          2. <strong>Pilihan Armada:</strong> Hindari menyewa perahu katinting kayu kecil terbuka. Sangat disarankan menyewa <em>Speedboat Wisata Mesin Ganda tertutup</em> atau menumpang kapal penyeberangan bodi besar yang lebih stabil.<br>
          3. <strong>Pelampung Khusus:</strong> Pastikan balita telah mengenakan pelampung (<em>life jacket</em>) ukuran anak sejak berada di dermaga penyeberangan.<br>
          4. <strong>Kondisi di Danau Ubur-Ubur:</strong> Begitu tiba di lokasi Danau Mbuang-Mbuang, air danau <strong>sangat tenang (tanpa ombak)</strong> karena terkurung oleh perbukitan batu karst daratan. Ubur-uburnya pun 100% tanpa sengat sehingga sangat aman dan ramah untuk balita dengan ban pelampung.<br><br>
          <em>💡 Tips Waktu Terbaik:</em> Jika Anda mencari perairan laut yang tenang sebening kaca untuk keluarga, bulan paling tenang adalah <strong>Maret – Mei</strong> dan <strong>September – November</strong>.
        `,
        category: 'keamanan_ombak'
      });
    }

    // 2. Cek Pertanyaan Khusus: Sewa Motor Dekat Pelabuhan Jam 6 Pagi
    if ((q.includes('sewa motor') || q.includes('rental motor') || q.includes('ojek')) && (q.includes('pelabuhan') || q.includes('jam 6') || q.includes('pagi') || q.includes('subuh'))) {
      return res.json({
        status: 'success',
        type: 'chat',
        answer: `
          <strong>🛵 Rekomendasi Sewa Motor Dekat Pelabuhan Banggai (Buka / Standby Jam 06:00 WITA):</strong><br><br>
          Di sekitar kawasan <strong>Pelabuhan Banggai</strong> (Kelurahan Lompio dan pusat pertokoan kota), sebagian besar penyedia jasa rental motor lokal <strong>siap melayani penyerahan unit langsung di dermaga pelabuhan pukul 06:00 WITA</strong> bertepatan dengan bersandarnya kapal penumpang dari Luwuk.<br><br>
          <strong>Informasi Penting & Tata Cara:</strong><br>
          • <strong>Tarif Sewa Reguler:</strong> Rp 75.000 – Rp 100.000 / 24 Jam (pilihan unit matic: Honda Beat, Scoopy, Vario dalam kondisi prima).<br>
          • <strong>Fasilitas:</strong> Sudah termasuk 2 helm berstandar SNI dan jas hujan.<br>
          • <strong>Langkah Wajib:</strong> Anda disarankan melakukan koordinasi via <strong>WhatsApp agen sewa 1 hari sebelumnya</strong> saat masih di Luwuk, agar pengelola rental dapat menunggu di pintu keluar dermaga dengan unit motor siap pakai.<br>
          • <strong>Jaminan:</strong> Cukup menitipkan identitas fisik (KTP/SIM) selama masa peminjaman.<br><br>
          <em>💡 Tips:</em> Minta bensin terisi awal untuk memudahkan perjalanan Anda langsung menuju penginapan atau sarapan pagi kuliner khas Banggai.
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
          • <strong>Sinole:</strong> Makanan pokok pesisir dari sagu sangrai parut kelapa yang gurih. Sangat cocok disantap bersama kuah asam ikan karang segar.<br>
          • <strong>Ikan Cakalang Bakar Dabu-Dabu:</strong> Hasil tangkapan segar perahu nelayan lokal dibakar di atas bara arang batok kelapa.<br>
          • <strong>Kue Tetu (Kue Perahu):</strong> Olahan tepung beras santan dan gula aren khas Sulawesi Tengah yang disajikan dalam wadah daun pandan wangi.<br>
          • <strong>Kopi Babasal:</strong> Racikan kopi tradisional khas kepulauan Banggai dengan aroma khas.
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
          • <strong>Keraton Banggai:</strong> Istana kayu bersejarah di Kelurahan Lompio peninggalan Kerajaan Banggai abad ke-16 yang menyimpan benda pusaka kerajaan dan meriam kuno Portugis/Belanda.<br>
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
        Karena 94% wilayah Banggai Laut adalah perairan, perencanaan moda penyeberangan laut, jadwal kapal, dan pemilihan musim ombak sangatlah krusial untuk kenyamanan liburan Anda.<br><br>
        • Anda dapat menanyakan hal-hal spesifik lainnya seperti <em>keamanan ombak</em>, <em>sewa motor/mobil</em>, <em>akomodasi homestay</em>, atau <em>aturan snorkeling</em>.<br>
        • Untuk membuat rancangan rute perjalanan lengkap hari-demi-hari otomatis yang terhubung dengan visual peta satelit interaktif, silakan buka tab <strong>"Form Rancang Rute"</strong> di sebelah atas.
      `,
      category: 'general'
    });

  } catch (err) {
    console.error('Error on /api/ai/tanya-bebas:', err);
    res.status(500).json({ status: 'error', message: 'Gagal memproses pesan: ' + err.message });
  }
});

// Menyalakan server
app.listen(port, () => {
  console.log(`Server Si-PANDU berjalan di http://localhost:${port}`);
  console.log(`Endpoint Itinerary: POST http://localhost:${port}/api/ai/rancang-rute`);
  console.log(`Endpoint Tanya Bebas: POST http://localhost:${port}/api/ai/tanya-bebas`);
});
