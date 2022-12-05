import express from "express";
const app = express();


app.use(express.json()); //Hvis du modtager json, så vær i stand til at parse json
app.use(express.static("public"));


const iWon = true;
const otherValue = "A String";

//key value pairs:
console.log({
    iWon: iWon, 
    otherValue: otherValue
});

console.log({
    iWon,
    otherValue
});
//de to samme par. iWon har iWon på linje 7's værdi. 


import pokemonRouter from "./routers/pokemonRouter.js";
app.use(pokemonRouter);
import battleRouter from "./routers/battleRouter.js";
app.use(battleRouter.router);
import battleResultsRouter from "./routers/battleResultsRouter.js";
app.use(battleResultsRouter);
import contactRouter from "./routers/contactRouter.js";
app.use(contactRouter);
import nodemailer from "./util/email.js";
app.use(nodemailer);

nodemailer();

import { renderPage, injectData } from "./util/templateEngine.js";

const frontpagePage = renderPage("/frontpage/frontpage.html", 
{ 
    tabTitle: "Pokemon", 
    cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">` 
});

const contactPage = renderPage("/contact/contact.html");

const battlePage = renderPage("/battle/battle.html", {
    cssLink: `<link rel="stylesheet" href="/pages/battle/battle.css">` 
});

const battleResultPage = renderPage("/battleResults/battleresults.html", {
    tabTitle: "Statistics", 
    cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">` 
})

//import path from "path";
/*let pokemon = [
    { id: 1, name: "Charmander"},
    { id: 2, name: "Charmeleon"},
    { id: 3, name: "Charizard"}
];
*/

app.get("/", (req, res) => {
    //res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"));
    res.send(frontpagePage);
});

/*
app.get("/pokemon", (req, res) => {
    res.send({ data: ["Slowpoke"] });
});
//når vi skriver {data:} her, sender vi json tilbage 
*/

const randomPokemon = ["pikachu", "slowpoke", "ditto"];
app.get("/battle", (req, res) => {   
    res.redirect(`battle/${randomPokemon[Math.floor(Math.random() * randomPokemon.length)]}`);
});

app.get("/battle/:pokemonName", (req, res) => {
    const pokemonName = req.params.pokemonName;
    //const battlePageWithData = injectData(battlePage, { pokemonName });
    res.send(battlePage.replace("%%TAB_TITLE%%", `Battle ${req.params.pokemonName}`));
});

app.get("/battleresults", (req, res) => {
    res.send(battleResultPage)
});

app.get("/contact", (req, res) => {
    //res.sendFile(path.resolve("public/contact/contact.html"));
    res.send(contactPage.replace("%%TAB_TITLE%%", `Contact`))
});

/*
app.get("/api/pokemon", (req, res) => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(result => res.send({ data: result }));
});
*/


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

function addA(someString) {
    return someString + "A";
}