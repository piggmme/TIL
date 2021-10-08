// 1
var countPrimes = n => {
  const isPrime = Array(n).fill(1);
  isPrime[0] = isPrime[1] = 0;

  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = 0;
      }
    }
  }

  return isPrime.filter(num => num).length;
};

// 2
var countPrimes = function (n) {
  let answer = 0;
  const ch = Array.from({ length: n + 1 }, () => 0);
  // const ch = Array(n).fill(0);

  if (n === 0) return 0;

  if (n === 1) return 0;

  for (let i = 2; i < n; i++) {
    if (ch[i] === 0) {
      answer++;
      for (let j = i * i; j < n; j += i) ch[j] = 1;
    }
  }

  return answer;
};

console.log(countPrimes(10));
