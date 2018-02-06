const unfold = require('../')

const rangePositive = (start, end) => unfold((x) => x <= end ? {value: x, nextValue: x + 1} : null, start)
const rangeNegative = (start, end) => unfold((x) => x >= end ? {value: x, nextValue: x - 1} : null, start)

console.log(
  rangePositive(-2, 2),
  rangeNegative(2, -2)
)
