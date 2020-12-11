const { performance } = require("perf_hooks");
const prettyMilliseconds = require("pretty-ms");

const timeFunction = (fn) => {
  const t0 = performance.now();
  const result = fn();
  const t1 = performance.now();
  return { result, time: prettyMilliseconds(t1 - t0) };
};

module.exports = timeFunction;
