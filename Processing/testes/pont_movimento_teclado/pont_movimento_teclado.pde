PFont f;
ponto player = new ponto(0,0);
ponto comida = new ponto((int)random(640), (int)random(360));

void setup(){
  size(640,360);
  player.x = width/2;
  player.y = height/2;
  f = createFont("Dejavu Sans",16,true);
  //print(PFont.list());
}

void draw(){
  background(50);
  
  if(player.verificaColisao(player, comida) && !(player.tam >= 1010)){
    comida.x = (int)random(640);
    comida.y = (int)random(360);
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

void keyPressed(){
  switch(keyCode){
    case UP:
      player.y = player.y - player.vel;
      break;
    case DOWN:
      player.y = player.y + player.vel;
      break;
    case LEFT:
      player.x = player.x - player.vel;
      break;
    case RIGHT:
      player.x = player.x + player.vel;
      break;
    default:
      break;
  }
}
