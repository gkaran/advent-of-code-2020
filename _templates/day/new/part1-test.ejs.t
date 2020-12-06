---
to: day-<%= day %>-<%= h.changeCase.paramCase(title) %>/day<%= day %>-part1.spec.js
---
const part1 = require("./day<%= day %>-part1");

describe("Day <%= day %>: <%= title %> - Part 1", () => {
  test("solve README example", () => expect(part1("")).toBe(""));
});
