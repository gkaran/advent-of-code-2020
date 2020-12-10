const fs = require("fs");
const path = require("path");
const part1 = require("./day10-part1");
const part2 = require("./day10-part2");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

module.exports = {
  name: "Day 10: Adapter Array",
  part1: () => part1(input),
  part2: () => part2(input),
};
