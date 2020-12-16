const fs = require("fs");
const path = require("path");
const timeFunction = require("../time");
const part1 = require("./day13-part1");
const part2 = require("./day13-part2");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

module.exports = {
  name: "Day 13: Shuttle Search",
  part1: () => timeFunction(() => part1(input)),
  part2: () => timeFunction(() => part2(input)),
};
