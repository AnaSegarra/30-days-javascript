//Variables
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const playerBtn = document.querySelector('.toggle');
const skipBtns = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');

let mouseDown = false;
//Functions
function hitPlay() {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

function pressKey(e) {
	if (e.keyCode === 32) {
		hitPlay();
	} else if (e.keyCode === 37) {
		video.currentTime -= 10;
	} else if (e.keyCode === 39) {
		video.currentTime += 25;
	}
}

function changeBtn() {
	let icon;
	if (video.paused) {
		icon = '►';
	} else {
		icon = '❚ ❚';
	}
	playerBtn.textContent = icon;
}

function skip() {
	video.currentTime += parseInt(this.dataset.skip);
}

function updateRanges() {
	video[this.name] = this.value;
}

function handleProgress() {
	const percentage = video.currentTime / video.duration * 100;
	progressBar.style.flexBasis = `${percentage}%`;
}

function scrub(e) {
	const scrubTime = e.offsetX / progress.offsetWidth * video.duration;
	video.currentTime = scrubTime;
}

//Event listeners
window.addEventListener('keydown', pressKey);

video.addEventListener('click', hitPlay);
video.addEventListener('play', changeBtn);
video.addEventListener('pause', changeBtn);
video.addEventListener('timeupdate', handleProgress);

playerBtn.addEventListener('click', hitPlay);
skipBtns.forEach(function(btn) {
	btn.addEventListener('click', skip);
});

ranges.forEach(function(range) {
	range.addEventListener('input', updateRanges);
});

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', function(e) {
	if (mouseDown) {
		scrub(e);
	}
});
progress.addEventListener('mousedown', function() {
	mouseDown = true;
});
progress.addEventListener('mouseup', function() {
	mouseDown = false;
});
