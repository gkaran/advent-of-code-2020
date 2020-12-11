const Table = require("cli-table");
const printHero = require("./hero");

const days = [
  "day-01-report-repair",
  "day-02-password-philosophy",
  "day-03-toboggan-trajectory",
  "day-04-password-processing",
  "day-05-binary-boarding",
  "day-06-custom-customs",
  "day-07-handy-haversacks",
  "day-08-handheld-halting",
  "day-09-encoding-error",
  "day-10-adapter-array",
  "day-11-seating-system",
];

printHero();

console.log("Puzzle Solutions:");
const table = new Table({
  head: ["", "Part 1", "Time", "Part 2", "Time"],
  colAligns: ["left", "right", "right", "right", "right"],
});
table.push(
  ...days.map((day) => {
    const puzzle = require(`./${day}`);
    const part1Results = puzzle.part1();
    const part2Results = puzzle.part2();
    return {
      [puzzle.name]: [
        part1Results.result,
        part1Results.time,
        part2Results.result,
        part2Results.time,
      ],
    };
  })
);

console.log(table.toString());
