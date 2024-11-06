let cg;
let pause = false;
let mouseMoving = false;
let timer = 0;

let x;
let y;

let xGridWalk;
let yGridWalk;

let scaleBlock;

let modeArray = [1,2,3,4];
let neutralMode;

let randomWalkScaleFactorX;
let randomWalkScaleFactorY;

let rotateArray = [0, 1, 2, 3];
let rotateFactor = random(rotateArray);



function setup() {
  createCanvas(windowWidth, windowHeight);
  // calculateDimensions();
  setAttributes('antialias', true);
  canvas.imageSmoothingEnabled = false;
  cg = createGraphics(5 , 5);
  // cg.colorMode(HSB);
  cg.noSmooth();
  cg.strokeWeight(0);
  cg.fill(20,200,50); //Pink RGB
  cg.fill(255,255,255); //Black RGB
  // cg.background(255,0,0);
  
  cg.square(0,0, 1);
  

  // x = width / 2;
  // y = height / 2;
  background(255);
  x = 0;
  y = 0;

  xGridWalk = 0;
  yGridWalk = 0;

  randomWalkScaleFactorX = random(.02,.15);
  randomWalkScaleFactorY = random(.02,.15);

  neutralMode = random(modeArray);
  frameRate(20);
  

}

function draw() {
let prob = random (0,1);

 print(neutralMode);

if (neutralMode == 1){
  randomWalkNeutral(randomWalkScaleFactorX,randomWalkScaleFactorY);
}
 if (neutralMode == 2){
  gridWalkNeutral();
} 
if (neutralMode == 3){
  spacedGridNeutral();
}
if (neutralMode == 4){
  randomPlaceNeutral();
}





blendMode(BLEND);
    let obscureX = random(0,width);
    let obscureY = random(0,height);
    let obscureScale = random (100,400);
    
    if (prob<.5){
      fill(255);
      strokeWeight(0);
    square(obscureX,obscureY,obscureScale);
    }

  if (prob < .025) {
    background(255);
  }
  timer = timer+1;

  if (timer > 2){
    timer = 2;
  }
  
}

function mouseMoved(){
  timer = 0;
  if (timer <2){
    if (pause == false){
      x = mouseX;
      y = mouseY;
      mouseMoving = true;
      blendMode(EXCLUSION);
      let scatterY = random(mouseY-100, mouseY+100);
      let scatterX = random(mouseX-100, mouseX+100);
      let scaleBlock = random (.2,.8);
      
      image(cg, scatterX, scatterY, (1.25*scaleBlock)*width, (1.25*scaleBlock)*width);
      timer = timer-1;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed(){ 
  if(pause==false){
    noLoop();
    pause=true;
  }else{
    loop();
    pause = false;
  }
}

function keyPressed(){
  if (key == ' '){
    reroll();
  }
}

function randomWalkNeutral(randomWalkScaleFactorX,randomWalkScaleFactorY){
  if (timer == 2) {
      blendMode(EXCLUSION);
        let scatterY = random(mouseY-100, mouseY+100);
        let scatterX = random(mouseX-100, mouseX+100);
        let scaleBlock = random (.2,.65);
        image(cg, x, y, (1.25*scaleBlock)*width, (1.25*scaleBlock)*width);
        const r = floor(random(4));
      switch (r) {
        case 0:
          x = x + scatterX*randomWalkScaleFactorX;
          break;
        case 1:
          x = x - scatterX*randomWalkScaleFactorX;
          break;
        case 2:
          y = y + scatterY*randomWalkScaleFactorY;;
          break;
        case 3:
          y = y - scatterY*randomWalkScaleFactorY;
          break;
      }
  }
}



function gridWalkNeutral (scaleBlock){
if (timer == 2) {
  blendMode(EXCLUSION);
    scaleBlock = .4;
    
    
    image(cg, xGridWalk, yGridWalk, scaleBlock*width, scaleBlock*width);
    
    xGridWalk = xGridWalk+((scaleBlock*width)/4);
    
    if (xGridWalk > width){
      yGridWalk = yGridWalk + ((scaleBlock*width)/4);
      xGridWalk = 0;
    }

    if (yGridWalk > height){

    xGridWalk = 0;
    yGridWalk = 0;
    }

}
}

function spacedGridNeutral(scaleBlock){
  if (timer == 2) {
    blendMode(EXCLUSION);
      scaleBlock = .575;
      
      image(cg, xGridWalk, yGridWalk, scaleBlock*width, scaleBlock*width);
      
      xGridWalk = xGridWalk+((scaleBlock)*scaleBlock*width);
      
      if (xGridWalk > width - ((scaleBlock)*scaleBlock*width)){
        yGridWalk = yGridWalk + ((scaleBlock)*scaleBlock*width);
        xGridWalk = 0;
      }
  
      if (yGridWalk > height){
  
      xGridWalk = 0;
      yGridWalk = 0;
      }
  
  }
}

function randomPlaceNeutral(){
  if (timer == 2) {
    blendMode(EXCLUSION);
      let x = random(0, width);
      let y = random(0, height);
      let scaleBlock = random (.2,.65);
      image(cg, x, y, (1.25*scaleBlock)*width, (1.25*scaleBlock)*width);

    }
}

function reroll(){
  xGridWalk = random(width/3, width-width/3);
  yGridWalk = random(height/3, height-height/3);
  neutralMode = random(modeArray);

  randomWalkScaleFactorX = random(.02,.15);
  randomWalkScaleFactorY = random(.02,.15); 


}


