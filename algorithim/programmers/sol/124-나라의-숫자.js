// 124 나라의 숫자

// sol
{
  function change124(n) {
    return n === 0
      ? ''
      : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
  }
  console.log(change124(12)); // 44
}

// mysol
{
  function findNum(n, dist) {
    const numbers = [4, 1, 2];
    let quotient = dist;
    let remainder = 0;
    while (n) {
      let tempQ = Math.floor(quotient / 3);
      remainder = quotient % 3;
      if (remainder > 0) quotient = tempQ + 1;
      else quotient = tempQ;
      n--;
    }
    return numbers[remainder];
  }

  function solution(n) {
    // 자리수
    let pos = 1;
    let sum = 0;
    for (; pos < 20; pos++) {
      sum += 3 ** pos;
      if (n <= sum) {
        sum -= 3 ** pos;
        break;
      }
    }

    let answer = [];
    const dist = n - (sum + 1) + 1;
    for (let i = 1; i <= pos; i++) {
      answer.push(findNum(i, dist));
    }

    return answer.reverse().join('');
  }
}
