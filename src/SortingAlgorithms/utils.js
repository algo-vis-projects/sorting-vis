const generateRandomArray = (size) => {
  let sorted = new Array(size);

  sorted.forEach((_, idx) => {
    sorted[idx] = idx + 1;
  });
  console.log(sorted);
  return sorted;
};

console.log(generateRandomArray(64));
