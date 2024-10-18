class Vehicle extends p5.Vector {
  constructor(x, y, options = {
    color: color(255),
  }) {
    super(x, y);
    this.vel = createVector(1, 0);
    this.acc = createVector(0, 0);
    this.mass = 1;
    this.maxSpeed = 3;
    this.maxForce = 0.2;
    this.r = 4;
    this.options = options;
    this.wanderTheta = PI / 2;
    this.wanderPath = [];
  }

  wander() {
    const wanderRadius = 50;
    const wanderPoint = this.vel
      .copy()
      .setMag(wanderRadius * 2)
      .add(this);

    fill(0, 255, 0);
    circle(wanderPoint.x, wanderPoint.y, 16);

    noFill();
    circle(wanderPoint.x, wanderPoint.y, wanderRadius * 2);

    let theta = this.wanderTheta + this.vel.heading();

    const x = wanderRadius * cos(theta);
    const y = wanderRadius * sin(theta);
    wanderPoint.add(x, y);

    fill(255, 0, 0);
    circle(wanderPoint.x, wanderPoint.y, 12);

    const steering = p5.Vector.sub(wanderPoint, this).setMag(this.maxForce);

    const displaceRange = 0.3;
    this.wanderTheta += random(-displaceRange, displaceRange);

    this.wanderPath.push(this.copy());

    noFill();
    beginShape();
    for (let point of this.wanderPath) {
      vertex(point.x, point.y);
    }
    endShape();

    return steering;
  }

  arrive(target) {
    return this.seek(target, { needArrival: true });
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

  flee(target) {
    return this.seek(target).mult(-1);
  }

  seek(target, options = null) {
    const desired = p5.Vector.sub(target, this);
    let desiredSpeed = this.maxSpeed;

    if (options && options.needArrival) {
      const distance = desired.mag();
      const slowRadius = options.slowRadius || 100;

      if (distance < slowRadius) {
        desiredSpeed = map(distance, 0, slowRadius, 0, this.maxSpeed);
      }
    }

    desired.limit(desiredSpeed);
    const steering = p5.Vector.sub(desired, this.vel);
    steering.limit(this.maxForce);
    return steering;
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.add(this.vel);
    this.acc.mult(0);
  }

  applyForce(force) {
    this.acc.add(force);
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
