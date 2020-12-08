const _ = require("lodash");
const { parseInstructions, evaluateInstructions } = require("./day08-util");

const part2 = (input) => {
  const instructions = parseInstructions(input);

  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i].operation === "jmp") {
      const patchedInstructions = _.cloneDeep(instructions);
      patchedInstructions[i].operation = "nop";
      const { success, accumulator } = evaluateInstructions(
        patchedInstructions
      );
      if (success) return accumulator;
    } else if (instructions[i].operation === "nop") {
      const patchedInstructions = _.cloneDeep(instructions);
      patchedInstructions[i].operation = "jmp";
      const { success, accumulator } = evaluateInstructions(
        patchedInstructions
      );
      if (success) return accumulator;
    }
  }
};

module.exports = part2;
