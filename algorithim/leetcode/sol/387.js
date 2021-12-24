// 387. First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/
{
  var firstUniqChar = function (s) {
    const charIdx = new Map();
    const repeated = new Set();

    for (let i = 0; i < s.length; i++) {
      if (!charIdx.has(s[i]) && !repeated.has(s[i])) charIdx.set(s[i], i);
      else {
        charIdx.delete(s[i]);
        repeated.add(s[i]);
      }
    }

    let minIdx = Number.MAX_SAFE_INTEGER;
    for (const [char, idx] of charIdx) {
      minIdx = Math.min(idx, minIdx);
    }
    return minIdx === Number.MAX_SAFE_INTEGER ? -1 : minIdx;
  };
  console.log(firstUniqChar('leetecode')); // 0
  console.log(firstUniqChar('loveleetcode')); // 2
  console.log(firstUniqChar('aabb')); // -1
}
