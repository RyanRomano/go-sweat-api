-- Migrate:
CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    equipment_id INT REFERENCES equipment(id) NOT NULL,
    description TEXT,
    video_link TEXT
);
-- Revert:
DROP TABLE exercises;