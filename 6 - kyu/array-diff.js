/* 
  Title:
    Array.diff

  Description:
    Your goal in this kata is to implement an difference function, which subtracts one list from another.

    It should remove all values from list a, which are present in list b.

  Examples:
    array_diff([1, 2],[1]) == [2]
    array_diff([1, 2, 2, 2, 3],[2]) == [1, 3]

  Link:
    https://www.codewars.com/kata/array-dot-diff/
*/

const _ = require('lodash')

// Solution with Lodash
function array_diff(a, b) {
  return _.difference(a, b)
}

// Long Solution
function array_diff(a, b) {
  const result = []

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] !== b[j]) result.push(a[i])
    }
  }

  return result
}

// Short Solution
const array_diff = (a, b) => a.filter(x => !b.includes(x))

// Test to pass
console.log(array_diff([1, 2], [1]))
// => It should return [2]
console.log(array_diff([1, 2, 2, 2, 3], [2]))
// => It should return [1, 3]
