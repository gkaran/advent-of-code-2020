const part1 = (lines) =>
  lines.filter((line) => {
    const [policy, password] = line.split(": ");
    const [frequency, character] = policy.split(" ");
    const [min, max] = frequency.split("-");
    const occurrences = password.replace(new RegExp(`[^${character}]`, "g"), "")
      .length;
    return parseInt(min) <= occurrences && parseInt(max) >= occurrences;
  }).length;

module.exports = part1;
