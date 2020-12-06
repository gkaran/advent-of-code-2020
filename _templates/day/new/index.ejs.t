---
to: day-<%= day %>-<%= h.changeCase.paramCase(title) %>/index.js
---
const fs = require("fs");
const path = require("path");
const part1 = require("./day<%= day %>-part1");
const part2 = require("./day<%= day %>-part2");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

module.exports = {
  name: "Day <%= day %>: <%= title %>",
  part1: () => part1(input),
  part2: () => part2(input),
};
