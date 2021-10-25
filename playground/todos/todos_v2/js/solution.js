// state ------------------------------------
// 렌더 함수에 영향을 미치는 값
// 많아지면 다음과 같이 객체로 묶어도 됨
// const store = {
//   todos: [],
//   currentFilter = 'all'
// }
let todos = [];
let currentFilter = 'all';

// DOM Nodes ------------------------------------

const $newTodo = document.querySelector('.new-todo');
const $main = document.querySelector('.main');
const $toggleAll = document.querySelector('.toggle-all');
const $todoList = document.querySelector('.todo-list');
const $footer = document.querySelector('.footer');
const $todoCount = document.querySelector('.todo-count');
const $filters = document.querySelector('.filters');
const $clearCompleted = document.querySelector('.clear-completed');

// state function ------------------------------------
const render = () => {
  // todos 필터링
  const _todos = todos.filter(todo =>
    currentFilter === 'completed'
      ? todo.completed
      : currentFilter === 'active'
      ? !todo.completed
      : true
  );

  // todos 렌더링
  $todoList.innerHTML = _todos
    .map(
      ({ id, content, completed }) =>
        `<li data-id="${id}">
        <div class="view">
          <input type="checkbox" class="toggle" ${completed ? 'checked' : ''} />
          <label>${content}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="${content}" />
      </li>
    `
    )
    .join('');

  // main 감추기
  // todos.length === 0 ? $main.classList.add('hidden') : $main.classList.remove('hidden');
  // todos.length === 0 ? $footer.classList.add('hidden') : $footer.classList.remove('hidden');
  [$main, $footer].forEach($el => $el.classList.toggle('hidden', todos.length === 0));

  // active items의 갯수 세기
  const activeTodos = todos.filter(todo => !todo.completed);
  $todoCount.textContent = `${activeTodos.length} ${
    activeTodos.length > 1 ? 'items' : 'item'
  } left`;

  // completed items 개수 세기
  const completedTodos = todos.filter(todo => todo.completed);
  $clearCompleted.classList.toggle('hidden', completedTodos.length === 0);
};

const setTodos = newTodos => {
  todos = newTodos;
  render();
};

const setFilter = newFilter => {
  currentFilter = newFilter;
  render();
};

const fetchTodos = () => {
  setTodos([
    { id: 1, content: 'JavaScript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false }
  ]);
};

const generateTodoId = () => Math.max(...todos.map(todo => todo.id), 0) + 1;

const addTodos = content => {
  setTodos([{ id: generateTodoId(), content, completed: false }, ...todos]);
};

const toggleTodosCompleted = id => {
  setTodos(todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo)));
};

const toggleAllTodosCompleted = completed => {
  setTodos(todos.map(todo => ({ ...todo, completed })));
};

const updateTodoContent = (id, content) => {
  setTodos(todos.map(todo => (todo.id === +id ? { ...todo, content } : todo)));

  // 다시 렌더링 되기 때문에 editing클래스 제거하지 않아도 괜찮다.
};

const removeTodo = id => {
  setTodos(todos.filter(todo => todo.id !== +id));
};

const removeAllCompletedTodos = () => {
  setTodos(todos.filter(todo => !todo.completed));
};

// Event bindings ------------------------------------
window.addEventListener('DOMContentLoaded', fetchTodos);

// 화살표 함수를 사용하는 것은 this를 사용하지 않겠다는 의지
// 대신에 $newTodo를 사용하면 됨
$newTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;
  const content = $newTodo.value.trim();

  if (content) addTodos(content);

  $newTodo.value = '';
};

$todoList.onchange = e => {
  if (!e.target.classList.contains('toggle')) return;

  // const { id } = e.target.parentNode.parentNode.dataset;
  const { id } = e.target.closest('li').dataset;

  toggleTodosCompleted(id);
};

$toggleAll.onchange = () => {
  toggleAllTodosCompleted($toggleAll.checked);
};

$todoList.ondblclick = e => {
  if (!e.target.matches('.view > label')) return;

  e.target.closest('li').classList.add('editing');
};

$todoList.onkeyup = e => {
  if (e.key !== 'Enter') return;

  updateTodoContent(e.target.parentNode.dataset.id, e.target.value);
};

$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;

  removeTodo(e.target.closest('li').dataset.id);
};

$filters.onclick = e => {
  if (!e.target.matches('.filters > li > a')) return;

  [...$filters.querySelectorAll('a')].forEach($a => {
    $a.classList.toggle('selected', $a === e.target);
  });

  setFilter(e.target.id);
};

$clearCompleted.onclick = removeAllCompletedTodos;
