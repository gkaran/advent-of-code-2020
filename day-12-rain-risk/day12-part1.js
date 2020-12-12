const part1 = (input) => {
  const instructions = input.split("\n");
  let state = { x: 0, y: 0, heading: 0 };

  for (let instruction of instructions) {
    state = {
      ...instructionsMapper[instruction.substring(0, 1)](
        state,
        parseInt(instruction.substring(1))
      ),
    };
  }
  return Math.abs(state.x) + Math.abs(state.y);
};

const instructionsMapper = {
  N: (state, v) => ({ ...state, y: state.y + v }),
  S: (state, v) => ({ ...state, y: state.y - v }),
  E: (state, v) => ({ ...state, x: state.x + v }),
  W: (state, v) => ({ ...state, x: state.x - v }),
  L: (state, v) => ({ ...state, heading: (state.heading + v) % 360 }),
  R: (state, v) => ({ ...state, heading: (state.heading - v) % 360 }),
  F: (state, v) => ({
    ...state,
    x: Math.round(state.x + Math.cos((state.heading / 90) * (Math.PI / 2)) * v),
    y: Math.round(state.y + Math.sin((state.heading / 90) * (Math.PI / 2)) * v),
  }),
};

module.exports = part1;
