function calcMin(str) {
  const arr = str.split(' ');
  let result = '';
  if (arr.length > 2) {
    for (const time of arr) {
      if (time.match(/\d+/g)) {
        const [H, M] = time.split(':');
        const temp = H * 60 + +M;
        const temp2 = +temp + 90;
        result += temp + '-' + temp2 + ' ';
      } else {
        result += time + '-';
      }
    }
  } else {
    for (const time of arr) {
      if (time.match(/\d+/g)) {
        const [H, M] = time.split(':');
        const temp = H * 60 + +M;
        const temp2 = +temp + 180;
        result += temp + '-' + temp2;
      } else {
        result += time + '-';
      }
    }
  }

  return result.trim();
}

function solution(schedule) {
  const m = schedule.length;
  const n = schedule[0].length;

  const numSchedule = Array(m)
    .fill()
    .map(() => Array(n).fill(''));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      numSchedule[i][j] = calcMin(schedule[i][j]);
    }
  }

  //   console.log(numSchedule);

  const parts = [];
  const temp = [];
  // 조합으로 5개
  function DFS(L) {
    if (L === m) {
      parts.push(temp.slice());
      return;
    }

    for (let i = 0; i < n; i++) {
      temp.push(numSchedule[L][i]);
      DFS(L + 1);
      temp.pop();
    }
  }

  DFS(0);

  let answer = 0;
  for (const part of parts) {
    const timeList = new Map();
    timeList.set('MO', []);
    timeList.set('TU', []);
    timeList.set('WE', []);
    timeList.set('TH', []);
    timeList.set('FR', []);

    for (const time of part) {
      const [time1, time2] = time.split(' ');
      for (const temp of [time1, time2]) {
        if (!temp) break;
        const [day, start, end] = temp.split('-');
        // const arr = timeList.get(day);
        timeList.get(day).push([+start, +end]);
        // timeList.set(day, arr.push([start, end]));
      }
    }

    let flag = false;
    for (const [key, value] of timeList) {
      value.sort((a, b) => a[0] - b[0]);
      //   console.log({ key, value });

      if (value.length === 1) continue;

      for (let i = 0; i < value.length - 1; i++) {
        if (value[i + 1][0] < value[i][1]) {
          flag = true;
          break;
        }
      }
      if (flag) break;
    }
    // console.log('---');

    if (flag) continue;
    answer++;
  }

  return answer;
}

console.log(
  solution([
    ['MO 12:00 WE 14:30', 'MO 12:00', 'MO 15:00', 'MO 18:00'],
    ['TU 09:00', 'TU 10:00', 'TU 15:00', 'TU 18:00'],
    ['WE 09:00', 'WE 12:00', 'WE 15:00', 'WE 18:00'],
    ['TH 09:30', 'TH 11:30', 'TH 15:00', 'TH 18:00'],
    ['FR 15:00', 'FR 15:00', 'FR 15:00', 'FR 15:00'],
  ]),
);
// 896
