// https://leetcode.com/problems/maximum-units-on-a-truck/
// 1710. Maximum Units on a Truck
{
  var maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let answer = 0;

    for (const [boxNum, unitNum] of boxTypes) {
      if (truckSize === 0) return answer;
      if (truckSize <= boxNum) {
        answer += truckSize * unitNum;
        return answer;
      } else {
        answer += boxNum * unitNum;
        truckSize -= boxNum;
      }
    }
    return answer;
  };
  console.log(
    maximumUnits(
      [
        [1, 3],
        [2, 2],
        [3, 1],
      ],
      4,
    ),
  ); // 8
  console.log(
    maximumUnits(
      [
        [5, 10],
        [2, 5],
        [4, 7],
        [3, 9],
      ],
      10,
    ),
  );
}
