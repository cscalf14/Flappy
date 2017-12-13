var Yspeed= 6;
var end = false
var bird
var birdy=400;
var x=1800;
var Xspeed=-3;
var accel= .3;
var rectCoordsX = [0, 0, 0, 0, 0];
var rectCoordsY = [0, 0, 0, 0, 0];
var rectHolesY =  [0, 0, 0, 0, 0];

function preload (){
	bird = loadImage ("Flappy.png");
                    }

function setup() {
  createCanvas(windowWidth-5, windowHeight-5);
  background(255);
	rectCoordsX [0] = width;

	for( var i = 1; i < 5; i++){
   rectCoordsX[i] = rectCoordsX[i-1]+500;
	}

	  for( var i = 0; i < 5; i++){
    rectHolesY[i] = random(20, height-280);
		}
	noStroke ();
}

function draw() {
	background(100);
	drawRect();
	drawBird ();
	moveRect();
	checkhit();
	if(end==true){
	accel = 200
	background(255)
	fill(0,0,0)
		textSize(150)
	text ("Game Over Refresh Page", 100, 400);
	text ("To Restart",550,600)
}
	}

function mousePressed () {
	Yspeed = -7
}

function drawBird () {
	image(bird, 150, birdy, 50, 50);
	birdy = birdy + Yspeed;
	Yspeed = Yspeed + accel;
}

function drawRect () {
	for (var i=0;i<5; i++){
		fill (0,0,0);
	rect(rectCoordsX [i] ,0 , 40, height);
		fill (100);
		rect(rectCoordsX[i], rectHolesY [i] , 40, 260);
                  }
	}
	function moveRect (){
	  for( var i = 0; i < 4; i++){
	    rectCoordsX[i] = rectCoordsX[i]+Xspeed;
			if (rectCoordsX[i] < 1) {
			rectCoordsX[i] = width;}

	  }
		if(birdy>height-47){
end = true
		}

	}
	function checkhit () {
	for( var i = 0; i < 5; i++){
		if (300 > rectCoordsX[i] && 300 < rectCoordsX[i] + 40) {
			if (y > rectHolesY[i] && y < rectHolesY[i] +260){
			}
			else{
			end= true;
			}
		}
	}
