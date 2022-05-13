// https://leetcode.com/problems/course-schedule-ii/
// 210. Course Schedule II

// 위상정렬
{
  const findOrder = (numCourses, prerequisites) => {
    const graph = [...Array(numCourses)].map(() => []);
    const indegrees = Array(numCourses).fill(0);
    let numIndegrees = 0;

    for (const [end, start] of prerequisites) {
      graph[start].push(end);
      indegrees[end]++;
      numIndegrees++;
    }

    const order = [];
    const Q = [];
    for (let i = 0; i < numCourses; i++) {
      if (indegrees[i] === 0) Q.push(i);
    }

    while (Q.length) {
      const start = Q.shift();
      const ends = graph[start];
      order.push(start);

      for (const end of ends) {
        indegrees[end]--;
        numIndegrees--;
        if (indegrees[end] === 0) Q.push(end);
      }
    }

    return numIndegrees === 0 ? order : [];
  };
  // console.log(findOrder(2, [[1, 0]]));
  console.log(
    findOrder(4, [
      [1, 0],
      [2, 0],
      [3, 1],
      [3, 2],
    ]),
  );
  // console.log(
  //   findOrder(5, [
  //     [1, 0],
  //     [2, 1],
  //     [3, 2],
  //     [1, 4],
  //   ]),
  // );
}

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
  // console.log(findOrder(2, [[1, 0]]));
  // console.log(
  //   findOrder(4, [
  //     [1, 0],
  //     [2, 0],
  //     [3, 1],
  //     [3, 2],
  //   ]),
  // );
}

// 연습
{
  const findOrder = (numCourses, prerequisites) => {
    const graph = [...Array(numCourses)].map(() => []);
    for (const [after, before] of prerequisites) {
      graph[before].push(after);
    }

    const order = [];
    const seeing = new Set();
    const seen = new Set();

    const DFS = before => {
      if (seeing.has(before)) return false;
      if (seen.has(before)) return true;

      seeing.add(before);
      const afters = graph[before];
      for (const after of afters) {
        if (!DFS(after)) return false;
      }
      seeing.delete(before);
      seen.add(before);
      order.push(before);

      return true;
    };

    for (let i = 0; i < numCourses; i++) {
      if (!DFS(i)) return [];
    }
    return order.reverse();
  };
  // console.log(findOrder(2, [[1, 0]]));
  // console.log(
  //   findOrder(4, [
  //     [1, 0],
  //     [2, 0],
  //     [3, 1],
  //     [3, 2],
  //   ]),
  // );
  // console.log(
  //   findOrder(5, [
  //     [1, 0],
  //     [2, 1],
  //     [3, 2],
  //     [1, 4],
  //   ]),
  // );
}
