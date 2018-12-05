-- Migrate:
INSERT INTO muscle_groups(
    muscle_group
)
VALUES 
    ('Chest'), ('Back'), ('Biceps'), ('Triceps'), ('Shoulders'), ('Legs'), ('Abs')
;
-- Revert:
DELETE FROM muscle_groups;