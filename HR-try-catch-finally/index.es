/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */

function reverseString(s) {
  let newString = s;
  try {
    newString = s.split('').reverse().join('');
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log(newString);
  }
}
