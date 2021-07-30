// 3. 회의실 배정 => 무조건 그리디~
// 한 개의 회의실이 있는데 이를 사용하고자 하는 n개의 회의들에 대하여 회의실 사용표를 만들
// 려고 한다. 각 회의에 대해 시작시간과 끝나는 시간이 주어져 있고, 각 회의가 겹치지 않게 하
// 면서 회의실을 사용할 수 있는 최대수의 회의를 찾아라. 단, 회의는 한번 시작하면 중간에 중
// 단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.

// sol) 끝나는 시간을 기준으로 sort하고 그리디하면 된다.
// 젤 먼저 끝나는것 선택하고, 그 다음 겹치지 않는거 선택하고...
// 그리디 : 정렬 한번 하면 이후에 쭉 처리한다. o(n*logn)
// 백준에서는 시작시간과 끝나는 시간이 같은 경우도 포함.. (3,3)
// 그렇다면 시작순서 순으로 정렬한 다음 해야함!

// sol)
{
  function solution(meeting) {
    let answer = 0;
    meeting.sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      // 같으면 시작순서 순으로 정렬
      else return a[1] - b[1]; // 다르면 종료시간 순서로
    });
    let et = 0;
    for (let x of meeting) {
      if (x[0] >= et) {
        answer++;
        et = x[1];
      }
    }
    return answer;
  }
  //   console.log(
  //     solution([
  //       [3, 3],
  //       [1, 3],
  //       [2, 3],
  //     ])
  //   ); // 2
}

// MySol) o(nlogn)
{
  function solution(meeting) {
    let n = meeting.length;
    let cnt = 1;
    // 종료시간이 빠른것 부터
    meeting.sort((a, b) => a[1] - b[1]);
    // 끝나는 시간이랑 시작순서가 일치하거나, 끝나는 시간보다 시작순서가 늦는다면 가능
    start = 0;
    for (let end = 1; end < n; end++) {
      if (meeting[start][1] <= meeting[end][0]) {
        cnt += 1;
        start = end;
      }
    }
    return cnt;
  }
  //   console.log(
  //     solution([
  //       [1, 4],
  //       [2, 3],
  //       [3, 5],
  //       [4, 6],
  //       [5, 7],
  //     ])
  //   ); // 3
}

// mysol) => 이건 그리디가 아님. o(n^2)
{
  function solution(meeting) {
    let n = meeting.length;
    let max = 0;

    // 시작 순서대로 오름차순 나열
    meeting.sort((a, b) => a[0] - b[0]);

    // 끝나는 시간이랑 시작순서가 일치하거나, 끝나는 시간보다 시작순서가 늦는다면 가능
    for (let i = 0; i < n - 1; i++) {
      let cnt = 1;
      let start = i,
        end = i + 1;
      while (end < n) {
        if (meeting[start][1] <= meeting[end][0]) {
          cnt++;
          start = end;
          end++;
        } else {
          end++;
        }
      }
      if (max < cnt) max = cnt;
    }
    return max;
  }
  //   console.log(
  //     solution([
  //       [1, 4],
  //       [2, 3],
  //       [3, 5],
  //       [4, 6],
  //       [5, 7],
  //     ])
  //   ); // 3
}
