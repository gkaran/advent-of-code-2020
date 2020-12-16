const part1 = (input) => {
  let [earliestTimestamp, busIds] = input.split("\n");
  earliestTimestamp = parseInt(earliestTimestamp);

  let earliestBus = { id: 0, diff: earliestTimestamp };
  for (let id of busIds.split(",")) {
    if (id === "x") continue;
    id = parseFloat(id);
    let r = Math.round(earliestTimestamp / id);
    if (id * r < earliestTimestamp) r++;
    const diff = id * r - earliestTimestamp;
    if (diff < earliestBus.diff) earliestBus = { id, diff };
  }
  return earliestBus.id * earliestBus.diff;
};

module.exports = part1;
