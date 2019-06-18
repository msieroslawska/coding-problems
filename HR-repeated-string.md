# Repeated string

## Problem

Lilah has a string, `s`, of lowercase English letters that she repeated infinitely many times.

Given an integer, `n`, find and print the number of letter a's in the first `n` letters of Lilah's infinite string.

For example, if the string `s = 'abcac'` and `n = 10`, the substring we consider is `abcacabcac`, the first 10 characters of her infinite string. There are 4 occurrences of a in the substring.

## Function description

Complete the `repeatedString` function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

`repeatedString` has the following parameter(s):

- `s`: a string to repeat
- `n`: the number of characters to consider

From [Repeated string](https://www.hackerrank.com/challenges/repeated-string/problem)

## Implementation #1

Invalid, some tests did not pass due to runtime errors and timeouts :( Probably creating the new string is completely unnecessary.

```javascript
function repeatedString(s, n) {
    if (s === 'a') {
        return n;
    }

    let newString = '';
    for (let i = 0; i < Math.floor(n / s.length) + 1; i += 1) {
        newString = newString.concat(s);
    }
    newString = newString.substring(0, n).split('');
    return newString.filter(s => s === 'a').length;
}
```

## Implementation #2

As suspected, only math was needed, not the actual string :)

```javascript
function repeatedString(s, n) {
    function countOccurences(string, repeat) {
        return string.split('').filter(x => x === 'a').length * repeat;
    }
    const baseCounter = countOccurences(s,  Math.floor(n / s.length));
    const lastOccurence = countOccurences(s.substring(0, n % s.length), 1);

    return baseCounter + lastOccurence;
}
```
