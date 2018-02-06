## unfold-with

An [unfold](https://en.wikipedia.org/wiki/Anamorphism) helper.

[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]

[travis-image]: https://travis-ci.org/maxnachlinger/unfold-with.svg?branch=master
[travis-url]: https://travis-ci.org/maxnachlinger/unfold-with
[npm-image]: https://img.shields.io/npm/v/unfold-with.svg?style=flat
[npm-url]: https://npmjs.org/package/unfold-with

Install:
```shell
npm i unfold-with
```
### API
`unfoldWidth((x) => {result, next} || null || undefined), initial-value)`

### Examples
A simple range:
```javascript
const unfold = require('unfold-with')

const rangePositive = (start, end) => 
  unfold((x) => x <= end ? {result: x, next: x + 1} : null, start)
console.log(rangePositive(-2, 2)) // [ -2, -1, 0, 1, 2 ]

const downToZero = (start) => 
  unfold((x) => x >= 0 ? {result: x, next: x - 1} : null, start)
console.log(downToZero(2)) // [ 2, 1, 0 ]
```
Or a tree:
```javascript
const unfold = require('unfold-with')

// taken from http://raganwald.com/2016/11/30/anamorphisms-in-javascript.html
// what a great article! :)
const tree = {
  label: 1,
  children: [{
    label: 2,
    children: [{
      label: 4,
      children: []
    }, {
      label: 5,
      children: []
    }]
  }, {
    label: 3,
    children: [{
      label: 6,
      children: []
    }]
  }]
}

const depthFirst = (input) => unfold((forest) => forest.length > 0 ? {
  result: forest[0].label,
  next: forest[0].children.concat(forest.slice(1))
} : null, input)

const breadthFirst = (input) => unfold((forest) => forest.length > 0 ? {
  result: forest[0].label,
  next: forest.slice(1).concat(forest[0].children)
} : null, input)

console.log(
  depthFirst([tree]),  // [ 1, 2, 4, 5, 3, 6 ]
  breadthFirst([tree]) // [ 1, 2, 3, 4, 5, 6 ]
)
```
