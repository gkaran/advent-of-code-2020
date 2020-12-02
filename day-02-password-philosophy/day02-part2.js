const part2 = (lines) =>
  lines.filter((line) => {
    const [policy, password] = line.split(": ");
    const [positions, character] = policy.split(" ");
    const [positionA, positionB] = positions.split("-");
    return (
      (password.charAt(positionA - 1) === character) !==
      (password.charAt(positionB - 1) === character)
    );
  }).length;

module.exports = part2;
