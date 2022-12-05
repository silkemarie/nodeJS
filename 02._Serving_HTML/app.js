//const app = require("express")();
//require er keyworded i node for at importere
//eller:
//const express = require("express");
import express from "express";
const app = express();

//req + res = en callback funktion

//den her kan tage imod relative path:
app.use(express.static("public"));

import path from "path";
//path er en pakke i node

//cant do this ever... must read as a file
//import packageJSON from "./package.json"
//console.log(packageJSON);
//cant use this anymore in module type syntax:
//require("./package.json")

//globalt:
//er også common js:
//console.log(__dirname);

import { incrementVisitorCounter } from "./geocitiesUtil.js";
//const { incrementVisitorCounter } = require("./geocitiesUtil.js")

app.get("/", (req, res) => {
    console.log("Visitors since the server started", incrementVisitorCounter());
    //cant use dirname as it only works in common js
    //res.sendFile(__dirname + "/public/frontpage/frontpage.html");
    res.sendFile(path.resolve("./public/frontpage/frontpage.html"));
});

//har reserved ports og well-known ports. 8080 er en well-known port
app.listen(8080, () => console.log("Server is running on port", 8080));