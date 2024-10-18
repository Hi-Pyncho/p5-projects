const walkers = [];

class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
  }

  update() {
    this.pos.x = this.pos.x + random(-1, 1);
    this.pos.y = this.pos.y + random(-1, 1);
  }

  show() {
    stroke(255, 100);
    strokeWeight(2);
    point(this.pos.x, this.pos.y);
  }
}

function setup() {
  createCanvas(400, 400);

  for(let i = 0; i < 100; i++) {
    walkers.push(new Walker(random(width), random(height)));
  }

  console.log(walkers);
}

function draw() {
  background(0, 5);

  walkers.forEach((walker) => {
    walker.show();
    walker.update();
  });
}
