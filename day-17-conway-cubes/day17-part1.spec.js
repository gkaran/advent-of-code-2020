const part1 = require("./day17-part1");

describe("Day 17: Conway Cubes - Part 1", () => {
  test("solve README example", () =>
    expect(part1([".#.", "..#", "###"].join("\n"))).toBe(112));
});
