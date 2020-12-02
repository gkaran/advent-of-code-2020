const _ = require("lodash");

const reportRepair = (input) => {
  const pair = input
    .map((v, i) => input.slice(i + 1).map((w) => [v, w]))
    .flat()
    .filter((p) => _.sum(p) === 2020)[0];
  if (!pair) throw new Error("No pair sums to 2020");
  return _.reduce(pair, _.multiply);
};

module.exports = reportRepair;
