class Wave {
  constructor(width, height, y, size) {
    this.width = width
    this.height = height
    this.y = y
    this.size = size
  }

  draw() {
    push()
    translate(0, this.y)
    noFill()
    beginShape()
    stroke(255)
    for(let i = 0; i < width; i += this.size) {
      strokeWeight(10)
      strokeCap(PROJECT)
      vertex(i, 0)
      vertex(i + this.size / 2, random(-this.size, -this.size + this.size / 4) / 2)
      vertex(i + this.size, 0)
    }
    endShape()
    pop()
  }
}

function setup() {
  createCanvas(400, 400)
  frameRate(5)
}

function draw() {
  background(0)

  for(let i = 30; i < height; i += 30) {
     new Wave(width, height, i, 40).draw()
  }
}
