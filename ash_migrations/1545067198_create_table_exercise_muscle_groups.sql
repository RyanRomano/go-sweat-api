-- Migrate:
CREATE TABLE exercise_muscle_groups (
    id SERIAL PRIMARY KEY,
    exercise_id INT REFERENCES exercises(id) NOT NULL,
    muscle_group_id INT REFERENCES muscle_groups(id) NOT NULL,
    is_major BOOLEAN
);
-- Revert:
DROP TABLE exercise_muscle_groups;