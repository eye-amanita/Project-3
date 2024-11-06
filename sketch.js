let cg;
let pause = false;
let mouseMoving = false;
let timer = 0;

let x;
let y;

let xGridWalk;
let yGridWalk;



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
  frameRate(20);
  

}

function draw() {
let prob = random (0,1);



gridWalkNeutral();




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

function randomWalkNeutral(){
  if (timer == 2) {
      blendMode(EXCLUSION);
        let scatterY = random(mouseY-100, mouseY+100);
        let scatterX = random(mouseX-100, mouseX+100);
        let scaleBlock = random (.2,.65);
        image(cg, x, y, (1.25*scaleBlock)*width, (1.25*scaleBlock)*width);
        const r = floor(random(4));
      switch (r) {
        case 0:
          x = x + scatterX*.05;
          break;
        case 1:
          x = x - scatterX*.05;
          break;
        case 2:
          y = y + scatterY*.1;
          break;
        case 3:
          y = y - scatterY*.1;
          break;
      }
  }
}

function gridWalkNeutral (){
if (timer == 2) {
  blendMode(EXCLUSION);
    let scaleBlock = .4;
    let power = 
    
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

function spacedGridNeutral(){
  if (timer == 2) {
    blendMode(EXCLUSION);
      let scaleBlock = .575;
      
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


