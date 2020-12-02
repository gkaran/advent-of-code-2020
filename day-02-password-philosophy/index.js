const fs = require("fs");
const path = require("path");
const part1 = require("./day02-part1");
const part2 = require("./day02-part2");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .split("\n");

module.exports = {
  name: "Day 2: Password Philosophy",
  part1: () => part1(input),
  part2: () => part2(input),
};
