import express from "express";
import http from "http";
import { Server } from "socket.io";
import ????????????????????????????????????????

const app = express();
const server = http.createServer(app); //laver en wrapper
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
    }
}); 

app.use(express.json());
import session from "express-session";
const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
});
import cors from "cors";
app.use(cors({ credentials })); ???
????


app.use(sessionMiddleware);
import registrationRouter from "./routers/registrationRouter.js";
app.use(registrationRouter);

io.on("connection", (socket) => {
    socket.on("client choose a new color", (data) => {
        io.emit("update the color", data);
    });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("Server is running on port", PORT));