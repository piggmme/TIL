// state ------------------------------------

let todos = [];
let currentFilter = 'all';

// DOM Nodes ------------------------------------

const $main = document.querySelector('.main');
const $todoList = document.querySelector('.todo-list');
const $footer = document.querySelector('.footer');
const $todoCount = document.querySelector('.todo-count');
const $clearCompleted = document.querySelector('.clear-completed');

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

export { todos, setTodos, setFilter };
