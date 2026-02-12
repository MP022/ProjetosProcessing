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