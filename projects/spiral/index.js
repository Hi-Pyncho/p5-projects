let x = 0;
let y = 0;
let acc = 0;
let angle = 0;
let mag = 100;
let dir = 'left';
const adder = 0.2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 10);

  translate(width / 2, height / 2);
  // const v = p5.Vector.fromAngle(angle);
  const v = createVector(cos(angle), sin(angle));
  v.setMag(mag);
  v.limit(100);

  stroke(255);
  strokeWeight(4);
  ellipse(v.x, v.y, 5);


  if (mag >= 100) {
    dir = 'left';
  }

  if (mag <= 0) {
    dir = 'right';
  }

  mag = dir === 'left' ? mag - adder : mag + adder;
  angle = dir === 'left' ? angle - 0.1 : angle + 0.1;
}
