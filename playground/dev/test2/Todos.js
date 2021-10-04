// 3. 모듈화

// todos는 export하지 않음
let todos = [
  { id: 3, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'HTML', completed: false }
];

const add = newTodo => {
  todos = [newTodo, ...todos];
};
const render = () =>
  todos
    .map(
      ({ id, content, completed }) => `
        <li id="${id}">
          <label><input type="checkbox" ${completed ? 'checked' : ''}>${content}</label>
        </li>`
    )
    .join('');

const Todos = { add, render };

// 기본 내보내기
export default Todos;
