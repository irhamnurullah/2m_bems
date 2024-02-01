import mysql from 'mysql2';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });
  const data = req.body;

  try {
    const query = 'INSERT INTO m_users (name, email, company_name, industry) VALUES (?, ?, ?, ?)';
    const [result] = await pool.promise().query(query, [data.name, data.email, data.company_name, data.industry]);

    res.status(201).json({ message: 'Data berhasil disimpan ke database' });
  } catch (error) {
    console.error('Gagal menyimpan data ke database: ', error);
    res.status(500).json({ message: 'Gagal menyimpan data ke database' });
  }
}
