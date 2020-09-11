// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n) where n is the length of the array (strings)
// Space Complexity: O(n) where n is the length of the array (strings)
function grouped_anagrams(strings) {
  toReturn = {}

  if(strings.length == 0){
    return [];
  } else {
    // O(n) where n is the length of the strings array
    for(word of strings){
      sortedWord = anagrams_helper(word)
      
      if (toReturn[sortedWord]) {
        toReturn[sortedWord].push(word)
       } else { 
        toReturn[sortedWord] = [word]
        }
    }
  }
  // O(n) .values
  return Object.values(toReturn)
}

function anagrams_helper(word){
  // O(n) .sort && .split && .join each
  return word.split("").sort().join("")
}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: O(n+k) where n is the length of the list array and k is the given k -- although I'm a little unsure of this since k will always be shorter than n
// Space Complexity: O(n)
function top_k_frequent_elements(list, k) {
  toReturn = {}

  if(list.length == 0){
    return [];
  } else {
    // O(n) where n is the length of the list array
    for(num of list){
      if (toReturn[num]){
        toReturn[num] += 1
      } else {
        toReturn[num] = 1
      }
    }
  }
  return top_k_helper(toReturn, k);
}

function top_k_helper(object, k){
  // O(n) .entries && .sort
  sorted_nested_array = Object.entries(object).sort((a,b) => b[1] - a[1]);
  // O(k) .slice where k is 0 to k https://stackoverflow.com/questions/22614237/javascript-runtime-complexity-of-array-functions
  //  O(k) .map
  return sorted_nested_array.slice(0,k).map(a => { return Number(a[0])})
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
