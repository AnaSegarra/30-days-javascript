var hourHand = document.querySelector('.hour-hand');
var minHand = document.querySelector('.min-hand');
var secondHand = document.querySelector('.second-hand');
var initialTime = new Date();
secondHand.style.transform = `rotate(${moveHand(initialTime.getSeconds(), 60)}deg)`;
minHand.style.transform = `rotate(${moveHand(initialTime.getMinutes(), 60)}deg)`;
hourHand.style.transform = `rotate(${moveHand(initialTime.getHours(), 12)}deg)`;

function moveHand(time, max) {
	return (degrees = time / max * 360 + 90);
}

function getTime() {
	var time = new Date();
	secondHand.style.transform = `rotate(${moveHand(time.getSeconds(), 60)}deg)`;
	minHand.style.transform = `rotate(${moveHand(time.getMinutes(), 60)}deg)`;
	hourHand.style.transform = `rotate(${moveHand(time.getHours(), 12)}deg)`;
}

setInterval(getTime, 1000);
