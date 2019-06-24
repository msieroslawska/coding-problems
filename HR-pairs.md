# Pairs

## Problem

You will be given an array of integers and a target value. Determine the number of pairs of array elements that have a difference equal to a target value.

For example, given an array of `[1, 2, 3, 4]` and a target value of 1, we have three values meeting the condition: `2 - 1 = 1`, `3 - 2 = 1`, and `4 - 3 = 1`.

From [Pairs](https://www.hackerrank.com/challenges/pairs/problem)

## Implementation 1

Timeouts are becoming my thing :D

```javascript
function pairs(k, arr) {
  let counter = 0;

  for (let i = 0; i < arr.length - 1; i += 1) {
    const tempArr = arr.slice(i + 1);
    counter += tempArr.filter(item => Math.abs(item - arr[i]) === k).length;
  }
  return counter;
}
```

## Implementation 2

Since all elements of the array are supposed to be unique, I need to only look for two elements: `el - diff` and `el + diff`.

```javascript
function pairs(k, arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const tempArr = arr.slice(i + 1);

    if (tempArr.indexOf(arr[i] + k) !== -1) {
        counter += 1;
    }
    if (tempArr.indexOf(arr[i] - k) !== -1) {
        counter += 1;
    }
  }
  return counter;
}
```
