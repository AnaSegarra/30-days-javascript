const panels = document.querySelectorAll('.panel');

panels.forEach(function(panel) {
	panel.addEventListener('click', panelClicked);
	panel.addEventListener('transitionend', textAppear);
});

function panelClicked() {
	this.classList.toggle('open');
}

function textAppear(event) {
	if (event.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}
