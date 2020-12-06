const part1 = (input) =>
  input
    .split("\n\n")
    .map((group) => new Set(group.replace(/[\t\n\r]/gm, "").split("")).size)
    .reduce((a, b) => a + b, 0);

module.exports = part1;
