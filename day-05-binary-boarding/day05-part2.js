const { calcSeatRowAndColumn, calcSeatId } = require("./day05-part1");

const part2 = (input) => {
  const seats = input
    .map(calcSeatRowAndColumn)
    .map(({ row, column }) => ({ row, column, id: calcSeatId(row, column) }))
    .reduce((a, b) => ({ ...a, [`${b.row}:${b.column}`]: b.id }), {});

  const occupiedSeats = Object.keys(seats);
  const emptySeats = [];
  for (let row = 0; row < 128; row++) {
    for (let column = 0; column < 8; column++) {
      if (!occupiedSeats.includes(`${row}:${column}`))
        emptySeats.push({ row, column, id: calcSeatId(row, column) });
    }
  }

  const occupiedSeatIds = Object.values(seats);
  const subjectSeats = emptySeats.filter(
    (seat) =>
      occupiedSeatIds.includes(seat.id - 1) &&
      occupiedSeatIds.includes(seat.id + 1)
  );
  if (subjectSeats.length > 1) throw new Error("Multiplse seats");
  return subjectSeats[0].id;
};

module.exports = part2;
