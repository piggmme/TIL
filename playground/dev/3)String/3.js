// const replaceAtoSharp = str => [...str].map(ch => (ch === 'A' ? '#' : ch)).join('');
// const replaceAtoSharp = str => str.replaceAll('A', '#');
// const replace = str => str.replace(/A/g, '#');

const replaceAtoSharp = str => str.replace(/A/g, '#');

console.log(replaceAtoSharp('BANANA')); // => B#N#N#
