const part1 = require("./day14-part1");

describe("Day 14: Docking Data - Part 1", () => {
  test("solve README example", () =>
    expect(
      part1(
        [
          "mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X",
          "mem[8] = 11",
          "mem[7] = 101",
          "mem[8] = 0",
        ].join("\n")
      )
    ).toBe(165));
});
