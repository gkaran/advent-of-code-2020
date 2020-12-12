const part1 = require("./day12-part1");

describe("Day 12: Rain Risk - Part 1", () => {
  test("solve README example", () =>
    expect(part1(["F10", "N3", "F7", "R90", "F11"].join("\n"))).toBe(25));
});
