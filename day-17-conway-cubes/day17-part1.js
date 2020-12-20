const _ = require("lodash");

const part1 = (input, dimensions = 3, rounds = 6) => {
  let initialData = input
    .split("\n")
    .map((row) => row.split("").map((v) => v === "#"));

  for (let i = 2; i < dimensions; i++) {
    initialData = [initialData];
  }

  let state = createState(initialData);

  for (let i = 0; i < rounds; i++) {
    state = evolve(state);
  }

  return Object.values(state).filter((v) => !!v).length;
};

const createState = (array, keys = []) => {
  let grid = {};
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (Array.isArray(value))
      grid = { ...grid, ...createState(value, [...keys, i], grid) };
    else grid[[...keys, i].join(",")] = value;
  }
  return grid;
};

const getNeighboors = (coordinates, depth = 1, keys = []) => {
  const neighboors = [];
  for (let i = -1; i <= 1; i++) {
    if (depth === coordinates.length) {
      const point = coordinates
        .map((coord, index) => coord + [...keys, i][index])
        .join(",");
      if (point !== coordinates.join(",")) neighboors.push(point);
    } else {
      neighboors.push(
        ...memoGetNeighboors(coordinates, depth + 1, [...keys, i])
      );
    }
  }

  return neighboors;
};

const memoGetNeighboors = _.memoize(getNeighboors, (...args) =>
  _.values(args).join("_")
);

const evolve = (state) => {
  const newState = {};
  let extraPoints = {};
  for (let [coordinates, value] of Object.entries(state)) {
    const neighboors = memoGetNeighboors(coordinates.split(",").map((v) => +v));
    const activeNeighboors = neighboors.filter((n) => !!state[n]).length;
    extraPoints = {
      ...extraPoints,
      ...neighboors
        .filter((n) => typeof state[n] === "undefined")
        .map((n) => ({ [n]: false }))
        .reduce((a, b) => ({ ...a, ...b }), {}),
    };

    if (value)
      newState[coordinates] = activeNeighboors === 2 || activeNeighboors === 3;
    else newState[coordinates] = activeNeighboors === 3;
  }

  for (let coordinates of Object.keys(extraPoints)) {
    const neighboors = getNeighboors(coordinates.split(",").map((v) => +v));
    const activeNeighboors = neighboors.filter((n) => !!state[n]).length;

    newState[coordinates] = activeNeighboors === 3;
  }

  return newState;
};

module.exports = part1;
