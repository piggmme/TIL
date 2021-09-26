// https://programmers.co.kr/learn/courses/30/lessons/42746
// 문자열로..풀어보기
function solution(numbers) {
  function sortNum(a, b) {
    [a, b] = a > b ? [a, b] : [b, a];
    const strA = Array.from(a + '');
    const temp = Array.from(b + '');
    let strB = Array(strA.length).fill('0');
    if (strA.length > temp.length) {
      strB.splice(0, temp.length, ...temp);
    }

    for (let i = 0; i < strA.length; i++) {
      if (strA[i] > strB[i]) return [a, b];
      else if (strA[i] < strB[i]) return [b, a];
    }
    return [b, a];
  }

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      numbers.splice(j, 2, ...sortNum(numbers[j], numbers[j + 1]));
    }
  }
  return numbers.join('');
}
console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
