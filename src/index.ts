import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 3000 });
server.on("connection", (socket) => {
  socket.send("user connected");
  socket.on("message", (e) => {
    if (e.toString() === "ping") socket.send('pong');
    else socket.send('wrong msg')
  });
});
