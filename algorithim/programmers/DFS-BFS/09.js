// https://programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
  const wordList = ['A', 'E', 'I', 'O', 'U'];
  const map = new Map();
  let value = 0;
  dfs('', 0);
  return map.get(word);

  function dfs(str, depth) {
    if (depth > 5) return;
    if (!map.has(str)) map.set(str, value++);
    for (let i = 0; i < wordList.length; ++i) {
      dfs(str + wordList[i], depth + 1);
    }
  }
}
console.log(solution('AAAAE'));
