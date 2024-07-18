const express = require('express');
const { Pool } = require('pg');
const app = express();

require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

// API to get hotel details
app.get('/api/hotel/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const hotelQuery = `
      SELECT h.*, array_agg(hi.image_url) as images
      FROM hotels h
      LEFT JOIN hotel_images hi ON h.id = hi.hotel_id
      WHERE h.slug = $1
      GROUP BY h.id
    `;
    const hotelResult = await pool.query(hotelQuery, [slug]);

    if (hotelResult.rows.length === 0) {
      return res.status(404).json({ error: 'Hotel not found' });
    }

    const hotel = hotelResult.rows[0];
    res.json(hotel);
  } catch (error) {
    console.error('Error fetching hotel details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// API to get room information for a hotel
app.get('/api/hotel/:slug/rooms', async (req, res) => {
  try {
    const { slug } = req.params;
    const roomsQuery = 'SELECT * FROM rooms WHERE hotel_slug = $1';
    const roomsResult = await pool.query(roomsQuery, [slug]);
    res.json(roomsResult.rows);
  } catch (error) {
    console.error('Error fetching room information:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});