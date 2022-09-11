const app = require("express")();

app.get("/", (req, res) => {
    res.send({ message: "Home" })
});

app.get("/weapons", (req, res) => {
    res.send({ message: "Weapons" })
});

app.listen(8080);

