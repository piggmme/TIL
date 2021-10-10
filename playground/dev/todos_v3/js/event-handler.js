import {
  fetchTodos,
  addTodos,
  toggleTodosCompleted,
  toggleAllTodosCompleted,
  updateTodoContent,
  removeTodo,
  removeAllCompletedTodos
} from './state-function.js';

import { setFilter } from './state.js';

// DOM Nodes ------------------------------------

const $newTodo = document.querySelector('.new-todo');
const $toggleAll = document.querySelector('.toggle-all');
const $todoList = document.querySelector('.todo-list');
const $filters = document.querySelector('.filters');
const $clearCompleted = document.querySelector('.clear-completed');

// Event bindings ------------------------------------

export default () => {
  window.addEventListener('DOMContentLoaded', fetchTodos);

  $newTodo.onkeyup = e => {
    if (e.key !== 'Enter') return;
    const content = $newTodo.value.trim();

    if (content) addTodos(content);

    $newTodo.value = '';
  };

  $todoList.onchange = e => {
    if (!e.target.classList.contains('toggle')) return;

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
};
