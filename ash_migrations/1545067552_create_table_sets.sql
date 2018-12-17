-- Migrate:
CREATE TABLE sets (
    id SERIAL PRIMARY KEY,
    workout_id INT REFERENCES workouts(id) ON DELETE CASCADE NOT NULL,
    weight INT,
    reps INT
);
-- Revert:
DROP TABLE sets;