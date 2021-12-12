var merge = function (intervals) {
  const stack = [];
  intervals.sort((a, b) => a[0] - b[0]);

  for (const [start2, end2] of intervals) {
    if (!stack.length) {
      stack.push([start2, end2]);
      continue;
    }
    const [start1, end1] = stack[stack.length - 1];

    if (end1 >= start2) {
      stack.pop();
      stack.push([start1, Math.max(end1, end2)]);
    } else {
      stack.push([start2, end2]);
    }
  }
  return stack;
};
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
); //[[1,6],[8,10],[15,18]]
console.log(
  merge([
    [1, 4],
    [4, 5],
  ]),
); //[[1,5]]
console.log(
  merge([
    [1, 4],
    [2, 3],
  ]),
); // [[1, 4],[2, 3]]
