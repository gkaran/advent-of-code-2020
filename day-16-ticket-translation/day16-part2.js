const part2 = (input) => {
  let [rules, myTicket, nearByTickets] = input
    .split("\n\n")
    .map((v) => v.split("\n"));
  rules = rules
    .map((rule) => {
      const [name, ranges] = rule.split(": ");

      const values = ranges.split(" or ").flatMap((r) => {
        const [start, end] = r.split("-");
        return range(+start, +end);
      });

      return { [name]: values };
    })
    .reduce((a, b) => ({ ...a, ...b }));

  const allRulesValues = Object.values(rules).flat();

  nearByTickets = nearByTickets
    .slice(1)
    .map((ticket) => ticket.split(",").map((v) => +v))
    .filter((ticket) => ticket.every((v) => allRulesValues.includes(v)));

  let allFields = Object.keys(rules);
  const indexes = {};

  for (let i = 0; i < nearByTickets[0].length; i++) {
    const values = nearByTickets.flatMap((ticket) => ticket.slice(i, i + 1));
    for (let field of allFields) {
      if (values.every((v) => rules[field].includes(v))) {
        indexes[field] = [...(indexes[field] || []), i];
      }
    }
  }

  let length = 1;
  let foundKeys = {};
  while (length <= nearByTickets[0].length) {
    const [key, values] = Object.entries(indexes).find(
      ([, values]) => values.length === length
    );
    const identifiedColumns = Object.values(foundKeys);
    foundKeys = {
      ...foundKeys,
      [key]: values.filter((v) => !identifiedColumns.includes(v))[0],
    };
    length++;
  }

  myTicket = myTicket[1].split(",").map((v) => +v);

  return Object.keys(foundKeys)
    .filter((key) => key.indexOf("departure") === 0)
    .map((key) => myTicket[foundKeys[key]])
    .reduce((a, b) => a * b, 1);
};

const range = (start, end) =>
  Array(end - start + 1)
    .fill(start)
    .map((x, y) => x + y);

module.exports = part2;
