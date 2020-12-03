const part1 = (lines, offset_x = 3, offset_y = 1) => {
  let x = 0,
    y = 0,
    trees = 0;
  let line_width = lines[0].length;

  while (y < lines.length) {
    if (lines[y].charAt(x % line_width) === "#") trees++;
    y += offset_y;
    x += offset_x;
  }

  return trees;
};

module.exports = part1;
