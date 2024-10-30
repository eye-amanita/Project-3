let cg;


function setup() {
  createCanvas(windowWidth, windowHeight);
  setAttributes('antialias', true);
  canvas.imageSmoothingEnabled = false;
  cg = createGraphics(1, 1, WEBGL);
  cg.noSmooth();
  cg.strokeWeight(0);
  cg.fill(0);
  cg.square(0, 0, 1);
  // this._renderer.getTexture(cg).setInterpolation(NEAREST, NEAREST);
  background(220);
}

function draw() {

  
  imageMode(CENTER);
  image(cg, mouseX, mouseY, 200, 200);
}

