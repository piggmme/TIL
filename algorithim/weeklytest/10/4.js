{
  function solution(s) {
    const part = new Set();
    const temp = [];
    const len = s.length;
    function DFS(start) {
      if (start >= len) {
        part.add(temp.join(','));
        return;
      }
      if (
        start + 2 <= len &&
        +s.substring(start, start + 2) <= 26 &&
        +s.substring(start, start + 2) >= 10
      ) {
        temp.push(s.substring(start, start + 2));
        DFS(start + 2);
        temp.pop();
      }
      if (start + 1 <= len && +s.substring(start, start + 1) >= 1) {
        temp.push(s.substring(start, start + 1));
        DFS(start + 1);
        temp.pop();
      }
    }
    DFS(0);
    return part.size;
  }
  //   console.log(solution('25114'));
  console.log(solution('2510104')); // 2
}

{
  function solution(s) {
    const len = s.length;
    const arr = s.split('');
    const dy = Array(len + 1).fill(0);
    dy[0] = 1;
    arr.unshift('0');

    for (let i = 1; i <= len; i++) {
      const str1 = arr.slice(i - 1, i + 1).join('');
      const str2 = arr.slice(i, i + 1).join('');

      if (str1[0] !== '0' && str1[1] !== '0' && +str1 <= 26) {
        dy[i] = dy[i - 2] + dy[i - 1];
      } else if (+str2 >= 1) {
        dy[i] = dy[i - 1];
      } else if (str1[0] !== '0' && str1[1] === '0') {
        dy[i] = dy[i - 1];
      }
    }
    console.log(dy);
    return dy[len];
  }
  //   console.log(solution('25114'));
  console.log(solution('2510104')); // 8
}
