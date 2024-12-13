//Lost and Found *ursula Shuixin Wang*	

//When we talk about “lost and found,” we recall our lost belongings and the places we lost them. In doing so, we reconstruct the appearance of the object and the space where it was misplaced. However, memory is not always precise: what we cherish remains vivid, while the surrounding environment and details blur together. Over time, different memories shift and blend, becoming an ambiguous, fluid mass.

//In this assignment, I created an animated poster using p5.js. Myles described his lost gold chain in great detail but only mentioned that he lost it in the backseat of a taxi. Thus, the poster clearly highlights the gold chain, while the backseat remains indistinct. The shifting, transforming image through the second function echoes the fluidity of memory over time.



let possible_img;
let possible_bg;
let possible_item;
let BPM;
let BPM2;
let BPM3;
let x1, y1, x2, y2;
let lastSwitchTime = 0; 
let switchInterval = 10000; 
let lastSecond; 

function setup() {
  createCanvas(400, 600);
  imageMode(CENTER);
  
  possible_img = ["bg222.png", "bg555.png"];
  possible_bg = ["background1a.png"];
  possible_item = ["item3333.png"];
  

  let pos2 = floor(random(possible_bg.length));
  BPM2 = loadImage(possible_bg[pos2]);

  
  BPM = loadImage(random(possible_img));
  
  BPM3 = loadImage(random(possible_item));

  
  x1 = random(200, 250);
  y1 = random(280, 340);
  x2 = random(180, 240);
  y2 = random(230, 310);
  x3 = random(180, 200);
  y3 = random(290, 300);
  lastSecond = second(); 
}

function draw() {
  background(255, 2);
  
 
  image(BPM2, 200, 300);

  
  let currentSecond = second();
  let currentTime = millis();

  
  if (currentSecond !== lastSecond) {
  
    x1 = random(200, 250);
    y1 = random(280, 340);
    x2 = random(180, 240);
    y2 = random(230, 310);
    x3 = random(180, 200);
    y3 = random(290, 300);
    
    lastSecond = currentSecond; 
  }

  
  if (currentTime - lastSwitchTime > switchInterval) {
   
    BPM = loadImage(random(possible_img));
    
 
    lastSwitchTime = currentTime;
  }


  image(BPM, x1, y1, 315, 472.5);
  image(BPM, x2, y2, 315, 472.5);
  image(BPM3, x3, y3, 400, 600);
}
