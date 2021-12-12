const solution = (n, primes) => {
  let cnt = 1;
  let i = 1;

  const isUgly = num => {
    while (1) {
      if (num === 1) return true;
      const makeZeroNums = primes.filter(prime => num % prime === 0);
      if (makeZeroNums.length === 0) return false;
      for (const zero of makeZeroNums) {
        num /= zero;
      }
    }
  };

  while (1) {
    if (isUgly(i)) {
      if (cnt === n) return i;
      cnt++;
    }
    i++;
  }
};
console.log(solution(12, [2, 7, 13, 19])); // 32
