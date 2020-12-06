const maxRows = 128;
const maxColumns = 8;

const part1 = (input) =>
  Math.max(
    ...input
      .map(calcSeatRowAndColumn)
      .map(({ row, column }) => calcSeatId(row, column))
  );

const calcSeatRowAndColumn = (seat) => ({
  row: pickHalf("F", 0, maxRows, seat.slice(0, 7)),
  column: pickHalf("L", 0, maxColumns, seat.slice(7)),
});

const calcSeatId = (row, column) => row * 8 + column;

const pickHalf = (downChar, rangeMin, rangeMax, remainingChars) => {
  if (remainingChars.length === 1) {
    return remainingChars[0] === downChar ? rangeMin : rangeMax - 1;
  }
  const middle = rangeMin + (rangeMax - rangeMin) / 2;
  const [newRangeMin, newRangeMax] =
    remainingChars[0] === downChar ? [rangeMin, middle] : [middle, rangeMax];
  return pickHalf(downChar, newRangeMin, newRangeMax, remainingChars.slice(1));
};

module.exports = { part1, calcSeatRowAndColumn, calcSeatId };
