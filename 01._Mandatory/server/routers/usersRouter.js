import { response, Router } from "express";
import bcrypt from "bcrypt";
import db from "../database/connection_mysql.js"

const router = Router();



router.post("/api/users", async (req, res) => {
    const user = req.body;
    const saltRounds = 12;
    user.password = await bcrypt.hash(user.password, saltRounds);
    const [rows, fields] = await db.execute(`INSERT INTO users (mail, password) VALUES (?, ?, ?);`, [user.mail, user.password]);
    res.send({ data: rows });
});

router.post("/api/users/login", async (req, res) => {
    const body = req.body;
    const [rows, fields] = await db.execute(`SELECT * FROM users WHERE mail = ?`, [body.mail]);
    const isTrue = await bcrypt.compare(body.password, rows[0].password);
    
    console.log(isTrue);
    if (isTrue) {
        req.session.isLoggedin=true;
        res.send({ message: "Its a-okay" });
    } else {
        res.send({ message: "Its no good" });
    }
});


export default router;