const fs = require("fs");
const path = require("path");
const { part1 } = require("./day05-part1");
const part2 = require("./day05-part2");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .split("\n");

module.exports = {
  name: "Day 05: Binary Boarding",
  part1: () => part1(input),
  part2: () => part2(input),
};
