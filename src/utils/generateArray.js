const generateRandomArray = (size) => {
  let sorted = new Array(Number(size)).fill(null);

  sorted.forEach((_, idx) => {
    sorted[idx] = idx + 1;
  });

  for (let i = sorted.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [sorted[i], sorted[j]] = [sorted[j], sorted[i]];
  }
  return sorted;
};

module.exports = generateRandomArray;
