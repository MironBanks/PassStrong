//first progress bar

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


	} else if (len >= 0 && len <= 4) {
		pb1.classList.add('active_1')
		pb1.classList.remove('active_2', 'active_3')
		pb2.classList.remove('active_2', 'active_3')
		pb3.classList.remove('active_3')


		pbText.innerHTML = "Too weak!"


	} else if (len > 4 && len <= 8) {
		pb1.classList.remove('active_1', 'active_3')
		pb2.classList.remove('active_3')
		pb1.classList.add('active_2')
		pb2.classList.add('active_2')
		pb3.classList.remove('active_3')

		pbText.innerHTML = "Could be stronger"


	} else {
		pb1.classList.remove('active_1', 'active_2')
		pb2.classList.remove('active_1', 'active_2')
		pb1.classList.add('active_3')
		pb2.classList.add('active_3')
		pb3.classList.add('active_3')
		pbText.innerHTML = "Strong password"

	}
}

inputOne.addEventListener('keypress', function (event) {
	if (inputLength() >= 0 || event.keyCode === 8) {
		checkPassStrong();
	}
});

//second progress bar

const inputTwo = document.querySelector(".input-2")
const pbTwo1 = document.querySelector(".progress-bar_item-2-1")
const pbTwo2 = document.querySelector(".progress-bar_item-2-2")
const pbTwo3 = document.querySelector(".progress-bar_item-2-3")
const pbTextTwo = document.getElementById('progress-bar_text_two');

function inputLengthTwo() {
	return inputTwo.value.length;
}

function checkPassStrongTwo() {
	let lenTwo = inputLengthTwo();


	if (lenTwo === 0) {


		pbTextTwo.innerHTML = "Password is blank"


	} else if (lenTwo >= 0 && lenTwo <= 4) {



		pbTextTwo.innerHTML = "Too weak!"


	} else if (lenTwo > 4 && lenTwo <= 8) {


		pbTextTwo.innerHTML = "Could be stronger"


	} else {

		pbTextTwo.innerHTML = "Strong password"

	}
}


inputTwo.addEventListener('keypress', function () {
	if (inputLengthTwo() >= 0 || event.keyCode === 8) {
		checkPassStrongTwo();
	}

})
