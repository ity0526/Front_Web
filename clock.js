const clock = document.getElementById("clock");

function TikTok() {
	const today = new Date();
	const hour = String(today.getHours()).padStart(2, 0);
	const mimute = String(today.getMinutes()).padStart(2, 0);
	const seconds = String(today.getSeconds()).padStart(2, 0);
	clock.innerText = `${hour}:${mimute}:${seconds}`
}

TikTok();
setInterval(TikTok, 1000);