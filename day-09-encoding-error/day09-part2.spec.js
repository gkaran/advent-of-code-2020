const part2 = require("./day09-part2");

describe("Day 09: Encoding Error - Part 2", () => {
  test("solve README example", () =>
    expect(
      part2(
        [
          "35",
          "20",
          "15",
          "25",
          "47",
          "40",
          "62",
          "55",
          "65",
          "95",
          "102",
          "117",
          "150",
          "182",
          "127",
          "219",
          "299",
          "277",
          "309",
          "576",
        ].join("\n"),
        5
      )
    ).toBe(62));
});
