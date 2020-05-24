const bubbleSort = (arr) => {
  let history = [];

  for (let i = 0; i < arr.length - 1; ++i) {
    let swapped = false;
    let copy = arr.map((obj) => ({ ...obj }));

    for (let j = 0; j < copy.length - i - 1; ++j) {
      if (copy[j].value > copy[j + 1].value) {
        [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
        swapped = true;

        history.push(copy);
      }
    }

    if (!swapped) break;
  }

  return history;
};

console.log(
  bubbleSort([
    { label: 0, value: 5 },
    { label: 1, value: 4 },
    { label: 2, value: 3 },
  ])
);

module.exports = bubbleSort;
