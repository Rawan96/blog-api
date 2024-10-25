const express = require('express');
const {
  createPost,
  getAllPosts,
  getPostById,
} = require('../controllers/postController');

const router = express.Router();

// Blog Posts Routes
router.post('/', createPost);
router.get('/', getAllPosts);
router.get('/:id', getPostById);

module.exports = router;
