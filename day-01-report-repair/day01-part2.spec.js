const reportRepair = require("./day01-part2");

describe("Day 1:Report Repair - Part 2", () => {
  test("solve readme example", () => {
    expect(reportRepair([1721, 979, 366, 299, 675, 1456])).toBe(241861950);
  });

  test("solve for invalid input", () => {
    expect(() => reportRepair([1, 2, 3, 4, 5])).toThrow(
      "No triplet sums to 2020"
    );
  });
});
