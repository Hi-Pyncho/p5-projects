// https://www.youtube.com/watch?v=NBWMtlbbOag&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=34

let angle;
let len = 200;
let bob;
let origin;
let angleV = 0;
let angleA = 0;
let gravity = 1;
let mass = 1;

function setup() {
  createCanvas(600, 400);
  angle = PI / 4;
  bob = createVector();
  origin = createVector(width / 2, 0);
}

function draw() {
  background(0);

  let force = -mass * gravity * sin(angle);
  angleA = force / len;

  angleV += angleA;
  angle += angleV;

  // angleV *= 0.99;

  bob.x = len * sin(angle) + origin.x;
  bob.y = len * cos(angle) + origin.y;

  stroke(255);
  strokeWeight(8);
  line(origin.x, origin.y, bob.x, bob.y);
  circle(bob.x, bob.y, 50);
}
