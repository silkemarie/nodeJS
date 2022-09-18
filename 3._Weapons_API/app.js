import express from "express";
const app = express();

app.use(express.json());


const weapons = [
    { id: 1, name: "Zweihander", isCool: true},
    { id: 2, name: "Dagger", isCool: true},
    { id: 3, name: "Kitchen knife", isCool: false}
];


//Get all / Read / GET
app.get("/weapons", (req, res) => {
    res.send({ data: weapons});
})

//Get by ID / Read / GET
app.get("/weapons/:id", (req, res) => {
    const weapon = weapons.find(w => w.id === parseInt(req.params.id));
    if (!weapon)
        return res.send({ errorMessage: "I don't know that weapon"})
    res.send({ data: weapon});
})

//Create / POST
app.post("/weapons", (req, res) => {
    const weapon = {
        id: weapons.length +1,
        name: req.body.name,
        isCool: true
    };
    weapons.push(weapon);
    res.send(weapon);
})

//Update / PUT
app.put("/weapons/:id", (req, res) => {
    const weapon = weapons.find(w => w.id === parseInt(req.params.id));
    if (!weapon) 
        return res.send({ errorMessage: "I don't know that weapon"})
    
    weapon.name = req.body.name;
    weapon.isCool = req.body.isCool;
    res.send({ data: weapons});
})


//Delete / DELETE
app.delete("/weapons/:id", (req, res) => {
    const weapon = weapons.find(w => w.id === parseInt(req.params.id));
    
    if (!weapon) 
        return res.send({ errorMessage: "I don't know that weapon"})
     
    const index = weapons.indexOf(weapon);
    weapons.splice(index, 1);

    res.send(weapon); 
})


app.listen(8080, () => console.log("Server is running on port", 8080));
