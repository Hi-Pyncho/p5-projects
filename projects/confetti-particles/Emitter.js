class Emitter {
  constructor(x, y, Particle, amount = null, img) {
    this.pos = createVector(x, y);
    this.Particle = Particle;
    this.particles = [];
    this.gravity = createVector(0, 0.2);
    this.amount = amount;
    this.img = img;
  }

  emit(num = 1) {
    const isNeedLimit = Number.isInteger(this.amount);
    if (Number.isInteger(this.amount) && this.amount <= 0) return;

    for (let i = 0; i < num; i++) {
      this.particles.push(new this.Particle(this.pos.x, this.pos.y, 0.2, this.img));

      if (isNeedLimit) this.amount -= 1;
    }
  }

  applyForce(f) {
    for (let p of this.particles) {
      p.applyForce(f);
    }
  }

  update() {
    for (let i = 0; i < this.particles.length; i++) {
      if (this.particles[i].isFinished()) {
        this.particles.splice(i, 1);
        continue;
      }
      this.particles[i].update();
      this.particles[i].show();
    }
  }
}
