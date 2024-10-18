let r = 4;
const angles = [];

const anglesV = [];

function setup() {
  createCanvas(600, 600);
  const total = floor(width / (r * 2));

  for (let i = 0; i < total + 1; i++) {
    angles[i] = map(i, 0, total, 0, TWO_PI);
  }
}

function draw() {
  background(0);

  translate(width / 2, height / 2);
  fill(255, 0, 0);

  for (let i = 0; i < angles.length; i ++) {
    const x = map(i, 0, angles.length, -300, 300);
    const y = map(sin(angles[i]), -1, 1, -100, 100);
    angles[i] += 0.04;
    circle(x, y, r * 2);
  }
}
