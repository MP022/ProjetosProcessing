let f;
let player;
let comida;

function setup(){
  createCanvas(640,360);
  player = new ponto(0,0);
  comida = new ponto(random(640), random(360));
  player.x = width/2;
  player.y = height/2;
  f = loadFont('./font/dejavu-sans-webfont.ttf');
  //print(PFont.list());
}

function draw(){
  background(50);
  
  if(player.verificaColisao(player, comida) && !(player.tam >= 1010)){
    comida.x = random(640);
    comida.y = random(360);
    player.tam = player.tam + 10;
  }
  
  stroke(0, 255, 0);
  fill(0, 255, 0);
  comida.desenha();
  stroke(255, 0, 0);
  fill(255, 0, 0);
  player.desenha();
  
  textFont(f,16);
  fill(255);
  text((player.tam-10)/10,5,20);
}

function keyPressed(){
  switch(keyCode){
    case UP_ARROW:
      player.y = player.y - player.vel;
      break;
    case DOWN_ARROW:
      player.y = player.y + player.vel;
      break;
    case LEFT_ARROW:
      player.x = player.x - player.vel;
      break;
    case RIGHT_ARROW:
      player.x = player.x + player.vel;
      break;
    default:
      break;
  }
}

class ponto{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.tam = 10;
    this.vel = 5;
  }
  
  desenha(){
    ellipse(this.x, this.y, this.tam, this.tam);
  }
  
  verificaColisao(o, c){
    if(dist(o.x, o.y, c.x, c.y) < o.tam/2){
      return true;
    }
    return false;
  }
}