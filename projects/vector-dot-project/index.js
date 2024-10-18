let a;
let b;
let pos;

function setup() {
  createCanvas(400, 400);
  pos = createVector(100, 100);
  a = createVector(100, -60);
  b = createVector(150, 60);
}

function draw() {
  background(0);

  strokeWeight(4);
  stroke(255);

  const vp = vectorProjection(a, b);

  line(pos.x, pos.y, pos.x + a.x, pos.y + a.y);
  line(pos.x, pos.y, pos.x + b.x, pos.y + b.y);

  stroke(255, 0, 0);
  line(pos.x, pos.y, pos.x + vp.x, pos.y + vp.y);

  strokeWeight(2);
  stroke(0, 255, 0);
  line(pos.x + vp.x, pos.y + vp.y, pos.x + a.x, pos.y + a.y);

  noLoop();
}

function vectorProjection(a, b) {
  const bCopy = b.copy().normalize();
  const sp = a.dot(bCopy);
  bCopy.mult(sp);

  return bCopy;
}
