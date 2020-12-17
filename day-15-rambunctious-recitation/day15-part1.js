const part1 = (input, rounds = 2020) => {
  const indexes = new Array(rounds);
  const numbers = input.split(",").map((v) => parseInt(v));
  let nextNumber;

  const computeNumberValue = (number, index) =>
    typeof indexes[number] === "undefined" ? 0 : index - indexes[number];

  for (let i = 0; i < numbers.length - 1; i++) {
    const number = numbers[i];
    indexes[number] = i + 1;
  }

  nextNumber = computeNumberValue(numbers[numbers.length - 1], numbers.length);
  indexes[numbers[numbers.length - 1]] = numbers.length;

  for (let i = numbers.length + 1; i < rounds; i++) {
    const tempNextNumber = computeNumberValue(nextNumber, i);
    indexes[nextNumber] = i;
    nextNumber = tempNextNumber;
  }

  return nextNumber;
};

module.exports = part1;
