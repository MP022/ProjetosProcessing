let x, y;
let vx, vy;

function setup() {
  x = 0;
  y = 0;
  vx = 5;
  vy = 5;
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  //circCorre();
  rectDVD();
}

function rectDVD(){
  fill(255);
  rect(x, y, 20, 20);
  fill(255,0,0);
  rect(windowWidth-x-20, y, 20, 20);
  
  if (x>=windowWidth-20||x<=-1) {
    vx*=-1;
  }
  
  if (y>=windowHeight-20||y<=-1) {
    vy*=-1;
  }
  
  x+=vx;
  y+=vy;
}

function circCorre(){
  background(0);
  ellipse(x, y, 40);
  fill(0, 0, 255);
  if (x>=windowWidth-20 && y<=20) {
    vx=0;
    vy=5;
  }
  if (y>=windowHeight-20 && x>=windowWidth-20) {
    vx=-5;
    vy=0;
  }
  if (x<=20&&y>=windowHeight-20) {
    vx=0;
    vy=-5;
  }
  if (y<=20&&x<=20) {
    vx=5;
    vy=0;
  }
  x+=vx;
  y+=vy;
}