let xoff = 0;
let inc = 0.01;
let start = 0;

function setup() {
  createCanvas(400, 400);
  // frameRate(4);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  beginShape();

  xoff = start;

  for (let x = 0; x < width; x++) {
    const y = noise(xoff) * height;
    vertex(x, y);

    xoff += inc;
  }

  endShape();
  start += inc;
}

