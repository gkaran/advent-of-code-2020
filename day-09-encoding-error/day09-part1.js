const _ = require("lodash");

const part1 = (input, preamble = 25) => {
  const numbers = input.split("\n").map((v) => parseInt(v));

  for (let i = 0; i < numbers.length - preamble; i++) {
    const sumFound = !!numbers
      .slice(i, preamble + i)
      .flatMap((v, j) =>
        numbers.slice(i + 1 + j, preamble + i).map((w) => [v, w])
      )
      .filter((pair) => _.sum(pair) === numbers[i + preamble]).length;

    if (!sumFound) return numbers[i + preamble];
  }
};

module.exports = part1;
