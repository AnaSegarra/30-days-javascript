const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lastX, lastY, hue, direction, isDrawing;
hue = 0;
isDrawing = false;
direction = true;

function draw(e) {
	if (!isDrawing) return;
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	ctx.beginPath();
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	lastX = e.offsetX;
	lastY = e.offsetY;

	hue++;

	if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
		direction = !direction;
	}


		hue >= 360 ? (hue = 0) :
		(hue = hue);


		direction ? ctx.lineWidth++ :
		ctx.lineWidth--;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;
	lastX = e.offsetX;
	lastY = e.offsetY;
});
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
