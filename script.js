const inputOne = document.getElementById('inputOne')

// checking length of input
function inputLength() {
	return inputOne.value.length;
}

inputOne.addEventListener('keypress', function () {
	let len = inputLength();

	if (len === 0) {
		console.log("rowne zero")
	} else if (len > 0 && len <= 4) {
		console.log("od zero do 4")
	} else if (len > 4 && len <= 8) {
		console.log("od 4 do 8")
	} else {
		console.log("wiecej niz 8")
	}
});
