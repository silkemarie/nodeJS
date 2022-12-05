import express from "express";
const app = express();

app.use(express.json());

let currentId = 2;
//let nextId = 2;

let weapons = [
    { id: 1, name: "Zweihander", isCool: true},
    { id: 2, name: "Dagger", isCool: true},
    { id: 3, name: "Kitchen knife", isCool: false}
];
//^ skal være let, ikke const, fordi vi nu vil kunne ændre i den, eg. delete. 


//Get all / Read / GET
app.get("/weapons", (req, res) => {
    res.send({ data: weapons});
});

//Get by ID / Read / GET
app.get("/weapons/:id", (req, res) => {
    const foundWeapon = weapons.find(weapon => weapon.id === Number(req.params.id));
    if (!foundWeapon)
        return res.send({ errorMessage: "I don't know that weapon"})
    res.send({ data: foundWeapon});
});
//^Number er her at foretrække fremfor parseInt, fordi parseInt forsøger at returnere et nummer,
//imens Number returerer Nan, hvis ikke den kan returnere et number

//Create / POST
app.post("/weapons", (req, res) => {
    const weapon = req.body;
    //currentId++;                    
    weapon.id = ++currentId;          
    weapons.push(weapon);
    res.send({ data: weapon });

/* oprindelige løsning:
    const weapon = {
        id: weapons.length +1,
        name: req.body.name,
        isCool: true
    };
    weapons.push(weapon);
    res.send(weapon);
    */
});

//Update / PUT
app.put("/weapons/:id", (req, res) => {
    const weapon = weapons.find(weapon => weapon.id === Number(req.params.id));
    if (!weapon) 
        return res.send({ errorMessage: "I don't know that weapon"})
    
    weapon.name = req.body.name;
    weapon.isCool = req.body.isCool;
    res.send({ data: weapons});
});

//PATCH
app.patch("weapons/:id", (req, res) => {
    const foundIndex = weapons.findIndex(weapon => weapon.id === Number(req.params.id));
    if (foundIndex !== -1) {
        const foundWeapon = weapons[foundIndex];
        const weaponToUpdate = { ...foundWeapon, ...req.body, id: Number(req.params.id) }; //bruger her spread-operatoren
        weapons[foundIndex] = weaponToUpdate;
        res.send({ data: weaponToUpdate });
    } else {
        res.status(404).send({ data: undefined, message: `No weapon found by id: ${req.params.id}` }); 
    }
});

/*
console.log(weapons.indexOf(element => element.id === 1, 1));
console.log(weapons.findIndex(weapon => weapon.id === 3))
*************
console.log(weapons.splice(1, 1));
console.log(weapons);
*/

//Delete / DELETE
app.delete("/weapons/:id", (req, res) => {
    const foundIndex = weapons.findIndex(weapon => weapon.id === Number(req.params.id));
    if (foundIndex !== -1) {
        const deletedWeapon = weapons.splice(foundIndex, 1)[0];
        res.send({ data: deletedWeapon });

    } else {
        res.status(404).send({ data: undefined, message: `No weapon found by id: ${req.params.id}` }); //sender et json objekt med, nemt at parse for alle programmeringssprog
    }

    /* oprindelige løsning: 
    const weapon = weapons.find(weapon => weapon.id === Number(req.params.id));
    
    if (!weapon) 
        return res.send({ errorMessage: "I don't know that weapon"})
     
    const index = weapons.indexOf(weapon);
    weapons.splice(index, 1);

    res.send(weapon);
    */ 
});


app.listen(8080, () => console.log("Server is running on port", 8080));
