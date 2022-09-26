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
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(result => res.send({ data: result }));
});


/* Virker med frontend: 
app.get("/pokemon", (req, res) => {
    console.log({ data: pokemon});
    res.send({ data: pokemon});
})
*/

//const PORT = 8080;
//const PORT = process.env.PORT ? process.env.PORT : 8080;
const PORT = process.env.PORT || 8080;
//^hvis process.env.PORT er defineret, så giv mig den, hvis ikke så giv mig 8080

console.log(Number(process.env.PORT));
//console.log(Number(process.env.PORT));




const server = app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on", server.address().port);
});