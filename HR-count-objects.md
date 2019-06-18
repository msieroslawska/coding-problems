# Count objects

## Objective

In this challenge, we learn about iterating over objects. Check the attached tutorial for more details.

## Task

Complete the function in the editor. It has one parameter: an array, `a`, of objects. Each object in the array has two integer properties denoted by `x` and `y`. The function must return a count of all such objects `o` in array `a` that satisfy `o.x == o.y`.

From [JS 10 days challenge](https://www.hackerrank.com/challenges/js10-count-objects/problem)

## Implementation

```javascript
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  const counter = objects.filter(obj => obj.x === obj.y);
  return counter.length;
}

```
