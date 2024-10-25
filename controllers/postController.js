const postBlog = require('../database/queries/postBlog');
const getBlog = require('../database/queries/getBlog');
const getBlogs = require('../database/queries/getAllBlogs');
const connection = require('../database/config/connection');

// Create a new post
const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Check if title or content is empty
    if (!title || !content || title.trim() === '' || content.trim() === '') {
      return res
        .status(400)
        .json({ error: 'Title and content cannot be empty' });
    }

    // Check if a post with the same title already exists
    const existingPost = await connection.query({
      text: 'SELECT * FROM posts WHERE title = $1',
      values: [title],
    });

    if (existingPost.rows.length > 0) {
      return res
        .status(409)
        .json({ error: 'A post with this title already exists' });
    }

    // Create a new post if no duplicate title is found
    const post = await postBlog({ title, content });
    if (!post) {
      throw new Error('Failed to create post');
    }

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
};

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await getBlogs();
    if (!posts || !posts.rows) {
      return res.status(500).json({
        error: 'No posts found or failed to retrieve posts from the database.',
      });
    }
    res.json(posts.rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error: ' + error.message });
  }
};

// Get a post by ID
const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await getBlog(id);
    if (!post || !post.rows || post.rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Database error: ' + error.message });
  }
};

module.exports = { createPost, getAllPosts, getPostById };
