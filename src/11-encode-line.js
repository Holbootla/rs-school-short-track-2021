/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  const arr = str.split('');
  let count = 1;
  let letter = arr[0];
  while (arr.length > 0) {
    if (arr[0] === arr[1]) {
      count += 1;
      arr.shift();
    } else {
      if (count !== 1) {
        result.push(`${count}${letter}`);
      } else {
        result.push(`${letter}`);
      }
      arr.shift();
      count = 1;
      letter = arr[0] || null;
    }
  }
  return result.join('');
}

module.exports = encodeLine;
