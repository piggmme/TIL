// https://leetcode.com/problems/course-schedule-ii/
// 210. Course Schedule II

{
  const findOrder = (numCourses, prerequisites) => {
    const graph = [...Array(numCourses)].map(() => Array());
    const order = [];

    for (const [after, before] of prerequisites) {
      graph[before].push(after);
    }

    const visited = new Set();
    const seeing = new Set();

    const DFS = before => {
      if (seeing.has(before)) return false;
      if (visited.has(before)) return true;

      seeing.add(before);
      for (const after of graph[before]) {
        if (!DFS(after)) return false;
      }
      order.push(before);
      seeing.delete(before);
      visited.add(before);
      return true;
    };

    for (let course = 0; course < numCourses; course++) {
      if (!DFS(course)) return [];
    }

    return order.reverse();
  };
  console.log(findOrder(2, [[1, 0]]));
  console.log(
    findOrder(4, [
      [1, 0],
      [2, 0],
      [3, 1],
      [3, 2],
    ]),
  );
}
