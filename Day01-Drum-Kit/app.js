window.addEventListener('keydown', addKeyPressed);

function addKeyPressed(event) {
	var sounds = document.querySelector(`audio[data-key='${event.keyCode}']`);
	var key = document.querySelector(`.key[data-key='${event.keyCode}']`);
	if (!key) {
		return undefined;
	}
	key.classList.add('playing');
	sounds.currentTime = '0';

	sounds.play();
}

var keys = document.querySelectorAll('.key');
keys.forEach(function(current) {
	current.addEventListener('transitionend', removeClass);
});

function removeClass(e) {
	e.target.classList.remove('playing');
}
