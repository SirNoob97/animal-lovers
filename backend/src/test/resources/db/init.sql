CREATE TABLE IF NOT EXISTS animals (
  id INTEGER GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(64) NOT NULL,
  PRIMARY KEY(id),
  CONSTRAINT unique_animal_name UNIQUE (name)
);

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS users (
  user_id BIGINT GENERATED ALWAYS AS IDENTITY,
  id VARCHAR DEFAULT UUID_GENERATE_V4(),
  age INTEGER NOT NULL,
  is_active BOOLEAN DEFAULT FALSE,
  given VARCHAr(64) NOT NULL,
  surname VARCHAR(64) NOT NULL,
  points INTEGER NOT NULL,
  PRIMARY KEY(user_id),
  CONSTRAINT unique_id UNIQUE(id)
);

CREATE TABLE IF NOT EXISTS users_animals (
  fk_animal BIGINT REFERENCES animals(id) ON DELETE CASCADE,
  fk_user BIGINT REFERENCES users(user_id),
  CONSTRAINT users_animals_pkey PRIMARY KEY(fk_animal, fk_user)
);

INSERT INTO animals(name)
VALUES('bear'),
  ('cat'),
  ('dog'),
  ('elephant'),
  ('gorilla'),
  ('horse'),
  ('jaguar'),
  ('kangaroo'),
  ('koala'),
  ('lion'),
  ('monkey'),
  ('panda'),
  ('penguin'),
  ('tiger'),
  ('zebra');