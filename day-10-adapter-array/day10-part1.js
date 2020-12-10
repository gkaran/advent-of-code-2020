const part1 = (input) => {
  const adapters = [0, ...input.split("\n").map((v) => parseInt(v))];
  adapters.sort((a, b) => a - b);
  adapters.push(adapters[adapters.length - 1] + 3);

  const diffs = {};
  for (let i = 0; i < adapters.length - 1; i++) {
    const diff = adapters[i + 1] - adapters[i];
    diffs[diff] = (diffs[diff] || 0) + 1;
  }

  return diffs[1] * diffs[3];
};

module.exports = part1;
