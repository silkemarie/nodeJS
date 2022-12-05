import sqlite3 from "sqlite3";
import { open } from "sqlite";

//opretter + giver connection til db. Hvis db allerede eksisterer, så overskriver den
const connection = await open({
    filename: "zoo.db",
    driver: sqlite3.Database
});

export default connection;

