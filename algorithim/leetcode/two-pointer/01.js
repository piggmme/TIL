// https://leetcode.com/problems/trapping-rain-water/
{
  const trap = height => {
    let answer = 0;
    let n = height.length;
    let lt = 0;
    let rt = 1;
    let flag = false;
    while (lt < n - 2) {
      if (height[lt] === 0) {
        lt += 1;
        rt += 1;
      } else if (rt < n && height[lt] > height[rt]) {
        rt += 1;
      } else if (rt === n) {
        lt += 1;
        rt = lt + 1;
      } else if (height[lt] <= height[rt]) {
        for (let i = lt + 1; i < rt; i++) {
          answer += height[lt] - height[i];
        }
        lt = rt;
        rt += 1;
      }
    }
    return answer;
  };
  //   console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
  //   console.log(trap([4, 2, 0, 3, 2, 5])); // 9
  //   console.log(trap([4, 2, 3])); // 1
}

{
  const calcWaterVolume = (height, op) => {
    let answer = 0;
    let n = height.length;
    let lt = 0;
    let rt = 1;

    while (lt < n - 2) {
      if (height[lt] === 0) {
        lt += 1;
        rt += 1;
      } else if (
        rt < n && op === 'left'
          ? height[lt] > height[rt]
          : height[lt] >= height[rt]
      ) {
        rt += 1;
      } else if (rt === n) {
        lt += 1;
        rt = lt + 1;
      } else if (
        op === 'left' ? height[lt] <= height[rt] : height[lt] < height[rt]
      ) {
        console.log(lt, rt);

        for (let i = lt + 1; i < rt; i++) {
          answer += height[lt] - height[i];
          console.log(height[lt] - height[i]);
        }
        lt = rt;
        rt += 1;
      }
    }
    return answer;
  };

  const trap = height => {
    return (
      calcWaterVolume(height.slice(), 'left') +
      calcWaterVolume(height.reverse().slice(), 'right')
    );
  };

  console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
  //   console.log(trap([4, 2, 0, 3, 2, 5])); // 9
  //   console.log(trap([4, 2, 3])); // 1
}
