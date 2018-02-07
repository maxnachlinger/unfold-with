'use strict'

module.exports = (fn, initialValue) => {
  if (!fn || typeof (fn) !== 'function') {
    return []
  }

  const accum = []
  const stack = [initialValue]

  while (true) {
    const [value, nextValue] = fn(stack.pop()) || []

    if (!value && !nextValue) {
      return accum
    }

    accum.push(value)
    stack.push(nextValue)
  }
}
