const part1 = (input) => {
  const program = input.split("\n");

  // TODO: Use byte shifting to solve

  let mask = "";
  let addressSpace = [];
  for (const line of program) {
    if (line.indexOf("mask") === 0)
      [, mask] = line.split("=").map((v) => v.trim());
    else {
      const [position, value] = line
        .split("=")
        .map((v) => parseInt(v.replace(/\D/g, "").trim()));
      let binaryValue = value.toString(2).padStart(mask.length, "0");

      for (let i = 0; i < mask.length; i++) {
        if (mask[i] !== "X") binaryValue = replaceAt(binaryValue, i, mask[i]);
      }
      addressSpace[position] = parseInt(binaryValue, 2);
    }
  }

  return addressSpace.reduce((a, b) => a + b);
};

const replaceAt = (str, index, replacement) =>
  str.substr(0, index) + replacement + str.substr(index + replacement.length);

module.exports = part1;
