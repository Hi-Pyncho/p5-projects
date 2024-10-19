class TwitchyLine {
  /**
   * @param {Object} options
   * @param {number} options.x1
   * @param {number} options.y1
   * @param {number} options.x2
   * @param {number} options.y2
   * @param {number} [options.count=5]
   * @param {number} [options.gap=2]
   * @param {number} [options.offset=1]
   * @param {number} [options.lineWidth=1]
   * @param {number} [options.color]
   */
  constructor(options = {}) {
    this.x1 = options.x1;
    this.y1 = options.y1;
    this.x2 = options.x2;
    this.y2 = options.y2;
    this.count = options.count || 3;
    this.offset = options.offset || 5;
    this.lineWidth = options.lineWidth || 1;
    this.color = options.color || color(0);
    this.length = dist(this.x1, this.y1, this.x2, this.y2);
  }

  draw() {
    push();
    strokeWeight(this.lineWidth);
    stroke(this.color);

    const points = this.getPointsFromLine();

    for (let i = 0; i < points.length - 1; i++) {
      const point1 = points[i];
      const point2 = points[i + 1];

      line(
        point1.x + random(-this.offset, this.offset),
        point1.y + random(-this.offset, this.offset),
        point2.x + random(-this.offset, this.offset),
        point2.y + random(-this.offset, this.offset),
      );
    }

    pop();
  }

  getPointsFromLine() {
    const out = [];
    const finalQuantity = this.count + 1;

    for (let i = 0; i < finalQuantity; i++) {
      const position = i / this.count;
      const x = this.x1 + (this.x2 - this.x1) * position;
      const y = this.y1 + (this.y2 - this.y1) * position;

      out.push({ x, y });
    }

    return out;
  }
}
