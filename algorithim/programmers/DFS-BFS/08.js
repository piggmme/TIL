// 여행 경로
// https://programmers.co.kr/learn/courses/30/lessons/43164
function solution(tickets) {
  let answer = [];
  let temp = [];

  function DFS(L, i, ch) {
    if (L === tickets.length - 1) {
      answer.push(temp.slice());
      return;
    } else {
      for (let j = 0; j < tickets.length; j++) {
        if (ch[j] === 0) {
          if (tickets[i][1] === tickets[j][0]) {
            ch[j] = 1;
            temp.push(tickets[j][1]);
            DFS(L + 1, j, ch.slice());
            ch[j] = 0;
            temp.pop();
          }
        }
      }
    }
  }

  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i][0] === 'ICN') {
      let ch = Array(tickets.length).fill(0);
      ch[i] = 1;
      temp.push(tickets[i][0], tickets[i][1]);
      DFS(0, i, ch.slice());
      temp = [];
    }
  }

  let strAns = answer.map(arr => arr.join());
  strAns.sort((a, b) => (a.length > b.length ? 1 : a > b ? 1 : -1));

  return strAns[0].split(',');
}

// console.log(
//   solution([
//     ['ICN', 'JFK'],
//     ['HND', 'IAD'],
//     ['JFK', 'HND'],
//   ]),
// );

// console.log(
//   solution([
//     ['ICN', 'SFO'],
//     ['ICN', 'ATL'],
//     ['SFO', 'ATL'],
//     ['ATL', 'ICN'],
//     ['ATL', 'SFO'],
//   ]),
// );

// console.log(
//   solution([
//     ['ICN', 'BOO'],
//     ['ICN', 'COO'],
//     ['COO', 'DOO'],
//     ['DOO', 'COO'],
//     ['BOO', 'DOO'],
//     ['DOO', 'BOO'],
//     ['BOO', 'ICN'],
//     ['COO', 'BOO'],
//   ]),
// );
// // ["ICN", "BOO", "DOO", "BOO", "ICN", "COO", "DOO", "COO", "BOO"]
