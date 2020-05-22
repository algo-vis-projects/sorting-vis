const numsToArray = (nums) => {
  const numsStringArr = nums.toString().split('');
  let numsArr = [];
  numsStringArr.forEach((num) => numsArr.push(Number(num)));

  return numsArr;
};

module.exports = numsToArray;
