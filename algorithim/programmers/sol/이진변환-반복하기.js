// 이진 변환 반복하기
// https://programmers.co.kr/learn/courses/30/lessons/70129
const countZero = str => [...str].filter(ch => ch === '0').length;

function solution(s) {
  let cntZero = 0;
  let cntLevel = 0;
  let string = s;

  while (true) {
    const curCntZero = countZero(string);
    if (string === '1') break;

    cntLevel += 1;
    cntZero += curCntZero;
    const temp = '1'.repeat(string.length - curCntZero);
    string = temp.length.toString(2);
  }
  return [cntLevel, cntZero];
}
console.log(solution('110010101001'));

// const binaryToDecimal = str => {
//   let decimal = 0;
//   const binaryStr = [...str].reverse();
//   for (let i = 0; i < str.length; i++) {
//     decimal += binaryStr[i] ? 2 ** i : 0;
//   }
//   return decimal;
// };
