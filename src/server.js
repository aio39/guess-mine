import express from "express";
import { join } from "path";
import dotenv from "dotenv";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController";
import events from "./events";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => res.render("home", { events: JSON.stringify(events) }));

const handleListening = () => console.log(`✔ Server running: http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO(server);

let sockets = [];

io.on("connection", (socket) => socketController(socket));

setInterval(() => {
	// console.log(sockets);
}, 3000);
