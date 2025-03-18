import express, { Application, Request, Response } from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import { setupSocket } from "./socket";

const app: Application = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);

app.use(express.static("public"));

app.get("/hi", (_req: Request, res: Response) => {
  res.send("Express server running");
});

setupSocket(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
