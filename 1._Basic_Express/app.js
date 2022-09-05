//importerer express
const express = require("express");

//instantierer the library express
const app = express();

//another way to import in a single line:
//const app = require("express")();

// route    // callback function
app.get("/", (request, response) => {
    response.send({ message: "Created my first route. Check." })
});


//alle vores routes bliver definere. express skaber tcp forbindelse til klienter. 
//vi definerer noget kode der skal køre. 
        // endpoint
app.get("/deers", (req, res) => {
    res.send({ size: "BIG" });
});
//^kan kalde req og res hvad som helst, men det er det de altid bliver kaldt. 

app.get("/cups", (req, res) => {
    res.send({ contains: "coffee" });
});


//GET tager imod to ting.
//1: Endpointet
//2: ??

//json er en standard, derfor er det json vi vil sende i linje 5

app.listen(8080);
//giver den en port at lytte på

