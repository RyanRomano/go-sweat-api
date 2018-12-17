-- Migrate:
CREATE TABLE muscle_groups (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);
-- Revert:
DROP TABLE muscle_groups;