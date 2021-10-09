// https://poiemaweb.com/ex/array-hof

// 1. html 생성
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const render = todos =>
  todos.reduce(
    (html, { id, content, completed }) =>
      html +
      `<li id="${id}">
        <label><input type="checkbox" ${completed ? 'checked' : ''}>${content}</label>
      </li>`,
    ''
  );
console.log(render(todos));

// another solution
{
  const render = todos =>
    todos
      .map(
        ({ id, content, completed }) =>
          `<li id="${id}">
            <label><input type="checkbox" ${completed ? 'checked' : ''}>${content}</label>
          </li>`
      )
      .join('');
  console.log(render(todos));
}
