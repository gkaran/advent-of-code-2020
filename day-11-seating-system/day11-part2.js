const _ = require("lodash");

const part2 = (input) => {
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
          getSeats2(grid, row, column).length >= 5 ? "L" : "#";
      } else if (grid[row][column] === "L") {
        newGrid[row][column] =
          getSeats2(grid, row, column).length === 0 ? "#" : "L";
      }
    }
  }
  return newGrid;
};

const getSeats2 = (grid, row, column) =>
  [
    getSeatAtDirection(
      grid,
      (i) => row - i,
      (i) => column - i
    ),
    getSeatAtDirection(
      grid,
      (i) => row - i,
      () => column
    ),
    getSeatAtDirection(
      grid,
      (i) => row - i,
      (i) => column + i
    ),

    getSeatAtDirection(
      grid,
      () => row,
      (i) => column - i
    ),
    getSeatAtDirection(
      grid,
      () => row,
      (i) => column + i
    ),

    getSeatAtDirection(
      grid,
      (i) => row + i,
      (i) => column - i
    ),
    getSeatAtDirection(
      grid,
      (i) => row + i,
      () => column
    ),
    getSeatAtDirection(
      grid,
      (i) => row + i,
      (i) => column + i
    ),
  ].filter((v) => v === "#");

const getSeatAtDirection = (grid, rowIndexProvider, columnIndexProvider) => {
  let i = 1;
  let element;
  do {
    element = (grid[rowIndexProvider(i)] || [])[columnIndexProvider(i)];
    i++;
  } while (element === ".");
  return element;
};

module.exports = part2;
