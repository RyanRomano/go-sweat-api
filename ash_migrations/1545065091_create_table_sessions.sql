-- Migrate:
CREATE TABLE sessions (
    id SERIAL PRIMARY KEY,
    date TIMESTAMP NOT NULL
);
-- Revert:
DROP TABLE sessions;