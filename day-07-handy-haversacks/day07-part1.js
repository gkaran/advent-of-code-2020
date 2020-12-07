const _ = require("lodash");

const part1 = (input, searchingBadColor = "shiny gold") =>
  new Set(countOuterMost(parseRules(input), searchingBadColor)).size;

const countOuterMost = (rules, color) => {
  const containingBags = rules[color].containedIn || [];

  return [
    ...containingBags,
    ...containingBags.map((b) => countOuterMost(rules, b)),
  ].flat();
};

const deepMerge = (objValue, srcValue) => {
  if (_.isArray(objValue)) return objValue.concat(srcValue);
  if (_.isObject(objValue)) return _.mergeWith(objValue, srcValue, deepMerge);
};

const parseRules = (input) =>
  input
    .split("\n")
    .map((rule) => {
      const [bagColor, containingBags] = rule
        .slice(0, -1)
        .split("bags contain");
      const bags = containingBags
        .split(",")
        .map((b) => b.replace(/bags?/g, "").trim())
        .filter((s) => "no other" !== s)
        .map((s) => {
          const [, count, color] = /(\d+) (.*)/.exec(s);
          return { color, count: parseInt(count) };
        });

      return {
        [bagColor.trim()]: {
          contains: bags,
        },
        ...bags
          .map(({ color }) => ({ [color]: { containedIn: [bagColor.trim()] } }))
          .reduce((a, b) => ({ ...a, ...b }), {}),
      };
    })
    .reduce((a, b) => _.mergeWith(a, b, deepMerge), {});

module.exports = { part1, parseRules };
