const Table = require("cli-table");
const printHero = require("./hero");

const days = ["day-01-report-repair", "day-02-password-philosophy"];

printHero();

console.log("Puzzle Solutions:");
const table = new Table({ head: ["", "Part 1", "Part 2"] });
table.push(
  ...days.map((day) => {
    const puzzle = require(`./${day}`);
    return { [puzzle.name]: [puzzle.part1(), puzzle.part2()] };
  })
);

console.log(table.toString());
