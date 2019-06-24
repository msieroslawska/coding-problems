# Array manipulation

## Problem

Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in your array.

For example, the length of your array of zeros `n = 10`. Your list of queries is as follows:

```javascript
    a b k
    1 5 3
    4 8 7
    6 9 1
```

Add the values of `k` between the indices `a` and `b` inclusive:

```javascript
index-> 1 2 3  4  5 6 7 8 9 10
  [0,0,0, 0, 0,0,0,0,0, 0]
  [3,3,3, 3, 3,0,0,0,0, 0]
  [3,3,3,10,10,7,7,7,0, 0]
  [3,3,3,10,10,8,8,8,1, 0]
```

The largest value is 10 after all operations are performed.

From [Array manipulation](https://www.hackerrank.com/challenges/crush/problem)

## Implementation 1

This approach fails a bunch of tests due to timeouts. Hm.....

```javascript
function arrayManipulation(n, queries) {
    const myArray = [0];
    let maxValue = 0;

    queries.forEach(query => {
        for (let i = query[0] - 1; i < query[1]; i+= 1) {
            if (myArray[i] === undefined) {
                myArray[i] = query[2];
            } else {
                myArray[i] += query[2];
            }

            if (myArray[i] > maxValue) {
                maxValue = myArray[i];
            }
        }
    })

    return maxValue;
}
```

## Implementation 2

This also has timeout errors...

```javascript
function arrayManipulation(n, queries) {
  const myArray = [ { idx: 0, value: 0 }];
  let maxValue = 0;

  function updateMax(val) {
    maxValue = val > maxValue ? val : maxValue;
  }

  queries.forEach(query => {
    for (let i = query[0] - 1; i < query[1]; i+= 1) {
      const currentItem = myArray.find(item => item.idx === i);
      if (currentItem === undefined) {
        myArray.push({ idx: i, value: query[2] });
        updateMax(query[2]);
      } else {
        currentItem.value += query[2];
        updateMax(currentItem.value);
      }
    }
  })

  return maxValue;
}
```

## Implementation 3

At this point I turned into discussion forum to look for hints. I don't have to keep the actual values of each element. Instead, just mark the "slopes": positive value at the beginning of the range and negative at the end (with idx + 1). Given the example:

```javascript
    a b k
    1 5 3
    4 8 7
    6 9 1
```

My slopes would look like this:

```javascript
index-> 1 2 3  4  5 6 7 8 9 10
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  [3, 0, 0, 0, 0, -3, 0, 0, 0, 0]
  [3, 0, 0, 7, 0, -3, 0, 0, -7, 0]
  [3, 0, 0, 7, 0, -2, 0, 0, -7, -1]
```

The solution is as simple as traversing the final state one by one and saving the max value, in our case 10.

```javascript
function arrayManipulation(n, queries) {
  function compare(a, b) {
    if (a.idx === b.idx) {
      return a.value - b.value;
    }
    return a.idx - b.idx;
  }

  const myArray = [];
  let maxValue = 0;
  let sum = 0;

  queries.forEach(query => {
    myArray.push({ idx: query[0] - 1, value: query[2] });
    myArray.push({ idx: query[1], value: query[2] * (-1) });
  });
  myArray.sort(compare);

  myArray.forEach(item => {
    sum += item.value;
    if (maxValue < sum) { maxValue = sum}
  })

  return maxValue;
}
```
