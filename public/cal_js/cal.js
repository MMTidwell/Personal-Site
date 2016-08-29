// notes to self --------------------------------------------------------
// - Start adding in more comments from the beginning 


"use strict";
(function(){
	// getting numbers --------------------------------------------------------
	var number = document.getElementsByClassName("numbers");

	for(var i = 0; i < number.length; i += 1) {
		number[i].addEventListener('click', handleNumber);
	}


	// getting operands -------------------------------------------------------
	var operand = document.getElementsByClassName("operands")

	for (var i = 0; i < operand.length; i += 1) {
		operand[i].addEventListener('click', middleInput);
	}

	function middleInput() {
		var valueMid = this.innerHTML;
		mid_input.value = valueMid;
	}


	// getting numbers into correct input -----------------------------------
	function handleNumber() {
		var valueOfButtonClicked = this.innerHTML;
		var operand = document.getElementById("mid_input");
		var display;

		if (operand.value === "") {
			display = document.getElementById("left_input");
		} else {
			display = document.getElementById("right_input");
		}
		display.value += valueOfButtonClicked
	}


	// getting total------------------------------------------------------------
	var equal = document.getElementById("equals").addEventListener('click', math);
	var total = 0;

	function math() {
		var a = parseFloat(document.getElementById("left_input").value);
		var b = document.getElementById("mid_input").value;
		var c = parseFloat(document.getElementById("right_input").value);
		
		switch (b) {
			case "+":
				total = a + c
				break;
			case "-":
				total = a - c
				break;
			case "/":
				total = a / c
				break;
			case "*":
				total = a * c
				break;
		}
		a = document.getElementById("left_input");
		a.value = total;
		document.getElementById("mid_input").value = ''
		document.getElementById("right_input").value = ''
	}


	// clearing screen--------------------------------------------------------
	var clear = document.getElementById("clear").addEventListener('click', clearClicked);

	function clearClicked (e) {
	    var a = document.getElementById("left_input");
		var b = document.getElementById("mid_input");
		var c = document.getElementById("right_input");

		document.getElementById("left_input").value = ''
		document.getElementById("mid_input").value = ''
		document.getElementById("right_input").value = ''
	}

})();


