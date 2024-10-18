class Particle {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];

    for (let i = 0; i < 360; i += 1) {
      this.rays.push(new Ray(this.pos, radians(i)));
    }
  }

  setPos(x, y) {
    this.pos.set(x, y);
  }

  look(walls) {
    for (let ray of this.rays) {
      let closest;
      let record = Infinity;

      for (let wall of walls) {
        const pt = ray.cast(wall);

        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);

          if (d < record) {
            closest = pt;
            record = d;
          }
        }
      }

      if (closest) {
        stroke(255, 100);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }


    }
  }

  show() {
    fill(255);
    circle(this.pos.x, this.pos.y, 4);
    for (let ray of this.rays) {
      ray.show();
    }
  }
}
