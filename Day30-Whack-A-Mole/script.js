const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomizeTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function randomHole(arr) {
	const index = Math.floor(Math.random() * arr.length);
	const hole = arr[index];
	if (hole === lastHole) {
		return randomHole(holes);
	}
	lastHole = hole;
	return hole;
}

function moleAppear() {
	const time = randomizeTime(200, 1000);
	const hole = randomHole(holes);

	hole.classList.add('up');
	setTimeout(() => {
		hole.classList.remove('up');
		if (!timeUp) moleAppear();
	}, time);
}

function startGame() {
	scoreBoard.textContent = 0;
	timeUp = false;
	score = 0;
	moleAppear();
	setTimeout(() => {
		timeUp = true;
	}, 10000);
}

function hitMole(e) {
	if (!e.isTrusted) return; //check whether click is simulated
	score++;
	this.classList.remove('up');
	scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', hitMole));
