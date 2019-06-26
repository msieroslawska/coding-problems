module.exports = (value = null, arr = null) => {
  if (
    !Array.isArray(arr)
    || arr.length === 0
    || !Number.isInteger(value)
  ) {
    return -1;
  }

  let tempArray = arr.length === 1 ? arr : [];
  const dividerIdx = arr.length % 2 === 0 ? arr.length / 2 : Math.floor(arr.length / 2) + 1;
  if (arr[dividerIdx] > value) {
    tempArray = arr.slice(0, dividerIdx);
  } else {
    tempArray = arr.slice(dividerIdx);
  }

  return undefined;
};
