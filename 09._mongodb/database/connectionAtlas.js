import "dotenv/config";
import { Db, MongoClient } from "mongodb";


const url = `mongodb+srv://admin:${process.env.MONGODB_ATLAS_PASSWORD}@cluster0.l16gxao.mongodb.net/test`;
const client = new MongoClient(url);

await client.connect();

const db = client.db("zoo");

const animals = db.collection("animals");

await animals.insertOne({ type: "Tiger" });

const foundAnimals = await animals.find().toArray();
console.log(foundAnimals);