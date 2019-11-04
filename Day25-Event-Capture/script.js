const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
	console.log(this.classList.value);
	//e.stopPropagation(); //stops bubbling
}

divs.forEach(div => div.addEventListener('click', logText)); //bubbling
// divs.forEach(div => div.addEventListener('click', logText, { capture: true })); //the event goes down to the element
button.addEventListener('click', () => console.log('You clicked!'), { once: true }); //unbinds click event
