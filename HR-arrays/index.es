/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
* */
function getSecondLargest(nums) {
  const firstLargest = nums.reduce((acc, num) => Math.max(acc, num));
  const secondLargest = nums.reduce((acc, num) => {
    if (num < firstLargest && num > acc) {
      return num;
    }
    return acc;
  });
  return secondLargest;
}
