// 2. 정보 은닉

const Todos = (function () {
  let todos = [
    { id: 3, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'HTML', completed: false }
  ];

  return {
    add(newTodo) {
      todos = [newTodo, ...todos];
    },
    render() {
      return todos
        .map(
          ({ id, content, completed }) => `
        <li id="${id}">
          <label><input type="checkbox" ${completed ? 'checked' : ''}>${content}</label>
        </li>`
        )
        .join('');
    }
  };
})();

Todos.add({ id: 4, content: 'hello', completed: true });
console.log(Todos.render());

// console.log(Todos.render());

/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/
