const unfold = require("../");

// example taken from http://raganwald.com/2016/11/30/anamorphisms-in-javascript.html
const downToZero = (start) =>
  unfold((x) => (x >= 0 ? [x, x - 1] : null), start);

console.log(downToZero(2)); // [ 2, 1, 0 ]
