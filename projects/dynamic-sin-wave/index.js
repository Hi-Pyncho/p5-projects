let waves = [];

function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < 5; i++) {
    waves.push(new Wave(random(20, 80), random(100, 600), random(0, TWO_PI)));
  }

}

function draw() {
  background(0);

  translate(0, height / 2);
  strokeWeight(map(mouseY, 0, height, 1, 10));
  noFill();
  stroke(map(mouseY, 0, height, 50, 255), 0, 0);

  beginShape();
  for (let x = 0; x < width; x += 1) {
    let y = 0;
    for (let wave of waves) {
      y += wave.calc(x);
    }

    vertex(x, y);
  }
  endShape();

  const acc = map(mouseY, 0, height, 0, 0.2);
  for (let wave of waves) {
    if (mouseX > width / 2) {
      wave.phase += mouseIsPressed ? 0.01 : 0.05 + acc;
    } else {
      wave.phase -= mouseIsPressed ? 0.01 : 0.05 + acc;
    }
  }
}

