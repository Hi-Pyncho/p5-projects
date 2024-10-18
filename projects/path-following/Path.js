class Path {
  constructor(x1, y1, x2, y2) {
    this.start = createVector(x1, y1);
    this.end = createVector(x2, y2);
    this.radius = 20;
  }

  show() {
    strokeWeight(2);
    stroke(255);
    line(this.start.x, this.start.y, this.end.x, this.end.y);

    push();
    strokeWeight(this.radius * 2);
    stroke(255, 100);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
    pop();
  }
}
