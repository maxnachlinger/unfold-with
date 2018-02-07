const {test} = require('ava')
const unfold = require('../')

test('handles missing initial value', (t) => {
  const value = unfold((x) => x ? [x, x - 1] : null)
  t.deepEqual(value, [])
})

test('handles missing nextValue value', (t) => {
  const value = unfold((x) => x ? [x] : null, 0)
  t.deepEqual(value, [])
})

test('handles missing nextValue and value values', (t) => {
  const value = unfold((x) => x ? [] : null, 0)
  t.deepEqual(value, [])
})

test('handles missing fn', (t) => {
  const value = unfold()
  t.deepEqual(value, [])
})

test('unfolds an integer down to zero', (t) => {
  const downToZero = (start) => unfold((x) => x >= 0 ? [x, x - 1] : null, start)
  const value = downToZero(5)
  t.deepEqual(value, [5, 4, 3, 2, 1, 0])
})
