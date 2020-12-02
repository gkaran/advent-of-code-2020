const fs = require("fs");
const path = require("path");
//const chalk = require('chalk');
const part1 = require("./day01-part1");
const part2 = require("./day01-part2");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .split("\n")
  .map((v) => parseInt(v));

//console.log(utils.xmas_str('*** Day 1: Report Repair ***'));
//console.log(`Part 1: ${chalk.yellow((part1(input)))}`);
//console.log(`Part 2: ${chalk.yellow((part2(input)))}`);

module.exports = {
  name: "Day 1: Report Repair",
  part1: () => part1(input),
  part2: () => part2(input),
};
