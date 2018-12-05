-- Migrate:
INSERT INTO exercises(
    exercise_name, muscle_group_id
)
VALUES 
    ('Bench Press', 1), ('Cable Row', 2), ('Bicep Curl', 3),
    ('Tricep Extension', 4), ('Standing Military Press', 5),
    ('Squat', 6), ('Ab Curl', 7)
;
-- Revert:
DELETE FROM exercises;