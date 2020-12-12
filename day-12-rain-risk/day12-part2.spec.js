const part2 = require("./day12-part2");

describe("Day 12: Rain Risk - Part 2", () => {
  test("solve README example", () =>
    expect(part2(["F10", "N3", "F7", "R90", "F11"].join("\n"))).toBe(286));
});
