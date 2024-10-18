function setup() {
  createCanvas(400, 400);
  frameRate(5)
}

function draw() {
  background(0);

  translate(width / 4, height / 4)

  strokeWeight(random(1, 5))
  stroke(255)
  noFill()
  beginShape()

  for(let i = 0; i < 30; i++) {
    vertex(random(i, i + width / 2), random(i, i + width / 2))
  }

  endShape()
}
