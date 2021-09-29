function solution(strs) {
  let answer = '';
  let len = Number.MAX_SAFE_INTEGER;
  strs.forEach(x => {
    len = Math.min(len, x.length);
  });
  for (let i = 0; i < len; i++) {
    let s = new Set();
    strs.forEach(x => {
      s.add(x[i]);
    });
    if (s.size === 1) answer += strs[0][i];
  }
  return answer;
}

console.log(solution(['long', 'longtime', 'longest']));

function solution(strs) {
  let answer = '';
  let len = Number.MAX_SAFE_INTEGER;
  strs.forEach(x => {
    len = Math.min(len, x.length);
  });
  for (let i = 0; i < len; i++) {
    let m = new Map();
    strs.forEach(x => {
      m.set(x[i], (m.get(x[i]) || 0) + 1);
    });
    if (m.get(strs[0][i]) === strs.length) answer += strs[0][i];
  }
  return answer;
}

console.log(solution(['long', 'longtime', 'longest']));
