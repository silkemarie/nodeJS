import mysql from "mysql2/promise";
import crypto from "passport-local";

const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "x",
    database: "mandatory",
});


export default connection;