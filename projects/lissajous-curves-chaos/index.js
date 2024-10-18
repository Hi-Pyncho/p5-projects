let radiusX = 100;

let radiusY = 100;

let centerX;
let centerY;

let itemsList = [];

const radius = 10;

function setup() {
  createCanvas(400, 400);

  centerX = width / 2;
  centerY = height / 2;

  itemsList = Array.from({ length: 20 }).map((_, i) => ({
    angleX: Math.random() * Math.PI * 2,
    angleY: Math.random() * Math.PI * 2,
    speedX: Math.random() / 10,
    speedY: Math.random() / 10,
  }));
}

function draw() {
  background(0);

  itemsList.forEach((item) => {
    const x = centerX + Math.cos(item.angleX) * radiusX;
    const y = centerY + Math.sin(item.angleY) * radiusY;

    circle(x, y, radius);

    item.angleX += item.speedX;
    item.angleY += item.speedY;
  });
}
