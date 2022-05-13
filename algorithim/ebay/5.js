function solution(P) {
  const ch = Array(P.length).fill(0);
  const temp = [];
  const part = [];
  const answer = new Set();

  function isParildrome(str1, str2) {
    if (str1 + str2 === [...(str1 + str2)].reverse().join('')) return true;
    if (str2 + str1 === [...(str2 + str1)].reverse().join('')) return true;
    return false;
  }

  function DFS(L) {
    if (L === 2) {
      if (ch[0] === 1) {
        console.log(temp);
        const a = temp[0][1] === 0 ? temp[1][0] : temp[0][0];
        if (isParildrome(temp[0][0], temp[1][0])) answer.add(a);
      }
      return;
    }
    for (let i = 0; i < P.length; i++) {
      if (!ch[i]) {
        temp.push([P[i], i]);
        ch[i] = 1;
        DFS(L + 1);
        temp.pop();
        ch[i] = 0;
      }
    }
  }

  DFS(0);
  return answer;
}
console.log(solution(['11', '111', '11', '211'])); // ["111","211"]
// console.log(solution(["21","123","111","11"]))
