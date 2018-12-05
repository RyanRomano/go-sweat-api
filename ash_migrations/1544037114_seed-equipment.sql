-- Migrate:
INSERT INTO equipment(
    equipment_type
)
VALUES 
    ('Barbell'), ('Dumbbell'), ('Cable'), ('Machine'), ('Smith'), ('Squat Rack'), ('Bodyweight')
;
-- Revert:
DELETE FROM equipment;