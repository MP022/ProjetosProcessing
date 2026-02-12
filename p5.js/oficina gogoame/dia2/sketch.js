let bt = 30;
let bx = bt/2;
let by = bt/2;
let bm = 5;

let ct = 20;
let cx;
let cy;
let cm = 5;

let keyActive = [false, false, false, false];

function setup() {
  cx = random(ct, windowWidth/2);
  cy = random(ct, windowHeight/2);
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0);
  
  fill(255);
  ellipse(cx, cy, ct);
  
  fill(0, 255, 0);
  ellipse(bx, by, bt);
  
  if (dist(cx, cy, bx, by)<bt/2) {
    cx = random(bt/2, windowWidth-bt/2);
    cy = random(bt/2, windowHeight-bt/2);
    bt++;
  }
  
  //UP_ARROW
  if (keyActive[0]) {
    if (by>bt/2) {by+=-bm;}
  }
  
  
  //DOWN_ARROW
  if (keyActive[1]) {
    if (by<windowHeight-bt/2){by+=bm;}
  }
  
  
  //LEFT_ARROW
  if (keyActive[2]) {
    if (bx>bt/2) {bx+=-bm;}
  }
  
  
  //RIGHT_ARROW
  if (keyActive[3]) {
    if (bx<windowWidth-bt/2){bx+=bm;}
  }
}

function keyPressed(){
  switch(keyCode){
    case UP_ARROW:
      keyActive[0] = true;
      break;
    case DOWN_ARROW:
      keyActive[1] = true;
      break;
    case LEFT_ARROW:
      keyActive[2] = true;
      break;
    case RIGHT_ARROW:
      keyActive[3] = true;
      break;
    default:
      break;
  }
}

function keyReleased(){
  switch(keyCode){
    case UP_ARROW:
      keyActive[0] = false;
      break;
    case DOWN_ARROW:
      keyActive[1] = false;
      break;
    case LEFT_ARROW:
      keyActive[2] = false;
      break;
    case RIGHT_ARROW:
      keyActive[3] = false;
      break;
    default:
      break;
  }
}