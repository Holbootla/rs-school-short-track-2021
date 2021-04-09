/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // const arr = email.split('');
  // return arr.slice(arr.indexOf('@') + 1, arr.length).join('');
  const arr = email.split('@');
  return arr.pop();
}

module.exports = getEmailDomain;
