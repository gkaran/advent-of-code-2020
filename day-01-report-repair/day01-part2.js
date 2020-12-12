const reportRepair2 = (input) => {
  for (let i = 0; i < input.length - 2; i++) {
    for (let j = 0; j < input.length - i - 1; j++) {
      for (let k = 0; k < input.length - j; k++) {
        if (input[i] + input[i + j] + input[i + j + k] === 2020)
          return input[i] * input[i + j] * input[i + j + k];
      }
    }
  }

  throw new Error("No triplet sums to 2020");
};

module.exports = reportRepair2;
