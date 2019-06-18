# `Try`, `catch` and `finally`

## Objective

In this challenge, we learn about strings and exceptions. Check out the attached tutorials for more details.

## Task

1. Complete the `reverseString` function; it has one parameter, `s`. You must perform the following actions:
2. Try to reverse string `s` using the split, reverse, and join methods.
If an exception is thrown, catch it and print the contents of the exception's `message` on a new line.
3. Print `s` on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

From [JS 10 days challenge](https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem)

## Implementation

```javascript
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

```
