// 131. Palindrome Partitioning
// https://leetcode.com/problems/palindrome-partitioning/
const isPalindrome = s => {
  let lt = 0;
  let rt = s.length - 1;
  while (lt <= rt) {
    if (s[lt] !== s[rt]) return false;
    lt++;
    rt--;
  }
  return true;
};
const partition = s => {
  const part = [];
  const temp = [];

  const DFS = start => {
    if (start === s.length) {
      part.push(temp.slice());
      return;
    }

    for (let i = start; i < s.length; i++) {
      const substring = s.substring(start, i + 1);
      if (isPalindrome(substring)) {
        temp.push(substring);
        DFS(i + 1);
        temp.pop();
      }
    }
  };
  DFS(0);
  return part;
};
console.log(partition('aab')); // [ [ 'a', 'a', 'b' ], [ 'aa', 'b' ] ]
console.log(partition('a')); // [ [ 'a' ] ]
