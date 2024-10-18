const vertexes = [];
let dragPoint = null;
const dragRadius = 10;
let wayPath = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  let mags = 0;

  for (let i = 0; i < vertexes.length; i++) {
    const current = vertexes[i];
    const next = vertexes[i + 1];

    circle(current.x, current.y, dragRadius * 2);

    if (!next) break;

    mags += current.dist(next);
    line(current.x, current.y, next.x, next.y);
  }

  text(mags, 10, 10);
}

function mouseDragged() {
  if(dragPoint) {
    dragPoint.x = mouseX;
    dragPoint.y = mouseY;
  }
}
function mousePressed() {
  for(let i = vertexes.length - 1; i >= 0; i --) {
    const isPressed = mouseInCircle(vertexes[i], dragRadius);

    if(isPressed) {
      dragPoint = vertexes[i];
      break;
    }
  }
}

function mouseReleased() {
  if (!dragPoint) {
    vertexes.push(createVector(mouseX, mouseY));
  }
  dragPoint = null;
}

function keyReleased() {
  if (key === 'Backspace') {
    vertexes.pop();
  }
}



function mouseInCircle(pos, radius) {
  return dist(mouseX, mouseY, pos.x, pos.y) < radius
}
