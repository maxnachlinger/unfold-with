const unfold = require('../')

const downToZero = (start) => unfold((x) => x >= 0 ? [x, x - 1] : null, start)

console.log(downToZero(2)) // [ 2, 1, 0 ]
