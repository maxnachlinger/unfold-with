const unfold = require('../')

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

const depthFirst = (input) => unfold((forest) => forest.length > 0 ? [
  forest[0].label,
  forest[0].children.concat(forest.slice(1))
] : null, input)

const breadthFirst = (input) => unfold((forest) => forest.length > 0 ? [
  forest[0].label,
  forest.slice(1).concat(forest[0].children)
] : null, input)

console.log(
  depthFirst([tree]),  // [ 1, 2, 4, 5, 3, 6 ]
  breadthFirst([tree]) // [ 1, 2, 3, 4, 5, 6 ]
)
