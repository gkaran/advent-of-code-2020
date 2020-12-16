const part2 = require("./day13-part2");

describe("Day 13: Shuttle Search - Part 2", () => {
  test("solve README example", () =>
    expect(part2(["", "7,13,x,x,59,x,31,19"].join("\n"))).toBe(1068781));

  test("solve README example #2", () =>
    expect(part2(["", "17,x,13,19"].join("\n"))).toBe(3417));

  test("solve README example #3", () =>
    expect(part2(["", "67,7,59,61"].join("\n"))).toBe(754018));

  test("solve README example #4", () =>
    expect(part2(["", "67,x,7,59,61"].join("\n"))).toBe(779210));

  test("solve README example #5", () =>
    expect(part2(["", "67,7,x,59,61"].join("\n"))).toBe(1261476));

  test("solve README example #6", () =>
    expect(part2(["", "1789,37,47,1889"].join("\n"))).toBe(1202161486));
});
