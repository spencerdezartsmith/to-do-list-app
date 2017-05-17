DROP DATABASE IF EXISTS todos;
CREATE DATABASE todos;

\c todos;

CREATE TABLE todos (
  ID SERIAL PRIMARY KEY NOT NULL,
  description VARCHAR NOT NULL,
  status BOOLEAN NOT NULL,
  due TIME NOT NULL
);

INSERT INTO todos (description, status, due)
VALUES ('walk the dog', 'false', '08:00')
