let angleX = 0;
let angleY = 0;
let speedX = 0.1;
let speedY = 0.2;
let radiusX = 100;
let radiusY = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 10);

  const centerX = width / 2;
  const centerY = height / 2;

  const x = centerX + Math.cos(angleX) * radiusX;
  const y = centerY + Math.sin(angleY) * radiusY;

  circle(x, y, 10);

  angleX += speedX;
  angleY += speedY;
}
