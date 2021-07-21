// 3. 가위 바위 보
// A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고,B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
// 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
// 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하세요.
function solution(aNum, bNum) {
  const win = {
    // key = 나, value = 상대 일 때 내가 이기는 경우
    1: 3, // 가위 > 보
    2: 1, // 바위 > 가위
    3: 2, // 보 > 바위
  };
  let result = [];
  for (let i = 0; i < aNum.length; i++) {
    let a = aNum[i],
      b = bNum[i];
    if (win[a] === b) {
      result.push("A");
    } else if (a === b) {
      result.push("D");
    } else {
      result.push("B");
    }
  }
  return result;
}
//console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
