// 866. Prime Palindrome
// https://leetcode.com/problems/prime-palindrome/

const findPrimes = n => {
  const primes = Array(n).fill(true);
  primes[0] = primes[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }
  return primes;
};

// ---

const isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return n !== 1;
};

// n은 자리수
// 10001
// 10 + 0 + 01 ~ 10 + 9 + 01 ~ 99 + 9 + 99
const getPalindrome = n => {
  const res = [];
  const len = Math.floor(n / 2);
  for (let i = 10 ** (len - 1); i < 10 ** len; i++) {
    // j 는  n 이 홀수 일 때 붙이고 짝수일 때 뺀다.
    for (let j = 0; j < 10; j++) {
      res.push(+(i + '' + j + i.toString().split('').reverse().join('')));
    }
  }
  return res;
};

let primePalindrome = function (n) {
  const temp = [2, 2, 2, 3, 5, 5, 7, 7, 11, 11, 11, 11];
  if (temp[n]) return temp[n];

  let N = n.toString().length;

  while (true) {
    for (const number of getPalindrome(N)) {
      if (number >= n && isPrime(number)) return number;
    }
    N += 1;
  }
};
