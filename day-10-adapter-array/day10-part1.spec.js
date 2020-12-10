const part1 = require("./day10-part1");

describe("Day 10: Adapter Array - Part 1", () => {
  test("solve README example #1", () =>
    expect(
      part1(
        ["16", "10", "15", "5", "1", "11", "7", "19", "6", "12", "4"].join("\n")
      )
    ).toBe(35));

  test("solve README example #2", () =>
    expect(
      part1(
        [
          "28",
          "33",
          "18",
          "42",
          "31",
          "14",
          "46",
          "20",
          "48",
          "47",
          "24",
          "23",
          "49",
          "45",
          "19",
          "38",
          "39",
          "11",
          "1",
          "32",
          "25",
          "35",
          "8",
          "17",
          "7",
          "9",
          "4",
          "2",
          "34",
          "10",
          "3",
        ].join("\n")
      )
    ).toBe(220));
});
