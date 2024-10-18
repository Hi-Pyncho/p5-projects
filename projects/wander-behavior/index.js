let vehicle;

function setup() {
  createCanvas(800, 800);
  vehicle = new Vehicle(300, 300);
}

function draw() {
  background(0);
  vehicle.edges();

  const wander = vehicle.wander();

  vehicle.applyForce(wander);
  vehicle.update();
  vehicle.show();

}
