let x = 0;
let y = 0;
let angle = 0;
let mag = 0;
const radius = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 10);

  translate(width / 2, height / 2);
  // const v = p5.Vector.fromAngle(angle);
  const v = createVector(cos(angle), sin(angle));
  v.setMag(mag);
  v.limit(radius);

  noStroke();
  fill(random(255), random(255), random(255));
  ellipse(v.x, v.y, 5);

  mag = random(radius);
  angle = random(0, PI * 2);
}
