class ponto{
  int x;
  int y;
  int tam;
  int vel;
  
  ponto(int x, int y){
    this.x = x;
    this.y = y;
    this.tam = 10;
    this.vel = 5;
  }
  
  void desenha(){
    ellipse(this.x, this.y, this.tam, this.tam);
  }
  
  boolean verificaColisao(ponto o, ponto c){
    if(dist(o.x, o.y, c.x, c.y) < o.tam/2){
      return true;
    }
    return false;
  }
}
