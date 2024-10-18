let vehicle;
let path;

function setup() {
  createCanvas(800, 800);
  vehicle = new Vehicle(300, 300);
  path = new Path(0, height / 2, width, height / 2);
}

function draw() {
  background(0);
  vehicle.edges();

  path.show();

  const follow = vehicle.follow(path);
  vehicle.applyForce(follow);

  vehicle.update();
  vehicle.show();

}
