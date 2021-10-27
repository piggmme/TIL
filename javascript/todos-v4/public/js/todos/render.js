const $todoList = document.querySelector('.todo-list');
const $main = document.querySelector('.main');
const $footer = document.querySelector('.footer');
const $todoCount = document.querySelector('.todo-count');
const $clearCompleted = document.querySelector('.clear-completed');

const render = state => {
  const { todos, currentFilter } = state;

  const _todos = todos.filter(todo =>
    currentFilter === 'completed'
      ? todo.completed
      : currentFilter === 'active'
      ? !todo.completed
      : true
  );

  $todoList.innerHTML = _todos
    .map(
      ({ id, content, completed }) => `
        <li data-id="${id}">
          <div class="view">
            <input type="checkbox" class="toggle" ${completed ? 'checked' : ''}/>
            <label>${content}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="${content}" />
        </li>`
    )
    .join('');

  // todo의 갯수가 0이면 .main, .footer 요소를 비표시한다.
  [$main, $footer].forEach($el => $el.classList.toggle('hidden', todos.length === 0));

  const activeTodos = todos.filter(todo => !todo.completed);

  // activeTodos의 갯수가 0 또는 1개면 'n item left' todo의 갯수가 2개 이상이면 'n items left'
  $todoCount.textContent = `${activeTodos.length} ${
    activeTodos.length > 1 ? 'items' : 'item'
  } left`;

  // completed 상태인 todo가 없으면 비표시한다
  const completedTodo = todos.filter(todo => todo.completed);
  $clearCompleted.classList.toggle('hidden', completedTodo.length === 0);
};

export default render;
