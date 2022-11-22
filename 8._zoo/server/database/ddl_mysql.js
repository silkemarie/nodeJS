import db from "./connection_mysql.js";

const isInDeleteMode = true;

if (isInDeleteMode) {
    db.execute(`
    DROP TABLE IF EXISTS animal_feed_stock;
    `);
    db.execute(`
    DROP TABLE IF EXISTS animal_feed_types;
    `);
}


db.execute(`
CREATE TABLE IF NOT EXISTS animal_feed_types (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    description TEXT,
    is_vegetarian BOOLEAN
);
`);

db.execute(`
CREATE TABLE IF NOT EXISTS animal_feed_stock (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    initial_amount INTEGER,
    remaining_amount INTEGER,
    addded_to_stock TIMESTAMP NOT NULL DEFAULT NOW(),
    animal_feed_type_id INTEGER,
    CONSTRAINT fk_feed_type FOREIGN KEY (id) REFERENCES animal_feed_types(id)
    );
`);

/*
db.exec(`
CREATE TABLE IF NOT EXISTS animals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    common_name VARCHAR(255),
    latin_name VARCHAR(255)
);
`);
*/


//seed the database
if (isInDeleteMode) {
    db.execute(`INSERT INTO animal_feed_types (name) VALUES ('carrot');`);
    db.execute(`INSERT INTO animal_feed_types (name) VALUES ('zebra');`);
    db.execute(`INSERT INTO animal_feed_types (name) VALUES ('mosquitoes');`);


    db.execute(`INSERT INTO animal_feed_stock (initial_amount, remaining_amount, animal_feed_type_id) VALUES (120, 120, 1);`);
    db.execute(`INSERT INTO animal_feed_stock (initial_amount, remaining_amount, animal_feed_type_id) VALUES (2000, 2000, 3);`);
}

/* 
//hvordan man gør med sqlite (husk at execute hedder exec i sqlite):
db.run(`INSERT INTO animals (common_name, latin_name) VALUES ("tiger", "panthera tigris")`);
db.run(`INSERT INTO animals (common_name, latin_name) VALUES ("panda", "Ailuropoda melanoleuca")`);
*/

db.end();