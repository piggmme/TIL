// https://poiemaweb.com/ex/Code-Structure

// 1. 응집도

const Todos = {
  state: [
    { id: 3, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'HTML', completed: false }
  ],
  render() {
    return this.state
      .map(
        ({ id, content, completed }) => `
          <li id="${id}">
            <label><input type="checkbox" ${completed ? 'checked' : ''}>${content}</label>
          </li>`
      )
      .join('');
  }
};

console.log(Todos.state);
/*
[
  { id: 3, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'HTML', completed: false }
]
*/

console.log(Todos.render());
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
