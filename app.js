import express from "express";
import loginRouter from "./routers/loginRouter.js";
import weekRouter from "./routers/weekRouters.js";
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(weekRouter);
app.use(loginRouter);

import { renderPage, injectData } from "./util/templateEngine.js";

const frontpagePage = renderPage("/frontpage/frontpage.html",
    {
        tabTitle: "Welcome",
        cssLink: `<link rel="stylesheet" href="/pages/main.css">`
    });

const ses1Page = renderPage("/ses1/ses.html",
    {
        tabTitle: "Lesson 1",
        cssLink: `<link rel="stylesheet" href="/pages/main.css">`
    });

const ses2Page = renderPage("/ses2/ses2.html",
    {
        tabTitle: "Lesson 2",
        cssLink: `<link rel="stylesheet" href="/pages/main.css">`
    });

const ses3Page = renderPage("/ses3/ses3.html",
    {
        tabTitle: "Lesson 3",
        cssLink: `<link rel="stylesheet" href="/pages/main.css">`
    });

const ses4Page = renderPage("/ses4/ses4.html",
    {
        tabTitle: "Lesson 4",
        cssLink: `<link rel="stylesheet" href="/pages/main.css">`
    });

const ses5Page = renderPage("/ses5/ses5.html",
    {
        tabTitle: "Lesson 5",
        cssLink: `<link rel="stylesheet" href="/pages/main.css">`
    });

const ses6Page = renderPage("/ses6/ses6.html",
    {
        tabTitle: "Lesson 6",
        cssLink: `<link rel="stylesheet" href="/pages/main.css">`
    });

const ses7Page = renderPage("/ses7/ses7.html",
    {
        tabTitle: "Lesson 7",
        cssLink: `<link rel="stylesheet" href="/pages/main.css">`
    });

const loginPage = renderPage("/login/login.html",
    {
        tabTitle: "Login",
        cssLink: `<link rel="stylesheet" href="/pages/main.css">`
    });

const adminPage = renderPage("/admin/admin.html",
    {
        tabTitle: "Admin",
        cssLink: `<link rel="stylesheet" href="/pages/main.css">`
    });


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/login", (req, res) => {
    //hvis ikke sessionstorage:
    res.send(loginPage);
    //Hvis sessionstorage:
    //res.send(adminPage);
});

app.get("/admin", (req, res) => {
    res.send(adminPage);
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