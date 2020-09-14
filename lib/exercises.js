// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n)
// Space Complexity: O(n)
function grouped_anagrams(strings) {
  const result = [];
  const letterMaps = [];

  strings.forEach((word) => {
    const letterMap = {};
    word.split("").forEach((char) => {
      if (letterMap[char]) {
        letterMap[char]++;
      } else {
        letterMap[char] = 1;
      }
    });

    if (letterMaps.length === 0) {
      letterMaps.push(letterMap);
      result.push([word]);
    } else {
      let i = 0;

      while (i < letterMaps.length) {
        let isAnagram = true;
        for (const [key, value] of Object.entries(letterMap)) {
          if (!letterMaps[i][key] || letterMaps[i][key] !== value) {
            isAnagram = false;
          }
        }
        if (isAnagram) {
          result[i].push(word);
          break;
        }
        i++;
      }

      if (i === letterMaps.length) {
        letterMaps.push(letterMap);
        result.push([word]);
      }
    }
  });
  return result;
}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: O(n)
// Space Complexity: O(n)
function top_k_frequent_elements(list, k) {
  const frequencies = {};
  let max = 0;
  list.forEach((num) => {
    if (frequencies[num]) {
      frequencies[num]++;
    } else {
      frequencies[num] = 1;
    }
    if (frequencies[num] > max) {
      max++;
    }
  });

  let inversedFrequencies = {};
  for (const [key, value] of Object.entries(frequencies)) {
    if (inversedFrequencies[value]) {
      inversedFrequencies[value].push(key);
    } else {
      inversedFrequencies[value] = [key];
    }
  }

  let result = [];
  let i = max;
  let j = k;
  while (result.length <= k && i > 0) {
    if (inversedFrequencies[i]) {
      inversedFrequencies[i].forEach((num) => {
        result.push(Number(num));
      });
    }
    i--;
    j--;
  }

  if (result.length > k) {
    result = result.slice(0, k);
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
  valid_sudoku,
};
