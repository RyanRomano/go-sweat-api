-- Migrate:
CREATE TABLE equipment (
    id SERIAL PRIMARY KEY,
    equipment_type VARCHAR(50) NOT NULL UNIQUE
);
-- Revert:
DROP TABLE equipment;
