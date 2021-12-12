// 1
function solution(arr) {
  var answer = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = i; j < n; j++) {
      min = Math.min(arr[j], min);
      answer += min;
    }
  }

  return answer;
}

console.log(solution([3, 1, 2, 4]));
