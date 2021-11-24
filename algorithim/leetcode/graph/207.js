// https://leetcode.com/problems/course-schedule/
// 207. Course Schedule

{
  const canFinish = (numCourses, prerequisites) => {
    const graph = [...Array(numCourses)].map(() => Array());

    for (const [after, before] of prerequisites) {
      graph[before].push(after);
    }

    const seeing = new Set();
    const seen = new Set();

    const DFS = before => {
      if (seeing.has(before)) return false;
      if (seen.has(before)) return true;

      seeing.add(before);
      for (const after of graph[before]) {
        if (!DFS(after)) return false;
      }
      seeing.delete(before);
      seen.add(before);

      return true;
    };

    for (let course = 0; course < numCourses; course++) {
      if (!DFS(course)) return false;
    }
    return true;
  };

  //   console.log(
  //     canFinish(3, [
  //       [1, 0],
  //       [2, 1],
  //     ]),
  //   ); // true
  //   console.log(
  //     canFinish(4, [
  //       [1, 0],
  //       [2, 1],
  //       [3, 2],
  //       [1, 3],
  //     ]),
  //   ); // false
  console.log(
    canFinish(5, [
      [1, 0],
      [2, 1],
      [3, 2],
      [1, 4],
      [4, 1],
    ]),
  ); // false
}
