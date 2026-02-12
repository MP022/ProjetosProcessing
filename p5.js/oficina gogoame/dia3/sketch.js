let b, c = [];

let keyActive = [false, false, false, false];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  b = new Ponto(15, 15, 30, 5, new RGB(0, 255, 0));
  for (let i = 0; i < 100; i++) {
    c[i] = new Ponto(random(20, windowWidth-20), random(20, windowHeight-20), 20, 1);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < c.length; i++) {
    c[i].desenha();
    for (let j = 0; j < c.length; j++) {
      if(i!=j) c[i].colisao(c[j]);
    }
    c[i].colisao(b);
    c[i].mover();
  }
  b.desenha();
  b.andar();
}

class RGB{
  constructor(r = 255, g = 255, b = 255){
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

class Ponto{
  constructor(x = 5, y = 5, tam = 10, mag = 5, cor = new RGB()){
    this.x = x;
    this.y = y;
    this.tam = tam;
    this.mag = mag;
    this.cor = cor;
    this.vx = random(-5, 5);
    this.vy = random(-5, 5);
  }
  
  colisao(b){
    if (dist(b.x, b.y, this.x, this.y)<b.tam/2+this.tam/2) {
      this.vx*=-1;
      this.vy*=-1;
    }
  }
  
  mover(){
    if (this.x>windowWidth-this.tam/2||this.x<this.tam/2) {
      this.vx*=-1;
    }
    if (this.y>windowHeight-this.tam/2||this.y<this.tam/2) {
      this.vy*=-1;
    }
    
    this.x+=this.vx;
    this.y+=this.vy;
  }
  
  andar(){
    //UP_ARROW
    if (keyActive[0]&&(this.y>this.tam/2)) {this.y+=-this.mag;}
    
    //DOWN_ARROW
    if (keyActive[1]&&(this.y<windowHeight-this.tam/2)) {this.y+=this.mag;}
    
    //LEFT_ARROW
    if (keyActive[2]&&(this.x>this.tam/2)) {this.x+=-this.mag;}
    
    //RIGHT_ARROW
    if (keyActive[3]&&(this.x<windowWidth-this.tam/2)) {this.x+=this.mag;}
  }
  
  desenha(){
    fill(this.cor.r, this.cor.g, this.cor.b);
    ellipse(this.x, this.y, this.tam);
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