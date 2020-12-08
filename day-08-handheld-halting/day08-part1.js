const { parseInstructions, evaluateInstructions } = require("./day08-util");

const part1 = (input) =>
  evaluateInstructions(parseInstructions(input)).accumulator;

module.exports = part1;
