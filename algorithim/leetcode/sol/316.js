// https://leetcode.com/problems/remove-duplicate-letters/
// 316. Remove Duplicate Letters
var removeDuplicateLetters = function (s) {
  const strMap = new Set();
  const stack = [s[s.length - 1]];
  strMap.add(s[s.length - 1]);

  for (let i = s.length - 2; i >= 0; i--) {
    if (strMap.has(s[i])) {
      const temp1 = stack.slice();
      const temp2 = stack.slice();
      temp2[temp2.indexOf(s[i])] = null;
      temp2.push(s[i]);
      if (temp1.reverse().join('') > temp2.reverse().join('')) {
        stack[stack.indexOf(s[i])] = null;
        stack.push(s[i]);
      }
    } else {
      strMap.add(s[i]);
      stack.push(s[i]);
    }
    // console.log('>', stack);
  }

  return stack.reverse().join('');
};
console.log(removeDuplicateLetters('bcabc')); // abc
console.log(removeDuplicateLetters('cbacdcbc')); // acdb
console.log(removeDuplicateLetters('acbacdcbc')); // abcd
