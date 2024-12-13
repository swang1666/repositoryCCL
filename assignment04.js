let playerImg;

function preload() {
  // Load your player image here
  playerImg = loadImage('exquisiteon class2.png');
}

function setup() {
	noCursor();
	createCanvas(windowWidth, windowHeight);
}

const bullets = [];
const bSpeed = 10;
const bWidth = 10, bHeight = 12;
const enemys = [];
const eWidth = 60, eHeight = 60;
let score = 0;
let tickCounter = 0;

function draw() {
	background(225, 225, 220);
	
	if (tickCounter % 5 === 0) createBullet(mouseX, mouseY);
	if (tickCounter % 10 === 0) createEnemy();
	
	for (let index = 0; index < bullets.length; index++) {
	  const bullet = bullets[index];
		bullet.y -= bSpeed;
		if (bullet.y < 0){
				bullets.splice(index, 1);
			  index -= 1;
			  continue;
	  }
		
		// hit detection
		let hitFlag = false;
		for (let eIndex = 0;  eIndex < enemys.length; eIndex++) {
			const enemy = enemys[eIndex];
			if (
				Math.abs(bullet.x - enemy.x) < (eWidth) &&
				Math.abs(bullet.y - enemy.y) < (eHeight)
			){
				hitFlag = true;
				enemys.splice(eIndex, 1);
			  eIndex -= 1;
				createEnemy();
				fill(255, 0 , 0);
		    ellipse(bullet.x, bullet.y, 50, 50);
				score += 100;
			  break;
		   }
		}
		
		if (hitFlag === true) {
		    bullets.splice(index, 1);
			  index -= 1;
			  continue;
		}
		
		fill(255);
		ellipse(bullet.x, bullet.y, bWidth, bHeight);
	}
	
	for (let eIndex = 0;  eIndex < enemys.length; eIndex++) {
		const enemy = enemys[eIndex];
		enemy.x += enemy.moveX;
		enemy.y += enemy.moveY;
		if (enemy.x < 0 || enemy.x > windowWidth || enemy.y > windowHeight) {
			enemys.splice(eIndex, 1);
			eIndex -= 1;
			continue;
		}
		fill(enemy.colorR, enemy.colorG, enemy.colorB);
		ellipse(enemy.x, enemy.y, eWidth, eHeight);
	}
	
	// Replace ellipse with the player's image
	image(playerImg, mouseX - 50, mouseY - 20, 100, 160);  // Adjust size and position
	
	fill(255, 0, 0);
	textSize(30);
	text(`score: ${score}`, 0, 50);
	
	tickCounter = (tickCounter + 1)  % 10000;
}

function createBullet(mouseX, mouseY) {
  bullets.push({
		x: mouseX,
		y: mouseY
	});
}

function createEnemy() {
  const x = random(windowWidth);
	const moveX = random(-6, 6), moveY = random(1, 5);
	const colorR =  random(200,220), colorG =  random(200,220), colorB = random(200,220);
	enemys.push({
		x, y:0, moveX, moveY, colorR, colorG, colorB
	});
}
