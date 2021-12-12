// 영화 관람
// 수요일은 오후에 영화를 보는 날입니다. 현수네 반 N명의 학생들은 영화를 보기 위해 학교 강 당에 모였습니다.
// 강당의 좌석은 영화관처럼 계단형이 아니라 평평한 바닥에 의자가 일렬로 놓여진 상태입니다. 앉는 순서는 제일 앞자리부터 반 번호순(1번 부터)으로 앉습니다.
// 그런데 영화시청에 문제가 생겼습니다. 만약 앞자리에 앉은 키가 큰 학생이 앉으면 그 학생보 다 앉은키가 작은 뒷자리 학생은 스크린이 보이지 않습니다.
// N명의 학생들의 앉은 키 정보가 주어지면 각 학생들의 최초 시야를 가려 영화관람을 불가능하 게 하는 학생들을 찾고 싶습니다.
// 예를 들어 N=5이고 다음과 같이 1번 학생부터 앞자리에 차례대로 앉았다면 50 57 52 53 51
// 1번 학생(50)은 제일 앞자리이므로 최초 시청방해 학생이 없습니다. 2번 학생(57)은 시청 방해학생이 없습니다.
// 3번 학생(52)의 최초 시청 방해학생은 2번(57) 학생입니다.
// 4번 학생(53)의 최초 시청 방해학생은 2번(57) 학생입니다.
// 5번 학생(51)의 최초 시청 방해학생은 4번(53) 학생입니다.
// N명의 앉은 키 정보가 주어지면 각 학생들의 최초 시청을 방해하는 학생들의 번호를 출력하는 프로그램을 장성하세요.
// ▣ 입력설명
// 첫 줄에 한 줄에 앉은 학생수 N(3<=N<=100,000)이 주어집니다.
// 두 번째 줄에 N명의 앉은 키 정보(1부터 100,000이하)가 1번 학생부터 반 번호순으로 주어집니다.
// ▣ 출력설명
// 첫 번째 줄에 1번 학생부터 N번 학생 순으로 자기 자신을 최초로 시청방해하는 학생의 번호를 출력합니다. 시청방해 학생이 없을 경우 0을 출력합니다.
// ▣ 입력예제 1
// 5
// 50 57 52 53 51
// ▣ 출력예제 1 00224

{
  function solution(nums) {
    let n = nums.length;
    let answer = Array.from({ length: n }, () => 0);
    let stack = [];
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
        answer[stack[stack.length - 1]] = i + 1;
        stack.pop();
      }
      stack.push(i);
    }

    return answer;
  }
  //   console.log(solution([50, 57, 52, 53, 51]));
  //console.log(solution([50, 46, 55, 76, 65, 50, 55, 53, 55, 50]));
}

// 연습
{
  const solution = nums => {
    const stack = [];
    const answer = Array(nums.length).fill(0);

    for (let i = nums.length - 1; i >= 0; i--) {
      while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
        answer[stack[stack.length - 1]] = i + 1;
        stack.pop();
      }
      stack.push(i);
    }
    return answer;
  };
  console.log(solution([50, 57, 52, 53, 51]));
  //console.log(solution([50, 46, 55, 76, 65, 50, 55, 53, 55, 50]));
}
