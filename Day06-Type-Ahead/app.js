const endpoint =
	'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const input = document.querySelector('input');
const suggestions = document.querySelector('.suggestions');
const cities = [];

fetch(endpoint)
	.then((result) => {
		return result.json();
	})
	.then((data) => {
		return cities.push(...data);
	});

function formatNumber(num) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
function findMatch(search, arr) {
	return arr.filter((place) => {
		const regex = RegExp(search, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
}

function showMatch() {
	const matchArray = findMatch(this.value, cities);
	const html = matchArray
		.map((place) => {
			const regex = new RegExp(this.value, 'gi');
			const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
			const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
			return `<li><span class="name">${cityName}, ${stateName}</span>
		<span class="population">${formatNumber(place.population)}</span>
		</li>
		`;
		})
		.join('');
	suggestions.innerHTML = html;
}

input.addEventListener('keyup', showMatch);
