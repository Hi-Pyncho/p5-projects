class Fly {
  constructor(width, height, size) {
    this.width = width;
    this.height = height;
    this.size = size;
    this.xoff = random(10);
    this.xoff2 = random(100);
  }

  draw() {
    const x = map(noise(this.xoff), 0, 1, mouseX - 150, mouseX + 150);
    const y = map(noise(this.xoff2), 0, 1, mouseY - 150, mouseY + 150);

    this.xoff += 0.01;
    this.xoff2 += 0.01;

    ellipse(x, y, this.size, this.size);
  }
}

let flies = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 100; i++) {
    flies.push(new Fly(width, height, random(2, 4)));
  }
}

function draw() {
  background(0);
  flies.forEach((fly) => fly.draw());
}

