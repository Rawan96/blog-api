const connection = require('../config/connection');

// Get all blog post from the database
const getBlog = (id) => {
  return connection.query('SELECT * FROM posts WHERE id = $1', [id]);
};

module.exports = getBlog;
