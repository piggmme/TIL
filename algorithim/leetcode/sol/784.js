// 784. Letter Case Permutation
// https://leetcode.com/problems/letter-case-permutation/

{
  var letterCasePermutation = function (s) {
    const answer = [];
    s = s.toLowerCase();
    const alphaIdx = [];

    // 알파벳 인덱스 구함
    for (let i = 0; i < s.length; i++) {
      if (/[a-z]/.test(s[i])) alphaIdx.push(i);
    }

    if (!alphaIdx) return [s];

    // 대분자로 바꿀 것 부분집합 구함
    const charToLowerCase = [[]];
    const part = [];

    const DFS = L => {
      if (L === alphaIdx.length) {
        if (part.length !== 0) charToLowerCase.push(part.slice());
        return;
      }
      part.push(alphaIdx[L]);
      DFS(L + 1);
      part.pop();
      DFS(L + 1);
    };
    DFS(0);

    for (const arr of charToLowerCase) {
      const str = [...s].map((char, i) =>
        arr.includes(i) ? char.toUpperCase() : char,
      );

      answer.push(str.slice().join(''));
    }

    return answer;
  };
  console.log(letterCasePermutation('a1B2')); // ["a1b2","a1B2","A1b2","A1B2"]
  console.log(letterCasePermutation('3z4')); // ["3z4","3Z4"]
  console.log(letterCasePermutation('12345')); // ["12345"]
  console.log(letterCasePermutation('0')); // ["0"]
  console.log(letterCasePermutation('po')); // ["po","pO","Po","PO"]
  console.log(letterCasePermutation('RmR')); // ["rmr","rmR","rMr","rMR","Rmr","RmR","RMr","RMR"]
}
