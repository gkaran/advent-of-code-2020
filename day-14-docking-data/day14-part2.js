const part2 = (input) => {
  const program = input.split("\n");

  let addressSpace = new Map();
  let maskOR = 0n;
  let floatsPos = [];

  for (const line of program) {
    if (line.indexOf("mask") === 0) {
      const [, mask] = line.split("=").map((v) => v.trim());
      maskOR = BigInt(parseInt(mask.replace(/X/g, "0"), 2));
      floatsPos = Array.from(mask.matchAll(/X/g), (x) => BigInt(x.index));
    } else {
      const [address, value] = line
        .split("=")
        .map((v) => BigInt(v.replace(/\D/g, "").trim()));

      const addr = address | maskOR;
      const combinationsSize = 2 ** floatsPos.length;

      for (let i = 0n; i < combinationsSize; i++) {
        let maskXOR = 0n;

        floatsPos.forEach((pos, index) => {
          const pow = BigInt(index);
          const isOn = (i & (2n ** pow)) !== 0n;

          if (isOn) maskXOR |= 1n << (36n - pos - 1n);
        });

        addressSpace.set(addr ^ maskXOR, value);
      }
    }
  }

  return Number([...addressSpace.values()].reduce((a, b) => a + b));
};

module.exports = part2;
