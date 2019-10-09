const dogs = [ { name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 } ];

function makeGreen() {
	const p = document.querySelector('p');
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

// Regular
console.log('hey');

// Interpolated
console.log('Testing interpolation: %s', '😀');

let emoji = '🤓'; //store second value in a variable
console.log('Another test: %s', emoji);

emoji = '😌';
console.log(`Interpolation using ES6 template literals: ${emoji}`);

// Styled
console.log('%c I am a styled string', 'color: purple');

// warning!
console.warn('I am warning you, Javert');

// Error :|
console.error('Displaying an error');

// Info
console.info('Adding some relevant info to the console');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('some-class-name'), 'Nope!');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p); //displays a list of properties and methods attached to a given object

// Grouping together
dogs.forEach((dog) => {
	// console.group(`${dog.name}`);
	console.groupCollapsed(`${dog.name}`); //collapsed by default
	console.log(`This is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old`);
	console.log(`${dog.name} age in dog years: ${dog.age}`);
	console.groupEnd(`${dog.name}`);
});

// counting
console.count('Hello!');
console.count('Hello!');
console.count('Okay, bye');
console.count('Hello!');
console.count('Hello!');
console.count('Okay, bye');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/AnaSegarra')
	.then((data) => data.json())
	.then((data) => {
		console.timeEnd('fetching data');
		console.log(data);
	});

//display data table
console.table(dogs);
console.table(dogs, [ 'name' ]); //displaying chosen property
