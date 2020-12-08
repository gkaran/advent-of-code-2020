const part2 = require("./day08-part2");

describe("Day 08: Handheld Halting - Part 2", () => {
  test("solve README example", () =>
    expect(
      part2(
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
    ).toBe(8));
});
