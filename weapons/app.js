const app = require("express")();

app.get("/", (req, res) => {
    res.send({ message: "Home" })
});

app.get("/weapons", (req, res) => {
    res.send({ message: "Weapons overview" })
});

app.get("/weapons/:id", (req, res) => {
    console.log(req.params);
    if (Number(req.params.id) === 1) {
        res.send({name: "Zweihander", isCool: true});
    } else {
        res.send({ errorMessage: "I don't know that weapon" })
    }
});



app.listen(8080);

