import express from "express";
import { join } from "path";
import dotenv from "dotenv";
import socketIO from "socket.io";
import logger from "morgan";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => res.render("home"));

const handleListening = () => console.log(`✔ Server running: http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO(server);

let sockets = [];

io.on("connection", (socket) => {
	// // sockets.push(socket.id);
	// socket.broadcast.emit("hello");
	// socket.on("HelloS", () => console.log("clinet said hello"));
	socket.on("newMessage", ({ message }) => {
		socket.broadcast.emit("messageNotification", { message, nickname: socket.nickname || "Anon" });
	});
	socket.on("setNickname", ({ nickname }) => {
		socket.nickname = nickname;
	});
});

setInterval(() => {
	// console.log(sockets);
}, 3000);
