-- Migrate:
CREATE TABLE equipment (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    amazon_affiliate_link TEXT
);
-- Revert:
DROP TABLE equipment;