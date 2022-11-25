function colorchange() {
	var makingColorCode;
	var color;
	var counter;

	makingColorCode = "0123456789ABCDEF";
	color = "#";
	counter = 0;
	while (counter < 6) 
	{
	   color = color + makingColorCode[Math.floor(Math.random() * 16)];
	   counter++;
	}
	document.body.style.background = color;
 }
