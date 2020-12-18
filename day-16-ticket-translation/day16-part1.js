const part1 = (input) => {
  let [rules, , nearByTickets] = input.split("\n\n").map((v) => v.split("\n"));
  rules = rules.flatMap((rule) =>
    rule
      .split(":")[1]
      .trim()
      .split(" or ")
      .flatMap((r) => {
        const [start, end] = r.split("-");
        return range(+start, +end);
      })
  );

  return nearByTickets
    .slice(1)
    .flatMap((ticket) =>
      ticket
        .split(",")
        .map((v) => +v)
        .filter((v) => !rules.includes(v))
    )
    .reduce((a, b) => a + b);
};

const range = (start, end) =>
  Array(end - start + 1)
    .fill(start)
    .map((x, y) => x + y);

module.exports = part1;
