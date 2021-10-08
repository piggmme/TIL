// state
let todos = [];

const $main = document.querySelector('.main');
const $toggleAll = document.querySelector('.toggle-all');
const $todoList = document.querySelector('.todo-list');
const $newTodo = document.querySelector('.new-todo');
const $footer = document.querySelector('.footer');
const $todoCount = document.querySelector('.todo-count');

// state function
const render = () => {
  [$main, $footer].map($el => $el.classList.toggle('hidden', todos.length === 0));

  $todoList.innerHTML = todos
    .map(
      ({ id, content, completed }) => `
    <li data-id="${id}">
        <div class="view">
        <input type="checkbox" class="toggle" ${completed ? 'checked' : ''}/>
        <label>${content}</label>
        <button class="destroy"></button>
        </div>
        <input class="edit" value="${content}" />
    </li>
    `
    )
    .join('');

  const activeTodos = todos.filter(todo => !todo.completed);
  $todoCount.innerHTML = `${activeTodos.length} ${activeTodos.length ? 'items' : 'item'} left`;
};
const setTodos = newTodos => {
  todos = newTodos;
  render();
};
const fetchTodos = () => {
  setTodos([
    { id: 1, content: 'JavaScript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false }
  ]);
};

const generateTodoId = () => Math.max(...todos.map(({ id }) => id), 0) + 1;

const addTodos = content => {
  setTodos([{ id: generateTodoId(), content, completed: false }, ...todos]);
};

const toggleCompletedTodo = id => {
  setTodos(todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo)));
};

const updateTodoContent = (id, content) => {
  setTodos(todos.map(todo => (todo.id === +id ? { ...todo, content } : todo)));
};

const removeTodo = id => {
  setTodos(todos.filter(todo => todo.id !== +id));
};

const toggleAllTodosCompleted = checked => {
  setTodos(todos.map(todo => ({ ...todo, completed: checked })));
};

// event handler 등록
window.addEventListener('DOMContentLoaded', fetchTodos);

$newTodo.onchange = () => {
  const content = $newTodo.value.trim();

  if (content) addTodos(content);

  $newTodo.value = '';
};

$todoList.onchange = e => {
  if (!e.target.classList.contains('toggle')) return;

  const { id } = e.target.closest('li').dataset;
  toggleCompletedTodo(id);
};

$todoList.ondblclick = e => {
  if (!e.target.matches('.view > label')) return;

  e.target.closest('li').classList.add('editing');
};

$todoList.onkeyup = e => {
  if (e.key !== 'Enter') return;
  updateTodoContent(e.target.closest('li').dataset.id, e.target.value);
};

$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;
  removeTodo(e.target.closest('li').dataset.id);
};

$toggleAll.onchange = () => {
  toggleAllTodosCompleted($toggleAll.checked);
};
