// 6. 대소문자 변환

// const toggleCase = str =>  [...str].map(ch => (ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase())).join('');

// const toggleCase = str =>
//   str.replace(/([a-z]+)|([A-Z]+)/g, (_, lowerCase, upperCase) =>
//     lowerCase ? lowerCase.toUpperCase() : upperCase.toLowerCase()
//   );

const toggleCase = str =>
  str.replace(/([a-z]+)|([A-Z]+)/g, (i, lower, upper) =>
    lower ? lower.toUpperCase() : upper.toLowerCase()
  );

console.log(toggleCase('StuDY')); // => 'sTUdy'
