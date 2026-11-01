const { Pool } = require('pg');
require('dotenv').config();

// Koneksi Supabase Pooler atau PostgreSQL Lokal
const pool = new Pool(
  process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
        connectionTimeoutMillis: 5000,
        idleTimeoutMillis: 30000
      }
    : {
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'bilkis21',
        host: process.env.DB_HOST || 'localhost',
        database: process.env.DB_NAME || 'sipandu',
        port: parseInt(process.env.DB_PORT, 10) || 5433,
        connectionTimeoutMillis: 2000,
        idleTimeoutMillis: 10000
      }
);

pool.on('error', (err) => {
  console.warn('[PostgreSQL Pool Warning]', err.message);
});

module.exports = pool;
