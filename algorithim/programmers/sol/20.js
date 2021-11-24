// https://programmers.co.kr/learn/courses/30/lessons/42891?language=javascript
{
  function solution(food_times, k) {
    const times = [0, ...food_times];
    const sT = times.slice().sort((a, b) => a - b);

    let rest = sT.length - 1; // 남은 음식
    for (let rt = 1; rt < sT.length; rt++) {
      // 해당 음식은 (sT[rt] - sT[rt - 1]) * rest 이내 먹지 못함.
      if ((sT[rt] - sT[rt - 1]) * rest > k) {
        const idx = k % rest;
        let cnt = 0;

        for (let j = 1; j < sT.length; j++) {
          if (times[j] >= sT[rt]) {
            if (idx === cnt) return j;
            cnt++;
          }
        }
      } else {
        // 해당 음식은 (sT[rt] - sT[rt - 1]) * rest 이내에 다 먹게됨.
        k -= (sT[rt] - sT[rt - 1]) * rest;
        rest -= 1;
      }
    }
    return -1;
  }
  console.log(solution([3, 1, 2], 5)); // 1
}
