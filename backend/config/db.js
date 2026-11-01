const { Pool } = require('pg');
require('dotenv').config();

// Mengambil konfigurasi dari file .env
const pool = new Pool({
  user: postgres,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Mengecek apakah koneksi berhasil
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Gagal terkoneksi ke database PostgreSQL:', err.stack);
  }
  console.log('Berhasil terhubung ke database PostgreSQL Si-PANDU!');
  release(); // melepaskan client kembali ke pool
});

module.exports = pool;