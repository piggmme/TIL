// 739. Daily Temperatures
// https://leetcode.com/problems/daily-temperatures/
{
  const dailyTemperatures = temperatures => {
    const answer = Array(temperatures.length).fill(0);

    for (let lt = 0; lt < temperatures.length; lt++) {
      let rt = lt + 1;
      while (rt < temperatures.length) {
        if (temperatures[lt] < temperatures[rt]) {
          answer[lt] = rt - lt;
          lt += 1;
          rt = lt + 1;
        } else {
          rt += 1;
        }
      }
    }
    return answer;
  };
  console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
  console.log(dailyTemperatures([30, 40, 50, 60]));
  console.log(dailyTemperatures([30, 60, 90]));
}
