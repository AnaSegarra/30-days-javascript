const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const input = document.querySelector('#custom');

let countdown;

function timer(sec) {
	clearInterval(countdown);

	const now = Date.now();
	const then = now + sec * 1000;
	displayTime(sec);
	displayEndTime(then);
	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		if (secondsLeft < 0) {
			clearInterval(countdown);
			return;
		}
		displayTime(secondsLeft);
	}, 1000);
}

function displayTime(sec) {
	const min = Math.floor(sec / 60);
	const remainderSecs = sec % 60;
	timerDisplay.textContent = `${min}:${remainderSecs < 10 ? '0' : ''}${remainderSecs}`;
}

function displayEndTime(timestamp) {
	const end = new Date(timestamp);
	const hour = end.getHours();
	const minutes = end.getMinutes();

	endTime.textContent = `Be back at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
	const seconds = parseInt(this.dataset.time);
	timer(seconds);
}

buttons.forEach(btn => btn.addEventListener('click', startTimer));
input.addEventListener('submit', function(e) {
	e.preventDefault();
	const mins = this.minutes.value;
	timer(mins * 60);
	this.reset();
});
