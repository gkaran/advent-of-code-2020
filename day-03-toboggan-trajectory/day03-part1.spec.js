const part1 = require("./day03-part1");

describe("Day 03: Toboggan Trajectory - Part 1", () => {
  test("solve README example", () =>
    expect(
      part1([
        "..##.......",
        "#...#...#..",
        ".#....#..#.",
        "..#.#...#.#",
        ".#...##..#.",
        "..#.##.....",
        ".#.#.#....#",
        ".#........#",
        "#.##...#...",
        "#...##....#",
        ".#..#...#.#",
      ])
    ).toBe(7));
});
