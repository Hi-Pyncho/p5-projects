let walls = [];
let particle;
let xoff = 0;
let yoff = 10000;

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 5; i++) {
    walls.push(new Boundary(
      random(width),
      random(height),
      random(width),
      random(height))
    );
  }

  walls.push(new Boundary(-1, -1, width, -1));
  walls.push(new Boundary(width, -1, width, height));
  walls.push(new Boundary(width, height, -1, height));
  walls.push(new Boundary(-1, height, -1, -1));
  particle = new Particle();
}

function draw() {
  background(0);


  for (let wall of walls) {
    wall.show();
  }

  particle.setPos(mouseX, mouseY);
  particle.show();
  particle.look(walls);

  xoff += 0.02;
  yoff += 0.02;
}
