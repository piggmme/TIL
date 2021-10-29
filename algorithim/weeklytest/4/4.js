// 4
// 프로그래머스 - 무지의 먹방 라이브
{
  function solution(times, k) {
    let processsInfo = times.map((time, i) => [time, i + 1]);
    processsInfo.sort((a, b) => a[0] - b[0]);

    // 시간, 인덱스
    console.log(processsInfo);

    let time = 0;
    let len = times.length;
    processsInfo.forEach(process => {
      const processsTime = process[0];
      const passTime = len * (processsTime - time);
      console.log(len, time, passTime);

      time = passTime / len;
      len--;
    });

    // (k % times.length) + 1;
  }
  //   console.log(solution([1, 2, 3], 5));
  //   console.log(solution([1, 3, 6], 8)); //5;
}

{
  function solution(times, k) {
    times.sort((a, b) => a[0] - b[0]);

    // 시간, 인덱스
    let time = 0;
    let len = times.length;

    for (let i = 0; i < times.length; i++) {
      time += len * times[i];
      len--;
      while (times[i] === times[i + 1]) i++;
    }

    // (k % times.length) + 1;
  }
  console.log(solution([1, 2, 3], 5)); // 3
  // console.log(solution([1, 3, 6], 8)); //5;
}
