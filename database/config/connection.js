const { Pool } = require('pg');
require('env2')('./.env');

if (!process.env.DB_URL) throw new Error('No Database URL!');

module.exports = new Pool({
  connectionString: process.env.POSTGRES_URL,
});
