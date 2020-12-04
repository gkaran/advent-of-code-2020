const _ = require("lodash");

const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const part1 = (input) =>
  input
    .split("\n\n")
    .map((passport) =>
      passport
        .split(/(\s+)/)
        .filter((e) => e.trim().length > 0)
        .reduce((a, b) => [...a, b.split(":")[0]], [])
    )
    .filter(
      (passportFields) => !_.difference(requiredFields, passportFields).length
    ).length;

module.exports = part1;
