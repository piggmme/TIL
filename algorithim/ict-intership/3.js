{
  // time limit
  function calculateCost(arr, threshold) {
    let optimalCost = Number.MAX_SAFE_INTEGER;
    let tempCost = 0;

    const DFS = start => {
      if (start === arr.length) {
        optimalCost = Math.min(optimalCost, tempCost);
        return;
      }
      for (let i = start; i < arr.length; i++) {
        const subArray = arr.slice(start, i + 1);
        if (subArray.length > threshold) break;

        const max = Math.max(...subArray);
        tempCost += max;
        DFS(i + 1);
        tempCost -= max;
      }
    };

    DFS(0);
    return optimalCost;
  }

  //   console.log(calculateCost([1, 3, 4, 5, 2, 6], 3)); // 10
  //   console.log(calculateCost([1, 2], 1)); // 3
}

{
  function findSubarraysCost(arr, length) {
    let cost = 0;
    for (let i = 0; i < arr.length; i += length) {
      cost += Math.max(...arr.slice(i, i + length));
    }
    return cost;
  }

  function calculateCost(arr, threshold) {
    let length = arr.length;
    let maxLength = threshold;
    while (length % maxLength !== 0) {
      maxLength -= 1;
    }
    return findSubarraysCost(arr, maxLength);
  }
  // console.log(calculateCost([1, 3, 4, 5, 2, 6], 3)); // 10
  //   console.log(calculateCost([1, 2], 1)); // 3
}

{
  function findSubarraysCost({ arrWithIdx, idx, threshold, visited }) {
    const start = idx < threshold + 1 ? 0 : idx - threshold + 1;
    const subArray = arrWithIdx
      .slice(start, idx + threshold)
      .filter(([, i]) => !visited.has(i));

    let sum = 0;
    let part = [];

    for (let i = 0; i < subArray.length - threshold; i++) {
      const temp = subArray.slice(i, i + threshold);
      const curSum = temp.reduce((acc, cur) => acc + cur[0], 0);
      console.log({ temp });

      if (sum < curSum) {
        part = temp.slice();
      }
    }

    for (const [, i] of part) {
      visited.add(i);
    }
    console.log({ subArray, part });
  }

  function calculateCost(arr, threshold) {
    const visited = new Set();
    const original = [...arr];
    const arrWithIdx = arr.map((num, i) => [num, i]);
    const sortedArr = arr.map((num, i) => [num, i]).sort((a, b) => a[0] - b[0]);
    let result = 0;

    while (sortedArr.length) {
      const [max, idx] = sortedArr.pop();
      if (visited.has(idx)) continue;
      findSubarraysCost({
        arrWithIdx,
        idx,
        threshold,
        visited,
      });
      console.log({ max, visited });
      result += max;
    }
    return result;
  }
  //   console.log(calculateCost([1, 3, 4, 5, 2, 6], 3)); // 10
  //   console.log(calculateCost([1, 2], 1)); // 3
}

{
  function calculateCost(arr, threshold) {
    // let len = 1;
    // let result = null;

    // while (len <= threshold) {
    //   if (arr.length % len === 0) {
    //     let tempArr = arr.slice(0);
    //     let sum = 0;
    //     while (tempArr.length > 0) {
    //       let subArr = tempArr.splice(0, len);
    //       sum += Math.max(...subArr);
    //     }
    //     if (result === null || sum < result) {
    //       result = sum;
    //     }
    //     len += 1;
    //   }
    // }
    // return result;
    let length = 1;
    let lowestCost = null;
    while (length <= threshold) {
      if (arr.length % length === 0) {
        let arrCopy = arr.slice(0);
        let sum = 0;
        while (arrCopy.length > 0) {
          let subArr = arrCopy.splice(0, length);
          sum += Math.max(...subArr);
        }
        if (lowestCost === null || sum < lowestCost) {
          lowestCost = sum;
        }
        length += 1;
      }
    }
    return lowestCost;
  }
  console.log(calculateCost([1, 3, 4, 5, 2, 6], 3)); // 10
  console.log(calculateCost([1, 2], 1)); // 3
  console.log(calculateCost([1, 5, 2], 2)); // 3
}
