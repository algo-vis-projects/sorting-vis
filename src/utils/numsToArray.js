const numsToArray = (nums) => {
  const numsStringArr = nums.toString().split('');
  let numsArr = [];
  numsStringArr.forEach((num) => numsArr.push(Number(num)));

  let arrayOfObjs = [];

  numsArr.forEach((num, idx) =>
    arrayOfObjs.push({
      label: idx,
      value: num,
    })
  );

  return arrayOfObjs;
};

module.exports = numsToArray;
