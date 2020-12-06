const { part1 } = require("./day05-part1");

describe("Day 5: Binary Boarding - Part 1", () => {
  test("solve README example: BFFFBBFRRR", () =>
    expect(part1(["BFFFBBFRRR"])).toBe(567));

  test("solve README example: FFFBBBFRRR", () =>
    expect(part1(["FFFBBBFRRR"])).toBe(119));

  test("solve README example: BBFFBBFRLL", () =>
    expect(part1(["BBFFBBFRLL"])).toBe(820));

  test("solve README examples", () =>
    expect(part1(["BFFFBBFRRR", "FFFBBBFRRR", "BBFFBBFRLL"])).toBe(820));
});
