class Spark extends p5.Vector {
  constructor(x, y, mass = 1) {
    super(x, y);
    this.initialPosition = createVector(x, y);
    this.lifetime = 255;
    this.radius = sqrt(mass) * 5;
    this.vel = createVector(0, 0);
    this.color = color(random(160, 200), random(50, 150), 10, this.lifetime);
    this.lifetimeDecrease = Math.random();

    this.ellipseW = random(this.radius, this.radius / 2);
    this.ellipseH = random(this.radius, this.radius / 2);
  }

  reset(pos = null) {
    this.set(pos ? pos : this.initialPosition.copy());
    this.lifetime = 255;
  }

  applyForce(force) {
    this.vel.add(force);
  }

  show() {
    noStroke();
    fill(this.color);

    this.color.setAlpha(this.lifetime);

    push();
    drawingContext.filter = 'blur(3px)';
    ellipse(this.x, this.y, this.ellipseW, this.ellipseH);
    pop();

    push();
    drawingContext.filter = 'blur(1px)';
    ellipse(this.x, this.y, this.ellipseW / 2, this.ellipseH / 2);
    pop();
  }

  update() {
    let dx = 1.5 * (0.5 - noise((this.x / width) * 15, (this.y / width) * 15, 6));
    let dy = -noise((this.x / width) * 15, (this.y / width) * 15, 7) * 2;

    this.x += dx;
    this.y += dy;

    this.add(this.vel);

    this.lifetime -= this.lifetimeDecrease;
  }
}
