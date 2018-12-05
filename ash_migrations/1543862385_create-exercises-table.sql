-- Migrate:
CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    exercise_name VARCHAR(50) NOT NULL UNIQUE,
    muscle_group_id INT REFERENCES muscle_groups(id) NOT NULL
);
-- Revert:
DROP TABLE exercises;
