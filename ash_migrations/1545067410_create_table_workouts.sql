-- Migrate:
CREATE TABLE workouts (
    id SERIAL PRIMARY KEY,
    session_id INT REFERENCES sessions(id) ON DELETE CASCADE NOT NULL,
    exercise_id INT REFERENCES exercises(id) NOT NULL,
    notes TEXT
);
-- Revert:
DROP TABLE workouts;