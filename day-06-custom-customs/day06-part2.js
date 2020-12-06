const _ = require("lodash");

const part2 = (input) =>
  input
    .split("\n\n")
    .map(
      (group) =>
        _.intersection(
          ...group
            .split("\n")
            .map((answer) =>
              answer.split("").filter((e) => e.trim().length > 0)
            )
        ).length
    )
    .reduce((a, b) => a + b, 0);

module.exports = part2;
