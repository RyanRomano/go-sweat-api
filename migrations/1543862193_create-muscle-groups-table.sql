-- Migrate:
CREATE TABLE muscle_groups (
    id SERIAL PRIMARY KEY,
    muscle_group VARCHAR(50) NOT NULL UNIQUE
);
-- Revert:
DROP TABLE muscle_groups;
