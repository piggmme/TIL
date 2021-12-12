function solution(food_times, k) {
  const times = [0, ...food_times];
  const sT = food_times
    .slice(0)
    .map((el, i) => [el, i + 1])
    .sort((a, b) => a[0] - b[0]);
  sT.unshift([0, 0]);

  let rest = food_times.length;
  for (let rt = 1; rt < sT.length; rt++) {
    if ((sT[rt][0] - sT[rt - 1][0]) * rest > k) {
      const idx = k % rest;
      // 남은것들을 인덱스 기준 정렬해서 인덱스가 idx번째인 것
      return sT.slice(rt).sort((a, b) => a[1] - b[1])[idx][1];
    } else {
      k -= (sT[rt][0] - sT[rt - 1][0]) * rest;
      rest -= 1;
    }
  }
  return -1;
}
console.log(solution([3, 1, 2], 5)); // 1
console.log(solution([1, 2, 3], 7)); // -1
console.log(solution([10, 8, 4, 10, 6, 9, 2, 7, 6, 8], 48)); // 4
