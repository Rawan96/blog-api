const connection = require('../config/connection');

// Create a new post in the database
const postBlog = ({ title, content }) => {
  const sql = {
    text: 'INSERT INTO posts (title, content) VALUES ($1,$2)',
    values: [title, content],
  };
  return connection.query(sql);
};

module.exports = postBlog;
