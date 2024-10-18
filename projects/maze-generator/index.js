const grid = [];
const cellSize = 50;
let current;
const stack = [];
let cols;
let rows;
let steps = 0;

function setup() {
  createCanvas(600, 600);
  frameRate(60);

  cols = width / cellSize;
  rows = height / cellSize;

  for (let y = 0; y < rows; y ++) {
    for (let x = 0; x < cols; x++) {
      grid.push(new Cell(x, y, cellSize, cols, rows));
    }
  }

  current = grid[0];
}

function draw() {
  background(0);

  grid.forEach((cell) => cell.show());

  current.visited = true;
  current.highlight();
  const nextNeighbor = current.getUnvisitedNeighbor(grid);

  if (nextNeighbor) {
    steps += 1;
    nextNeighbor.visited = true;
    stack.push(current);
    removeWalls(current, nextNeighbor);
    current = nextNeighbor;
  } else if (stack.length) {
    current = stack.pop();
  }
}

function removeWalls(current, next) {
  const toUp = current.y > next.y;
  const toBottom = current.y < next.y;
  const toLeft = current.x > next.x;
  const toRight = current.x < next.x;

  if (toUp) {
    current.walls[0] = false;
    next.walls[2] = false;
  }

  else if (toBottom) {
    current.walls[2] = false;
    next.walls[0] = false;
  }

  else if (toLeft) {
    current.walls[3] = false;
    next.walls[1] = false;
  }

  else if (toRight) {
    current.walls[1] = false;
    next.walls[3] = false;
  }
}
