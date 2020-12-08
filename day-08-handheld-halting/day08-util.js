const parseInstructions = (input) =>
  input
    .split("\n")
    .map((instruction) => instruction.split(" "))
    .map(([operation, argument]) => ({
      operation,
      argument: parseInt(argument),
      visited: false,
    }));

const evaluateInstructions = (instructions) => {
  let accumulator = 0;
  let line = 0;
  while (!instructions[line].visited) {
    instructions[line].visited = true;
    switch (instructions[line].operation) {
      case "nop":
        line++;
        break;
      case "acc":
        accumulator += instructions[line].argument;
        line++;
        break;
      case "jmp":
        line += instructions[line].argument;
        break;
    }
    if (line >= instructions.length) return { success: true, accumulator };
  }

  return { success: false, accumulator };
};

module.exports = { parseInstructions, evaluateInstructions };
