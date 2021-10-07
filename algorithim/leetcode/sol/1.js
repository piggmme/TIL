var countPrimes = function (n) {
  const ch = Array(n).fill(0);
  let cnt = 0;
  for (let i = 2; i * i < n; i++) {
    if (i % 2 === 0) {
      cnt++;
      for (let j = i; j < n; j += i) {
        ch[j] = 1;
      }
    }
  }
  console.log(ch);
  return cnt;
};

console.log(countPrimes(10));
