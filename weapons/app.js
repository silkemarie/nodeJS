const app = require("express")();

app.get("/", (req, res) => {
    res.send({ message: "Home" })
});

app.get("/weapons", (req, res) => {
    res.send({ message: "Weapons" })
});

app.get("/weapons/:id", (req, res) => {
    console.log(req.params.id);
    if (Number(req.params.id) === 1) {
        res.send({name: "Gun", isAWeapon: true});
    } else {
        res.send({ errorMessage: "I don't know that deer" })
    }
});


app.listen(8080);

