DROP TABLE IF EXISTS Users;
CREATE TABLE IF NOT EXISTS Users (
    id INTEGER PRIMARY KEY, 
    name VARCHAR(50),
    image BLOB
);
INSERT INTO Users (id, name) VALUES (1, '0yu(おゆ)');
