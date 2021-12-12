var findDisappearedNumbers = function (nums) {
  const set = new Set([...nums]);

  const answer = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) answer.push(i);
  }
  return answer;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
