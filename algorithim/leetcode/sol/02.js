// https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/

const countPrimes = range => {
  const prime = Array(range).fill(true);
  prime[0] = prime[1] = false;

  for (let i = 2; i * i < range; i++) {
    if (prime[i]) {
      for (let j = i * i; j <= range; j += i) {
        prime[j] = false;
      }
    }
  }
  return prime;
};

const countSetBits = decimal =>
  [...decimal.toString(2)].reduce((acc, cur) => +acc + +cur, 0);

var countPrimeSetBits = function (left, right) {
  let setbits = [];
  for (let i = left; i <= right; i++) {
    setbits.push(countSetBits(i));
  }

  const prime = countPrimes(Math.max(...setbits) + 1);

  return setbits.filter(setbit => prime[setbit]).length;
};

console.log(countPrimeSetBits(6, 10));
console.log(countPrimeSetBits(10, 15));
