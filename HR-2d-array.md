# 2D array

## Problem

Given a 6x6 2D Array, `arr`:

```javascript
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
```

We define an hourglass in `A` to be a subset of values with indices falling in this pattern in `arr`'s graphical representation:

```javascript
a b c
  d
e f g
```

There are 16 hourglasses in `arr`, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in `arr`, then print the maximum hourglass sum.

For example, given the 2D array:

```javascript
-9 -9 -9  1 1 1
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
```

We calculate the following 16 hourglass values:

```javascript
-63, -34, -9, 12,
-10, 0, 28, 23,
-27, -11, -2, 10,
9, 17, 25, 18
```

Our highest hourglass value is 28 from the hourglass:

```javascript
0 4 3
  1
8 6 6
```

## Function description

Complete the function `hourglassSum` in the editor below. It should return an integer, the maximum hourglass sum in the array.

`hourglassSum` has the following parameter(s):

- `arr`: an array of integers

From [2D array](https://www.hackerrank.com/challenges/2d-array/problem)

## Implementation

```javascript
function hourglassSum(arr) {
  function calculateOneSum(hourglass) {
    let counter = 0;
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if ((j === 0 || j === 2) && i === 1) {
          continue;
        };
        counter += hourglass[i][j];
      }
    }
    return counter;
  }

  function buildHourglass(idx_i, idx_j) {
    return [
        [arr[idx_i][idx_j], arr[idx_i][idx_j + 1], arr[idx_i][idx_j + 2]],
        [arr[idx_i + 1][idx_j], arr[idx_i + 1][idx_j + 1], arr[idx_i + 1][idx_j + 2]],
        [arr[idx_i + 2][idx_j], arr[idx_i + 2][idx_j + 1], arr[idx_i + 2][idx_j + 2]]
    ];
  }

  function collectHourglassesSums() {
    const allHourglassesSums = [];

    for (let i = 0; i < arr.length - 2; i += 1) {
      for (let j = 0; j < arr.length - 2; j += 1) {
        const h = buildHourglass(i, j);
        allHourglassesSums.push(calculateOneSum(h));
      }
    }
    return allHourglassesSums;
  }

  return Math.max(...collectHourglassesSums());
}
```
