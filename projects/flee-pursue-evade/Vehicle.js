class Vehicle extends p5.Vector {
  constructor(x, y, options = {
    color: color(255),
  }) {
    super(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = 1;
    this.maxSpeed = 8;
    this.maxForce = 0.2;
    this.r = 4;
    this.options = options;
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.add(this.vel);
    this.acc.mult(0);
  }

  evade(vehicle) {
    return this.pursue(vehicle).mult(-1);
  }

  pursue(vehicle, debug = false) {
    const target = vehicle.copy();
    const prediction = vehicle.vel.copy();
    target.add(prediction.mult(10));

    if (debug) {
      fill(0, 255, 0);
      circle(target.x, target.y, 16);
    }
    return this.seek(target);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  flee(target) {
    return this.seek(target).mult(-1);
  }

  seek(target) {
    const desired = p5.Vector.sub(target, this);
    desired.setMag(this.maxSpeed);
    const steering = p5.Vector.sub(desired, this.vel);
    steering.limit(this.maxForce);
    return steering;

//     const force = p5.Vector.sub(target, this)
//       .setMag(this.maxSpeed)
//       .sub(this.vel)
//       .limit(this.maxForce);

//     this.applyForce(force);
  }

  edges() {
    if (this.x + this.r >= width) this.vel.x *= -1;
    if (this.x - this.r <= 0) this.vel.x *= -1;
    if (this.y + this.r >= height) this.vel.y *= -1;
    if (this.y - this.r <= 0) this.vel.y *= -1;
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(this.options.color);
    push();
    translate(this.x, this.y);
    rotate(this.vel.heading());
    triangle(-this.r, -this.r / 2, this.r * 5, this.r, -this.r, this.r * 2);
    pop();
  }
}
