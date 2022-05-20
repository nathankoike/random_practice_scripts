function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Takes an array and returns the length of the longest increasing subsequence,
// the indices at which those values are found, and the subsequence itself
function lis(sequence) {
  let longest = 0;

  // A JSON object of arrays where keys are indices and values are arrays
  // of indices whose values are larger than the value in the sequence at key
  let roots = { 0: [] };

  // Find all the roots
  for (let i = 1; i < sequence.length; i++) {
    // if all the items before are strictly larger
    if (
      !sequence.slice(0, i).some(item => item < sequence[i]) &&
      !Object.keys(roots).some(index => sequence[index] === sequence[i])
    )
      roots[i] = []; // add the index as a root
  }

  // For every root index
  Object.keys(roots).forEach(key => {
    for (let i = Number(key); i < sequence.length; i++) {
      if (
        sequence[i] > sequence[Number(roots[key][roots[key].length - 1])] ||
        (roots[key].length < 1 && sequence[Number(key)] < sequence[i])
      )
        roots[key].push(i);
    }
  });

  // Find the longest array
  Object.keys(roots).forEach(
    key => (longest = roots[key].length > roots[longest].length ? key : longest)
  );

  // FInd the sunsequence
  let subsequence = [];
  [Number(longest)]
    .concat(roots[longest])
    .forEach(i => subsequence.push(sequence[i]));

  console.log(Object.keys(roots));

  return [
    roots[longest].length + 1,
    [Number(longest)].concat(roots[longest]),
    subsequence
  ];
}

let test = [];
for (let _ = 0; _ < 250000; _++) test.push(getRandomInt(100000));

console.log(
  "================================================================="
);

console.log(lis(test));
