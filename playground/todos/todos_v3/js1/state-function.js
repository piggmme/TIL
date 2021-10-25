import { todos, setTodos } from './state.js';

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

export {
  fetchTodos,
  addTodos,
  toggleTodosCompleted,
  toggleAllTodosCompleted,
  updateTodoContent,
  removeTodo,
  removeAllCompletedTodos
};
