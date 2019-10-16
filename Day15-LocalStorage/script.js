const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
	e.preventDefault();
	const text = this.querySelector('[name=item]').value;
	const item = {
		text,
		done: false
	};
	items.push(item);
	displayItem(items, itemsList);
	localStorage.setItem('items', JSON.stringify(items));
	this.reset();
}

function displayItem(plates = [], platesList) {
	platesList.innerHTML = plates
		.map((el, i) => {
			return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${
				el.done ? 'checked' :
				''}>
                <label for="item${i}">${el.text}</label>
            </li>
        `;
		})
		.join('');
}

function toggleDone(e) {
	if (!e.target.matches('input')) return;

	const el = e.target;
	const index = el.dataset.index;

	items[index].done = !items[index].done;
	localStorage.setItem('items', JSON.stringify(items));
	displayItem(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

displayItem(items, itemsList);
