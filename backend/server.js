const express = require('express');
const cors = require('cors');
const path = require('path'); 
const { Pool } = require('pg');
const jwt = require('jsonwebtoken'); // Modul JWT dipanggil di sini
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// Konfigurasi agar file Frontend bisa diakses langsung oleh server backend
app.use(express.static(path.join(__dirname, '../frontend')));

// Rute utama untuk membuka halaman index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Konfigurasi koneksi ke database PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

// Middleware untuk mengecek token JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    // Mengambil token dari format "Bearer <token>"
    const token = authHeader && authHeader.split(' ')[1]; 
    
    if (!token) {
        return res.status(401).json({ status: 'error', message: 'Akses ditolak. Token tidak ditemukan!' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ status: 'error', message: 'Token tidak valid atau sudah kedaluwarsa!' });
        req.user = user;
        next(); // Jika token sah, izinkan lanjut ke proses selanjutnya
    });
};

// Endpoint: Mengambil data wisata
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

// Endpoint: Mengambil data panduan perjalanan
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

// Endpoint: Login Admin dengan JWT
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const query = 'SELECT * FROM admin WHERE username = $1 AND password = $2';
        const result = await pool.query(query, [username, password]);
        
        if (result.rows.length > 0) {
            const admin = result.rows[0];

            // Membuat Token JWT dari data admin dan JWT_SECRET
            const token = jwt.sign(
                { id: admin.id, username: admin.username },
                process.env.JWT_SECRET,
                { expiresIn: '1d' } // Token akan hangus dalam 1 hari
            );
            
            res.json({ 
                status: 'success', 
                message: 'Login berhasil!',
                token: token, // Mengirim token sebagai tiket ke frontend
                data: {
                    id: admin.id,
                    username: admin.username
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

// Endpoint: Menambah data wisata baru (POST)
app.post('/api/wisata', authenticateToken, async (req, res) => {
    const { id_kategori, nama_tempat, deskripsi_id, deskripsi_en, latitude, longitude, harga_mulai, kontak_wa } = req.body;
    try {
        const query = `
            INSERT INTO direktori (id_kategori, nama_tempat, deskripsi_id, deskripsi_en, latitude, longitude, harga_mulai, kontak_wa) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;
        `;
        const values = [id_kategori, nama_tempat, deskripsi_id, deskripsi_en, latitude, longitude, harga_mulai, kontak_wa];
        const result = await pool.query(query, values);
        res.json({ status: 'success', message: 'Destinasi berhasil ditambahkan!', data: result.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ status: 'error', message: 'Gagal menambah data' });
    }
});

// Endpoint: Mengedit data wisata (PUT)
app.put('/api/wisata/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { nama_tempat, harga_mulai, kontak_wa } = req.body;
    try {
        const query = `UPDATE direktori SET nama_tempat = $1, harga_mulai = $2, kontak_wa = $3 WHERE id = $4 RETURNING *`;
        const result = await pool.query(query, [nama_tempat, harga_mulai, kontak_wa, id]);
        res.json({ status: 'success', message: 'Data berhasil diubah!', data: result.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ status: 'error', message: 'Gagal mengubah data' });
    }
});

// Endpoint: Menghapus data wisata (DELETE)
app.delete('/api/wisata/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM direktori WHERE id = $1', [id]);
        res.json({ status: 'success', message: 'Data destinasi berhasil dihapus!' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ status: 'error', message: 'Gagal menghapus data' });
    }
});

// Menyalakan server
app.listen(port, () => {
    console.log(`Server Si-PANDU berjalan di http://localhost:${port}`);
});