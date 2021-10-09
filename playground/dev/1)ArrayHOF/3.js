// https://poiemaweb.com/ex/array-hof

// 3. 프로퍼티 정렬

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// const sortBy = (todos, key) =>
//   todos.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));

// 1. 외부 상태(todos)를 변경하면 안됨. sort는 뮤테이터임! 모든 함수는 순수함수로 만들도록 해야함.
//    [...todos] 스프레드 문법을 사용하여 재할당을 하게된다면, todos가 달라졌는지 안달라졌는지 알 수 있다.
// 2. 네이밍을 잘 지어야한다.
// 3. sort는 문자열도 동작해야 한다. a-b를 하면 NaN이 된다.
// 4. sort는 this를 반환한다.

const sortBy = (todos, key) =>
  [...todos].sort((todo1, todo2) =>
    todo1[key] > todo2[key] ? 1 : todo1[key] < todo2[key] ? -1 : 0
  );

todos = sortBy(todos, 'id');
console.log(todos);
/*
  [
    { id: 1, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false }
  ]
  */
console.log(sortBy(todos, 'content'));
/*
  [
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */
console.log(sortBy(todos, 'completed'));
/*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true }
  ]
  */
