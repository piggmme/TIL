// 539. Minimum Time Difference
// https://leetcode.com/problems/minimum-time-difference/
{
  var findMinDifference = function (timePoints) {
    timePoints.sort();
    timePoints = timePoints.map(el => {
      let [hours, minutes] = el.split(':');
      return Number(hours) * 60 + Number(minutes);
    });

    timePoints.push(timePoints[0] + 1440);
    let minDiff = Infinity;
    for (let i = 1; i < timePoints.length; i++) {
      minDiff = Math.min(minDiff, timePoints[i] - timePoints[i - 1]);
    }

    return minDiff;
  };
  console.log(findMinDifference(['00:00', '04:00', '22:00'])); // 120
  console.log(findMinDifference(['23:59', '00:00'])); // 1
  console.log(findMinDifference(['00:00', '23:59', '00:00'])); // 0
}

{
  const calcMinutes = timeStr => {
    const [hourStr, minuteStr] = timeStr.split(':');

    return minuteStr * 1 + hourStr * 60;
  };
  var findMinDifference = function (timePoints) {
    let minutesArr = timePoints
      .map(timePoint => calcMinutes(timePoint))
      .sort((a, b) => a - b);
    let min = Number.MAX_SAFE_INTEGER;

    minutesArr = [...minutesArr, ...minutesArr.map(time => time + 1440)]; // => 어차피 가장 작은 시간 차이는 처음과 끝임!!! 모든 시간 차이를 구할 필요가 없음..

    for (let i = 0; i < minutesArr.length - 1; i++) {
      const dist = Math.abs(minutesArr[i] - minutesArr[i + 1]);
      min = Math.min(min, dist);
    }
    return min;
    // 시계.. 나머지?
  };
  // console.log(findMinDifference(['00:00', '04:00', '22:00'])); // 120
  // console.log(findMinDifference(['23:59', '00:00'])); // 1
  // console.log(findMinDifference(['00:00', '23:59', '00:00'])); // 0
}
