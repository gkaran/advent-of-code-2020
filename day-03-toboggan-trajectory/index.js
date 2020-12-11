const fs = require("fs");
const path = require("path");
const timeFunction = require("../time");
const part1 = require("./day03-part1");
const part2 = require("./day03-part2");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .split("\n");

module.exports = {
  name: "Day 03: Toboggan Trajectory",
  part1: () => timeFunction(() => part1(input)),
  part2: () => timeFunction(() => part2(input)),
};
