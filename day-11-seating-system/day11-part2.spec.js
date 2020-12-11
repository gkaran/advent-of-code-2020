const part2 = require("./day11-part2");

describe("Day 11: Seating System - Part 2", () => {
  test("solve README example", () =>
    expect(
      part2(
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
    ).toBe(26));
});
