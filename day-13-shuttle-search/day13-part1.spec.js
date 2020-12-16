const part1 = require("./day13-part1");

describe("Day 13: Shuttle Search - Part 1", () => {
  test("solve README example", () =>
    expect(part1(["939", "7,13,x,x,59,x,31,19"].join("\n"))).toBe(295));
});
