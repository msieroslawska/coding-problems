# Classes

## Objective

In this challenge, we practice using JavaScript classes. Check the attached tutorial for more details.

## Task

Create a `Polygon` class that has the following properties:

- A constructor that takes an array of integer values describing the lengths of the polygon's sides.
- A `perimeter()` method that returns the polygon's perimeter.

Locked code in the editor tests the Polygon constructor and the perimeter method.

From [JS 10 days challenge](https://www.hackerrank.com/challenges/js10-class/problem)

## Implementation

```javascript
/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
  constructor(lengths) {
    this.lengths = lengths;
  }

  perimeter() {
    return this.lengths.reduce((acc, l) => acc + l);
  }
}
```
