let grain_tex;
let MIN_GRID_SIZE = 5;
let GRID_SIZE_W;
let GRID_SIZE_H;


function r_color() {
  let vs = [random(0, 200), random(0, 200), 0];
  shuffle(vs);
  return color(...vs);
}


let color1, color2, color3, color4;

let differenceLayer; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); 

  let ratio = width / height;

 
  if (width > height) {
    GRID_SIZE_W = MIN_GRID_SIZE * ratio;
    GRID_SIZE_H = MIN_GRID_SIZE;
  } else {
    GRID_SIZE_W = MIN_GRID_SIZE;
    GRID_SIZE_H = MIN_GRID_SIZE / ratio;
  }


  grain_tex = createGraphics(width, height);
  grain_tex.loadPixels();
  for (let x = 0; x < width; x += 1) {
    for (let y = 0; y < height; y += 1) {
      if (y % 5 == 0) {
        continue;
      }
      let offset_scale = 5;
      let main = random(offset_scale, 20);
      let idx = (x + y * width) * 4;
      grain_tex.pixels[idx] = main - random(offset_scale);
      grain_tex.pixels[idx + 1] = main - random(offset_scale);
      grain_tex.pixels[idx + 2] = main - random(offset_scale);
      grain_tex.pixels[idx + 3] = 255;
    }
  }
  grain_tex.updatePixels();


  color1 = r_color();
  color2 = r_color();
  color3 = r_color();
  color4 = r_color();

  
  differenceLayer = createGraphics(width, height);
  differenceLayer.angleMode(DEGREES);
}

function draw() {

  blendMode(BLEND);
  background(240);


  stroke(0);
  strokeWeight(0.5);
  for (let i = 1; i < GRID_SIZE_W; i += 1) {
    line(i * width / GRID_SIZE_W, 0, i * width / GRID_SIZE_W, height);
  }
  for (let j = 1; j < GRID_SIZE_H; j += 1) {
    line(0, j * height / GRID_SIZE_H, width, j * height / GRID_SIZE_H);
  }

  
  let s = second() + millis() / 1000; 
  let s2 = second() / 2 + millis() / 500;
  let m = minute() + s / 60;
  let h = hour() % 12 + m / 60; 


  let d = new Date();
  let month = d.getMonth() + d.getDate() / 31; 

  
  let angle5 = map(month, 0, 12, 0, 360);

 
  let color5;
  if (month >= 11 || month < 2) { // 12月 (11), 1月 (0), 2月 (1)
    color5 = color(0, 0, 255); 
  } else if (month >= 2 && month < 5) { // 3月 (2), 4月 (3), 5月 (4)
    color5 = color(167, 99, 233); 
  } else if (month >= 5 && month < 8) { // 6月 (5), 7月 (6), 8月 (7)
    color5 = color(255, 0, 0);
  } else if (month >= 8 && month < 11) { // 9月 (8), 10月 (9), 11月 (10)
    color5 = color(127, 159, 206); 
  } else {
    color5 = color(0); 
  }

  /////////////////////////////////////
  push();
  translate(width / 2, height / 2);

  /////////////////////////////////////
  let outerRadius1 = 150;
  let innerRadius1 = 100;
  let startAngle1 = 0;
  let endAngle1 = 60;

  let angle1 = map(s, 0, 60, 0, 360);

  push();
  rotate(angle1);
  fill(color1);
  noStroke();
  drawArc(outerRadius1, innerRadius1, startAngle1, endAngle1);
  pop();

  /////////////////////////////////////
  let outerRadius2 = 210;
  let innerRadius2 = 160;
  let startAngle2 = 0;
  let endAngle2 = 120;

  let angle2 = map(h, 0, 12, 0, 360);

  push();
  rotate(angle2);
  fill(color2);
  noStroke();
  drawArc(outerRadius2, innerRadius2, startAngle2, endAngle2);
  pop();

   /////////////////////////////////////
  let outerRadius3 = 180;
  let innerRadius3 = 110;
  let startAngle3 = 30;
  let endAngle3 = 120;

  let angle3 = map(m, 0, 60, 0, 360);

  push();
  rotate(angle3);
  fill(color3);
  noStroke();
  drawArc(outerRadius3, innerRadius3, startAngle3, endAngle3);
  pop();

  /////////////////////////////////////
  let outerRadius4 = 230;
  let innerRadius4 = 200;
  let startAngle4 = 30;
  let endAngle4 = 360;

  let angle4 = map(s2 * 0.5, 0, 60, 0, 360);

  push();
  rotate(angle4);
  fill(color4);
  noStroke();
  drawArc(outerRadius4, innerRadius4, startAngle4, endAngle4);
  pop();

  pop(); 

    /////////////////////////////////////
  differenceLayer.clear(); 
  differenceLayer.push();
  differenceLayer.translate(width / 2, height / 2);
  differenceLayer.rotate(angle5);
  differenceLayer.fill(color5);
  differenceLayer.noStroke();
  drawArcOnLayer(differenceLayer, outerRadius5 = 330, innerRadius5 = 310, startAngle5 = 0, endAngle5 = 350);
  differenceLayer.pop();

    /////////////////////////////////////
  blendMode(DIFFERENCE);
  image(differenceLayer, 0, 0);

/////////////////////////////////////
  push();
  translate(width / 2, height / 2);

  
  let outerRadius6 = 280;
  let innerRadius6 = 220;
  let startAngle6 = 0;
  let endAngle6 = 180;

  let angle6 = map(m, 0, 60, 0, 360);

  push();
  rotate(angle6);
  fill(255); 
  noStroke();
  drawArc(outerRadius6, innerRadius6, startAngle6, endAngle6);
  pop();

/////////////////////////////////////）
  let outerRadius7 = 280;
  let innerRadius7 = 160;
  let startAngle7 = 0;
  let endAngle7 = 270;

  let angle7 = map(s * 0.3, 0, 60, 0, 360);

  push();
  rotate(angle7);
  fill(255);
  noStroke();
  drawArc(outerRadius7, innerRadius7, startAngle7, endAngle7);
  pop();

  pop(); 


  image(grain_tex,0,0, width, height*4);
  blendMode(BLEND);

}


function drawArc(outerRadius, innerRadius, startAngle, endAngle) {
  beginShape();
  for (let angle = startAngle; angle <= endAngle; angle++) {
    let x = cos(angle) * outerRadius;
    let y = sin(angle) * outerRadius;
    vertex(x, y);
  }
  for (let angle = endAngle; angle >= startAngle; angle--) {
    let x = cos(angle) * innerRadius;
    let y = sin(angle) * innerRadius;
    vertex(x, y);
  }
  endShape(CLOSE);
}


function drawArcOnLayer(layer, outerRadius, innerRadius, startAngle, endAngle) {
  layer.beginShape();
  for (let angle = startAngle; angle <= endAngle; angle++) {
    let x = cos(angle) * outerRadius;
    let y = sin(angle) * outerRadius;
    layer.vertex(x, y);
  }
  for (let angle = endAngle; angle >= startAngle; angle--) {
    let x = cos(angle) * innerRadius;
    let y = sin(angle) * innerRadius;
    layer.vertex(x, y);
  }
  layer.endShape(CLOSE);
}
