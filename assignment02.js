
let grain_tex;
const MIN_GRID_SIZE = 5;
let GRID_SIZE_W;
let GRID_SIZE_H;
let SIZE;


const r_color = () => {
  let vs = [random(255, 255), random(200, 255), 250]; // [255, random(200,255), 250]
  shuffle(vs, true); 
  return color(...vs);
}

// colors
let centralCircleColor;
let square1Color;
let square2Color;
let eye1Color;
let eye2Color;
let bgRect1Color;
let bgRect2Color;

function setup() {
  createCanvas(600, 600); 
  
  // texture
  grain_tex = createImage(width, height);
  grain_tex.loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (y % 5 === 0) {
        continue; 
      }
      let offset_scale = 5;
      let main = random(offset_scale, 20);
      grain_tex.pixels[(x + y * width) * 4] = main - random(offset_scale);     
      grain_tex.pixels[(x + y * width) * 4 + 1] = main - random(offset_scale);
      grain_tex.pixels[(x + y * width) * 4 + 2] = main - random(offset_scale); 
      grain_tex.pixels[(x + y * width) * 4 + 3] = 255;                        
    }
  }
  grain_tex.updatePixels();

  
  let ratio = width / height;
  if (width > height) {
    GRID_SIZE_W = MIN_GRID_SIZE * ratio;
    GRID_SIZE_H = MIN_GRID_SIZE;
    SIZE = height / (MIN_GRID_SIZE + 1) * 2;
  } else {
    GRID_SIZE_W = MIN_GRID_SIZE;
    GRID_SIZE_H = MIN_GRID_SIZE / ratio;
    SIZE = width / (MIN_GRID_SIZE + 1) * 2;
  }

  // color arrangement
  centralCircleColor = r_color();
  square1Color = r_color();
  square2Color = r_color();
  eye1Color = r_color();
  eye2Color = r_color();
  bgRect1Color = r_color();
  bgRect2Color = r_color();

  background(240);
}

function draw() {
  background(240); 

  // grid
  stroke(0);
  strokeWeight(0.5);
  for (let i = 1; i < GRID_SIZE_W; i++) {
    line(i * width / GRID_SIZE_W, 0, i * width / GRID_SIZE_W, height);
  }
  for (let j = 1; j < GRID_SIZE_H; j++) {
    line(0, j * height / GRID_SIZE_H, width, j * height / GRID_SIZE_H);
  }

  
  blendMode(DIFFERENCE);

  rectMode(CENTER);
  
  let dynamicDiameter = map(mouseX, 0, width, 300, 325);
  dynamicDiameter = constrain(dynamicDiameter, 100, 400); 
  
 
  fill(centralCircleColor);
  noStroke();
  circle(width / 2, height / 2, dynamicDiameter); 

  
  push(); 
  let deltaY = map(mouseY, 0, height, 0, -50);
  translate(0, deltaY); 
  stroke(255, 255, 255);
  strokeWeight(8);
  fill(square1Color); 
  rect(235, 270, 50, 50); 
  noStroke();
  pop(); 

//eye-1
  fill(eye1Color);
  circle(235, 270, 30);
  noFill();

//eye-2
 
  fill(eye2Color); 
  circle(350, 270, 60);

//eye-2-circle
  let eye2 = map(mouseX+mouseY, 0, width, 80, 270)
  eye2 = constrain(eye2, 80, 270);
  fill(eye1Color);
  circle(350, eye2, 30);
  noFill();

//eye-2-arc
  push(); 
  
  // let arcY = 270 + 60 / 2 + 10; 
 // let arcY = 270; 
  let arcY = map(mouseX+mouseY, 0, width, 270, 270 + 60 / 2 + 10);
  arcY = constrain(arcY, 270, 270 + 60 / 2 + 10); 
  noFill(); 
  stroke(255); 
  strokeWeight(8); 
  
  arc(350, arcY, 55, 55, 0, PI); 
  pop(); 

//nose
  fill(square1Color);
  rect(293, 230, 9, 250);

//BG-1RECT-MOVE
  let dynamicBgWidth = map(mouseX + mouseY, 0, width + height, 200, 650);
  dynamicBgWidth = constrain(dynamicBgWidth, 200, 650);

//BG-1-RECT
  fill(bgRect1Color); 
  rectMode(CENTER);
  rect(80, 90, dynamicBgWidth, dynamicBgWidth - 110); 

//BG-2-RECT-move
  let dynamicBg2Height = map(mouseX + mouseY, 0, width + height, 10, 100);
  dynamicBg2Height = constrain(dynamicBg2Height, 10, 100);
  
//BG-2-RECT
  rectMode(CORNER);
  stroke(255, 255, 255);
  strokeWeight(8);
  fill(bgRect2Color); 
  rect(280, 380, 30, dynamicBg2Height);

//blendmode
  blendMode(BLEND);

//texture
  blendMode(DIFFERENCE);
  image(grain_tex, 0, 0, width, height);


  blendMode(BLEND);
}


// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//   setup(); 
// }
