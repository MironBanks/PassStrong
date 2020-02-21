const inputOne = document.getElementById('inputOne')
const pb1 = document.getElementById('pb1')
const pb2 = document.getElementById('pb2')
const pb3 = document.getElementById('pb3')
const pbText = document.getElementById('progress-bar_text');

// checking length of input
function inputLength() {
	return inputOne.value.length;
}

function checkPassStrong() {
	let len = inputLength();


	if (len === 0) {
		pb1.classList.remove('active_1', 'active_2', 'active_3')
		pb2.classList.remove('active_2', 'active_3')
		pb3.classList.remove('active_3')

		pbText.innerHTML = "Password is blank"


		console.log("rowne zero")
	} else if (len >= 0 && len <= 4) {
		pb1.classList.add('active_1')
		pb1.classList.remove('active_2', 'active_3')
		pb2.classList.remove('active_2', 'active_3')
		pb3.classList.remove('active_3')


		pbText.innerHTML = "Too weak!"


		console.log("od zero do 4")
	} else if (len > 4 && len <= 8) {
		pb1.classList.remove('active_1', 'active_3')
		pb2.classList.remove('active_3')
		pb1.classList.add('active_2')
		pb2.classList.add('active_2')
		pb3.classList.remove('active_3')

		pbText.innerHTML = "Could be stronger"


		console.log("od 4 do 8")
	} else {
		pb1.classList.remove('active_1', 'active_2')
		pb2.classList.remove('active_1', 'active_2')
		pb1.classList.add('active_3')
		pb2.classList.add('active_3')
		pb3.classList.add('active_3')
		pbText.innerHTML = "Strong password"

		console.log("wiecej niz 8")
	}
}

inputOne.addEventListener('keypress', function (event) {
	if (inputLength() >= 0 || event.keyCode === 8) {
		checkPassStrong();
	}
});
