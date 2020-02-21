const inputOne = document.getElementById('inputOne')
const pb1 = document.getElementById('pb1')
const pb2 = document.getElementById('pb2')
const pb3 = document.getElementById('pb3')
const pbText = document.getElementsByClassName('.form-1 .progress-bar_text');
const pbAllOne = document.querySelectorAll('.progress-bar_item')

// checking length of input
function inputLength() {
	return inputOne.value.length;
}

inputOne.addEventListener('keypress', function () {
	let len = inputLength();


	if (len === 0) {


		console.log("rowne zero")
	} else if (len > 0 && len <= 4) {
		pb1.classList.add('active_1')


		console.log("od zero do 4")
	} else if (len > 4 && len <= 8) {
		pb1.classList.remove('active_1')
		pb1.classList.add('active_2')
		pb2.classList.add('active_2')


		console.log("od 4 do 8")
	} else {
		pb1.classList.remove('active_2')
		pb2.classList.remove('active_2')
		pb1.classList.add('active_3')
		pb2.classList.add('active_3')
		pb3.classList.add('active_3')


		console.log("wiecej niz 8")
	}
});
