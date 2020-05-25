const bubbleSort = (arr) => {
  let history = [{ currSort: [...arr], swap1: null, swap2: null }];

  for (let i = 0; i < arr.length - 1; ++i) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; ++j) {
      const lastArr = history[history.length - 1].currSort;
      let copy = lastArr.map((ele) => ({ ...ele }));
      if (copy[j].value > copy[j + 1].value) {
        [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
        swapped = true;
      }
      history.push({ currSort: copy, swap1: j, swap2: j + 1 });
    }

    if (!swapped) break;
  }

  return history;
};

module.exports = bubbleSort;
