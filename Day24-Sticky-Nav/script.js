const nav = document.getElementById('main');
const navTop = nav.offsetTop;

function stickNav() {
	if (window.scrollY >= navTop) {
		document.body.style.paddingTop = `${nav.offsetHeight}px`;
		document.body.classList.add('fixed-nav');
	} else {
		document.body.style.paddingTop = 0;
		document.body.classList.remove('fixed-nav');
	}
}

window.addEventListener('scroll', stickNav);
