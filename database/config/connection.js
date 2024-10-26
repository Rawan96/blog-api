const { Pool } = require('pg');
require('dotenv').config();

console.log('DB_URL:', process.env.DATABASE_URL);

if (!process.env.DATABASE_URL) throw new Error('No Database URL!');

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
});
