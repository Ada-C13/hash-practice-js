
// function isAnagram(a, b) {
//   if (a.length != b.length) return false;

//   a = a.split("").sort();
//   b = b.split("").sort();

//   for (let i = 0; i < a.length; ++i) {
//     if (a[i] !== b[i]) return false;
//   }
//   return true;
// }

// Time: O(q), where q is the string length
// Space: O(n), where n is the number of unique characters in either of the strings
function isAnagram(a, b) {
  if (a.length != b.length) return false;

  let aObj = {};
  let bObj = {};

  for (let i = 0; i < a.length; i++) {
    if (aObj[a[i]]) {
      aObj[a[i]] += 1;
    } else {
      aObj[a[i]] = 1;
    }

    if (bObj[b[i]]) {
      bObj[b[i]] += 1;
    } else {
      bObj[b[i]] = 1;
    }
  }

  const aKeys = Object.keys(aObj);
  for (let key of aKeys) {
    if (aObj[key] !== bObj[key]) return false;
  }

  return true;
}

// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(p * q), where p is the number of strings in the input array, and q is the string length
// Space Complexity: O(n), where n is the number of strings in the input array
function grouped_anagrams(strings) {
  let result = [];

  for (let i = 0; i < strings.length; i++) {
    let foundAnagram = false;
    for (let j = 0; j < result.length; j++) {
      if (isAnagram(strings[i], result[j][0])) {
        foundAnagram = true;
        result[j].push(strings[i]);
        break;
      }
    }
    // take care of the word if it's not an anagram of anything we've seen before
    if (foundAnagram === false) {
      result.push([strings[i]]);
    }
  }

  return result
}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: O(n log n), where n is the length of the list
// Space Complexity: O(n), where n is the number of unique elements in the list
function top_k_frequent_elements(list, k) {
  if (list.length === 0) return [];

  let countObj = {};
  let result = [];

  for (let i = 0; i < list.length; i++) {
    if (countObj[list[i]]) {
      countObj[list[i]] += 1;
    } else {
      countObj[list[i]] = 1;
    }
  }

  let sortedCountList = Object.entries(countObj).sort((a,b) => {
    [b][1] - [a][1];
  });

  let j = 0;
  while (j < k) {
    result.push(Number(sortedCountList[j][0]));
    j += 1;
  }

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
