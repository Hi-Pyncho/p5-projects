class Cell {
  constructor(x, y, size, cols, rows) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.walls = [true, true, true, true]; // top, right, bottom, left
    this.visited = false;
    this.cols = cols;
    this.sx = this.x * this.size;
    this.sy = this.y * this.size;
  }

  getIndex(x, y) {
    if (x < 0 || y < 0 || x > this.cols - 1 || y > this.rows - 1) {
      return -1;
    }

    return x + y * this.cols;
  }

  show() {
    stroke(255);
    noFill();

    // top
    if (this.walls[0]) {
      line(this.sx, this.sy, this.sx + this.size, this.sy);
    }

    // right
    if (this.walls[1]) {
      line(this.sx + this.size, this.sy, this.sx + this.size, this.sy + this.size);
    }

    // bottom
    if (this.walls[2]) {
      line(this.sx, this.sy + this.size, this.sx + this.size, this.sy + this.size);
    }

    // left
    if (this.walls[3]) {
      line(this.sx, this.sy, this.sx, this.sy + this.size);
    }

    if (this.visited) {
      noStroke();
      fill(0, 255, 0, 100);
      rect(this.sx, this.sy, this.size);
    }
  }

  highlight() {
    fill(255, 0, 0);
    rect(this.sx, this.sy, this.size);
  }

  getUnvisitedNeighbor(grid) {
    const neighbors = [
      grid[this.getIndex(this.x, this.y - 1)],
      grid[this.getIndex(this.x + 1, this.y)],
      grid[this.getIndex(this.x, this.y + 1)],
      grid[this.getIndex(this.x - 1, this.y)],
    ].filter((neighbor) => neighbor && !neighbor.visited);

    return random(neighbors);
  }
}
