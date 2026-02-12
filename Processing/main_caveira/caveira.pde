class caveira {
  int x, y;
  color cor;

  caveira() {
  }

  caveira(int x, int y, color cor) {
    this.x = x;
    this.y = y;
    this.cor = cor;
  }
  
  void desenhaCaveiradeCaveiradeCaveira() {
    int xold, yold;
    color corold;
    xold = this. x;
    yold = this. y;
    corold = this.cor;
    
    //1° linha
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 6;
    this.desenhaCaveiradeCaveira();
    
    this.y += 81 * 1;
    //2° linha
    this.x = xold;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 2;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 2;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    
    this.y += 81 * 1;
    //3° linha
    this.x = xold + 81 * 2;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    
    this.y += 81 * 1;
    //4° linha
    this.x = xold + 81 * 2;
    this.desenhaCaveiradeCaveira();
    this.cor = 255;
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    this.cor = corold;
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    this.cor = 255;
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    this.cor = corold;
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    
    this.y += 81 * 1;
    //5° linha
    this.x = xold + 81 * 2;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    
    this.y += 81 * 1;
    //6° linha
    this.x = xold + 81 * 3;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    
    this.y += 81 * 1;
    //7° linha
    this.x = xold + 81 * 2;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 4;
    this.desenhaCaveiradeCaveira();
    
    this.y += 81 * 1;
    //8° linha
    this.x = xold;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 6;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 1;
    this.desenhaCaveiradeCaveira();
    
    this.y += 81 * 1;
    //9° linha
    this.x = xold + 81 * 1;
    this.desenhaCaveiradeCaveira();
    this.x += 81 * 6;
    this.desenhaCaveiradeCaveira();
    
    this.x = xold;
    this.y = yold;
  }

  void desenhaCaveiradeCaveira() {
    int xold, yold;
    color corold;
    xold = this. x;
    yold = this. y;
    corold = this.cor;
    
    //1° linha
    this.x += 9 * 1;
    this.desenhaCaveira();
    this.x += 9 * 6;
    this.desenhaCaveira();
    
    this.y += 9 * 1;
    //2° linha
    this.x = xold;
    this.desenhaCaveira();
    this.x += 9 * 1;
    this.desenhaCaveira();
    this.x += 9 * 2;
    this.desenhaCaveira();
    this.x += 9 * 1;
    this.desenhaCaveira();
    this.x += 9 * 1;
    this.desenhaCaveira();
    this.x += 9 * 2;
    this.desenhaCaveira();
    this.x += 9 * 1;
    this.desenhaCaveira();
    
    this.y += 9 * 1;
    //3° linha
    this.x = xold + 9 * 2;
    this.desenhaCaveira();
    this.x += 9 * 1;
    this.desenhaCaveira();
    this.x += 9 * 1;
    this.desenhaCaveira();
    this.x += 9 * 1;
    this.desenhaCaveira();
    this.x += 9 * 1;
    this.desenhaCaveira();
    
    this.y += 9 * 1;
    //4° linha
    this.x = xold + 9 * 2;
    this.desenhaCaveira();
    this.cor = 255;
    this.x += 9 * 1;
    this.desenhaCaveira();
    this.cor = corold;
    this.x += 9 * 1;
    this.desenhaCaveira();
    this.cor = 255;
    this.x += 9 * 1;
    this.desenhaCaveira();
    this.cor = corold;
    this.x += 9 * 1;
    this.desenhaCaveira();
    
    this.y += 9 * 1;
    //5° linha
    this.x = xold + 9 * 2;
    this.desenhaCaveira();
    this.x += 9 * 1;
    this.desenhaCaveira();
    this.x += 9 * 1;
    this.desenhaCaveira();
    this.x += 9 * 1;
    this.desenhaCaveira();
    this.x += 9 * 1;
    this.desenhaCaveira();
    
    this.y += 9 * 1;
    //6° linha
    this.x = xold + 9 * 3;
    this.desenhaCaveira();
    this.x += 9 * 1;
    this.desenhaCaveira();
    this.x += 9 * 1;
    this.desenhaCaveira();
    
    this.y += 9 * 1;
    //7° linha
    this.x = xold + 9 * 2;
    this.desenhaCaveira();
    this.x += 9 * 4;
    this.desenhaCaveira();
    
    this.y += 9 * 1;
    //8° linha
    this.x = xold;
    this.desenhaCaveira();
    this.x += 9 * 1;
    this.desenhaCaveira();
    this.x += 9 * 6;
    this.desenhaCaveira();
    this.x += 9 * 1;
    this.desenhaCaveira();
    
    this.y += 9 * 1;
    //9° linha
    this.x = xold + 9 * 1;
    this.desenhaCaveira();
    this.x += 9 * 6;
    this.desenhaCaveira();
    
    this.x = xold;
    this.y = yold;
  }

  void desenhaCaveira() {
    stroke(cor);
    
    //1° linha
    point(x + 1, y + 0);
    point(x + 7, y + 0);
    //2° linha
    point(x + 0, y + 1);
    point(x + 1, y + 1);
    point(x + 3, y + 1);
    point(x + 4, y + 1);
    point(x + 5, y + 1);
    point(x + 7, y + 1);
    point(x + 8, y + 1);
    //3° linha
    point(x + 2, y + 2);
    point(x + 3, y + 2);
    point(x + 4, y + 2);
    point(x + 5, y + 2);
    point(x + 6, y + 2);
    //4° linha
    point(x + 2, y + 3);
    stroke(255);
    point(x + 3, y + 3);
    stroke(cor);
    point(x + 4, y + 3);
    stroke(255);
    point(x + 5, y + 3);
    stroke(cor);
    point(x + 6, y + 3);
    //5° linha
    point(x + 2, y + 4);
    point(x + 3, y + 4);
    point(x + 4, y + 4);
    point(x + 5, y + 4);
    point(x + 6, y + 4);
    //6° linha
    point(x + 3, y + 5);
    point(x + 4, y + 5);
    point(x + 5, y + 5);
    //7° linha
    point(x + 2, y + 6);
    point(x + 6, y + 6);
    //8° linha
    point(x + 0, y + 7);
    point(x + 1, y + 7);
    point(x + 7, y + 7);
    point(x + 8, y + 7);
    //9° linha
    point(x + 1, y + 8);
    point(x + 7, y + 8);
  }
}
