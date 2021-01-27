// import { handleMessageNotification } from "./chat";

// const socket = io("/");

// // socket.on("hello", () => console.log("Somebody Join"));
// // socket.emit("HelloS");

// function sendMessage(message) {
// 	socket.emit("newMessage", { message: message });
// 	console.log(`You: ${message}`);
// }

// function setNickname(nickname) {
// 	socket.emit("setNickname", { nickname });
// }

// socket.on("messageNotification", handleMessageNotification);

import "./sockets";
import "./login";
import "./chat";
import "./notification";
