---
to: day-<%= day %>-<%= h.changeCase.paramCase(title) %>/day<%= day %>-part2.spec.js
---
const part2 = require("./day<%= day %>-part2");

describe("Day <%= day %>: <%= title %> - Part 2", () => {
  test("solve README example", () => expect(part2("")).toBe(""));
});
