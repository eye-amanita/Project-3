


function setup() {
  createCanvas(windowWidth, windowHeight);
  setAttributes('antialias', true);
  canvas.imageSmoothingEnabled = false;
  cg = createGraphics(5, 5, WEBGL);
  cg.noSmooth();
  cg.square(3, 3, 1);
  this._renderer.getTexture(cg).setInterpolation(NEAREST, NEAREST);
}

function draw() {
  background(220);
  imageMode(CENTER);
  image(cg, 0, 0, 500, 500);
}
