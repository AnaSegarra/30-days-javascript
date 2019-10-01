const input = document.querySelectorAll('.controls input');

input.forEach((item) => {
	item.addEventListener('input', updateInput);
});

function updateInput() {
	document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${this.dataset.sizing}`);
}
