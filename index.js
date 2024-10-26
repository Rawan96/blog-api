require('dotenv').config();
const express = require('express');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Blog Posts Routes
app.use('/posts', postRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
