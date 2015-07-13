var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d")
var turn = NaN;


var leftRec = {
	x: 52,
	y: 2,
	recPosX: 250,
	recPosY: 250
}

var rightRec = {
	x: 52,
	y: 2,
	recPosX: 300,
	recPosY: 250
}

var topRec = {
	x: 2,
	y: 52,
	recPosX: 250,
	recPosY: 250
};

var bottomRec = {
	x: 2,
	y: 52,
	recPosX: 250,
	recPosY: 300
}




document.addEventListener("keydown", function(e){

	if (e.keyCode == 39 && turn != true) { //right
		rightRec.recPosX -= 1;
		rightRec.recPosY += 0.5;
		rightRec.x -= 1;

		leftRec.recPosX += 1;
		leftRec.recPosY += 0.5;
		leftRec.x -= 1;

		topRec.recPosY = leftRec.recPosY;
		topRec.recPosX = leftRec.recPosX;
		topRec.y -= 2;

		bottomRec.recPosY -= 0.5;
		bottomRec.recPosX += 1;
		bottomRec.y -= 2;

		if (rightRec.x == 26) turn = true;


	}
	if (turn == true){
		rightRec.recPosX += 1;
		rightRec.recPosY -= 0.5;
		rightRec.x += 1;

		leftRec.recPosX -= 1;
		leftRec.recPosY -= 0.5;
		leftRec.x += 1;

		topRec.recPosY = leftRec.recPosY;
		topRec.recPosX = leftRec.recPosX;
		topRec.y += 2;

		bottomRec.recPosY += 0.5;
		bottomRec.recPosX -= 1;
		bottomRec.y += 2;

		if (rightRec.x == 52) turn = false;
		console.log("rightRec");
		drawRec();
	}
	console.log(rightRec);
	drawRec();

	if (e.keyCode == 37) {	//left

	}
	console.log(turn);
})


function drawRec(){
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.fillStyle = "#ffffff";
	ctx.fillRect(topRec.recPosX,topRec.recPosY,topRec.y,topRec.x);
	ctx.fillRect(leftRec.recPosX,leftRec.recPosY,leftRec.y,leftRec.x);
	ctx.fillRect(rightRec.recPosX,rightRec.recPosY,rightRec.y,rightRec.x);
	ctx.fillRect(bottomRec.recPosX,bottomRec.recPosY,bottomRec.y,bottomRec.x);
}
drawRec();