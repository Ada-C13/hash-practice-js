// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n) n rep num of string m is length O(n mlog m)
// Space Complexity: O(n)

//   Output:
// [
//   ["ate", "eat", "tea"],
//   ["nat", "tan"],
//   ["bat"]
// ]
function grouped_anagrams(strings) {
  let results = {};

  for (string of strings) {
    sorted = string.split("").sort().join("");
    if (results[sorted]) {
      results[sorted].push(string);
    } else results[sorted] = [string];
  }

  return Object.values(results);

  //TODO:
  // // group letters
  // //each letter same count
  // let letters = {};
  // let results = {};

  // for (let string of strings) {
  //   currentCount = {};
  //   for (let char of string) {
  //     if (currentCount[char] === undefined) {
  //       currentCount[char] = 1;
  //     } else {
  //       currentCount[char] += 1;
  //     }
  //   }
  //   letters[string] = currentCount;
  //   for (let string of strings) {
  //     for (let char = ; )
  //   }
  // }

  // console.log(letters[]);
}
// let strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
// console.log(grouped_anagrams(strings));

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: O(n log n)  where n reps number of unqine elements
// Space Complexity: O(n) where n reps number of unqine elements
// let list = [1, 1, 1, 2, 2, 3], k = 2
// Output: [1, 2]
function top_k_frequent_elements(list, k) {
  // get counts
  //compare counts
  //return as array
  let counts = {};
  for (let num of list) {
    // O(n) where n is length of list
    if (counts[num]) {
      counts[num] += 1;
    } else {
      counts[num] = 1;
    }
  }

  sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]); //O(m log m) where m is num unique elements

  sorted = sorted.map((i) => parseInt(i));

  return sorted.slice(0, k);
}

let list = [1, 1, 1, 2, 2, 3];
let k = 2;
top_k_frequent_elements(list, k);
// This method will return true if the table is still
//   a valid sudoku table.
//   Each element can either be a ".", or a digit 1-9
//   The same digit cannot appear twice or more in the same
//   row, column or 3x3 subgrid
// Time Complexity: 0(n ^ 2) n reps number of rows
// Space Complexity: ?
function valid_sudoku(table) {
  for (let row = 0; row < table.length; row++) {
    let rowHash = {};
    for (let num of table[row]) {
      if (isNaN(parseInt(num))) {
        continue;
      }
      if (rowHash[num]) {
        return false;
      } else {
        rowHash[num] = 1;
      }
    }
  }
  for (let col = 0; col < table.length; col++) {
    let colHash = {};
    for (let i = 0; i < table.length; i++) {
      let num = table[i][col];
      if (isNaN(parseInt(num))) {
        continue;
      }
      if (colHash[num]) {
        return false;
      } else {
        colHash[num] = 1;
      }
    }
  }
  const numOfRows = 9;
  const numOfCols = 9;
  //TODO sq of rows
  for (let rowStart = 0; rowStart < 9; rowStart += 3) {
    for (let colStart = 0; colStart < 9; colStart += 3) {
      let boxHash = {};
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          let currNum = table[rowStart + i][colStart + j];
          if (isNaN(parseInt(currNum))) {
            continue;
          }
          if (boxHash[currNum]) {
            return false;
          } else {
            boxHash[currNum] = 1;
          }
        }
      }
    }
  }
  return true;
}
let table = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
valid_sudoku(table);

module.exports = {
  grouped_anagrams,
  top_k_frequent_elements,
  valid_sudoku,
};
