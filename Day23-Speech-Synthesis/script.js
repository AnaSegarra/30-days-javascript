const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
	voices = this.getVoices();
	voicesDropdown.innerHTML = voices
		.filter(voice => voice.lang.includes('en') || voice.lang.includes('es'))
		.map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
		.join('');
}

function chooseVoice() {
	msg.voice = voices.find(voice => voice.name === this.value);
	toggle();
}

function toggle(restart = true) {
	speechSynthesis.cancel();
	if (restart) {
		speechSynthesis.speak(msg);
	}
}

function setOption() {
	msg[this.name] = this.value;
	toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', chooseVoice);
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));
options.forEach(option => option.addEventListener('change', setOption));