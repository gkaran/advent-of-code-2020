const part1 = require("./day02-part1");

describe("Day 02: Password Philosophy - Part 1", () => {
  test("solve README example", () =>
    expect(part1(["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"])).toBe(
      2
    ));
});
