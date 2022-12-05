import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
app.use(express.static("public"))
const server = http.createServer(app);
const io = new Server(server); //det er her, min sockets vil forbinde til 

//on tager imod et callback. Den data vi sender med er socket. 
io.on("connection", (socket) => {
    console.log(`A socket connected on id ${socket.id}`);

    socket.on("client choose a color", (data) => {

        //emits a broadcast to all sockets but itself 
        //socket.broadcast.emit("this is the new color", data);


        //emits only to the socket itself. dvs. ændrer sig kun på dén tab. 
        //socket.emit("this is the new color", data);


        //emits to all sockets in the io namespace / skifter farve på alle tre:
        io.emit("this is the new color", data);
    });


    io.on("disconnect", () => {
        console.log(`Socket ${socket.id} left.`);
    })
})


server.listen(8080, () => console.log(`Server is running on port `, 8080));

//vil lave en server som socket.io forstår, så vi kan give den server videre til socket.io