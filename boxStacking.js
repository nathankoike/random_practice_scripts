/*
Given a list of boxes with dimensions [l, w, h], find the tallest possible stack
with the following constraints:
  1. the length and width of a stacked box must be smaller than the box below it
  2. boxes cannot be rotated

Note: not all boxes need to be used
*/

function boxStacking(boxes) {
  // We will return these
  let tallestStack = [];
  let tallestHeight = 0;

  // Sort the array in terms of length (largest to smallest)
  boxes.sort((e1, e2) => (e1[0] > e2[0] ? -1 : e1[0] === e2[0] ? 0 : 1));

  // While there are still boxes to stack
  while (boxes.length > 0) {
    // Find the boxes with the largest length
    let mins = boxes.filter(item => item[0] === boxes[0][0]);

    // Sort the new array in terms of height (largest to smallest)
    mins.sort((e1, e2) => (e1[2] > e2[2] ? -1 : e1[2] === e2[2] ? 0 : 2));

    // Add the item to the stack
    tallestStack.push(mins[0]);

    // Remove all elements with the same length as the first element and whose
    // width is smaller than the width of the added element
    boxes = boxes.filter(
      elem => elem[0] !== boxes[0][0] && elem[1] < tallestStack[0][1]
    );
  }

  // Get the tallest height
  tallestStack.forEach(item => (tallestHeight += item[2]));

  return [tallestHeight, tallestStack];
}

let boxes = [
  [4, 5, 3],
  [2, 3, 2],
  [3, 6, 2],
  [1, 5, 4],
  [2, 4, 1],
  [1, 2, 2]
];

console.log(boxStacking(boxes));
