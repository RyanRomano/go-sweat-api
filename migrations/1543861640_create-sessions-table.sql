-- Migrate:
CREATE TABLE sessions (
    id SERIAL PRIMARY KEY,
    date TIMESTAMP NOT NULL UNIQUE,
    muscles_worked VARCHAR(50) NOT NULL
);
-- Revert:
DROP TABLE sessions;
