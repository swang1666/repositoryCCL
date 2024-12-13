let nrOfCircles = 15;
let nrOfCircles2 = 20;
let nrOfCircles3 = 10;
let circleArray = [];
let hu = 0;
let hu2 = 0;
let hu3 = 0;

function setup() {
	createCanvas(windowWidth, windowHeight); //sets the size of the canvas
	colorMode(HSB, 255);
	background(241);
  strokeWeight(1.2);
}

function draw() {
  background(0);
	artWork();
    hu+=2;
    hu2+=1;
    hu3+=0.5;
}

function artWork() {
	//background(241);
	noFill();
	for (let i = 0; i < nrOfCircles; i++) {
		stroke((hu + i / nrOfCircles * 255)%255, 255, 180);
		ellipse(width / 4 + (i * 3), height / 3, 250 - (i * 6));
		stroke((hu + 255 - (i / nrOfCircles * 255))%255, 255, 180);
		ellipse(width/4 + ((nrOfCircles-1)*3) - (i*3), height/3, 250 - ((nrOfCircles - 1)* 6) - (i*6)); 
	}////first for function end
//////////////////////////////////////////////////////////  
  
  for (let i = 0; i < nrOfCircles2; i++) {
		stroke((hu3 + i / nrOfCircles2 * 255)%255, 255, 180);
		ellipse(width /4 + (i * 3), height / 1.3, 250 - (i * 6));
		stroke((hu2 + 255 - (i / nrOfCircles2 * 255))%255, 255, 180);
		ellipse(width/4 + ((nrOfCircles2-1)*3) - (i*3), height/1.3, 250 - ((nrOfCircles2 - 1)* 6) - (i*6)); 
	}////second for function end
 //////////////////////////////////////////////////////// 
  
    
  for (let i = 0; i < nrOfCircles3; i++) {
		stroke((hu3 + i / nrOfCircles3 * 255)%255, 255, 180);
		ellipse(width / 1.75 + (i * 3), height / 3, 250 - (i * 6));
		stroke((hu2 + 255 - (i / nrOfCircles3 * 255))%255, 255, 180);
		ellipse(width/1.75 + ((nrOfCircles3-1)*3) - (i*3), height/3, 250 - ((nrOfCircles3 - 1)* 6) - (i*6)); 
	}////second for function end
 //////////////////////////////////////////////////////// 
   
  for (let i = 0; i < nrOfCircles; i++) {
		stroke((hu2 + i / nrOfCircles * 255)%255, 255, 180);
		ellipse(width /1.75 + (i * 3), height / 1.3, 250 - (i * 6));
		stroke((hu + 255 - (i / nrOfCircles * 255))%255, 255, 180);
		ellipse(width/1.75 + ((nrOfCircles-1)*3) - (i*3), height/1.3, 250 - ((nrOfCircles - 1)* 6) - (i*6)); 
	}////second for function end
 //////////////////////////////////////////////////////// 
  
   for (let i = 0; i < nrOfCircles3; i++) {
		stroke((hu + i / nrOfCircles3 * 255)%255, 255, 180);
		ellipse(width /1.125 + (i * 3), height / 1.3, 250 - (i * 6));
		stroke((hu3 + 255 - (i / nrOfCircles3 * 255))%255, 255, 180);
		ellipse(width/1.125 + ((nrOfCircles3-1)*3) - (i*3), height/1.3, 250 - ((nrOfCircles3 - 1)* 6) - (i*6)); 
	}////second for function end
 //////////////////////////////////////////////////////// 
  
     for (let i = 0; i < nrOfCircles2; i++) {
		stroke((hu3 + i / nrOfCircles2 * 255)%255, 255, 180);
		ellipse(width /1.125 + (i * 3), height / 3, 250 - (i * 6));
		stroke((hu2 + 255 - (i / nrOfCircles2 * 255))%255, 255, 180);
		ellipse(width/1.125 + ((nrOfCircles2-1)*3) - (i*3), height/ 3, 250 - ((nrOfCircles2 - 1)* 6) - (i*6)); 
	}////second for function end
 //////////////////////////////////////////////////////// 
}

