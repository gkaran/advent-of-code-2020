const part2 = (input) => {
  const instructions = input.split("\n");
  let state = { x: 0, y: 0, w_x: 10, w_y: 1 };

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
  N: (state, v) => ({ ...state, w_y: state.w_y + v }),
  S: (state, v) => ({ ...state, w_y: state.w_y - v }),
  E: (state, v) => ({ ...state, w_x: state.w_x + v }),
  W: (state, v) => ({ ...state, w_x: state.w_x - v }),
  L: (state, v) => ({ ...state, ...rotate(state.w_x, state.w_y, v) }),
  R: (state, v) => ({ ...state, ...rotate(state.w_x, state.w_y, -v) }),
  F: (state, v) => ({
    ...state,
    x: state.x + state.w_x * v,
    y: state.y + state.w_y * v,
  }),
};

const rotate = (x, y, degrees) => {
  const rad = (degrees / 90) * (Math.PI / 2);
  return {
    w_x: Math.round(x * Math.cos(rad) - y * Math.sin(rad)),
    w_y: Math.round(x * Math.sin(rad) + y * Math.cos(rad)),
  };
};

module.exports = part2;
