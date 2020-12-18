const Table = require("cli-table");
const printHero = require("./hero");
const prettyMilliseconds = require("pretty-ms");

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
  "day-12-rain-risk",
  "day-13-shuttle-search",
  "day-14-docking-data",
  "day-15-rambunctious-recitation",
  "day-16-ticket-translation",
];

printHero();

const table = new Table({
  head: ["", "Part 1", "Time", "Part 2", "Time"],
  colAligns: ["left", "right", "right", "right", "right"],
});
let totalTime = 0;
table.push(
  ...days.map((day) => {
    const puzzle = require(`./${day}`);
    const part1Results = puzzle.part1();
    const part2Results = puzzle.part2();
    totalTime += part1Results.timeRaw + part2Results.timeRaw;
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

console.log(`Puzzle Solutions (${prettyMilliseconds(totalTime)}):`);
console.log(table.toString());
