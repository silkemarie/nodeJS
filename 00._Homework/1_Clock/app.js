import express from "express";
const app = express();

app.use(express.static("public"));

import path from "path";

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage.html"));
});



app.listen(8080, () => {
    console.log("Server is running on", 8080);
});