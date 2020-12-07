const part2 = require("./day02-part2");

describe("Day 02: Password Philosophy - Part 2", () => {
  test("solve README example", () =>
    expect(part2(["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"])).toBe(
      1
    ));
});
