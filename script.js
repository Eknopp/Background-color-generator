var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var colorCode = document.querySelector("h3");
var body = document.getElementById("gradient");
var random=document.getElementById("random");


function setGradient(){
	body.style.background=
	"linear-gradient(to right, "
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";

	colorCode.textContent=body.style.background + ";";
}


function getRandomColor(){
	var letters = '0123456789ABCDEF';
	var color = "#";
	for (var i=0; i<6; i++){
		var color = color + (letters[Math.floor(Math.random()*16)]);
	}
	return color;
}


function setRandom(){
	body.style.background=
	"linear-gradient(to right, "
	+ getRandomColor()
	+ ", " 
	+ getRandomColor()
	+ ")";

	colorCode.textContent=body.style.background + ";";
}





color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", setRandom);
setGradient();