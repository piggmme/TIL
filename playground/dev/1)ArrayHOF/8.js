// https://poiemaweb.com/ex/array-hof

// 8. completed 프로퍼티의 값이 true인 요소의 갯수 구하기

const todos = [
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const countCompletedTodos = todos => todos.filter(todo => todo.completed).length;

console.log(countCompletedTodos(todos)); // 1
