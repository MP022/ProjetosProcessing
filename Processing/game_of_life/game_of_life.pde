boolean ini;
int quantCeLin, quantCeCol, FR;
gameOfLife game;

void setup(){
  //as dimensões da tela devem ser sempre iguais e serem multiplos de 20 mais 2.
  size(1362, 642);
  background(125);

  quantCeLin = (width  - 2)/20;
  quantCeCol = (height - 2)/20;
    
  ini = false;
  game = new gameOfLife(quantCeLin, quantCeCol);
  FR = 5;
}

void draw(){
  game.desenhaCelulas();
  
  if(ini){
    game.proxPasso();
  }
}

void mousePressed(){
  if(!ini)
    if(game.taViva((int)map(mouseX,0,600,0,30), (int)map(mouseY,0,600,0,30)))
      game.mataCelula((int)map(mouseX,0,600,0,30), (int)map(mouseY,0,600,0,30));
    else
      game.nasceCelula((int)map(mouseX,0,600,0,30), (int)map(mouseY,0,600,0,30));
}

void keyPressed(){
  switch(keyCode){
    case ENTER:
      if(!ini){
        ini = true;
        frameRate(FR);
      }else{
        ini = false;
        frameRate(30);
      }
      break;
    case RIGHT:
      game.proxPasso();
      break;
    case DOWN:
      game.gradInf = !game.gradInf;
      break;
    default:
      break;
  }
  
  switch(key){
    case '+':
      FR++;
      println(FR);
      frameRate(FR);
      break;
    case '-':
      if(FR > 1){
        FR--;
        println(FR);
        frameRate(FR);
      }
      break;
    default:
      break;
  } 
}
