const express = require('express');
const app = express();
app.use(express.json());
const PORT = 5050;
const cors = require('cors');   
const routes = require("./routes")
const { Server } = require("socket.io");
const http = require("http");
const boardHandler = require('./controllers/socketControllers');
const server = http.createServer(app);

app.use(cors());

app.use(routes)

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    // generate a new board
    boardHandler(socket, io);
    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});