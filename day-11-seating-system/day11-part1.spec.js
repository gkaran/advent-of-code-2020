const part1 = require("./day11-part1");

describe("Day 11: Seating System - Part 1", () => {
  test("solve README example", () =>
    expect(
      part1(
        [
          "L.LL.LL.LL",
          "LLLLLLL.LL",
          "L.L.L..L..",
          "LLLL.LL.LL",
          "L.LL.LL.LL",
          "L.LLLLL.LL",
          "..L.L.....",
          "LLLLLLLLLL",
          "L.LLLLLL.L",
          "L.LLLLL.LL",
        ].join("\n")
      )
    ).toBe(37));
});
