const _ = require("lodash");

const reportRepair2 = (input) => {
  const triplet = input
    .map((v, i) =>
      input
        .slice(i + 1)
        .map((w, j) => input.slice(j + 1).map((z) => [v, w, z]))
        .flat()
    )
    .flat()
    .filter((p) => _.sum(p) === 2020)[0];
  if (!triplet) throw new Error("No triplet sums to 2020");
  return _.reduce(triplet, _.multiply);
};

module.exports = reportRepair2;
