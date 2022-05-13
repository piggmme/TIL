function cmp(a, b) {
  return a - b;
}

function solution(A, B) {
  var n = A.length;
  var m = B.length;
  A.sort(cmp);
  B.sort(cmp);
  var i = 0;
  for (var k = 0; k < n; k++) {
    while (i < m - 1 && B[i] < A[k]) i += 1;
    if (A[k] == B[i]) return A[k];
  }
  return -1;
}

console.log(solution([10, 11], [1, 1, 1, 1, 1, 1, 10, 11])); // 11 => 경계!!
// console.log(solution([1, 3, 2, 1], [4, 2, 5, 3, 2])); // 2
// console.log(solution([2, 1], [3, 3])); // -1
