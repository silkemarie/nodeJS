import { Router } from "express";
const router = Router();
import db from "../database/connection_mysql.js";

router.get("/animalfeedstock", async (req, res) => {
    const [rows, fields] = await db.query("SELECT * FROM animal_feed_type;");

    res.send({ data: rows });
})

router.post("/animalfeedstock", async (req, res) => {
    const { initialAmount, remainingAmount, stockTypeId } = req.body;

    if (!animalFeedTypeId) return res.status(400).send({ message: "Missing the key feedTypeId" });
    if (!initialAmount) return res.status(400).send({ message: "Missing the key initialAmount" });

    remainingAmountDefault = remainingAmount || initialAmount
    const data = await db.execute("INSERT INTO animal_feed_stock (inital amount, remaining_amount, animalfeedtype_id) VALUES (?, ?, ?)", [initialAmount, remainingAmountDefault, animalFeedTypeId]);

    res.send({});
})