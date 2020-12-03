const part2 = require("./day03-part2");

describe("Day3: Toboggan Trajectory - Part 2", () => {
  test("solve README example", () =>
    expect(
      part2([
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
    ).toBe(336));
});
