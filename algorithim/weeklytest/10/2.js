// 2
function solution(cells, n) {
  const len = cells.length;
  let binary = cells.join('');
  let digit = parseInt(binary, 2);
  const arr = [];

  for (let i = 0; i < 50; i++) {
    digit = ((digit & 63) ^ (digit >> 2) ^ 63) << 1;
    binary = digit.toString(2);
    arr.push('0'.repeat(len - binary.length) + binary);
  }

  const idx = (n - 1) % 14;

  return arr[idx].split('').map(num => +num);
}
console.log(solution([0, 1, 0, 1, 1, 0, 0, 1], 7)); // [0,0,1,1,0,0,0,0]
console.log(solution([1, 0, 0, 1, 0, 0, 1, 0], 1000000000)); // [0,0,1,1,1,1,1,0]

// console.log(1 ^ 1);
// console.log(1 ^ 0);
// console.log(0 ^ 1);
// console.log((0 ^ 0));
// 다르면 1 같으면 0 => !(a ^ b)
// parseInt('01011001', 2) = 89
//  (25).toString(2) = '11001'
// ((a & 63) ^ (a >> 2) ^ 63 )<< 1
