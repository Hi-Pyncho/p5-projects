class Particle extends p5.Vector {
  constructor(x, y, m = 1, img = null) {
    super(x, y);
    this.mass = m;
    this.acc = createVector(0, 0);
    this.vel = p5.Vector.random2D();
    this.vel = this.vel.mult(random(1,5));
    this.radius = sqrt(this.mass) * 10;
    this.lifetime = 255;
    this.img = img;

    if (this.img) {
      imageMode(CENTER);
      this.img.resize(50, 50);
    }
  }

  update() {
    this.vel.add(this.acc);
    this.add(this.vel);

    this.acc.mult(0);
    this.lifetime -= 10;

    this.vel.mult(0.99);
  }

  applyForce(f) {
    const force = p5.Vector.div(f, this.mass);
    this.acc.add(force);
  }

  isFinished() {
    return this.lifetime < 0;
  }

  show() {
    if (this.img) {
      tint(255, this.lifetime);
      image(this.img, this.x, this.y);
    } else {
      fill(255, this.lifetime);
      stroke(150, this.lifetime);
      circle(this.x, this.y, this.radius * 2);
    }
  }
}
