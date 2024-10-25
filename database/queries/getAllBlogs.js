const connection = require('../config/connection');

// Get all blog posts from the database
const getBlogs = () => {
  return connection.query('SELECT * FROM posts');
};

module.exports = getBlogs;
