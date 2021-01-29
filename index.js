"use strict";

module.exports = (fn, initialValue) => {
  const accum = [];

  if (!fn || typeof fn !== "function") {
    return accum;
  }

  const stack = [initialValue];
  const complete = Symbol("complete");

  while (true) {
    const [value, nextValue] = fn(stack.pop()) || [complete];

    if (value === complete) {
      return accum;
    }

    accum.push(value);
    stack.push(nextValue);
  }
};
