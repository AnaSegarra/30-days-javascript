const inputs = document.querySelectorAll('input');
let lastChecked;

inputs.forEach(function(input) {
	input.addEventListener('click', boxChecked.bind(null, input));
});

function boxChecked(el, e) {
	let firstBox, lastBox;
	if (lastChecked && e.shiftKey) {
		el.checked = lastChecked.checked;
		if (el.id > lastChecked.id) {
			firstBox = lastChecked.id;
			lastBox = el.id;
		} else {
			firstBox = el.id;
			lastBox = lastChecked.id;
		}
		const inBetweenInputs = [ ...inputs ].slice(parseInt(firstBox) + 1, lastBox);
		inBetweenInputs.forEach(function(box) {
			box.checked = el.checked;
		});
	}
	lastChecked = el;
}
