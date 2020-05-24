const bubbleSort = (arr) => {
  let history = [[...arr]];

  for (let i = 0; i < arr.length - 1; ++i) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; ++j) {
      const lastArr = history[history.length - 1];
      let copy = lastArr.map((ele) => ({ ...ele }));
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

module.exports = bubbleSort;
