/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortedArr = Array.from(arr).sort((a, b) => a - b);
  const resultArr = Array.from(arr);
  for (let i = resultArr.length - 1; i >= 0; i -= 1) {
    if (resultArr[i] !== -1) {
      resultArr[i] = sortedArr[sortedArr.length - 1];
      sortedArr.pop();
    }
  }
  return resultArr;
}

module.exports = sortByHeight;
