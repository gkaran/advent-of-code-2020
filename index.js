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
];

printHero();

console.log("Puzzle Solutions:");
const table = new Table({
  head: ["", "Part 1", "Part 2"],
  colAligns: ["left", "right", "right"],
});
table.push(
  ...days.map((day) => {
    const puzzle = require(`./${day}`);
    return { [puzzle.name]: [puzzle.part1(), puzzle.part2()] };
  })
);

console.log(table.toString());
