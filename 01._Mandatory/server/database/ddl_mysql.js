import db from "./connection_mysql.js";
import crypto from "../routers/loginRouter.js";

const isInDeleteMode = false;


if (isInDeleteMode) {
    db.execute(`
    DROP TABLE IF EXISTS user;
    `);
}


db.execute(`
CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    username TEXT UNIQUE,
    email VARCHAR(255),
    hashed_password BLOB,
    salt BLOB
    );
`);

var salt = crypto.randomBytes(16);
db.run(`INSERT OR IGNORE INTO user (username, hashed_password, salt) VALUES (?, ?, ?)`, [
    'admin',
    crypto.pbkdf2Sync('letmein', salt, 310000, 32, 'sha256'),
    salt
]);

/*
db.execute(` ANIMAL DB?
CREATE TABLE IF NOT EXISTS animal_feed_stock (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    initial_amount INTEGER,
    remaining_amount INTEGER,
    addded_to_stock TIMESTAMP NOT NULL DEFAULT NOW(),
    animal_feed_type_id INTEGER,
    CONSTRAINT fk_feed_type FOREIGN KEY (id) REFERENCES animal_feed_types(id)
    );
`);
*/

//seed the database
if (isInDeleteMode) {
    db.execute(`INSERT INTO user (username, email, hashed_password, salt) VALUES ('admin', 'admin@admin.com', 'asd', 'sha256');`);
    db.execute(`INSERT INTO user (username, email, hashed_password, salt) VALUES ('test', 'test@test.dk', 'asd', 'sha256');`);

/*
    db.execute(`INSERT INTO animal_feed_stock (initial_amount, remaining_amount, animal_feed_type_id) VALUES (120, 120, 1);`);
    db.execute(`INSERT INTO animal_feed_stock (initial_amount, remaining_amount, animal_feed_type_id) VALUES (2000, 2000, 3);`);
    */
}

db.end();
