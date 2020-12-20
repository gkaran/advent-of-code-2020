const part2 = require("./day17-part2");

describe("Day 17: Conway Cubes - Part 2", () => {
  test("solve README example", () =>
    expect(part2([".#.", "..#", "###"].join("\n"))).toBe(848));
});
