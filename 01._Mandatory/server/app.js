import express from "express";
const app = express();
import cors from "cors";
app.use(cors());

// ------------------ Session ------------------ 
import session from "express-session";
app.use(session({
  secret: process.env.SESSION_SECRET || "Dogs",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } //false we are not using https, but http
}));


app.use(express.json());

import usersRouter from "./routers/usersRouter.js";
app.use(usersRouter);
import mailRouter from "./routers/mailRouter.js"
app.use(mailRouter);

app.get("/", (req, res) => {
    
    res.send();
});



const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
