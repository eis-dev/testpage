function fadeOut(target, time) {
	target.style.opacity = 0;

	setTimeout(function () {
		target.style.display = "none";
		target.style.opacity = 1;
	}, time);
}

function fadeIn(target, time) {
	target.style.opacity = 0;

	setTimeout(function () {
		target.style.opacity = 1;
	}, 25);

	setTimeout(function () {
		target.style.display = "";
	}, time - 25);
}

var video = document.querySelector(".video-popup video");

function closeVideo() {
	fadeOut(document.getElementById("videoPopup"), 300);
	video.pause();
	setTimeout(function () {
		video.currentTime = 0;
	}, 300);
}

function openVideo() {
	fadeIn(document.getElementById("videoPopup"));
	video.play().then(() => {
		video.volume = 1;
		video.muted = false;
	});
}

video.play();

document
	.querySelector(".video-popup")
	.addEventListener("click", function (event) {
		let trueTarget = event.target.classList[0] === "video-popup";
		if (trueTarget) closeVideo();
	});

document
	.querySelector(".video-popup button.close")
	.addEventListener("click", closeVideo);

document.querySelector(".video-bg").addEventListener("click", openVideo);
document.querySelector(".play-icon").addEventListener("click", openVideo);

// auto-scale
// var vw = 0.000625 * Math.max(window.innerWidth, window.innerHeight);
// document.body.style.setProperty("--vw-scale", vw);
// window.addEventListener("resize", () => {
// 	document.body.style.setProperty("--vw-scale", vw);
// });
