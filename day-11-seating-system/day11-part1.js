const _ = require("lodash");

const part1 = (input) => {
  let grid = input.split("\n").map((row) => row.split(""));
  let oldGrid;
  do {
    oldGrid = _.cloneDeep(grid);
    grid = computeRound(grid);
  } while (!_.isEqual(grid, oldGrid));

  return grid
    .map((row) => row.filter((v) => v === "#").length)
    .reduce((a, b) => a + b);
};

const computeRound = (grid) => {
  const newGrid = [...Array(grid.length)].map(() => [...Array(grid[0].length)]);

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] === ".") {
        newGrid[row][column] = ".";
      } else if (grid[row][column] === "#") {
        newGrid[row][column] =
          getAdjacentOccupiedSeats(grid, row, column).length >= 4 ? "L" : "#";
      } else if (grid[row][column] === "L") {
        newGrid[row][column] =
          getAdjacentOccupiedSeats(grid, row, column).length === 0 ? "#" : "L";
      }
    }
  }
  return newGrid;
};

const getAdjacentOccupiedSeats = (grid, row, column) => {
  return [
    (grid[row - 1] || [])[column - 1],
    (grid[row - 1] || [])[column],
    (grid[row - 1] || [])[column + 1],
    (grid[row] || [])[column - 1],
    (grid[row] || [])[column + 1],
    (grid[row + 1] || [])[column - 1],
    (grid[row + 1] || [])[column],
    (grid[row + 1] || [])[column + 1],
  ].filter((v) => v === "#");
};

module.exports = part1;
