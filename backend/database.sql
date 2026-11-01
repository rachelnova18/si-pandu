-- ====================================================================
-- SKRIP DATABASE POSTGRESQL SI-PANDU BANGGAI LAUT (LENGKAP)
-- Jalankan skrip ini di Query Tool pgAdmin 4 pada database "sipandu"
-- ====================================================================

-- 1. BERSIHKAN TABEL LAMA JIKA ADA (DROP DENGAN CASCADE)
DROP TABLE IF EXISTS hero_banners CASCADE;
DROP TABLE IF EXISTS panduan_perjalanan CASCADE;
DROP TABLE IF EXISTS jadwal_transportasi CASCADE;
DROP TABLE IF EXISTS direktori CASCADE;
DROP TABLE IF EXISTS tipe_kategori CASCADE;
DROP TABLE IF EXISTS admin CASCADE;

-- ====================================================================
-- 2. TABEL: admin (Kredensial Akses Command Center Administrator)
-- ====================================================================
CREATE TABLE admin (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    nama_lengkap VARCHAR(100),
    role VARCHAR(50) DEFAULT 'Administrator Disparbud',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Masukkan Kredensial Default
INSERT INTO admin (username, password, nama_lengkap, role) VALUES
('admin', 'admin123', 'Administrator Utama Disparbud', 'Super Administrator Disparbud'),
('postgres', 'bilkis21', 'Database System Administrator', 'Super Administrator Disparbud');

-- ====================================================================
-- 3. TABEL: tipe_kategori (Kategori Resmi Objek Wisata)
-- ====================================================================
CREATE TABLE tipe_kategori (
    id SERIAL PRIMARY KEY,
    nama_kategori VARCHAR(100) NOT NULL UNIQUE,
    deskripsi TEXT
);

INSERT INTO tipe_kategori (id, nama_kategori, deskripsi) VALUES
(1, 'Wisata Bahari', 'Pantai pasir putih, laguna karang, pulau tak berpenghuni, dan spot diving/snorkeling'),
(2, 'Sejarah & Budaya', 'Peninggalan Keraton Kerajaan Banggai abad ke-16, upacara adat Malabot Tumbe, dan makam raja'),
(3, 'Danau & Geowisata', 'Danau air asin habitat ubur-ubur tanpa sengat dan gua stalaktit karst alami'),
(4, 'Geowisata Alam', 'Air terjun alami di tengah hutan tropis dan lanskap perbukitan'),
(5, 'Kuliner Tradisional', 'Sentra kuliner pesisir, olahan sagu Sinole, ikan cakalang bakar, dan kue Tetu');

SELECT setval('tipe_kategori_id_seq', (SELECT MAX(id) FROM tipe_kategori));

-- ====================================================================
-- 4. TABEL: direktori (Daftar Tempat Wisata Lengkap)
-- ====================================================================
CREATE TABLE direktori (
    id SERIAL PRIMARY KEY,
    id_kategori INTEGER REFERENCES tipe_kategori(id) ON DELETE SET NULL,
    nama_tempat VARCHAR(255) NOT NULL,
    nama_tempat_en VARCHAR(255),
    lokasi VARCHAR(255) DEFAULT 'Kecamatan Banggai',
    deskripsi_id TEXT,
    deskripsi_en TEXT,
    latitude DOUBLE PRECISION DEFAULT -1.5932,
    longitude DOUBLE PRECISION DEFAULT 123.5015,
    htm VARCHAR(100) DEFAULT 'Gratis / Donasi',
    jam_buka VARCHAR(100) DEFAULT '08:00 - 17:00 WITA',
    kontak_wa VARCHAR(50) DEFAULT '6282292928800',
    pengelola VARCHAR(150) DEFAULT 'Pokdarwis Banggai Laut',
    gambar TEXT DEFAULT 'assets/img/hero-card.jpg',
    status VARCHAR(50) DEFAULT 'Terbit',
    fasilitas TEXT[] DEFAULT ARRAY['Spot Foto Estetik', 'Gazebo Santai', 'Toilet & Kamar Bilas'],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Catatan: Tabel direktori dibiarkan KOSONG (0 data) sesuai konsep Framework
-- agar Admin Disparbud dapat menginput hasil survei lapangan resmi melalui dashboard admin.

-- ====================================================================
-- 5. TABEL: jadwal_transportasi (Armada Kapal & Rute Penyeberangan)
-- ====================================================================
CREATE TABLE jadwal_transportasi (
    id SERIAL PRIMARY KEY,
    nama_kapal VARCHAR(150) NOT NULL,
    jenis VARCHAR(100) NOT NULL,
    rute_asal VARCHAR(150) NOT NULL,
    rute_tujuan VARCHAR(150) NOT NULL,
    hari VARCHAR(100) DEFAULT 'Setiap Hari',
    jam_berangkat VARCHAR(50) NOT NULL,
    jam_tiba VARCHAR(50) NOT NULL,
    tarif VARCHAR(150) NOT NULL,
    status VARCHAR(50) DEFAULT 'Beroperasi Normal'
);

INSERT INTO jadwal_transportasi (nama_kapal, jenis, rute_asal, rute_tujuan, hari, jam_berangkat, jam_tiba, tarif, status) VALUES
('KM Express Priscilia 88', 'Kapal Cepat Express', 'Pelabuhan Luwuk', 'Pelabuhan Banggai', 'Setiap Hari', '09:00 WITA', '11:30 WITA', 'Rp 180.000 (Eks) / Rp 220.000 (VIP)', 'Beroperasi Normal'),
('KM Cantika Lestari 99', 'Kapal Cepat Express', 'Pelabuhan Banggai', 'Pelabuhan Luwuk', 'Setiap Hari', '09:00 WITA', '11:45 WITA', 'Rp 180.000 (Eks) / Rp 220.000 (VIP)', 'Beroperasi Normal'),
('KMP Tanjung Api (ASDP)', 'Kapal Feri Ro-Ro', 'Pelabuhan Lalong (Luwuk)', 'Pelabuhan ASDP Banggai', 'Selasa, Kamis, Sabtu', '14:00 WITA', '22:00 WITA', 'Rp 85.000 (Org) | Rp 140.000 (Motor)', 'Beroperasi Normal'),
('KM Barcelona II', 'Kapal Kayu Cepat', 'Salakan (Bangkep)', 'Banggai (Balut)', 'Setiap Hari', '07:30 WITA', '09:30 WITA', 'Rp 70.000 / Orang', 'Beroperasi Normal'),
('KM Fungka Permata', 'Kapal Motor Reguler', 'Banggai (Balut)', 'Salakan (Bangkep)', 'Setiap Hari', '13:30 WITA', '15:30 WITA', 'Rp 70.000 / Orang', 'Beroperasi Normal'),
('KM Bokan Indah', 'Kapal Kayu Antar-Pulau', 'Pelabuhan Banggai', 'Mbuang-Mbuang', 'Sen, Rab, Jum, Sab', '08:00 WITA', '11:30 WITA', 'Rp 60.000 – Rp 75.000', 'Beroperasi Normal'),
('KM Sangiang (PELNI)', 'Kapal Penumpang Nasional', 'Kendari / Bau-Bau', 'Banggai – Bitung (PP)', 'Jadwal Resmi PELNI', '2x Sebulan', 'Sesuai Maklumat', 'Rp 165.000 – Rp 280.000', 'Jadwal Berkala');

-- ====================================================================
-- 6. TABEL: panduan_perjalanan (Panduan Kedatangan ke Banggai Laut)
-- ====================================================================
CREATE TABLE panduan_perjalanan (
    id SERIAL PRIMARY KEY,
    rute VARCHAR(200) NOT NULL,
    deskripsi TEXT NOT NULL
);

INSERT INTO panduan_perjalanan (rute, deskripsi) VALUES
('Dari Jakarta / Surabaya / Makassar (Udara + Laut)', 'Terbang menuju Bandara Syukuran Aminuddin Amir (LUW) di Luwuk (transit via Makassar/Palu). Lanjutkan perjalanan darat 30 menit ke Pelabuhan Rakyat Luwuk untuk menaiki Kapal Cepat Express (berangkat tiap hari pukul 09:00 WITA) langsung ke Pelabuhan Banggai (waktu tempuh ~2.5 jam).'),
('Dari Gorontalo / Manado (Darat/Udara + Laut)', 'Perjalanan darat atau penerbangan lokal menuju Kota Luwuk, dilanjutkan penyeberangan kapal cepat harian (09:00 WITA) atau kapal feri malam ASDP.'),
('Dari Kendari / Baubau / Maluku (Jalur Laut PELNI)', 'Menggunakan armada Kapal PELNI KM Sangiang rute Kendari - Banggai - Bitung (PP) atau Kapal Tol Laut Sabuk Nusantara sesuai jadwal operasional berkala.');

-- ====================================================================
-- 7. TABEL: hero_banners (5 Slide Poster Hero Beranda Si-PANDU)
-- ====================================================================
CREATE TABLE hero_banners (
    id SERIAL PRIMARY KEY,
    tag VARCHAR(150),
    badge VARCHAR(150),
    category VARCHAR(150),
    title VARCHAR(255) NOT NULL,
    subtitle TEXT,
    bg_image TEXT,
    date_info VARCHAR(100),
    location_info VARCHAR(150),
    htm_info VARCHAR(100)
);

INSERT INTO hero_banners (id, tag, badge, category, title, subtitle, bg_image, date_info, location_info, htm_info) VALUES
(1, 'SULAWESI TENGAH • INDONESIA', 'SULAWESI TENGAH • INDONESIA', 'Pesona Maritim Kepulauan', 'BANGGAI &nbsp; LAUT', 'Sistem Pariwisata & Navigasi Bahari Terpadu • Pesona 200+ Pulau Karang & Danau Ubur-Ubur', 'assets/img/hero-bg.jpg', 'Edisi Wisata Terpadu 2026', 'Kabupaten Banggai Laut, Sulawesi Tengah', 'Katalog Wisata & Panduan Lengkap'),
(2, 'DESTINASI UNGGULAN • BOKAN KEPULAUAN', 'DESTINASI UNGGULAN • BOKAN KEPULAUAN', 'Ekowisata Bahari Langka', 'Danau Ubur-Ubur Mbuang-Mbuang', 'Berenang bersama jutaan ubur-ubur emas jinak tanpa sengat di laguna karst alami.', 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&q=80', 'Buka Setiap Hari (07:00 - 17:00 WITA)', 'Desa Mbuang-Mbuang, Kec. Bokan Kepulauan', 'Rp 25.000 / Orang'),
(3, 'CAGAR BUDAYA 5 ABAD • KERATON BANGGAI', 'CAGAR BUDAYA 5 ABAD • KERATON BANGGAI', 'Upacara Adat Sakral', 'Upacara Adat Sakral Malabot Tumbe', 'Tradisi sakral pelayaran penghantaran telur burung maleo menuju Keraton Banggai.', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80', 'Awal Desember 2026', 'Keraton Kesultanan Banggai & Pelabuhan', 'Cagar Budaya Adat (Gratis)'),
(4, 'PANORAMA SENJA • PANTAI PASIR PUTIH', 'PANORAMA SENJA • PANTAI PASIR PUTIH', 'Panorama Senja Bahari', 'Pesona Senja Tebing Tanjung Gundul', 'Gradasi langit jingga keemasan berpadu dengan tebing karang dan birunya laut kepulauan.', 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&q=80', 'Waktu Terbaik: 16:30 - 18:30 WITA', 'Desa Pasir Putih, Kec. Banggai', 'Rp 5.000 / Retribusi'),
(5, 'KULINER OTENTIK • TRADISI PESISIR', 'KULINER OTENTIK • TRADISI PESISIR', 'Pesta Kuliner Bahari', 'Kuliner Ikan Bakar & Sinole Tradisional', 'Cita rasa otentik sagu sangrai gurih, ikan cakalang bumbu rempah, dan kue perahu Tetu.', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80', 'Setiap Hari & Akhir Pekan', 'Sentra Wisata Kuliner Pesisir Banggai', 'Mulai Rp 15.000 / Porsi');

SELECT setval('hero_banners_id_seq', (SELECT MAX(id) FROM hero_banners));

-- SELESAI. Seluruh tabel siap digunakan oleh Backend Express & Admin Command Center Si-PANDU.

