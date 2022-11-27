import db from "./connection_mysql.js";


const isInDeleteMode = false;

if (isInDeleteMode) {
    db.execute(`
        DROP TABLE IF EXISTS users
    `);
}

db.execute(`CREATE DATABASE IF NOT EXISTS mandatory DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE mandatory;

CREATE TABLE IF NOT EXISTS accounts (
  id int(11) NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(100) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;`
);


db.execute(`INSERT INTO accounts (id, username, password, email) VALUES (1, 'test', 'test', 'test@test.com')`);

db.end();