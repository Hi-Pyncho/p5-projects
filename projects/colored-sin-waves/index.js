let r = 4;
const angles = [];
const angles2 = [];
const angles3 = [];
const anglesV = [];

function setup() {
  createCanvas(600, 600);
  const total = floor(width / (r * 2));

  for (let i = 0; i < total + 1; i++) {
    angles[i] = map(i, 0, total, 0, TWO_PI);
  }

  for (let i = 0; i < total + 1; i++) {
    angles2[i] = map(i, 0, total, 0, TWO_PI);
  }

 for (let i = 0; i < total + 1; i++) {
    angles3[i] = map(i, 0, total, 0, TWO_PI);
  }

}

function draw() {
  background(0);

  push();
  translate(width / 2, height / 2 + 150);
  fill(0, 0, 255);
  beginShape();
  vertex(-width / 2, height / 2);
  for (let i = 0; i < angles3.length; i ++) {
    const x = map(i, 0, angles3.length, -300, 300);
    const y = map(sin(angles3[i]), -1, 1, -70, 70);
    angles3[i] += 0.015;
    vertex(x, y);
  }
  vertex(width / 2, height / 2);
  endShape(CLOSE);
  pop();

  push();
  translate(width / 2, height / 2 + 170);
  fill(0, 255, 0);
  beginShape();
  vertex(-width / 2, height / 2);
  for (let i = 0; i < angles2.length; i ++) {
    const x = map(i, 0, angles2.length, -300, 300);
    const y = map(sin(angles2[i]), -1, 1, -70, 70);
    angles2[i] += 0.025;
    vertex(x, y);
  }
  vertex(width / 2, height / 2);
  endShape(CLOSE);
  pop();

  push();
  translate(width / 2, height / 2 + 200);
  fill(255, 0, 0);
  beginShape();
  vertex(-width / 2, height / 2);
  for (let i = 0; i < angles.length; i ++) {
    const x = map(i, 0, angles.length, -300, 300);
    const y = map(sin(angles[i]), -1, 1, -50, 50);
    angles[i] += 0.04;
    vertex(x, y);
  }
  vertex(width / 2, height / 2);
  endShape(CLOSE);
  pop();


}
