const part2 = require("./day15-part2");

describe("Day 15: Rambunctious Recitation - Part 2", () => {
  test("solve README example #1", () => expect(part2("0,3,6")).toBe(175594));

  test("solve README example #2", () => expect(part2("1,3,2")).toBe(2578));

  test("solve README example #3", () => expect(part2("2,1,3")).toBe(3544142));

  test("solve README example #4", () => expect(part2("1,2,3")).toBe(261214));

  test("solve README example #5", () => expect(part2("2,3,1")).toBe(6895259));

  test("solve README example #6", () => expect(part2("3,2,1")).toBe(18));

  test("solve README example #7", () => expect(part2("3,1,2")).toBe(362));
});
