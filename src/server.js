import express from "express";
import { join } from "path";
import dotenv from "dotenv";
import socketIO from "socket.io";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => res.render("home"));

const handleListening = () => console.log(`✔ Server running: http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO(server);
