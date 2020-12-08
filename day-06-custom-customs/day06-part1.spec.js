const part1 = require("./day06-part1");

describe("Day 06: Custom Customs - Part 1", () => {
  test("solve README example", () =>
    expect(
      part1(
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
    ).toBe(11));
});
