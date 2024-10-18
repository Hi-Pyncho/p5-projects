let pursuer;
let target;

function setup() {
  createCanvas(800, 800);
  pursuer = new Vehicle(100, 100);
  pursuer.maxSpeed = 12;
  target = new Vehicle(200, 150, { color: color(255, 0, 0) });
}

function draw() {
  background(0);
  pursuer.edges();
  target.edges();

  const steering = pursuer.pursue(target, true);
  pursuer.applyForce(steering);
  pursuer.update();
  pursuer.show();

  const distance = p5.Vector.dist(pursuer, target);

  if (distance < pursuer.r + target.r) {
    target = new Vehicle(random(width), random(height), { color: color(255, 0, 0) });
  }

  const evading = target.evade(pursuer);
  target.applyForce(evading);
  target.update();
  target.show();
}
