class TwitchyCircle {
  /**
   * @param {Object} options
   * @param {number} options.x
   * @param {number} options.y
   * @param {number} options.width
   * @param {number} options.height
   * @param {number} [options.count=10]
   * @param {number} [options.gap=5]
   * @param {number} [options.offset=0.07]
   * @param {number} [options.lineWidth=1]
   * @param {number} [options.lineWidth=1]
   * @param {number} [options.color]
   */
  constructor(options = {}) {
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
    this.count = options.count || 10;
    this.offset = options.offset || 0.07;
    this.lineWidth = options.lineWidth || 1;
    this.color = options.color || color(0);
    this.lineCap = options.lineCap || ROUND;
  }

  draw() {
    push();
    strokeWeight(this.lineWidth);
    strokeCap(this.lineCap);
    stroke(this.color);

    for (let i = 0; i < this.count; i++) {
      const a1 = Math.PI * 2 / this.count * i;
      const a2 = Math.PI * 2 / this.count * (i + 1);
      line(
        (cos(a1) + random(-this.offset, this.offset)) * (this.width / 2) + this.x, (sin(a1) + random(-this.offset, this.offset)) * (this.height / 2) + this.y,
        (cos(a2) + random(-this.offset, this.offset)) * (this.width / 2) + this.x, (sin(a2) + random(-this.offset, this.offset)) * (this.height / 2) + this.y
      );
    }

    pop();
  }
}
