int squareSize;

void setup(){
  size(640, 360);
  
  // Ter o background no setup faz com que o fundo não seja atualizado
  background(50);
  squareSize = 25;
  
  // Aumenta o frame rate pra diminuir o espaço entre os quadrados
  frameRate(200);
}

void draw(){
  // Define a cor do retangulo apartir da posiçao do mouse
  //fill(255 * (1 - (mouseX*100.0/width)/100.0), 0, 255 * ((mouseX*100.0/width)/100.0));
  //stroke(255 * (1 - (mouseX*100.0/width)/100.0), 0, 255 * ((mouseX*100.0/width)/100.0));
  
  fill(map(mouseX,0,width,255,0), 0, map(mouseX,0,width,0,255));
  stroke(map(mouseX,0,width,255,0), 0, map(mouseX,0,width,0,255));

  
  // Define a posição do quadrado no meio do mouse
  rect(mouseX - squareSize/2, mouseY - squareSize/2, squareSize, squareSize);
}
