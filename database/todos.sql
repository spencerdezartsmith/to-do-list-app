DROP DATABASE IF EXISTS todos;
CREATE DATABASE todos;

\c todos;

CREATE TABLE todos (
  ID SERIAL PRIMARY KEY NOT NULL,
  description VARCHAR NOT NULL,
  status BOOLEAN DEFAULT false
);

INSERT INTO todos (description)
VALUES ('walk the dog')
