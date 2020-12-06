const part1 = require("./day06-part2");

describe("Day 06: Custom Customs - Part 2", () => {
  test("solve README example", () =>
    expect(
      part1(`abc

a
b
c

ab
ac

a
a
a
a

b`)
    ).toBe(6));
});
