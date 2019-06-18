# Sock merchant

## Problem

John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are `n = 7` socks with colors `ar = [1, 2, 1, 2, 1, 2]`. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

## Function description

Complete the `sockMerchant` function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

`sockMerchant` has the following parameter(s):

- `n`: the number of socks in the pile
- `ar`: the colors of each sock

From [Sock merchant](https://www.hackerrank.com/challenges/sock-merchant/problem)

## Implementation

```javascript
function sockMerchant(n, ar) {
  const counters = {};
  ar.forEach((item) => {
    const strItem = item.toString();
    if (Object.keys(counters).indexOf(strItem) === -1) {
      counters[strItem] = 1;
    } else {
      counters[strItem] += 1;
    }
  });

  return Object.values(counters)
    .reduce((acc, num) => Math.floor(num / 2) + acc, 0);
}

```
