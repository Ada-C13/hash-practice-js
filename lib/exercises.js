// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n log n)
// Space Complexity: O(n)
function grouped_anagrams(strings) {
  const hash = {};

  for (let i = 0; i < strings.length; i++) {
    let sorted = strings[i].split('').sort().join('');
    hash[sorted] = [];
  }

  for (let i = 0; i < strings.length; i++) {
    let sortedStr = strings[i].split('').sort().join('');
    hash[sortedStr].push(strings[i]);
  }

  return Object.entries(hash).map(tuple => tuple[1]);
}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: O(n log n)
// Space Complexity: O(n)
function top_k_frequent_elements(list, k) {
  const hash = {};
  
  for (let i = 0; i < list.length; i++) {
    let numToStr = list[i].toString();
    hash.hasOwnProperty(numToStr) ? hash[numToStr] += 1 : hash[numToStr] = 1;
  }

  let result = Object.entries(hash).sort((a,b) => b[1] - a[1])
                      .map(tuple => parseInt(tuple[0]));
  
  result = result.slice(0, k);

  return result;
}


// This method will return true if the table is still
//   a valid sudoku table.
//   Each element can either be a ".", or a digit 1-9
//   The same digit cannot appear twice or more in the same 
//   row, column or 3x3 subgrid
// Time Complexity: ?
// Space Complexity: ?
function valid_sudoku(table) {
  throw new Error("Method hasn't been implemented yet!");
}

module.exports = {
  grouped_anagrams,
  top_k_frequent_elements,
  valid_sudoku
};
