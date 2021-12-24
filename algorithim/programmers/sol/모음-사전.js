// 모음 사전
// https://programmers.co.kr/learn/courses/30/lessons/84512

// function solution(word) {
//   const wordVal = {
//     A: 1,
//     E: 2,
//     I: 3,
//     O: 4,
//     U: 5,
//   };
//   const val = [0, 5, 30, 155, 780];
//   let answer = 0;

//   let pos = 4;
//   for (let i = 0; i < word.length; i++) {
//     answer += val[pos] * (wordVal[word[i]] - 1) + wordVal[word[i]];
//     pos--;
//   }
//   return answer;
// }

function solution(word) {
  const alpha = ['A', 'E', 'I', 'O', 'U'];
  let string = [];
  let answer = 0;
  let flag = false;
  let num = 0;

  function DFS(L) {
    num++;
    if (flag) return;
    if (string.join('') === word) {
      flag = true;
      answer = num;
    }
    if (L === 5) return;
    else {
      for (let i = 0; i < 5; i++) {
        string.push(alpha[i]);
        DFS(L + 1);
        string.pop();
      }
    }
  }
  DFS(0);
  return answer - 1;
}

// let a = ['AAAAE', 'AAAE', 'AAAEA'];
console.log(solution('AAAAE')); // 6
console.log(solution('AAAE')); // 10
console.log(solution('I')); // 1563
console.log(solution('EIO')); // 1189
