import { Router } from "express";
const router = Router();

const animals = ["ged", "hest", "giraf", "abe"];

router.get("/api/animals", async (req, res) => {
    const data = await db.all("SELECT * FROM animals;");
    console.log(data);
    res.send({ data })
});

router.post("/api/animals", async (req, res) => {
    const commonName = req.body.commonName;
    const latinName = req.body.latinName || "Unkown";
    if (!commonName) return res.status(400).send({ message: "Common name not defined"})
    
    const result = await db.run(`INSERT INTO animals (latin_name, common_name) VALUES (?, ?)`, [latinName, commonName]);
    //^bruger prepared statements 
    
    res.send({ changes: result.changes });
})

export default router;