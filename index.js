module.exports = (fn, initialValue) => {
  if (!fn || typeof (fn) !== 'function') {
    return []
  }

  const accum = []
  const stack = [initialValue]

  while (true) {
    const result = fn(stack.pop()) || {done: true}

    if (result.done) {
      return accum
    }

    accum.push(result.result)
    stack.push(result.next)
  }
}
