const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send({ message: "Created my first route. Check." })
});

//GET tager imod to ting.
//1: Endpointet
//2: ??

//json er en standard, derfor er det json vi vil sende i linje 5

app.listen(8080);
//giver den en port at lytte på

