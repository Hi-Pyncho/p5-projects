let tCircle;
let tRect;
let angleShift = 0;

function setup() {
  frameRate(10);
  createCanvas(400, 400);

  tRect = new TwitchyRect({
    x: 10,
    y: 10,
    width: width - 20,
    height: height - 20,
    offset: 3,
    gap: 10,
    lineWidth: 5,
    color: color('#36827F')
  });

  tCircle = new TwitchyCircle({
    x: width / 2,
    y: height / 2,
    width: width - 70,
    height: height - 70,
    count: 20,
    offset: 0.04,
    lineWidth: 5,
    color: color('#464D77')
  });
}

function draw() {
  background(color('#F9DB6D'));

  [tCircle, tRect].forEach((item) => item.draw());

  for (let i = 0; i < Math.PI * 2; i += Math.PI / 4) {
    const x = width / 2 + cos(i + angleShift) * 120;
    const y = height / 2 + sin(i + angleShift) * 120;

    const c = new TwitchyCircle({
      x,
      y,
      width: 20,
      height: 20,
      count: 8,
      offset: 0.1,
      lineWidth: 3,
      color: color('#877666')
    });

    c.draw();
  }

  const tLine1 = new TwitchyLine({
    x1: cos(-angleShift) * 70 + (width / 2),
    y1: sin(-angleShift) * 70 + (height / 2),
    x2: cos(-angleShift) * -1 * 70 + (width / 2),
    y2: sin(-angleShift) * -1 * 70 + (height / 2),
    count: 5,
    offset: 5,
    lineWidth: 5,
    color: color('#F4EDED')
  });

  const tLine2 = new TwitchyLine({
    x1: cos(-angleShift - Math.PI / 2) * 70 + (width / 2),
    y1: sin(-angleShift - Math.PI / 2) * 70 + (height / 2),
    x2: cos(-angleShift - Math.PI / 2) * -1 * 70 + (width / 2),
    y2: sin(-angleShift - Math.PI / 2) * -1 * 70 + (height / 2),
    count: 5,
    offset: 5,
    lineWidth: 5,
    color: color('#F4EDED')
  });

  [tLine1, tLine2].forEach((item) => item.draw());

  angleShift += 0.1;
}
