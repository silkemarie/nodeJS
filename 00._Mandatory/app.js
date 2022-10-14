import express from "express";
import weekRouter from "./routers/weekRouters.js";
const app = express();

app.use(express.static("public"));
app.use(weekRouter);

import { renderPage, injectData } from "./util/templateEngine.js";

const frontpagePage = renderPage("/frontpage/frontpage.html",
    {
        tabTitle: "Welcome",
        cssLink: `<link rel="stylesheet" href="/pages/main.css">`
    });

const ses1Page = renderPage("/ses1/ses.html",
    {
        tabTitle: "Session 1",
        cssLink: `<link rel="stylesheet" href="/pages/main.css">`
    });

//to do: lav tabtitle interactiv 

    
const ses2Page = renderPage("/ses2/ses2.html",
    {
        tabTitle: "Session 2",
        cssLink: `<link rel="stylesheet" href="/pages/main.css">`
    });

    
const ses3Page = renderPage("/ses3/ses3.html",
    {
        tabTitle: "Session 3",
        cssLink: `<link rel="stylesheet" href="/pages/main.css">`
    });

    

const ses4Page = renderPage("/ses4/ses4.html",
    {
        tabTitle: "Session 4",
        cssLink: `<link rel="stylesheet" href="/pages/main.css">`
    });

const ses5Page = renderPage("/ses5/ses5.html",
    {
        tabTitle: "Session 5",
        cssLink: `<link rel="stylesheet" href="/pages/main.css">`
    });

const ses6Page = renderPage("/ses6/ses6.html",
    {
        tabTitle: "Session 6",
        cssLink: `<link rel="stylesheet" href="/pages/main.css">`
    });

const ses7Page = renderPage("/ses7/ses7.html",
    {
        tabTitle: "Session 7",
        cssLink: `<link rel="stylesheet" href="/pages/main.css">`
    });

    

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/ses1", (req, res) => {
    res.send(ses1Page);
});


app.get("/ses2", (req, res) => {
    res.send(ses2Page);
});


app.get("/ses3", (req, res) => {
    res.send(ses3Page);
});

app.get("/ses4", (req, res) => {
    res.send(ses4Page);
});

app.get("/ses5", (req, res) => {
    res.send(ses5Page);
});

app.get("/ses6", (req, res) => {
    res.send(ses6Page);
});

app.get("/ses7", (req, res) => {
    res.send(ses7Page);
});


//const PORT = process.env.PORT || 8080;
//console.log(Number(process.env.PORT));

const server = app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on", server.address().port);
});