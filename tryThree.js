var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d")
var turn = NaN;
var fillShape = "#8ED6FF";
var counter = 1;
var leftLine = {
	xLeft: 250,
	yLeft: 250,
	xRight: 250,
	yRight: 300,
}

var rightLine = {
	xLeft: 300,
	yLeft: 250,
	xRight: 300,
	yRight: 300,
}

var topLine = {
	xLeft: 250,
	yLeft: 250,
	xRight: 300,
	yRight: 250,
};

var bottomLine = {
	xLeft: 250,
	yLeft: 300,
	xRight: 300,
	yRight: 300,
}

document.addEventListener("keydown", function(e){

	if (e.keyCode == 32) { //Spacebar
		if (leftLine.yLeft == 262){
			counter++
		}

		if (counter % 2 == 0){ // Change color of "sides" odd or even side
			fillShape = "#f7dc0c";

		}
		else fillShape = "#8ED6FF";

		if (turn != true){
			leftLine.yLeft += 0.5;
			leftLine.yRight -= 0.5;
			leftLine.xLeft += 1;
			leftLine.xRight += 1;		

			rightLine.yLeft -= 0.5;
			rightLine.yRight += 0.5;
			rightLine.xLeft -= 1;
			rightLine.xRight -= 1;

			topLine.xLeft = leftLine.xLeft;
			topLine.yLeft = leftLine.yLeft;
			topLine.xRight = rightLine.xLeft;
			topLine.yRight = rightLine.yLeft;

			bottomLine.xLeft = leftLine.xRight;
			bottomLine.yLeft = leftLine.yRight;
			bottomLine.xRight = rightLine.xRight;
			bottomLine.yRight = rightLine.yRight;

			if (leftLine.xLeft == 276){ //When at 276 px right and left line switches y,x and make it look like the square rotates
				turn = true;
				leftLine.yLeft = 237;
				leftLine.yRight = 313;
				leftLine.xLeft = 274;
				leftLine.xRight = 274;		

				rightLine.yLeft = 263;
				rightLine.yRight = 287;
				rightLine.xLeft = 274;
				rightLine.xRight = 274;
			}
		}

		if (turn == true){ // Reverse everything when the right and leftline meets.
			leftLine.yLeft += 0.5;
			leftLine.yRight -= 0.5;
			leftLine.xLeft -= 1;
			leftLine.xRight -= 1;		

			rightLine.yLeft -= 0.5;
			rightLine.yRight += 0.5;
			rightLine.xLeft += 1;
			rightLine.xRight += 1;

			topLine.xLeft = leftLine.xLeft;
			topLine.yLeft = leftLine.yLeft;
			topLine.xRight = rightLine.xLeft;
			topLine.yRight = rightLine.yLeft;

			bottomLine.xLeft = leftLine.xRight;
			bottomLine.yLeft = leftLine.yRight;

			bottomLine.xRight = rightLine.xRight;
			bottomLine.yRight = rightLine.yRight;
			if (leftLine.xLeft == 248){
				turn = false;
			}
		}

		drawRec();

	}

})

function drawRec(){ //Everything that needs to be drawn happends here
	ctx.clearRect(0, 0, c.width, c.height);

	ctx.beginPath(); 
	ctx.lineWidth="2";
	ctx.strokeStyle="white";

	ctx.moveTo(leftLine.xLeft,leftLine.yLeft);
	ctx.lineTo(leftLine.xRight,leftLine.yRight);

	ctx.moveTo(rightLine.xLeft,rightLine.yLeft);
	ctx.lineTo(rightLine.xRight,rightLine.yRight);	

	ctx.moveTo(topLine.xLeft,topLine.yLeft);
	ctx.lineTo(topLine.xRight,topLine.yRight);

	ctx.moveTo(bottomLine.xLeft,bottomLine.yLeft);
	ctx.lineTo(bottomLine.xRight,bottomLine.yRight);
//Fill square with colors
	ctx.beginPath();
	ctx.lineTo(leftLine.xLeft,leftLine.yLeft);
	ctx.lineTo(leftLine.xRight,leftLine.yRight);
	ctx.lineTo(rightLine.xRight,rightLine.yRight);
	ctx.lineTo(rightLine.xLeft,rightLine.yLeft);
	ctx.fillStyle = fillShape;
	ctx.fill();
	ctx.closePath();

	ctx.stroke(); // Draw it
}

drawRec();


