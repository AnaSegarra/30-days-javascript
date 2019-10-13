const password = 'helloworld';
let pressedKeys = [];

window.addEventListener('keyup', function(e) {
	pressedKeys.push(e.key);
	if (pressedKeys.join('').includes(password)) {
		cornify_add();
		pressedKeys = [];
	}
	if (pressedKeys.length > password.length) {
		pressedKeys.splice(0, 1);
	}
	console.log(pressedKeys);
});
