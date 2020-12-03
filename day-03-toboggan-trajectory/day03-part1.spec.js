const part1 = require("./day03-part1");

describe("Day 3: Toboggan Trajectory - Part 1", () => {
  test("solve exitREADME example", () =>
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
