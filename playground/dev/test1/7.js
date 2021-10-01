// https://poiemaweb.com/ex/array-hof

// 7. 모든 요소의 completed 프로퍼티 값을 true로 설정

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const toggleCompletedAll = todos =>
  todos.map(todo => {
    todo.completed = true;
    return todo;
  });

todos = toggleCompletedAll(todos);
console.log(todos);
/*
  [
    { id: 3, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: true }
  ]
  */
