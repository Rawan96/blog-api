# Blog API

A RESTful Blog API built with Node.js, Express, and PostgreSQL. This API allows users to create and read blog posts.

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
3. [API Documentation](#api-documentation)
4. [Testing](#testing)
5. [Project Structure](#project-structure)
6. [Flowchart](#flowchart)

---

### Features

- **Create a Blog Post**: Add new blog posts.
- **Get All Blog Posts**: Retrieve all blog posts.
- **Get Single Blog Post**: Retrieve a single post by ID.

---

### Getting Started

#### Prerequisites ✅

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

#### Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Rawan96/blog-api
   cd blog-api
   ```

2. **Install Dependencies:**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root of the project and add the following environment variables:

   ```bash
   DATABASE_URL= '...'
   PORT = 3000
   ```

   Replace `DATABASE_URL` with your PostgreSQL database link.

4. **Start the Server:**
   ```bash
   npm start
   ```
   The API will run on http://localhost:3000 by default.

---

### API Documentation

| Method | Endpoint     | Description                  |
| ------ | ------------ | ---------------------------- |
| GET    | `/posts`     | Retrieve all blog posts      |
| GET    | `/posts/:id` | Retrieve a single post by ID |
| POST   | `/posts`     | Create a new blog post       |

---

### Project Structure

    BLOG-API
    ├── controllers
    │   └── postController.js
    ├── database
    │   ├── config
    │         └── build.sql
    │         └── connection.js
    │   ├── queries
    │         └── getAllBlogs.js
    │         └── getBlog.js
    │         └── postBlog.js
    ├── routes
    │   └── postRoutes.js
    ├── .gitignore
    ├── index.js
    ├── package-lock.json
    └── package.json

---

### Flowchart

````bash
┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│   Client    │         │   Server    │         │   Database  │
│  (Browser)  │         │  (Express)  │         │ (POSTGRESQL)│
└─────┬───────┘         └─────┬───────┘         └─────┬───────┘
     │                       │                       │
     │  POST /posts          │                       │
     │ ─────────────────────▶│                       │
     │                       │                       │
     │                       │    INSERT INTO posts  │
     │                       │ ─────────────────────▶│
     │                       │                       │
     │                       │   Confirmation        │
     │                       │ ◀─────────────────────│
     │                       │                       │
     │  201 Created          │                       │
     │ ◀─────────────────────│                       │
     │                       │                       │
     │  GET /posts           │                       │
     │ ─────────────────────▶│                       │
     │                       │                       │
     │                       │    SELECT * FROM posts│
     │                       │ ─────────────────────▶│
     │                       │                       │
     │                       │   Return posts data   │
     │                       │ ◀─────────────────────│
     │                       │                       │
     │  200 OK (posts data)  │                       │
     │ ◀─────────────────────│                       │
     │                       │                       │
   ```
````
