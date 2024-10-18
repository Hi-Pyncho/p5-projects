const linesGap = 8;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for (let i = 0; i < width; i += linesGap) {
    line(i, 0, mouseX, mouseY);
  }

  for (let i = 0; i < width; i += linesGap) {
    line(0, i, mouseX, mouseY);
  }

  for (let i = 0; i < width; i += linesGap) {
    line(i, height, mouseX, mouseY);
  }

  for (let i = 0; i < width; i += linesGap) {
    line(width, i, mouseX, mouseY);
  }
}
