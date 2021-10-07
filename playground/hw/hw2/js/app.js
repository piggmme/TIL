// DOM 요소
const $newTodo = document.querySelector('.new-todo');
const $toggleAll = document.querySelector('.toggle-all');
const $todoList = document.querySelector('.todo-list');
const $todoCount = document.querySelector('.todo-count');
const $filters = document.querySelector('.filters');
const $clearCompleted = document.querySelector('.clear-completed');

// 상태 ----------------------------------------
let todos = [];

// 이벤트 핸들러 ----------------------------------------
const toggleDisplay = () => {
  const $main = document.querySelector('.main');
  const $footer = document.querySelector('.footer');
  const display = todos.length ? 'block' : 'none';

  $main.style.display = display;
  $footer.style.display = display;
};
const render = todos => {
  toggleDisplay();
  $todoList.innerHTML = todos
    .map(
      ({ id, content, completed }) => `
      <li data-id="${id}">
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

  const count = todos.length;
  $todoCount.innerHTML = `${count > 1 ? count + ' itmes' : count + ' item'} left`;

  const completedCount = todos.filter(todo => todo.completed).length;
  $clearCompleted.style.display = completedCount ? 'block' : 'none';
};

const fetchTodos = () => {
  todos = [
    { id: 1, content: 'JavaScript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false }
  ];
  render(todos);
};

const renderFilteredTodos = () => {
  const { id } = [...$filters.children].find(li =>
    li.firstElementChild.classList.contains('selected')
  ).lastElementChild;

  if (id === 'all') {
    render(todos);
    return;
  }
  const completed = id !== 'active';
  render(todos.filter(todo => todo.completed === completed));
};

const setTodos = newTodos => {
  todos = newTodos;
  renderFilteredTodos();
};

const generateTodosId = () => Math.max(...todos.map(({ id }) => id), 0) + 1;

const addTodos = () => {
  const content = $newTodo.value.trim();

  if (content) {
    setTodos([{ id: generateTodosId(), content, completed: false }, ...todos]);
  }

  $newTodo.value = '';
  $newTodo.focus();
};

const toggleTodosCompleted = id => {
  setTodos(todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo)));
};

const removeTodos = id => {
  setTodos(todos.filter(todo => todo.id !== +id));
};

const toggleTodosAll = completed => {
  setTodos(todos.map(todo => ({ ...todo, completed })));
};

const changeEditingMode = li => {
  li.classList.add('editing');
  li.lastElementChild.focus();
  li.lastElementChild.value += ' ';
};

const editTodos = (id, input) => {
  const content = input.trim();

  if (content) {
    setTodos(todos.map(todo => (todo.id === +id ? { ...todo, content } : todo)));
  } else {
    removeTodos(id);
  }
};

const completeEditingTodos = e => editTodos(e.target.parentNode.dataset.id, e.target.value);

const filterTodos = id => {
  [...$filters.children].forEach(li =>
    li.firstElementChild.id === id
      ? li.firstElementChild.classList.add('selected')
      : li.firstElementChild.classList.remove('selected')
  );
  renderFilteredTodos(id);
};

const clearCompleted = () => {
  setTodos(todos.filter(todo => !todo.completed));
};

// 이벤트 등록 ----------------------------------------
// state 초기화
window.addEventListener('DOMContentLoaded', fetchTodos);

// 새로운 todo 추가
$newTodo.onchange = e => {
  e.preventDefault();
  addTodos();
};

// todo 체크 complete
$todoList.onchange = e => {
  if (!e.target.classList.contains('toggle')) return;
  toggleTodosCompleted(e.target.parentNode.parentNode.dataset.id);
};

// todo 삭제
$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;
  removeTodos(e.target.parentNode.parentNode.dataset.id);
};

// todoAll을 토글
$toggleAll.onchange = e => {
  if (!e.target.classList.contains('toggle-all')) return;
  if (!e.target.classList.contains('done')) {
    e.target.classList.add('done');
    toggleTodosAll(true);
  } else {
    e.target.classList.remove('done');
    toggleTodosAll(false);
  }
};

// todo 수정
$todoList.ondblclick = e => {
  const li = e.target.parentNode.parentNode;
  changeEditingMode(li);
};

$todoList.addEventListener('focusout', completeEditingTodos);

$todoList.onkeydown = e => {
  if (!e.target.classList.contains('edit') || e.key !== 'Enter') return;
  editTodos(e.target.parentNode.dataset.id, e.target.value);
};

// All/ Active/ Completed
$filters.onclick = e => {
  if (e.target.tagName !== 'A') return;
  filterTodos(e.target.id);
};

// completed 한번에 삭제
$clearCompleted.onclick = () => {
  clearCompleted();
};
