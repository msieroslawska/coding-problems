# Create a rectangle

## Objective

In this challenge, we practice creating objects. Check out the attached tutorial for more details.

## Task

Complete the function in the editor. It has two parameters: `a` and `b`. It must return an object modeling a rectangle that has the following properties:

- `length`: This value is equal to `a`.
- `width`: This value is equal to `b`.
- `perimeter`: This value is equal to 2 * (`a` + `b`).
- `area`: This value is equal to `a` * `b`.

From [JS 10 days challenge](https://www.hackerrank.com/challenges/js10-objects/problem)

## Implementation

```javascript
/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  return {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  };
}

```
