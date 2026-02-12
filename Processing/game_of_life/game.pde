class gameOfLife{
  boolean gradInf;
  int quantCeLin, quantCeCol;
  celula celulas[][];
  
  gameOfLife(){}
  
  gameOfLife(int quantCeLin, int quantCeCol){
    this.gradInf = true;
    this.quantCeLin = quantCeLin;
    this.quantCeCol = quantCeCol;
    this.celulas = new celula[quantCeLin][quantCeCol];
     
    for(int i = 0; i < quantCeLin; i++){
      for(int j = 0; j < quantCeCol; j++){
        celulas[i][j] = new celula(i*20+2, j*20+2);
      }
    }
  }
  
  int atualizaEstadoCelula(int i, int j){
    int k = 0;
    
    if(j>=1){
      if(i>=1){
        if(celulas[i-1][j-1].vivo==true){
          k++;
        }
      }else if(gradInf){
        if(celulas[this.quantCeLin-1][j-1].vivo==true){
          k++;
        }
      }
      if(celulas[i][j-1].vivo){
        k++;
      }
      if(i<=this.quantCeLin-2){
        if(celulas[i+1][j-1].vivo){
          k++;
        }
      }else if(gradInf){
        if(celulas[0][j-1].vivo){
          k++;
        }
      }
    }else if(gradInf){
      if(i>=1){
        if(celulas[i-1][this.quantCeCol-1].vivo==true){
          k++;
        }
      }else if(gradInf){
        if(celulas[this.quantCeLin-1][this.quantCeCol-1].vivo==true){
          k++;
        }
      }
      if(celulas[i][this.quantCeCol-1].vivo){
        k++;
      }
      if(i<=this.quantCeLin-2){
        if(celulas[i+1][this.quantCeCol-1].vivo){
          k++;
        }
      }else if(gradInf){
        if(celulas[0][this.quantCeCol-1].vivo){
          k++;
        }
      }
    }
    
    if(i>=1){
      if(celulas[i-1][j].vivo){
        k++;
      }
    }else if(gradInf){
      if(celulas[this.quantCeLin-1][j].vivo){
        k++;
      }
    }
    if(i<=this.quantCeLin-2){
      if(celulas[i+1][j].vivo){
        k++;
      }
    }else if(gradInf){
      if(celulas[0][j].vivo){
        k++;
      }
    }
    
    if(j<=this.quantCeCol-2){
      if(i>=1){
        if(celulas[i-1][j+1].vivo){
          k++;
        }
      }else if(gradInf){
        if(celulas[(this.quantCeLin-1)][j+1].vivo){
          k++;
        }
      }
      if(celulas[i][j+1].vivo){
        k++;
      }
      if(i<=this.quantCeLin-2){
        if(celulas[i+1][j+1].vivo){
          k++;
        }
      }else if(gradInf){
        if(celulas[0][j+1].vivo){
          k++;
        }
      }
    }else if(gradInf){
      if(i>=1){
        if(celulas[i-1][0].vivo){
          k++;
        }
      }else if(gradInf){
        if(celulas[this.quantCeLin-1][0].vivo){
          k++;
        }
      }
      if(celulas[i][0].vivo){
        k++;
      }
      if(i<=this.quantCeLin-2){
        if(celulas[i+1][0].vivo){
          k++;
        }
      }else if(gradInf){
        if(celulas[0][0].vivo){
          k++;
        }
      }
    }
    
    return k;
  }
  
  void proxPasso(){
    celula prox[][] = new celula[this.quantCeLin][this.quantCeCol];
    
    for(int i = 0; i < this.quantCeLin; i++){
      for(int j = 0; j < this.quantCeCol; j++){
        celulas[i][j].k = 0;
        prox[i][j] = new celula(celulas[i][j]);
      }
    }
    
    int k = 0;
    for(int i = 0; i < this.quantCeLin; i++){
      for(int j = 0; j < this.quantCeCol; j++){
        k = atualizaEstadoCelula(i, j);
        
        celulas[i][j].k = k;
        prox[i][j].k = k;
        
        if(celulas[i][j].vivo){
          if(k==3||k==2){
            prox[i][j].vivo = true;
          }else{
            prox[i][j].vivo = false;
          }
        }else{
          if(k==3)
            prox[i][j].vivo = true;
        }
        k = 0;
      }
    }
    
    celulas = prox;
  }
  
  void desenhaCelulas(){
    for(int i = 0; i < this.quantCeLin; i++){
      for(int j = 0; j < this.quantCeCol; j++){
        celulas[i][j].desenha();
      }
    }
  }
  
  void nasceCelula(int x, int y){
    celulas[x][y].vivo = true; 
  }
  
  void mataCelula(int x, int y){
    celulas[x][y].vivo = false;
  }
  
  boolean taViva(int x, int y){
    return celulas[x][y].vivo;
  }
}
