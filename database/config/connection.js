const { Pool } = require('pg');
require('env2')('./config.env');

if (!process.env.DB_URL) throw new Error('No Database URL!');

module.exports = new Pool({
  connectionString: process.env.DB_URL,
  ssl: process.env.DATABASE_URL ? true : false,
});
