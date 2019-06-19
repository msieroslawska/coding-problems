# Array rotation

## Problem

A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array `[1, 2, 3, 4, 5]`, then the array would become `[3, 4, 5, 1, 2]`.

Given an array `a` of `n` integers and a number, `d`, perform `d` left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

From [Array rotation](https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem)

## Implementation

It isn't hard once you realize you don't need to move each item one by one, but just slice the array at point `d` and reverse the slices' order.

```javascript
function rotLeft(a, d) {
  const left = a.splice(0, d);
  return a.concat(left);
}
```
