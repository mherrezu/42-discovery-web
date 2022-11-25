var i = 0;
var j = 2;

function increase() {
	var balloon;

	balloon = document.getElementById("balloon");

	if (balloon.style.width < "415")
	{
		balloon.style.width = (balloon.offsetWidth + 10) + "px";
		balloon.style.height = (balloon.offsetHeight + 10) + "px";
	}
	else
	{
		balloon.style.width = 200 + "px";
		balloon.style.height = 200 + "px";
	}
	changeColor("balloon");
}

function changeColor() {

	switch (i) {
		case 0:
			balloon.style.background = "green";
			i++;
		break;
		case 1:
			balloon.style.background = "blue";
			i++;
		break
		case 2:
			balloon.style.background = "red";
			i = 0;
		break;
	}
}

function decrease() {
	var balloon;

	balloon = document.getElementById("balloon");

	if (balloon.style.width > "200")
	{
		balloon.style.width = (balloon.offsetWidth - 5) + "px";
		balloon.style.height = (balloon.offsetHeight - 5) + "px";
	}
	reverseColor("balloon");
}

function reverseColor() {

	switch (j) {
		case 2:
			balloon.style.background = "red";
			j--;
		break;
		case 1:
			balloon.style.background = "blue";
			j--;
		break
		case 0:
			balloon.style.background = "green";
			j = 2;
		break;
	}
}