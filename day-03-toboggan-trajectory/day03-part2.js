const part1 = require("./day03-part1");

const part2 = (lines) =>
  [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 5, y: 1 },
    { x: 7, y: 1 },
    { x: 1, y: 2 },
  ]
    .map(({ x, y }) => part1(lines, x, y))
    .reduce((a, b) => a * b, 1);

module.exports = part2;
