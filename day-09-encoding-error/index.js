const fs = require("fs");
const path = require("path");
const part1 = require("./day09-part1");
const part2 = require("./day09-part2");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

module.exports = {
  name: "Day 09: Encoding Error",
  part1: () => part1(input),
  part2: () => part2(input),
};
