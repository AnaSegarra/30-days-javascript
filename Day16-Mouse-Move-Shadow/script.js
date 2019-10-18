const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 200;

const shadow = e => {
	const heroWidth = hero.offsetWidth;
	const heroHeight = hero.offsetHeight;
	let mouseX = e.offsetX;
	let mouseY = e.offsetY;

	if (this !== e.target) {
		mouseX += e.target.offsetLeft;
		mouseY += e.target.offsetTop;
	}

	const xWalk = Math.round(mouseX / heroWidth * walk - walk / 2);
	const yWalk = Math.round(mouseY / heroHeight * walk - walk / 2);

	text.style.textShadow = `${xWalk}px ${yWalk}px 2px rgb(255, 102, 0), 
    ${xWalk + 5}px ${yWalk + 5}px 2px rgb(255, 255, 0)`;
};

hero.addEventListener('mousemove', shadow);
