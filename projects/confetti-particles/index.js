let emitters = [];
let gravity;
let wind;

function preload() {
}

function setup() {
  createCanvas(600, 400);
  gravity = createVector(0, 0.2);
}

function draw() {
  wind = createVector(random(-0.2, 0.2), 0);
  clear();
  blendMode(ADD);
  background(0);

  for (let emitter of emitters) {
    emitter.emit(5);
    emitter.update();

    if (emitter.Particle === Particle) {
      emitter.applyForce(createVector(0, -0.1));
      emitter.applyForce(wind);
    }
  }

}

function mouseClicked() {
  emitters.push(new Emitter(mouseX, mouseY, Confetti, 20));
}

function doubleClicked() {
  emitters.push(new Emitter(mouseX, mouseY, Particle, null, img));
}
