const numsToArray = (nums) => {
  let arrayOfObjs = [];

  nums.forEach((num, idx) =>
    arrayOfObjs.push({
      label: idx,
      value: num,
    })
  );

  return arrayOfObjs;
};

module.exports = numsToArray;
