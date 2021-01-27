import events from "./events";

const socketController = (socket) => {
	const broadcast = (event, data) => socket.broadcast.emit(event, data);
	socket.on(events.setNickname, ({ nickname }) => {
		broadcast(events.newUser, { nickname });
		socket.nickname = nickname;
	});
	socket.on(events.disconnect, () => {
		broadcast(events.disconnected, { nickname: socket.nickname });
	});

	socket.on(events.sendMsg, ({ message }) => {
		console.log(message);
		broadcast(events.newMsg, { message, nickname: socket.nickname });
	});
};

export default socketController;

// {
// 	// // sockets.push(socket.id);
// 	// socket.broadcast.emit("hello");
// 	// socket.on("HelloS", () => console.log("clinet said hello"));
// 	socket.on("newMessage", ({ message }) => {
// 		socket.broadcast.emit("messageNotification", { message, nickname: socket.nickname || "Anon" });
// 	});
// 	socket.on("setNickname", ({ nickname }) => {
// 		socket.nickname = nickname;
// 	});
// }
