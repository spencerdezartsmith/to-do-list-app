DROP DATABASE IF EXISTS todos_test;
CREATE DATABASE todos_test;

\c todos_test;

CREATE TABLE todos (
  ID SERIAL PRIMARY KEY NOT NULL,
  description VARCHAR NOT NULL,
  status BOOLEAN DEFAULT false
);

INSERT INTO todos (description) VALUES ('walk the dog');
INSERT INTO todos (description) VALUES ('learn the guitar');
INSERT INTO todos (description) VALUES ('learn to program');
