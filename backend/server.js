const express = require('express');
const cors = require('cors');
const path = require('path'); // Wajib di-require untuk membaca folder frontend
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Agar bisa membaca data dari form HTML

// 👉 Konfigurasi agar file Frontend (HTML, CSS, JS) bisa diakses langsung oleh server backend
app.use(express.static(path.join(__dirname, '../frontend')));

// Rute utama untuk membuka halaman index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Konfigurasi koneksi ke database PostgreSQL
const pool = new Pool({
    user: 'postgres',
    password: 'bilkis21', 
    host: 'localhost',
    port: 5433,
    database: 'sipandu'
});

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
        console.error('Error saat mengambil data wisata:', err.message);
        res.status(500).json({ status: 'error', message: 'Terjadi kesalahan pada server' });
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
        console.error('Error Transportasi:', err.message);
        res.status(500).json({ status: 'error', message: 'Server Error Transportasi' });
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
        console.error('Error Panduan:', err.message);
        res.status(500).json({ status: 'error', message: 'Server Error Panduan' });
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

// 👉 Menyalakan server (Diletakkan di bagian PALING BAWAH setelah semua endpoint)
app.listen(port, () => {
    console.log(`Server Si-PANDU berjalan di http://localhost:${port}`);
});