{
  function findSchedules(workHours, dayHours, pattern) {
    const idxs = [];
    [...pattern].forEach((str, i) => {
      if (str === '?') idxs.push(i);
    });
    const daysHaveToWork = [...pattern].filter(str => str === '?').length;
    const alreadyWorkedHours = [...pattern].reduce((acc, cur) => {
      if (isNaN(+cur)) return acc;
      return acc + cur * 1;
    }, 0);
    const hoursHaveToWork = workHours - alreadyWorkedHours;

    const part = [];
    const temp = [];

    function DFS(L, sum) {
      if (sum > hoursHaveToWork) return;
      if (L === daysHaveToWork) {
        if (sum === hoursHaveToWork) part.push(temp.slice());
      } else {
        for (let i = 0; i <= dayHours; i++) {
          temp.push(i);
          DFS(L + 1, sum + i);
          temp.pop();
        }
      }
    }
    DFS(0, 0);

    const answer = part.map(works => {
      const result = [...pattern];
      let j = 0;
      idxs.forEach(i => (result[i] = works[j++]));
      return result.join('');
    });

    return answer;
  }
  console.log(findSchedules(24, 4, '08??840')); // 5
  console.log(findSchedules(56, 8, '???8???')); // 1
  console.log(findSchedules(3, 2, '??2??00')); //4
}
