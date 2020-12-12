const reportRepair = (input) => {
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = 0; j < input.length - i; j++) {
      if (input[i] + input[i + j] === 2020) return input[i] * input[i + j];
    }
  }
  throw new Error("No pair sums to 2020");
};

module.exports = reportRepair;
