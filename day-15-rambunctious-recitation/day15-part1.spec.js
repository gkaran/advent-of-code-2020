const part1 = require("./day15-part1");

describe("Day 15: Rambunctious Recitation - Part 1", () => {
  test("solve README example #1", () => expect(part1("0,3,6")).toBe(436));

  test("solve README example #2", () => expect(part1("1,3,2")).toBe(1));

  test("solve README example #3", () => expect(part1("2,1,3")).toBe(10));

  test("solve README example #4", () => expect(part1("1,2,3")).toBe(27));

  test("solve README example #5", () => expect(part1("2,3,1")).toBe(78));

  test("solve README example #6", () => expect(part1("3,2,1")).toBe(438));

  test("solve README example #7", () => expect(part1("3,1,2")).toBe(1836));
});
