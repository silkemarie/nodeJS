import db from "./connection.js";


const { deletedCount } = await db.salesPeople.deleteOne({ name: "Carl", salary: 9000 });

console.log(deletedCount);



const allPeople = await db.salesPeople.find().toArray();

console.log(allPeople)
