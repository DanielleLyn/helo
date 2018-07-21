DROP TABLE IF EXISTS user
DROP TABLE IF EXISTS post


CREATE TABLE user(
id SERIAL PRIMARY KEY,
auth0_id TEXT,
username VARCHAR,
password VARCHAR,
profile_pic TEXT
);

CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    img TEXT,
    content TEXT,
    author_id INTEGER REFERENCES users (id)
)