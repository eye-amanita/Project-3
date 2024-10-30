let cg;
let pause = false;



function setup() {
  createCanvas(windowWidth, windowHeight);
  // calculateDimensions();
  setAttributes('antialias', true);
  canvas.imageSmoothingEnabled = false;
  cg = createGraphics(5, 5);
  cg.noSmooth();
  cg.strokeWeight(0);
  cg.fill(255,255,2550);
  cg.square(0,0, 1);
  // this._renderer.getTexture(cg).setInterpolation(NEAREST, NEAREST);
  background(255);
  frameRate(24);

}

function draw() {
let prob = random (0,1);


let blockCount = random(1,13);
  blendMode(EXCLUSION);
    let scatterY = random(mouseY-100, mouseY+100);
    let scatterX = random(mouseX-100, mouseX+100);
    let scaleBlock = random (200,800);
    image(cg, scatterX, scatterY, scaleBlock, scaleBlock);
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
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  calculateDimensions();
}

function mousePressed(){ //bei click Pause, bei 2. click weiter
  if(pause==false){
    noLoop();
    pause=true;
  }else{
    loop();
    pause = false;
  }
}

