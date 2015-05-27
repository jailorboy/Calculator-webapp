var calc = document.getElementById("calc");
var input = document.getElementById("input");
var value = "";

calc.onclick = function (e) {
	var press = e.target.value;
	if (press == "+" || press == "-" || press=="*"||press=="/"|| press == "." ){
		value = value + press;
	}
	else if (press >= 0 && press <= 9){
		value = value + press;
	}
	else if (press == "C"){
		value= "";
		input.innerHTML = "<h3>Input</h3>";
	}
	else if (press == "=") {
		value = eval(value);
	}
	if (press != "C")
		input.innerHTML = "<h3>"+value+"</h3>";
}








