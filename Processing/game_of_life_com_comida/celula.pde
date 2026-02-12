class celula{
  PFont textk;
  int x, y, k, comida, tam;
  boolean vivo;
  
  celula(){}
  
  celula(int x, int y){
    this.x = x;
    this.y = y;
    this.k = 0;
    this.comida = 0;
    this.tam = 18;
    this.vivo = false;
    textk = createFont("Dejavu Sans",16,true);
  }
  
  celula(celula c){
    this.x = c.x;
    this.y = c.y;
    this.k = c.k;
    this.comida = c.comida;
    this.tam = c.tam;
    this.vivo = c.vivo;
    textk = createFont("Dejavu Sans",16,true);
  }

  void desenha(){
    noStroke();
    if(!vivo){
      fill(0);
    }else{
      fill(255);
    }
    rect(this.x, this.y, this.tam, this.tam);
    textFont(textk,16);
    if(this.vivo)
      fill(0);
    else
      fill(255);
    text(this.comida,this.x+this.tam/4,this.y+this.tam/1.25);
  }
}
