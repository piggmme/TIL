// 3. 최대 부분 증가수열 => 오늘 문제!!
// N개의 자연수로 이루어진 수열이 주어졌을 때, 그 중에서 가장 길게 증가하는(작은 수에서 큰
// 수로) 원소들의 집합을 찾는 프로그램을 작성하라. 예를 들어, 원소가 2, 7, 5, 8, 6, 4, 7,
// 12, 3 이면 가장 길게 증가하도록 원소들을 차례대로 뽑아내면 2, 5, 6, 7, 12를 뽑아내어 길
// 이가 5인 최대 부분 증가수열을 만들 수 있다.
// - 순서는 바꿀 수 없음
// - 일부 숫자를 없애서 가장 긴 증가수열을 찾는 것

// ▣ 입력설명
// 매개변수 nums에 길이가 N(1≤N≤1,000)인 수열이 주어집니다.
// ▣ 출력설명
// 부분증가수열의 최대 길이를 반환합니다.
// ▣ 매개변수 형식 1
// [5, 3, 7, 8, 6, 2, 9, 4]
// ▣ 반환값 형식 1
// 4

// my try)
{
  function solution(nums) {
    let n = nums.length;
    let dy = Array.from({ length: n }, () => 0);
    let answer = 0;
    dy[0] = 0;

    for (let i = 0; i < n; i++) {
      let tmp = []; // 기준보다 작은 숫자의 dy를 저장
      for (let j = i - 1; j >= 0; j--) {
        if (nums[i] > nums[j]) {
          tmp.push(dy[j]);
        }
      }
      if (tmp.length === 0) dy[i] = 1;
      // 기준보다 작은 숫자가 없다면...
      else {
        dy[i] = Math.max(...tmp) + 1; // 가장 컸던 dy를 찾고 1을 증가시켜 저장
        answer = Math.max(answer, dy[i]);
      }
    }

    return answer; // 가장 긴 부분 수열을 찾는다.
  }
  //console.log(solution([5, 3, 7, 8, 6, 2, 9, 4])); // 4
  // console.log(solution([5, 3, 7, 8, 6, 2, 9, 4, 2, 1])); // 4
}

// sol
{
  function solution(nums) {
    let n = nums.length;
    let answer = 0;
    let arr = [],
      max_idx = 0;
    let dy = Array.from({ length: n }, () => 0);
    // dy[i] : i번째 항이 마지막 항이 되는 최대 부분 증가 수열의 길이
    let pa = [];
    dy[0] = 1;
    for (let i = 0; i < n; i++) {
      let max = 0,
        idx = -1;
      for (let j = i - 1; j >= 0; j--) {
        if (nums[j] < nums[i] && dy[j] > max) {
          max = dy[j];
          idx = j;
        }
      }
      dy[i] = max + 1;
      pa.push(idx);

      if (answer < dy[i]) {
        answer = dy[i];
        max_idx = i;
      }
    }

    function DFS(i) {
      if (pa[i] === -1) {
        // 종료조건
        arr.push(nums[i]);
        return;
      } else {
        DFS(pa[i]);
        arr.push(nums[i]); // 역출력 위해, DFS 다음에 push
        // 가장 최근에 잠든 애들 부터 깨어나서 nums[i]를 넣는다
      }
    }

    DFS(max_idx);
    console.log(arr); // 수열
    return answer;
  }
  //console.log(solution([5, 3, 7, 8, 6, 2, 9, 4])); // 4
  // console.log(solution([5, 3, 7, 8, 6, 2, 9, 4, 2, 1])); // 4
}

// mysol
{
  function solution(nums) {
    let n = nums.length;
    let dy = Array.from({ length: n });
    // dy[i] : i번째 항이 마지막 항이 되는 최대 부분 증가 수열의 길이
    dy[0] = 1; // 혼자 한개

    for (let i = 1; i < n; i++) {
      // 비교 기준
      let tmp = []; // 기준 보다 작은 수의 인덱스를 모을 예정
      for (let j = 0; j < i; j++) {
        // 기준 보다 앞
        if (nums[i] > nums[j]) {
          // 기준보다 작은 수라면, 작은 수의 인덱스를 push
          tmp.push(j);
        }
      }
      if (tmp.length === 0) {
        // 기준보다 작은 수가 없다?
        dy[i] = 1;
      } else {
        // 기준보다 작은 수 중에서, dy 값이 가장 큰 값을 구함.
        let max = 0;
        for (let x of tmp) {
          if (dy[x] > max) max = dy[x];
        }
        dy[i] = max + 1;
      }
    }
    console.log(dy); // [1,1,2,3,2,1,4,2]
    return Math.max(...dy);
  }
  //  console.log(solution([5, 3, 7, 8, 6, 2, 9, 4])); // 4
}
