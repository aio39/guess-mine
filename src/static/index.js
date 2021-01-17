const socket = io("/");

// socket.on("hello", () => console.log("Somebody Join"));
// socket.emit("HelloS");

function sendMessage(message) {
	socket.emit("newMessage", { message: message });
	console.log(`You: ${message}`);
}

function setNickname(nickname) {
	socket.emit("setNickname", { nickname });
}

function handleMessageNotification(data) {
	const { message, nickname } = data;
	console.log(`${nickname} said ${message}`);
}

socket.on("messageNotification", handleMessageNotification);
