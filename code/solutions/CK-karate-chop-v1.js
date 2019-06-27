module.exports = (value = null, arr = null) => {
  if (
    !Array.isArray(arr)
    || arr.length === 0
    || !Number.isInteger(value)
  ) {
    return -1;
  }

  let startIdx = 0;
  let endIdx = arr.length;

  while (endIdx - startIdx >= 1) {
    if (endIdx - startIdx === 1) {
      if (arr[startIdx] === value) { return startIdx; }
      return -1;
    }

    let dividerIdx;

    if ((endIdx - startIdx) % 2 === 0) {
      dividerIdx = (endIdx - startIdx) / 2;
    } else {
      dividerIdx = Math.floor((endIdx - startIdx) / 2 + 1);
    }

    if (arr[dividerIdx] > value) {
      endIdx = dividerIdx;
    } else {
      startIdx = dividerIdx;
    }
  }

  return undefined;
};
