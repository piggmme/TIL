// 6. 대소문자 변환

// const toggleCase = str =>  [...str].map(ch => (ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase())).join('');

const toggleCase = str =>
  str.replace(/([a-z]+)|([A-Z]+)/g, (_, lowerCase, upperCase) => {
    console.log(_, lowerCase, upperCase);
    return lowerCase ? lowerCase.toUpperCase() : upperCase.toLowerCase();
  });

console.log(toggleCase('StuDY')); // => 'sTUdy'
