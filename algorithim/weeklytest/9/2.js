// 2
function checkPalindrome(s) {
  // 0
  if (s === [...s].reverse().join('')) return 0;

  // 1
  let lt = 0;
  let rt = s.length - 1;
  while (lt <= rt) {
    if (s[lt] === s[rt]) {
      lt++;
      rt--;
    } else {
      let spliceStr1 = [...s];
      let spliceStr2 = [...s];

      spliceStr1.splice(rt, 1);
      spliceStr2.splice(lt, 1);

      if (spliceStr1.join('') === spliceStr1.reverse().join('')) return 1;
      else if (spliceStr2.join('') === spliceStr2.reverse().join('')) return 1;
      // 2
      else return 2;
    }
  }
}

function solution(arr) {
  const answer = [];

  for (const str of arr) {
    answer.push(checkPalindrome(str));
  }

  return answer;
}
console.log(
  solution([
    'abba',
    'summuus',
    'xabba',
    'xabbay',
    'comcom',
    'comwwmoc',
    'comwwtmoc',
  ]),
); // [0, 1, 1, 2, 2, 0, 1]
