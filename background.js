let css = document.querySelector('h3');
let inputColor1 = document.querySelector('#color1');
let inputColor2 = document.querySelector('#color2');
let body = document.getElementById('gradient');
let button = document.querySelector('#random');

function setGradient () {
	body.style.background = 
		'linear-gradient(to right, ' 
		+ inputColor1.value
		+ ', '
		+ inputColor2.value
		+')';
	//change h3
	css.innerHTML = 
		`background: linear-gradient(to right, ${inputColor1.value}, ${inputColor2.value});`
		+ '<br>or<br>background: ' + body.style.background + ';';
}

function randomGradient () {
	//set colors to 2 random colors
	let rand1 = '#'+ ('000000' + (Math.random()*0xFFFFFF<<0).toString(16)).slice(-6);
	let rand2 = '#'+ ('000000' + (Math.random()*0xFFFFFF<<0).toString(16)).slice(-6);
	//setGradient with colors
	body.style.background = 
		'linear-gradient(to right, ' 
		+ rand1
		+ ', '
		+ rand2
		+')';
	//change h3
	css.innerHTML = 
		`background: linear-gradient(to right, ${rand1}, ${rand2});`
		+ '<br>or<br>background: ' + body.style.background + ';';
	//change input values to new color
	inputColor1.value = rand1;
	inputColor2.value = rand2;
}

inputColor1.addEventListener('input', setGradient);
inputColor2.addEventListener('input', setGradient);
button.addEventListener('click', randomGradient);

