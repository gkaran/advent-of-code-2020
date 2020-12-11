const fs = require("fs");
const path = require("path");
const part1 = require("./day11-part1");
const part2 = require("./day11-part2");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

module.exports = {
  name: "Day 11: Seating System",
  part1: () => part1(input),
  part2: () => part2(input),
};
