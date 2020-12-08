const part1 = require("./day08-part1");

describe("Day 08: Handheld Halting - Part 1", () => {
  test("solve README example", () =>
    expect(
      part1(
        [
          "nop +0",
          "acc +1",
          "jmp +4",
          "acc +3",
          "jmp -3",
          "acc -99",
          "acc +1",
          "jmp -4",
          "acc +6",
        ].join("\n")
      )
    ).toBe(5));
});
