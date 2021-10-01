// https://poiemaweb.com/ex/array-hof

// 9. id 프로퍼티의 값 중에서 최대값 구하기
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// const getMaxId = todos => todos.reduce((acc, todo) => (acc < todo.id ? todo.id : acc), 0);

const getMaxId = todos => {
  const ids = todos.map(todo => todo.id);
  return ids.length === 0 ? 0 : Math.max(...ids);
};

console.log(getMaxId(todos)); // 3
console.log(getMaxId([])); // 0
