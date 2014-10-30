function setup(){
	createCanvas(900, 730);
}

function draw(){
	background(250, 217, 37);
	noStroke();
	fill(255);
	ellipse(mouseX, mouseY, 100, 100);



//doughnut #2//
	noStroke();
	fill(245, 212, 200);
	ellipse(400, 400, 200, 200);
	fill(0);
	ellipse(400, 400, 130, 130);

//doughnut #3//
	noStroke();
	fill(230, 236, 240);
	ellipse(50, 50, 200, 200);
	fill(0);
	ellipse(50, 50, 130, 130);

	drawDonut1(247, 8, 40, 150, 150);
	drawDonut1(212, 239, 231, 670, 670);
	drawDonut1(149, 80, 75, 780, 100);
}

//doughnut #1//
function drawDonut1(r, g, b, x, y){
	noStroke();
	fill(r, g, b);
	ellipse(x, y, 200, 200);
	fill(250, 217, 37);
	ellipse(x, y, 130, 130);
}