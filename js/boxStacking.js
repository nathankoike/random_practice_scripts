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

  let stacks = {};

  // Sort the array in terms of length (smallest to largest)
  boxes.sort((e1, e2) => (e1[0] < e2[0] ? -1 : e1[0] === e2[0] ? 0 : 1));

  // // Sort the array in terms of length (largest to smallest)
  // boxes.sort((e1, e2) => (e1[0] > e2[0] ? -1 : e1[0] === e2[0] ? 0 : 1));
  //
  // // While there are still boxes to stack
  // while (boxes.length > 0) {
  //   // Find the boxes with the largest length
  //   let mins = boxes.filter(item => item[0] === boxes[0][0]);
  //
  //   // Sort the new array in terms of height (largest to smallest)
  //   mins.sort((e1, e2) => (e1[2] > e2[2] ? -1 : e1[2] === e2[2] ? 0 : 2));
  //
  //   // Add the item to the stack
  //   tallestStack.push(mins[0]);
  //
  //   // Remove all elements with the same length as the first element and whose
  //   // width is smaller than the width of the added element
  //   boxes = boxes.filter(
  //     elem => elem[0] !== boxes[0][0] && elem[1] < tallestStack[0][1]
  //   );
  // }
  //
  // // Get the tallest height
  // tallestStack.forEach(item => (tallestHeight += item[2]));

  // Create an object where each index maps to a list of the tallest stack
  // with the box at that index being the base
  boxes.forEach((box, i) => {
    // The indices of all the boxes that can be stacked on this one
    let s = [];

    // The tallest substack found so far
    let tall = [];

    // Get all the boxes that can be stacked on this one
    let smaller = boxes.filter(b => b[0] < box[0] && b[1] < box[1]);

    // Get all the indices of boxes that can be stackes on this one
    smaller.forEach(b => s.push(boxes.indexOf(b)));

    // Find the tallest stack among the boxes that can be stacked on this one
    s.forEach(key => {
      // Make an array we can modify
      let t = [].concat(stacks[key]);
      t.push(boxes[key]);

      // If we haven't found a tall stack yet or current stack is taller
      if (tall.length < 1) tall = t;
      else if (
        t.reduce((x1, x2) => [0, 0, x1[2]] + [0, 0, x2[2]])[2] >
        tall.reduce((y1, y2) => [0, 0, y1[2]] + [0, 0, y2[2]])[2]
      )
        tall = t;
    });

    // Take note of the tallest stack beginning with this box
    stacks[i] = tall;
  });

  Object.keys(stacks).forEach(i => {
    // Create a new array that we can modify
    let t = [].concat(stacks[i]);

    // Add the current box
    t.push(boxes[i]);

    let currentHeight = t.reduce((x1, x2) => [0, 0, x1[2] + x2[2]])[2];

    if (tallestHeight.length < 1) {
      tallestStack = t;
      tallestHeight = currentHeight;
    }

    // If the current stack is taller than the talllest found so far
    else if (currentHeight > tallestHeight) {
      tallestStack = t;
      tallestHeight = currentHeight;
    }
  });

  return [tallestHeight, tallestStack];
}

// Works for this
let allBoxes = [
  [4, 5, 3],
  [2, 3, 2],
  [3, 6, 2],
  [1, 5, 4],
  [2, 4, 1],
  [1, 2, 2]
];

// let allBoxes = [
//   [5, 2, 1],
//   [2, 5, 3],
//   [4, 5, 1],
//   [3, 4, 1],
//   [2, 1, 2],
//   [4, 1, 2],
//   [5, 3, 3],
//   [4, 1, 5],
//   [2, 2, 4]
// ];

console.log(boxStacking(allBoxes));
