const app = require("express")();

app.get("/", (req, res) => {
    res.send({ message: "Home" })
});


app.listen(8080);

