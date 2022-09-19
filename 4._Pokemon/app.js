import express from "express";
const app = express();

app.use(express.static("public"));

import path from "path";

let pokemon = [
    { id: 1, name: "Charmander"},
    { id: 2, name: "Charmeleon"},
    { id: 3, name: "Charizard"}
];

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage.html"));
});

/*
app.get("/pokemon", (req, res) => {
    res.send({ data: ["Slowpoke"] });
});
//når vi skriver {data:} her, sender vi json tilbage 
*/

app.get("/pokemon", (req, res) => {
    console.log({ data: pokemon});
    res.send({ data: pokemon});
})

app.listen(8080, () => {
    console.log("Server is running on", 8080);
});