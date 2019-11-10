const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleSpeed(e) {
	const y = e.pageY - this.offsetTop;
	const percentage = y / this.offsetHeight;
	const min = 0.4;
	const max = 4;
	const height = `${Math.round(percentage * 100)}%`;
	const playRate = percentage * (max - min) + min;

	bar.style.height = height;
	bar.textContent = `${playRate.toFixed(2)}x`;
	video.playbackRate = playRate;
}

speed.addEventListener('mousemove', handleSpeed);
