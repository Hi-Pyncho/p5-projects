// https://www.youtube.com/watch?v=Rr-5HiXquhw&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=32

let bob;
let anchor;
let restLen = 200;
let k = 0.01;
let velocity;
let gravity;

function setup() {
  createCanvas(600, 600);
  bob = createVector(500, 0);
  anchor = createVector(width / 2, 0);
  velocity = createVector(0, 0);
  gravity = createVector(0, 1);
}

function draw() {
  background(0);

  stroke(255);
  strokeWeight(4);
  fill(255);

  line(anchor.x, anchor.y, bob.x, bob.y);

  const force = p5.Vector.sub(bob, anchor);
  const x = force.mag() - restLen;
  force.normalize().mult(k * -1 * x);

  velocity.add(force);
  velocity.add(gravity);
  bob.add(velocity);

  velocity.mult(0.99);

  circle(bob.x, bob.y, 50);

  if (mouseIsPressed) {
    bob.x = mouseX;
    bob.y = mouseY;
    velocity.mult(0);
  }
}

function mousePressed() {

}

function mouseReleased() {

}
