const unfold = require("../");

const rangePositive = (start, end) =>
  unfold((x) => (x <= end ? [x, x + 1] : null), start);
console.log(rangePositive(-2, 2)); // [ -2, -1, 0, 1, 2 ]
