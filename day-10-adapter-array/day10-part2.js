const part2 = (input) => {
  const adapters = [0, ...input.split("\n").map((v) => parseInt(v))];
  adapters.sort((a, b) => a - b);
  adapters.push(adapters[adapters.length - 1] + 3);

  return countArrangementsDynamic(adapters);
};

const countArrangementsDynamic = (adapters) => {
  const arrangements = new Array(adapters.length).fill(0);
  arrangements[0] = 1;

  for (let i = 0; i < arrangements.length; i++) {
    for (let j = i - 3; j < i; j++) {
      if (adapters[i] <= adapters[j] + 3) {
        arrangements[i] += arrangements[j];
      }
    }
  }
  return arrangements[arrangements.length - 1];
};

/**
 * SLOW recursive method
 */
const countArrangementsRecursive = (adapters) => {
  if (adapters.length === 1) return 1;
  let i = 1;
  let count = 0;
  while (adapters[i] - adapters[0] <= 3) {
    // eslint-disable-next-line no-unused-vars
    count += countArrangementsRecursive(adapters.slice(i));
    i++;
  }
  return count;
};

module.exports = part2;
