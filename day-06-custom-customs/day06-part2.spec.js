const part2 = require("./day06-part2");

describe("Day 06: Custom Customs - Part 2", () => {
  test("solve README example", () =>
    expect(
      part2(
        [
          "abc",
          "",
          "a",
          "b",
          "c",
          "",
          "ab",
          "ac",
          "",
          "a",
          "a",
          "a",
          "a",
          "",
          "b",
        ].join("\n")
      )
    ).toBe(6));
});
