// lv2. 멀쩡한 사각형
// 문제 설명
// 가로 길이가 Wcm, 세로 길이가 Hcm인 직사각형 종이가 있습니다.
// 종이에는 가로, 세로 방향과 평행하게 격자 형태로 선이 그어져 있으며,
// 모든 격자칸은 1cm x 1cm 크기입니다.
// 이 종이를 격자 선을 따라 1cm × 1cm의 정사각형으로 잘라 사용할 예정이었는데, 누군가가 이 종이를 대각선 꼭지점 2개를 잇는 방향으로 잘라 놓았습니다. 그러므로 현재 직사각형 종이는 크기가 같은 직각삼각형 2개로 나누어진 상태입니다. 새로운 종이를 구할 수 없는 상태이기 때문에, 이 종이에서 원래 종이의 가로, 세로 방향과 평행하게 1cm × 1cm로 잘라 사용할 수 있는 만큼만 사용하기로 하였습니다.
// 가로의 길이 W와 세로의 길이 H가 주어질 때,
// 사용할 수 있는 정사각형의 개수를 구하는 solution 함수를 완성해 주세요.

// 제한사항
// W, H : 1억 이하의 자연수
// 입출력 예
// W	H	result
// 8	12	80
// 입출력 예 설명
// 입출력 예 #1
// 가로가 8, 세로가 12인 직사각형을 대각선 방향으로 자르면
// 총 16개 정사각형을 사용할 수 없게 됩니다.
// 원래 직사각형에서는 96개의 정사각형을 만들 수 있었으므로, 96 - 16 = 80 을 반환합니다.

// sol
{
  function solution(w, h) {
    const slope = h / w;
    let result = 0;

    for (let i = 1; i <= w; i++) {
      result += Math.ceil(slope * i);
    }

    return (h * w - result) * 2;
  }
  // console.log(solution(8, 12)); // 80
  //   console.log(solution(5, 10)); // 40
  //   console.log(solution(5, 4)); // 12
  //   console.log(solution(5, 5)); // 20
  //   console.log(solution(1, 8)); // 0
  //   console.log(solution(1, 9)); // 0
  //   console.log(solution(2, 18)); // 18
  //   console.log(solution(5, 3)); //8
}

// mysol
{
  // 공약수 구하는게 오래걸림..ㅠ
  function findRatio(x, y) {
    let tp = 2;

    for (let i = x; i >= 1; i--) {
      if (x % i === 0 && y % i === 0) {
        // 최대 공약수
        tp = i;
        break;
      }
    }
    // 비율 [긴변, 짧은변]
    return [y / tp, x / tp];
  }
  function solution(w, h) {
    let delRec = 1;
    let short = Math.min(w, h);
    let long = Math.max(w, h);

    // 짧은 변이 너무 짧으면 후딱 끝냄.
    if (short === 1) return 0;
    else if (short === 2) return (w * h) / 2;

    let smallRec = findRatio(short, long);

    // 기울기
    let a = smallRec[1] / smallRec[0];
    let n = 0;
    // 긴변이 x축이 된다.
    for (let i = 1; i < smallRec[0]; i++) {
      if (n !== parseInt(a * i)) {
        // 정수 자리 바뀜
        n = parseInt(a * i);
        delRec += 2;
      } else {
        delRec += 1;
      }
    }

    return w * h - delRec * (short / smallRec[1]);
  }
  //   console.log(solution(8, 12)); // 80
  //   console.log(solution(5, 10)); // 40
  //   console.log(solution(5, 4)); // 12
  //   console.log(solution(5, 5)); // 20
  //   console.log(solution(1, 8)); // 0
  //   console.log(solution(1, 9)); // 0
  //   console.log(solution(2, 18)); // 18
  //   console.log(solution(5, 3)); //8
}
