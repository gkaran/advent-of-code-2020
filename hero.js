const chalk = require("chalk");
const _ = require("lodash");

const strings = ["Advent of Code 2020", "", "Author: George Karanikas"];

const ornament = () =>
  chalk.keyword(["red", "gold", "blue"][_.random(0, 2)])("o");

const printHero = (tree_levels = 10, ornament_rate = 0.9, trunk_size = 2) => {
  console.log();
  for (let i = 1; i <= tree_levels; i++) {
    let row = _.pad("*".repeat(i * 2 - 1), tree_levels * 2 - 1, " ");
    row = row
      .split("")
      .map((s) => (s === "*" && Math.random() > ornament_rate ? ornament() : s))
      .join("");

    if (i > 2 && i < strings.length + 3) {
      row += chalk.red(_.pad(strings[i - 3], 30, " "));
    }
    console.log(chalk.green(row));
  }

  const trunk = chalk.keyword("brown")(_.pad("mWm", tree_levels * 2 - 1, " "));
  for (let i = 0; i < trunk_size; i++) console.log(trunk);
  console.log("\n");
};

module.exports = printHero;
