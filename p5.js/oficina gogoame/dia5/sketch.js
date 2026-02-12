let ini;
let game;
let FR;

function setup(){
  ini = false;
  FR = 5;
  createCanvas(windowWidth, windowHeight);
  background(0);

  let x = y = 1;
  let quantCeLin = 50;
  let quantCeCol = parseInt(height/(width/quantCeLin));
  game = new GameOfLife(quantCeLin, quantCeCol, width, height);
}

function draw(){
  game.desenhaCelulas();
  
  if (ini) {
    game.proxPasso();
  }
}

function mousePressed(){
  if(!ini){
    if(game.taViva(parseInt(map(mouseX,0,height,0,game.quantCeCol)), parseInt(map(mouseY,0,width,0,game.quantCeLin)))){
      game.mataCelula(parseInt(map(mouseX,0,height,0,game.quantCeCol)), parseInt(map(mouseY,0,width,0,game.quantCeLin)));
    }else{
      game.nasceCelula(parseInt(map(mouseX,0,height,0,game.quantCeCol)), parseInt(map(mouseY,0,width,0,game.quantCeLin)));
    }
  }
}

function keyPressed(){
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
    case RIGHT_ARROW:
      game.proxPasso();
      break;
    case LEFT_ARROW:
      game.gradInf = !game.gradInf;
      break;
    case UP_ARROW:
      FR++;
      frameRate(FR);
      break;
    case DOWN_ARROW:
      FR--;
      frameRate(FR);
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
    
    let x = (larguraTela%quantCeLin)/2;
    let y = (alturaTela%quantCeCol)/2;
    let tamX = parseInt(larguraTela/quantCeLin);
    let tamY = parseInt(alturaTela/quantCeCol);
    
    for(let i = 0; i < quantCeLin; i++){
      this.cels[i] = [];
      for(let j = 0; j < quantCeCol; j++){
        this.cels[i][j] = new Celula(x, y, tamX, tamY);
        y += tamY;
      }
      y = (alturaTela%quantCeCol)/2;
      x += tamX;
    }
  }
  
  proxPasso(){
    let celsAux = [];
    for (let i = 0; i < this.cels.length; i++) {
      celsAux[i] = [];
      for (let j = 0; j < this.cels[i].length; j++) {
        celsAux[i][j] = new Celula(this.cels[i][j].x, this.cels[i][j].y, this.cels[i][j].tamX, this.cels[i][j].tamY);
        this.cels[i][j].vizi = 0;
      }
    }
    
    let vizi = 0;
    for (let i = 0; i < this.cels.length; i++) {
      for (let j = 0; j < this.cels[i].length; j++) {
        vizi = this.atualizaEstadoCelula(i, j);
        
        this.cels[i][j].vizi = vizi;
        celsAux[i][j].vizi = vizi;
        if(this.cels[i][j].vivo){
          if(vizi==3||vizi==2){
            celsAux[i][j].vivo = true;
          }else{
            celsAux[i][j].vivo = false;
          }
        }else{
          if(vizi==3){
            celsAux[i][j].vivo = true;
          }
        }
        vizi = 0;
      }
    }
    
    this.cels = celsAux;
  }
  
  atualizaEstadoCelula(i, j){
    let vizi = 0;
    
    if(j>=1){
      if(i>=1){
        if(this.cels[i-1][j-1].vivo){
          vizi++;
        }
      }else if(this.gradInf){
        if(this.cels[this.quantCeLin-1][j-1].vivo==true){
          vizi++;
        }
      }
      if(this.cels[i][j-1].vivo){
        vizi++;
      }
      if(i<=this.quantCeLin-2){
        if(this.cels[i+1][j-1].vivo){
          vizi++;
        }
      }else if(this.gradInf){
        if(this.cels[0][j-1].vivo){
          vizi++;
        }
      }
    }else if(this.gradInf){
      if(i>=1){
        if(this.cels[i-1][this.quantCeCol-1].vivo==true){
          vizi++;
        }
      }else if(this.gradInf){
        if(this.cels[this.quantCeLin-1][this.quantCeCol-1].vivo==true){
          vizi++;
        }
      }
      if(this.cels[i][this.quantCeCol-1].vivo){
        vizi++;
      }
      if(i<=this.quantCeLin-2){
        if(this.cels[i+1][this.quantCeCol-1].vivo){
          vizi++;
        }
      }else if(this.gradInf){
        if(this.cels[0][this.quantCeCol-1].vivo){
          vizi++;
        }
      }
    }
    
    if(i>=1){
      if(this.cels[i-1][j].vivo){
        vizi++;
      }
    }else if(this.gradInf){
      if(this.cels[this.quantCeLin-1][j].vivo){
        vizi++;
      }
    }
    if(i<=this.quantCeLin-2){
      if(this.cels[i+1][j].vivo){
        vizi++;
      }
    }else if(this.gradInf){
      if(this.cels[0][j].vivo){
        vizi++;
      }
    }
    
    if(j<=this.quantCeCol-2){
      if(i>=1){
        if(this.cels[i-1][j+1].vivo){
          vizi++;
        }
      }else if(this.gradInf){
        if(this.cels[(this.quantCeLin-1)][j+1].vivo){
          vizi++;
        }
      }
      if(this.cels[i][j+1].vivo){
        vizi++;
      }
      if(i<=this.quantCeLin-2){
        if(this.cels[i+1][j+1].vivo){
          vizi++;
        }
      }else if(this.gradInf){
        if(this.cels[0][j+1].vivo){
          vizi++;
        }
      }
    }else if(this.gradInf){
      if(i>=1){
        if(this.cels[i-1][0].vivo){
          vizi++;
        }
      }else if(this.gradInf){
        if(this.cels[this.quantCeLin-1][0].vivo){
          vizi++;
        }
      }
      if(this.cels[i][0].vivo){
        vizi++;
      }
      if(i<=this.quantCeLin-2){
        if(this.cels[i+1][0].vivo){
          vizi++;
        }
      }else if(this.gradInf){
        if(this.cels[0][0].vivo){
          vizi++;
        }
      }
    }
    
    return vizi;
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
    this.vivo = false;
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
    
    //textAlign(CENTER, CENTER);
    //textFont('Dejavu Sans', this.tamY);
    //fill(255);
    //text(this.vizi,this.x+this.tamX/2,this.y+this.tamY/2);
  }
}