// https://poiemaweb.com/ex/array-hof

// 5. 특정 요소 삭제
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const removeTodo = (todos, id) => todos.filter(todo => todo.id !== id);

todos = removeTodo(todos, 2);
console.log(todos);
/*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */
