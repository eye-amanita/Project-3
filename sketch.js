let cg;



function setup() {
  createCanvas(windowWidth, windowHeight);
  // calculateDimensions();
  setAttributes('antialias', true);
  canvas.imageSmoothingEnabled = false;
  cg = createGraphics(5, 5);
  cg.noSmooth();
  cg.strokeWeight(0);
  cg.fill(255,125,0);
  cg.square(0,0, 1);
  // this._renderer.getTexture(cg).setInterpolation(NEAREST, NEAREST);
  background(255);
  frameRate(24);

}

function draw() {
let prob = random (0,1);


if (prob < .75) {
  canvas.imageSmoothingEnabled = false;
}
else {
  canvas.imageSmoothingEnabled = true;
}

let blockCount = random(1,13);
  blendMode(EXCLUSION);
    let scatterY = random(mouseY-100, mouseY+100);
    let scatterX = random(mouseX-100, mouseX+100);
    let scaleBlock = random (200,800);
    image(cg, scatterX, scatterY, scaleBlock, scaleBlock);
  blendMode(BLEND);
  if (prob < .025) {
    background(255);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  calculateDimensions();
}

