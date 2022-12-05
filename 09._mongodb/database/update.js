import db from "./connection.js";

const isSuccess = await db.salesPeople.updateOne(
     { name: "Carl" },
     { $set: {employeeOfTheMonth: false }}
);

console.log(isSuccess);

const { insertedId } = await db.shoes.updateMany({ type: "sandals"}, {$set: { price: 200.00 } });

console.log(insertedId);

const allShoes = await db.shoes.find({ type: "sandals"}).toArray();
console.log(allShoes)


//tjek lige Anders' for om den er bedre