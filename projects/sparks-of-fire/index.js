const sparks = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 50; i++) {
    sparks.push(new Spark(random(width), random(height, height + 200), random(1, 4)));
  }
}

function draw() {
  background(0);

  sparks.forEach((spark) => {
    if (spark.lifetime <= 0) spark.reset(createVector(random(width), height, random(1, 4)));

    spark.show();
    spark.update();
  });
}
