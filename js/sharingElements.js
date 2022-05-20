function sharingElements(ary, size) {
  // Check to see if the array is empty
  if (!ary) return []; // identical to: if (ary.length < 1) return ary;

  // Check to see if the length of the array is leq size
  if (ary.length <= size) return [ary];

  // Take a slice of the array from index 0 that is the proper size and wrap
  // this in an array
  let head = [ary.slice(0, size)];

  // Recursively split all of the the array not contained in head into pieces
  let tail = sharingElements(ary.slice(size), size);

  // Add all the subarrays in tail behind the subarray in head and return
  return head.concat(tail);
}

function sharingElementsRecursive(ary, size) {
  // Check to see if the array is empty
  if (!ary) return []; // identical to: if (ary.length < 1) return ary;

  // Check to see if the length of the array is leq size
  if (ary.length <= size) return [ary];

  // Add all the subarrays in the tail behind the subarray in the head
  return [ary.slice(0, size)].concat(sharingElements(ary.slice(size), size));
}

function sharingElementsWhileLoop(ary, size) {
  // Our final answer
  let ans = [];

  // Split the array until its length is less than the desired size
  while (ary.length >= size) {
    ans.push(ary.slice(0, size));
    ary = ary.slice(size);
  }

  // If the array still has elements in it
  if (ary.length !== 0) ans.push(ary); // Add it to the answer

  return ans;
}

function sharingElementsForLoop(ary, size) {
  // Our final answer
  let ans = [];

  // Split the array until its length is less than the desired size
  for (; ary.length >= size; ary = ary.slice(size))
    ans.push(ary.slice(0, size));

  // If the array still has elements in it
  if (ary.length !== 0) ans.push(ary); // Add it to the answer

  return ans;
}
