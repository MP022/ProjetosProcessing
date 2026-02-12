let ini;
let game;

function setup(){
  ini = false;
  createCanvas(windowWidth, windowHeight);
  background(0);

  let x = y = 1;
  let quantCeLin = 20;
  let quantCeCol = parseInt(windowHeight/(windowWidth/quantCeLin));
  game = new GameOfLife(quantCeLin, quantCeCol, width, height);
  game.proxPasso();
}

function draw(){
  game.desenhaCelulas();
  
  if (ini) {
    game.proxPasso();
  }
}

function mousePressed(){
  if(!ini){
    if(game.taViva(parseInt(map(mouseX,0,600,0,30)), parseInt(map(mouseY,0,600,0,30)))){
      game.mataCelula(parseInt(map(mouseX,0,600,0,30)), parseInt(map(mouseY,0,600,0,30)));
    }else{
      game.nasceCelula(parseInt(map(mouseX,0,600,0,30)), parseInt(map(mouseY,0,600,0,30)));
    }
  }
}

function keyPressed(){
  switch(keyCode){
    case ENTER:
      if(!ini){
        ini = true;
      }else{
        ini = false;
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
}

class GameOfLife{
  constructor(quantCeLin, quantCeCol, larguraTela, alturaTela){
    this.gradInf = true;
    this.quantCeLin = quantCeLin;
    this.quantCeCol = quantCeCol;
    this.cels = [];
    
    let x = y = 0;
    let tamX = parseInt(larguraTela/quantCeLin);
    let tamY = parseInt(alturaTela/quantCeCol);
    
    for(let i = 0; i < quantCeLin; i++){
      this.cels[i] = [];
      for(let j = 0; j < quantCeCol; j++){
        this.cels[i][j] = new Celula(x, y, tamX, tamY);
        x += tamX;
      }
      x = 0;
      y += tamY;
    }
  }
  
  proxPasso(){
    let celsAux = this.cels;
    
    for (let i = 0; i < this.cels.length; i++) {
      for (let j = 0; j < this.cels[i].length; j++) {
        this.cels[i][j].k = 0;
      }
    }
    
    let k = 0;
    for (let i = 0; i < this.cels.length; i++) {
      for (let j = 0; j < this.cels[i].length; j++) {
        k = this.atualizaEstadoCelula(i, j);
        
        this.cels[i][j].k = k;
        celsAux[i][j].k = k;
        if(this.cels[i][j].vivo){
          if(k==3||k==2){
            celsAux[i][j].vivo = true;
          }else{
            celsAux[i][j].vivo = false;
          }
        }else{
          if(k==3)
            celsAux[i][j].vivo = true;
        }
        k = 0;
      }
    }
    
    this.cels = celsAux;
  }
  
  atualizaEstadoCelula(i, j){
    let k = 0;
    
    if(j>=1){
      if(i>=1){
        if(this.cels[i-1][j-1].vivo==true){
          k++;
        }
      }else if(this.gradInf){
        if(this.cels[this.quantCeLin-1][j-1].vivo==true){
          k++;
        }
      }
      if(this.cels[i][j-1].vivo){
        k++;
      }
      if(i<=this.quantCeLin-2){
        if(this.cels[i+1][j-1].vivo){
          k++;
        }
      }else if(this.gradInf){
        if(this.cels[0][j-1].vivo){
          k++;
        }
      }
    }else if(this.gradInf){
      if(i>=1){
        if(this.cels[i-1][this.quantCeCol-1].vivo==true){
          k++;
        }
      }else if(this.gradInf){
        if(this.cels[this.quantCeLin-1][this.quantCeCol-1].vivo==true){
          k++;
        }
      }
      if(this.cels[i][this.quantCeCol-1].vivo){
        k++;
      }
      if(i<=this.quantCeLin-2){
        if(this.cels[i+1][this.quantCeCol-1].vivo){
          k++;
        }
      }else if(this.gradInf){
        if(this.cels[0][this.quantCeCol-1].vivo){
          k++;
        }
      }
    }
    
    if(i>=1){
      if(this.cels[i-1][j].vivo){
        k++;
      }
    }else if(this.gradInf){
      if(this.cels[this.quantCeLin-1][j].vivo){
        k++;
      }
    }
    if(i<=this.quantCeLin-2){
      if(this.cels[i+1][j].vivo){
        k++;
      }
    }else if(this.gradInf){
      if(this.cels[0][j].vivo){
        k++;
      }
    }
    
    if(j<=this.quantCeCol-2){
      if(i>=1){
        if(this.cels[i-1][j+1].vivo){
          k++;
        }
      }else if(this.gradInf){
        if(this.cels[(this.quantCeLin-1)][j+1].vivo){
          k++;
        }
      }
      if(this.cels[i][j+1].vivo){
        k++;
      }
      if(i<=this.quantCeLin-2){
        if(this.cels[i+1][j+1].vivo){
          k++;
        }
      }else if(this.gradInf){
        if(this.cels[0][j+1].vivo){
          k++;
        }
      }
    }else if(this.gradInf){
      if(i>=1){
        if(this.cels[i-1][0].vivo){
          k++;
        }
      }else if(this.gradInf){
        if(this.cels[this.quantCeLin-1][0].vivo){
          k++;
        }
      }
      if(this.cels[i][0].vivo){
        k++;
      }
      if(i<=this.quantCeLin-2){
        if(this.cels[i+1][0].vivo){
          k++;
        }
      }else if(this.gradInf){
        if(this.cels[0][0].vivo){
          k++;
        }
      }
    }
    
    return k;
  }
  
  desenhaCelulas(){
    for (let i = 0; i < this.cels.length; i++) {
      for (let j = 0; j < this.cels[i].length; j++) {
        this.cels[i][j].desenha();
      }
    }
  }
  
  nasceCelula(x, y){
    this.cels[x][y].vivo = true; 
  }
  
  mataCelula(x, y){
    this.cels[x][y].vivo = false;
  }
  
  taViva(x, y){
    return this.cels[x][y].vivo;
  }
}

class Celula{
  constructor(x, y, tamX, tamY){
    this.x = x;
    this.y = y;
    this.vizi = 0;
    this.tamX = tamX;
    this.tamY = tamY;
    this.vivo = true;
  }
  
  desenha(){
    let tamAux = parseInt(this.tamY < this.tamX ? this.tamY/40 : this.tamX/40);
    strokeWeight((tamAux < 2 ? 2 : tamAux));
    if(!this.vivo){
      fill(0);
    }else{
      fill(0, 255, 0);
    }
    rect(this.x, this.y, this.tamX, this.tamY);
  }
}