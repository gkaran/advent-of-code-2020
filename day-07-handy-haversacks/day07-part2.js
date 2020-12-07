const { parseRules } = require("./day07-part1");
const _ = require("lodash");

const part2 = (input, searchingBadColor = "shiny gold") =>
  countTotalBags(parseRules(input), searchingBadColor);

const countTotalBags = (rules, c) => {
  const bags = rules[c].contains;
  return _.sum([
    ...bags.map(({ count }) => count),
    ...bags.map(({ color, count }) => count * countTotalBags(rules, color)),
  ]);
};

module.exports = part2;
