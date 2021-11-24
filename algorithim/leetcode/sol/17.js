// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// 17. Letter Combinations of a Phone Number
{
  var letterCombinations = function (digits) {
    if (!digits) return [];

    const config = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z'],
    };
    const reuslt = [];
    const combin = (str, digitsIdx) => {
      if (digitsIdx == digits.length) {
        reuslt.push(str);
        return;
      }
      const letters = config[digits[digitsIdx]];
      for (const s of letters) {
        combin(str + s, digitsIdx + 1);
      }
    };

    combin('', 0);
    return reuslt;
  };
  //   console.log(letterCombinations('23'));
  //   console.log(letterCombinations(''));
}

{
  const letterCombinations = digits => {
    if (!digits.length) return [];
    const letters = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z'],
    };

    let answer = [];
    const DFS = (L, str) => {
      if (L === digits.length) {
        answer.push(str);
        return;
      }
      const curLetters = letters[digits[L]];
      for (const letter of curLetters) {
        DFS(L + 1, str + letter);
      }
    };
    DFS(0, '');
    return answer;
  };
  console.log(letterCombinations('23'));
  console.log(letterCombinations(''));
}

{
  const letterCombinations = digits => {
    const letters = Array(10).fill('');
    letters[2] = 'abc';
    letters[3] = 'def';
    letters[4] = 'ghi';
    letters[5] = 'jkl';
    letters[6] = 'mno';
    letters[7] = 'pqrs';
    letters[8] = 'tuv';
    letters[9] = 'wxyz';

    if (!digits.length) return [];

    let temp = [];
    let answer = [];
    const DFS = L => {
      if (L === digits.length) {
        answer.push(temp.slice().join(''));
        return;
      } else {
        for (let i = 0; i < letters[digits[L]].length; i++) {
          temp.push(letters[digits[L]][i]);
          DFS(L + 1);
          temp.pop();
        }
      }
    };
    DFS(0);
    return answer;
  };
  //   console.log(letterCombinations('23'));
  //   console.log(letterCombinations(''));
}
