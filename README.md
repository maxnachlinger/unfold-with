## unfold-with

An [unfold](https://en.wikipedia.org/wiki/Anamorphism) helper.

Install:
```shell
npm i unfold-with
```
Some examples might help :)
```javascript
const unfold = require('unfold-with')

const rangePositive = (start, end) => unfold((x) => x <= end ? {result: x, next: x + 1} : null, start)
console.log(rangePositive(-2, 2)) // [ -2, -1, 0, 1, 2 ]

const downToZero = (start) => unfold((x) => x >= 0 ? {result: x, next: x - 1} : null, start)
console.log(downToZero(2)) // [ 2, 1, 0 ]
```

### API
`unfoldWidth((x) => {result, next} || null || undefined), initial-value)`
