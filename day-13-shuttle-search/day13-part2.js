const part2 = (input) => {
  const [, busIds] = input.split("\n");

  const { remainders, modules } = busIds
    .split(",")
    .map((id, index) =>
      id !== "x"
        ? { id: BigInt(id), index: BigInt(id) - BigInt(index) }
        : { id }
    )
    .filter(({ id }) => id !== "x")
    .reduce(
      (a, b) => ({
        remainders: [...a.remainders, b.index],
        modules: [...a.modules, b.id],
      }),
      { remainders: [], modules: [] }
    );

  return Number(solveCRT(remainders, modules));
};

// eslint doesn't like 1n
const modularMultiplicativeInverse = (a, modulus) => {
  const b = BigInt(a % modulus);
  for (let hypothesis = BigInt(1); hypothesis <= modulus; hypothesis++) {
    if ((b * hypothesis) % modulus == BigInt(1)) return hypothesis;
  }
  return BigInt(1);
};

const solveCRT = (remainders, modules) => {
  const prod = modules.reduce((acc, val) => acc * val, BigInt(1));

  return (
    modules.reduce((sum, mod, index) => {
      const p = prod / mod;
      return sum + remainders[index] * modularMultiplicativeInverse(p, mod) * p;
    }, BigInt(0)) % prod
  );
};

module.exports = part2;
