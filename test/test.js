const {test} = require('ava')
const unfold = require('../')

test('handles missing initial value', (t) => {
  const result = unfold((x) => x ? {result: x, next: x - 1} : null)
  t.deepEqual(result, [])
})

test('handles missing next value', (t) => {
  const result = unfold((x) => x ? {result: x} : null, 0)
  t.deepEqual(result, [])
})

test('handles missing next and result values', (t) => {
  const result = unfold((x) => x ? {} : null, 0)
  t.deepEqual(result, [])
})

test('handles missing fn', (t) => {
  const result = unfold()
  t.deepEqual(result, [])
})

test('unfolds an integer down to zero', (t) => {
  const downToZero = (start) => unfold((x) => x >= 0 ? {result: x, next: x - 1} : null, start)
  const result = downToZero(5)
  t.deepEqual(result, [5, 4, 3, 2, 1, 0])
})
