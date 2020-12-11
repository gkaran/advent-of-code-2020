const fs = require("fs");
const path = require("path");
const timeFunction = require("../time");
const part1 = require("./day01-part1");
const part2 = require("./day01-part2");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .split("\n")
  .map((v) => parseInt(v));

module.exports = {
  name: "Day 01: Report Repair",
  part1: () => timeFunction(() => part1(input)),
  part2: () => timeFunction(() => part2(input)),
};
