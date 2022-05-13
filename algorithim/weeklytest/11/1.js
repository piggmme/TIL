// 수열의 분할
// N개의 자연수로 이루어진 수열이 주어지면 이 수열을 k개의 원소로 이루어진 연속된 자연수 집합인 부분수열로 분리할 수 있으면 있으면 “YES", 그렇지 못함녀 ”NO"를 출력하는 프로그램을 작성하세요.
// 예를 들어 주어진 수열이 [3, 2, 1, 2, 3, 4, 3, 4, 9, 5, 10, 11]이고, k=3이라면 이 수열은 다음과 같이 [1, 2, 3], [2, 3, 4], [3, 4, 5], [9, 10, 11] 분리할 수 있어 답으로 “YES"를 반환하면 된다.

// ▣ 입력설명
// 매개변수 nums에 N개의 원소를 갖는 수열이 주어지고, 매개변수 k에 분리되는 부분수열의 크기가 주어진다. (1<=k<=N<=100,000), 수열의 원소는 109 를 넘지 않는 자연수이다.

// ▣ 출력설명
// “YES" or "NO"를 반환한다.

// ▣ 매개변수 형식 1
// [3, 2, 1, 2, 3, 4, 3, 4, 9, 5, 10, 11], 3

// ▣ 반환값 형식 1
// YES

// ▣ 매개변수 형식 2
// [1, 1, 2, 2, 3, 3], 3

// ▣ 반환값 형식 2
// YES

// 예제 2번은 [1, 2, 3], [1, 2, 3] 연속된 자연수의 집합인 2개의 부분수열로 분할이 됩니다.

// 소형님 sol
{
  function solution(nums, k) {
    if (nums.length % k !== 0) return 'NO';
    nums.sort((a, b) => a - b);
    const nMap = new Map();
    for (let x of nums) {
      nMap.set(x, (nMap.get(x) || 0) + 1);
    }
    console.log(nMap);

    for (let [key, val] of nMap) {
      let compKey = key;
      console.log({ key, val });
      if (val !== 0) {
        while (compKey < key + k) {
          if (!nMap.has(compKey) || nMap.get(compKey) < val) return 'NO';
          else {
            nMap.set(compKey, nMap.get(compKey) - val);
            if (nMap.get(compKey) === 0) nMap.delete(compKey);
            compKey += 1;
          }
        }
      }
    }
    return 'YES';
  }
  console.log(solution([3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11], 3)); // YES
  // console.log(solution([1, 1, 2, 2, 3, 3], 3)); // YES
}

// my sol
{
  // 1,2,3 => 맨처음 1부터 k 만큼 했을 때 연속된 자연수 아니면 return 'NO'
  function solution(nums, k) {
    if (nums.length % k !== 0) return 'NO';

    const nH = new Map();

    for (const num of nums) {
      nH.set(num, nH.get(num) + 1 || 1);
    }

    const sortedNums = [...nH].sort((a, b) => a[0] - b[0]);
    const len = sortedNums.length;
    let count = nums.length;
    // console.log(sortedNums);

    for (let lt = 0; lt <= len - k; lt++) {
      let flag = false;
      let min = Number.MAX_SAFE_INTEGER;
      for (let rt = lt; rt < lt + k - 1; rt++) {
        if (
          sortedNums[rt][1] <= 0 ||
          sortedNums[rt + 1][1] <= 0 ||
          sortedNums[rt][0] + 1 !== sortedNums[rt + 1][0]
        ) {
          flag = true;
          break;
        }
        min = Math.min(sortedNums[rt][1], sortedNums[rt + 1][1], min);
      }
      if (flag) continue;
      for (let rt = lt; rt < lt + k; rt++) {
        sortedNums[rt][1] -= min;
        count -= min;
      }
    }
    // console.log(sortedNums);
    if (count > 0) return 'NO';
    else if (count === 0) return 'YES';
  }
  console.log(solution([3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11], 3)); // YES
  console.log(solution([1, 1, 2, 2, 3, 3], 3)); // YES
}
