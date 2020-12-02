const reportRepair = require("./day01-part01");

describe("Day 1:Report Repair - Part 1", () => {
  test("solve readme example", () => {
    expect(reportRepair([1721, 979, 366, 299, 675, 1456])).toBe(514579);
  });

  test("solve for invalid input", () => {
    expect(() => reportRepair([1, 2, 3, 4, 5])).toThrow("No pair sums to 2020");
  });
});
