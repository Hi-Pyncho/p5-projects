let r = 2;

function setup() {
  createCanvas(600, 600);
  frameRate(10);
}

function draw() {
  background(0);

  translate(0, height / 2);
  stroke(255);
  noFill();
  strokeWeight(4);
  beginShape();
  const total = floor(width / (r * 1));

  for (let i = 0; i < width; i+=(r * 5)) {
    const angle = map(i, 0, total, 0, TWO_PI);
    const y = map(sin(angle), -1, 1, random(-mouseX / 3, 0), random(0, mouseX / 3));

    vertex(i, y);
  }

  endShape();
}
