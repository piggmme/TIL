// 5. 문자 찾기
// const count = (str, target) => [...str].filter(ch => ch === target).length;

const count = (str, char) => str.match(new RegExp(char, 'g')).length;

console.log(count('COMPUTERPROGRAMMING', 'R')); // => 3
