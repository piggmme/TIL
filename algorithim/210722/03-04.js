// 4. 공통 원소 구하기
// A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로 그램을 작성하세요.
// 시간복잡도를 고려해야 하는 문제입니다.

// hash를 이용한다.

function solution(numA, numB) {
  // hash table 생성
  const A = numA.reduce((acc, cur) => {
    acc[cur] = 1;
    return acc;
  }, {});
  const B = numB.reduce((acc, cur) => {
    acc[cur] = 1;
    return acc;
  }, {});

  let result = [];
  for (let key in A) {
    if (B[key]) result.push(parseInt(key));
  }
  return result;
}
// console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 10]));
