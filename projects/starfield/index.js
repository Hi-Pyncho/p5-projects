class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.starSpeed = 1;
    this.pz = this.z;
  }

  update() {
    this.z -= this.starSpeed;

    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  show() {
    fill(255);
    noStroke();

    const sx = map(this.x / this.z, 0, 1, 0, width);
    const sy = map(this.y / this.z, 0, 1, 0, height);

    let radius = map(this.z, 0, width, 16, 1);

    if (this.starSpeed > 30) {
      radius = 1;
    }
    circle(sx, sy, radius);

    const px = map(this.x / this.pz, 0, 1, 0, width);
    const py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z

    stroke(255);
    line(px, py, sx, sy);
  }
}

const stars = [];

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < 800; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0);
  const starSpeed = map(mouseX, 0, width, 1, 50);
  translate(width / 2, height / 2);

  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];
    star.starSpeed = starSpeed;
    star.update();
    star.show();
  }
}
