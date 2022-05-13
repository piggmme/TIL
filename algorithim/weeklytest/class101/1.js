function solution(nums) {
  const numsHash = new Map();
  for (const num of nums) {
    numsHash.set(num, numsHash.get(num) + 1 || 1);
  }
  for (const [key, value] of numsHash) {
    if (value % 2 === 1) return false;
  }
  return true;
}
console.log(solution([1, 2, 2, 1])); // true
console.log(solution([7, 7, 7])); // false
console.log(solution([1, 2, 2, 3])); // false
