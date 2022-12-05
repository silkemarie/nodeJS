import db from "./connection.js";

//const updatedSuccess = await db.salesPeople.insertOne({ name: "Carl", salary: 9000 });

const { insertedId } = await db.salesPeople.insertOne({ name: "Carl", salary: 9000 });

console.log(insertedId);


/*
const newPerson = await db.salesPeople.insertOne({ name: "Billy bob" });
const allPeople = await db.salesPeople.find().toArray();

console.log(allPeople)
*/