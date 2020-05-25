const insertionSort = (inputArr) => {
  let history = [
    {
      currSort: [...inputArr],
      key: inputArr[1].value,
      comparison: null,
    },
  ];

  let length = inputArr.length;
  for (let i = 1; i < length; i++) {
    let key = history[history.length - 1].currSort[i];
    let j = i - 1;
    while (
      j >= 0 &&
      history[history.length - 1].currSort[j].value > key.value
    ) {
      let arrCopy = [...history[history.length - 1].currSort];
      arrCopy[j + 1] = arrCopy[j];
      history.push({
        currSort: arrCopy,
        key: key.value,
        comparison: j,
      });
      j = j - 1;
    }
    let outerCopy = [...history[history.length - 1].currSort];
    history.push({
      currSort: outerCopy,
      key: key.value,
      comparison: j + 1,
    });
    history[history.length - 1].currSort[j + 1] = key;
  }
  return history;
};

module.exports = insertionSort;

// [4,5,3,2,1]
// [4,5,3,2,1]
// [4,5,5,2,1]
// [4,4,5,2,1]
// [3,4,5,2,1]
// [3,4,5,5,1]
// [3,4,4,5,1]
// [3,3,4,5,1]
// [2,3,4,5,1]
