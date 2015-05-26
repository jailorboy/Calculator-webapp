var calc = document.getElementById("calc");
var input = document.getElementById("input");
var value = "";

calc.onclick = function (e) {
	var press = e.target.value;
	if (press == "+" || press == "-" || press=="*"||press=="/" ){
		value = value + press;
	}
	else if (press >= 0 && press <= 9){
		value = value + press;
	}
	else if (press == "C"){
		value = "";
	}
	else if (press == "=") {
		value = eval(value);
	}
	input.innerHTML = "<h3>"+value+"</h3>";
}








