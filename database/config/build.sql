BEGIN;

DROP TABLE IF EXISTS posts cascade;

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);


INSERT INTO posts (title, content)
VALUES
  ('Post 1', 'Content 1'),
  ('Post 2', 'Content 2'),

COMMIT;
