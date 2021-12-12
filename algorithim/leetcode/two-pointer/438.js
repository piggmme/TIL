// https://leetcode.com/problems/find-all-anagrams-in-a-string/
// 438. Find All Anagrams in a String

{
  const findAnagrams = (s, p) => {
    const sH = new Map();
    [...p].forEach(char => sH.set(char, sH.get(char) - 1 || -1));
    const answer = [];
    const len = p.length;
    for (let rt = 0; rt < len - 1; rt++) {
      if (sH.get(s[rt]) === -1) sH.delete(s[rt]);
      else sH.set(s[rt], sH.get(s[rt]) + 1 || 1);
    }
    let lt = 0;
    for (let rt = len - 1; rt < s.length; rt++) {
      if (sH.get(s[rt]) === -1) sH.delete(s[rt]);
      else sH.set(s[rt], sH.get(s[rt]) + 1 || 1);
      if (sH.size === 0) answer.push(lt);
      if (sH.get(s[lt]) === 1) sH.delete(s[lt]);
      else sH.set(s[lt], sH.get(s[lt]) - 1 || -1);
      lt++;
    }
    return answer;
  };
  console.log(findAnagrams('cbaebabacd', 'abc')); // [ 0, 6 ]
  console.log(findAnagrams('abab', 'ab')); // [ 0, 1, 2 ]
}
