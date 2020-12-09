const part1 = require("./day09-part1");
const _ = require("lodash");

const part2 = (input, preamble = 25) => {
  const invalidNumber = part1(input, preamble);

  const numbers = input.split("\n").map((v) => parseInt(v));

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 2; j <= numbers.length; j++) {
      const range = numbers.slice(i, j);
      const sum = _.sum(range);
      if (sum === invalidNumber) return _.min(range) + _.max(range);
      if (sum > invalidNumber) break;
    }
  }
};

module.exports = part2;
