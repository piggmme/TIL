// 한 변의 길이가 n인 정삼각형 n2 으로 구성된 정삼각형 격자가 있습니다. 격자의 각 칸에는 문자(영어 대소문자 또는 숫자)가 하나 쓰여 있습니다.
// 당신은 이 격자를 시계방향 또는 반시계방향으로 120도 회전하고자 합니다.
// 격자의 정보를 나타내는 문자열 배열 grid와 회전방향을 나타내는 clockwise가 매개변수로 주어집니다.
// 주어진 격자를 clockwise가 의미하는 방향으로 회전시킨 결과를 배열에 담아 return 하도록 solution함수를 완성해 주세요.

// <제한사항>

// 1<= grid의 길이 <=1,000
// 1<= grid[i]이 길이 <=2*i+1의 길이
// grid[i]의 내용은 영어 대소문자 또는 숫자입니다.
// clockwise가 참이면 시계방향이고, 거짓이면 반시계방향입니다.

{
  function solution(grid, clockwise) {
    let answer = [];
    let N = grid.length;

    const arrs = grid.map(str => str.split(''));

    // 시계
    if (clockwise) {
      const temp = [];
      for (let i = 0; i < 1 + (N - 1) * 2; i++) {
        temp.push(
          arrs
            .map(arr => arr.pop())
            .filter(char => char)
            .reverse(),
        );
      }

      for (let i = 0; i < temp.length - 1; i += 2) {
        const col = [];
        for (let j = 0; j < temp[i].length; j++) {
          if (j < temp[i + 1].length) {
            col.push(temp[i][j], temp[i + 1][j]);
          } else {
            col.push(temp[i][j]);
          }
        }
        answer.push(col);
      }
      answer.push([temp[temp.length - 1][0]]);
    }
    // 반시계
    else {
      const temp = [];
      for (let i = 0; i < 1 + (N - 1) * 2; i++) {
        temp.push(arrs.map(arr => arr.pop()).filter(char => char));
      }

      for (let i = 0; i < temp[0].length; i++) {
        const col = [];
        for (let j = 0; j < temp.length; j++) {
          if (temp[j][i]) {
            col.push(temp[j][i]);
          }
        }
        answer.push(col);
      }
    }

    return answer.reverse().map(arr => arr.join(''));
  }
  console.log(solution(['1', '234', '56789'], true)); // [ '5', '762', '98431' ]
  console.log(solution(['A', 'MAN', 'DRINK', 'WATER11'], false)); // [ '1', 'K1R', 'NNIET', 'AAMRDAW' ]
}
