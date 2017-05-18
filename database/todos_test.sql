DROP DATABASE IF EXISTS todos_test;
CREATE DATABASE todos_test;

\c todos_test;

CREATE TABLE todos (
  ID SERIAL PRIMARY KEY NOT NULL,
  description VARCHAR NOT NULL,
  status BOOLEAN DEFAULT false,
  due TIME NOT NULL
);

INSERT INTO todos (description, due)
VALUES ('walk the dog', '08:00')
