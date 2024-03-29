const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
	{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
	{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
	{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
	{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
	{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William', 'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton'];

// 1. List of inventors who were born in the 1500's
const inventorsFrom1500s = inventors.filter(function(inv) {
	return inv.year >= 1500 && inv.year < 1600;
});
console.log(inventorsFrom1500s);

// 2. Array of the inventors' first and last names
const inventorsFullName = inventors.map(function(inv) {
	return `${inv.first} ${inv.last}`;
});
console.log(inventorsFullName);

// 3. Ordered list of inventors by birthdate, oldest to youngest
const ageOrdered = inventors.sort(function(invA, invB) {
	if (invA.year > invB.year) return 1;
	else return -1;
});
console.log(ageOrdered);

// 4. Total years lived by all inventors
const totalYears = inventors.reduce(function(result, inv) {
	return result + (inv.passed - inv.year);
}, 0);
console.log(`Total years lived: ${totalYears}`);

// 5. Sort the inventors by years lived
const orderedYearsLived = inventors.sort(function(invA, invB) {
	if (invA.passed - invA.year > invB.passed - invB.year) return -1;
	else return 1;
});
console.log(orderedYearsLived);

// 6. List of Boulevards in Paris that contain 'de' in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// This code will be run directly from the console when navigating to the link above
const boulevards = Array.from(document.querySelectorAll('.mw-category a'));
const containDe = boulevards
	.map(function(blvd) {
		return blvd.textContent;
	})
	.filter(function(st) {
		return st.includes('de ');
	});

//7. People alphabetically ordered by last name
const peopleOrdered = people.sort(function(personA, personB) {
	if (personA.split(', ')[0] > personB.split(', ')[0]) return 1;
	else return -1;
});
console.log(peopleOrdered);

// 8. Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const countedInstances = data.reduce(function(obj, transport) {
	if (transport in obj) {
		obj[transport]++;
	} else {
		obj[transport] = 1;
	}
	return obj;
}, {});

console.log(countedInstances);
