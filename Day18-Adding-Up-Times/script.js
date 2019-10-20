const timeVideos = Array.from(document.querySelectorAll('[data-time]'));

const timeTotal = timeVideos
	.map(el => {
		return el.getAttribute('data-time');
	})
	.map(timeValue => {
		const [ mins, sec ] = timeValue.split(':').map(parseFloat);
		return mins * 60 + sec;
	})
	.reduce((total, seconds) => total + seconds);

const hours = Math.floor(timeTotal / 3600);
let seconds = timeTotal % 3600;
const minutes = Math.floor(seconds / 60);
seconds %= 60;

console.log(`Total video time: ${hours} hours, ${minutes} minutes and ${seconds} seconds`);
