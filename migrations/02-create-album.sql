CREATE TABLE Album (
    artistId INT REFERENCES Artists(id),
    id SERIAL,
    name VARCHAR(255),
    year INT
)