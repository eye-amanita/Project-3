let cg;
let pause = false;
let mouseMoving = false;
let timer = 0;

let x;
let y;



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
  x = width / 2;
  y = height / 2;
  background(255);
  frameRate(20);


}

function draw() {
let prob = random (0,1);

if (timer == 2) {
  blendMode(EXCLUSION);
    let scatterY = random(mouseY-100, mouseY+100);
    let scatterX = random(mouseX-100, mouseX+100);
    let scaleBlock = random (.2,.8);
    image(cg, x, y, (1.25*scaleBlock)*width, (1.25*scaleBlock)*width);
    const r = floor(random(4));
  switch (r) {
    case 0:
      x = x + scatterX*.25;
      break;
    case 1:
      x = x - scatterX*.25;
      break;
    case 2:
      y = y + scatterY*.25;
      break;
    case 3:
      y = y - scatterY*.25;
      break;
  }
} else {

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


