const body = document.querySelector("body");

const fireNotification = (text, color) => {
	const notification = document.createElement("div");
	notification.innerText = text;
	notification.style.backgroundColor = color;
	notification.className = "notification";
	body.appendChild(notification);
};

export const handleNewUser = ({ nickname }) => {
	console.log(nickname, "just Joined");
	fireNotification(`${nickname} just Joined!`, "#39c5bb");
};

export const handleDisconnected = ({ nickname }) => {
	fireNotification(`${nickname} just left!`, "#ff3399");
};
