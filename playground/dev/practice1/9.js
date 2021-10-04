// https://poiemaweb.com/ex/array-hof

// 9. id 프로퍼티의 값 중에서 최대값 구하기
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const getMaxId = todos => (todos.length ? Math.max(...todos.map(todo => todo.id)) : 0);

console.log(getMaxId(todos)); // 3
console.log(getMaxId([])); // 0
