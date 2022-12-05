import { Router } from "express";
//importerer kun Router fra express library
/*
præcis samme funktion, men hiver alt ud fra express:

import express from express;
express.Router
*/


const router = Router();
//instantierer router

//laver et array, fordi vi ikke kører med database
const battleResults = [];

//det her sender json:
router.get("/api/battles", (req, res) => {
    res.send({ data: battleResults });
});

/* det her sender et array:
router.get("/api/battles", (req, res) => {
    res.send(battleResults);
});
*/

router.post("/api/battles", (req, res) => {
    battleResults.push(req.body);
    res.send({ message: "Results received "});
});


export default {
    router,
    battleResults
};


