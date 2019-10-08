const people = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 }
];

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 }
];

// is at least one person 19 or older?
const isFullAge = people.some((person) => new Date().getFullYear() - person.year >= 19);
console.log(isFullAge);

// is everyone 19 or older?
const allAdults = people.every((person) => new Date().getFullYear() - person.year >= 19);
console.log(allAdults);

// find the comment with the ID of 823423
const findID = comments.find((comment) => comment.id === 823423);
console.log(findID);

// delete the comment with the ID of 823423
const index = comments.findIndex((comment) => comment.id === 823423);
comments.splice(index, 1);
console.log(comments);