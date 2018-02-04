const unfold = require('../')

const randomNumbersUntilValue = (value) => unfold(() => {
  const n = +Math.random().toFixed(2)
  return n !== value ? {result: n} : {done: true}
}, null)

console.log(randomNumbersUntilValue(0.51)) // [n....] of tries until we hit the number
