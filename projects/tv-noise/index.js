function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  loadPixels();

  for (let x = 0; x < width; x++) {
    for(let y = 0; y < height; y++) {
      const index = (x + y * width) * 4;
      const rand = random(255);
      pixels[index + 0] = rand;
      pixels[index + 1] = rand;
      pixels[index + 2] = rand;
      pixels[index + 3] = 255;
    }
  }

  updatePixels();
}
