import db from "./connection.js";

const allShoes = await db.shoes.find().toArray();

console.log(allShoes);

const highEarners = await db.salesPeople.find({ salary: { $gt: 2000}}).toArray();

console.log(highEarners)
console.log(highEarners[0].salary) //tilgår objektet (den første person) og tilgår derefter deres salary
console.log(highEarners.length)

db.end();