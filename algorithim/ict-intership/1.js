function maxDifference(px) {
  let min = px[0];
  let result = -1;

  for (let i = 1; i < px.length; i++) {
    if (min < px[i]) {
      result = Math.max(result, px[i] - min);
    } else {
      min = px[i];
    }
  }
  return result;
}
console.log(maxDifference([2, 3, 10, 2, 4, 8, 1])); // 8
