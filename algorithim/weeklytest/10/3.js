// function solution(nums) {
//   const n = nums.length;
//   let temp = [];

//   let visit = nums.map(() => 0);
//   function DFS(L, nums, teams) {
//     if (L === 3) {
//       teams.push(temp.slice());
//       return;
//     }

//     for (let i = 0; i < nums.length; i++) {
//       if (!visit[i]) {
//         visit[i] = 1;
//         temp.push(nums[i]);
//         DFS(L + 1, nums, teams);
//         temp.pop();
//         visit[i] = 0;
//       }
//     }
//   }

//   const teams = [];
//   DFS(0, nums, teams);

//   let answer = Number.MAX_SAFE_INTEGER;
//   for (const team1 of teams) {
//     const sum1 = team1.reduce((acc, cur) => acc + cur, 0);
//     const team2s = [];
//     const nums2 = nums.filter(num => !team1.includes(num));
//     visit = nums.map(() => 0);
//     DFS(0, nums2, team2s);

//     for (const team2 of team2s) {
//       const team3 = nums2.filter(num => !team2.includes(num));
//       const [sum2, sum3] = [
//         team2.reduce((acc, cur) => acc + cur, 0),
//         team3.reduce((acc, cur) => acc + cur, 0),
//       ];

//       console.log(
//         team1,
//         team2,
//         team3,
//         Math.max(sum1, sum2, sum3) - Math.min(sum1, sum2, sum3),
//       );

//       answer = Math.min(
//         answer,
//         Math.max(sum1, sum2, sum3) - Math.min(sum1, sum2, sum3),
//       );
//     }
//   }

//   return answer;
// }

// function solution(nums) {
//   const n = nums.length;

//   const visited = new Set();
//   for (let a = 0; a < n; a++) {
//     const numA = nums[a];
//     visited.add(a);

//     for (let b = 0; b < n; b++) {
//       if (visited.has(b)) continue;
//       const numB = nums[b];
//       visited.add(b);

//       for (let c = 0; c < n; c++) {
//         if (visited.has(c)) continue;
//         const numC = nums[c];
//         visited.add(c);

//         visited.delete(c);
//       }
//       visited.delete(b);
//     }
//     visited.delete(a);
//   }
// }

function solution(nums) {
  const n = nums.length;

  const visited = new Set();
  const part = [];
  const temp = [];

  let answer = Number.MAX_SAFE_INTEGER;
  function DFS(L) {
    if (L === 9) {
      part.push(temp.slice());
      const [sum1, sum2, sum3] = [
        temp.slice(0, 3).reduce((acc, cur) => acc + cur, 0),
        temp.slice(3, 6).reduce((acc, cur) => acc + cur, 0),
        temp.slice(6).reduce((acc, cur) => acc + cur, 0),
      ];

      answer = Math.min(
        answer,
        Math.max(sum1, sum2, sum3) - Math.min(sum1, sum2, sum3),
      );
      return;
    }
    for (let i = 0; i < 9; i++) {
      if (visited.has(i)) continue;

      visited.add(i);
      temp.push(nums[i]);
      DFS(L + 1);
      temp.pop();
      visited.delete(i);
    }
  }
  DFS(0);
  return answer;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9]));
