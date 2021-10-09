// 4 대문자 찾기

// const countUpperCase = str => [...str].filter(ch => ch === ch.toUpperCase()).length;

// const countUpperCase = str => str.match(/[A-Z]/g).length;

const countUpperCase = str => str.match(/[A-Z]/g).length;

console.log(countUpperCase('KoreaTimeGood')); // => 3
