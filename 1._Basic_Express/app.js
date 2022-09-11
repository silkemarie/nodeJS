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
//hvis ikke vi giver localhost:8080/deers noget mere, så ender den på linje 19, 
//men hvis vi fx skriver localhost:8080/deers/adfljk så ender vi på linje 29
app.get("/deers/:id", (req, res) => {
    console.log(req.params.id);
    if (Number(req.params.id) === 1) {
        res.send({name: "Bambi", theBestAndOGDeer: true});
    } else {
        res.send({ errorMessage: "I don't know that deer" })
    }
});

app.get("/actors", (req, res) => {
    console.log(req.query.name);
    res.send({
        message: "Information about the actor",
        ...req.query
    });
})

//GET tager imod to ting.
//1: Endpointet
//2: ??

//json er en standard, derfor er det json vi vil sende i linje 5

app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});
//giver den en port at lytte på

