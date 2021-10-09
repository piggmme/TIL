// 1. 유효한 팰린드롬
// https://ko.wikipedia.org/wiki/%EC%A0%95%EA%B7%9C_%ED%91%9C%ED%98%84%EC%8B%9D

// const isPalindrome = str => {
//   const trimStr = [...str].filter(ch => /^[A-Za-z0-9+]*$/.test(ch)).join('');
//   return trimStr.toUpperCase() === [...trimStr].reverse().join('').toUpperCase();
// };

// const isPalindrome = str => {
//   const temp = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
//   return temp === [...temp].reverse().join('');
// };

const isPalindrome = str => {
  const strTemp = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
  return strTemp === [...strTemp].reverse().join('');
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // => true
console.log(isPalindrome('race a car')); // => false
