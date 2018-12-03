-- Migrate:
CREATE TABLE workouts (
    id SERIAL PRIMARY KEY,
    session_id INT REFERENCES sessions(id) ON DELETE CASCADE NOT NULL,
    exercise_id INT REFERENCES exercises(id) NOT NULL,
    equipment_id INT REFERENCES equipment(id) NOT NULL,
    sets INT,
    reps INT,
    set1 INT,
    set2 INT,
    set3 INT,
    notes VARCHAR(150)
);
-- Revert:
DROP TABLE workouts;