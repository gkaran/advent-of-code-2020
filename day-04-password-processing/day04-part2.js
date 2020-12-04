const _ = require("lodash");

const requiredFields = {
  byr: (v) => v.length === 4 && _.inRange(parseInt(v), 1920, 2003),
  iyr: (v) => v.length === 4 && _.inRange(parseInt(v), 2010, 2021),
  eyr: (v) => v.length === 4 && _.inRange(parseInt(v), 2020, 2031),
  hgt: (v) =>
    (/^\d{3}cm$/.test(v) &&
      _.inRange(parseInt(v.replace(/[^\d]/g, "")), 150, 194)) ||
    (/^\d{2}in$/.test(v) &&
      _.inRange(parseInt(v.replace(/[^\d]/g, "")), 59, 77)),
  hcl: (v) => /^#[0-9a-f]{6}$/.test(v),
  ecl: (v) => ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(v),
  pid: (v) => /^\d{9}$/.test(v),
};

const part2 = (input) =>
  input
    .split("\n\n")
    .map((passport) =>
      passport
        .split(/(\s+)/)
        .filter((e) => e.trim().length > 0)
        .reduce((a, b) => ({ ...a, [b.split(":")[0]]: b.split(":")[1] }), {})
    )
    .filter(
      (passport) =>
        !_.difference(Object.keys(requiredFields), Object.keys(passport)).length
    )
    .filter((passport) =>
      Object.entries(requiredFields).every(([key, validator]) =>
        validator(passport[key])
      )
    ).length;

module.exports = part2;
