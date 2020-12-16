const part2 = require("./day14-part2");

describe("Day 14: Docking Data - Part 2", () => {
  test("solve README example", () =>
    expect(
      part2(
        [
          "mask = 000000000000000000000000000000X1001X",
          "mem[42] = 100",
          "mask = 00000000000000000000000000000000X0XX",
          "mem[26] = 1",
        ].join("\n")
      )
    ).toBe(208));
});
