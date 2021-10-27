import ajax from '../utils/axios.js';

const store = {
  state: {
    todos: [],
    currentFilter: 'all',
  },

  // observer
  listeners: [],
  notify() {
    console.log('[STATE]', this.state);
    this.listeners.forEach(listener => listener(this.state));
  },

  get todos() {
    return this.state.todos;
  },
  set todos(newTodos) {
    this.state.todos = newTodos;
    this.notify();
  },
  get currentFilter() {
    return this.state.currentFilter;
  },
  set currentFilter(newFilter) {
    this.state.currentFilter = newFilter;
    this.notify();
  },
};

// observer pattern
const subscribe = listener => {
  store.listeners.push(listener);
};

const fetchTodos = () => {
  ajax
    .get('/todos')
    .then(todos => {
      store.todos = todos;
    })
    .catch(e => console.error(e));
};

const toggleAllTodos = completed => {
  store.todos = store.todos.map(todo => ({ ...todo, completed }));

  // PATCH /todos {completed}
  ajax
    .patch('/todos', { completed })
    .then(todos => {
      store.todos = todos;
    })
    .catch(e => console.error(e));
};

const generateId = () => Math.max(...store.todos.map(todo => todo.id), 0) + 1;

const addTodo = content => {
  // store.todos = [{ id: generateId(), content, completed: false }, ...store.todos];
  // POST /todos { id: generateId(), content, completed: false }

  ajax
    .post('/todos', { id: generateId(), content, completed: false })
    .then(todos => {
      store.todos = todos;
    })
    .catch(e => console.error(e));
};

const toggleTodo = id => {
  // store.todos = store.todos.map(todo =>
  //   todo.id === +id ? { ...todo, completed: !todo.completed } : todo,
  // );

  // find는 요소를 반환
  const { completed } = store.todos.find(todo => todo.id === +id);

  // PATCH /todos/${id}
  ajax
    .patch(`/todos/${id}`, { completed: !completed })
    .then(todos => {
      store.todos = todos;
    })
    .catch(e => console.error(e));
};

const updateTodoContent = (id, content) => {
  // store.todos = store.todos.map(todo =>
  //   todo.id === +id ? { ...todo, content } : todo,
  // );

  // PATCH /todos/:id {content}
  ajax
    .patch(`/todos/${id}`, { content })
    .then(todos => {
      store.todos = todos;
    })
    .catch(e => console.error(e));
};

const removeTodo = id => {
  // store.todos = store.todos.filter(todo => todo.id !== +id);
  // DELETE /todos/id
  ajax
    .delete(`/todos/${id}`)
    .then(todos => {
      store.todos = todos;
    })
    .catch(e => console.error(e));
};

const removeAllCompletedTodos = () => {
  // store.todos = store.todos.filter(todo => !todo.completed);
  // DELETE /todos/completed => completed는 조건인데, 이건 사실 좋은 방법은 아님. 보통 조건은 쿼리 스트링으로 보냄
  ajax
    .delete('/todos/completed')
    .then(todos => {
      store.todos = todos;
    })
    .catch(e => console.error(e));
};

const setFilter = filter => {
  store.currentFilter = filter;
};

export default {
  subscribe,
  fetchTodos,
  toggleAllTodos,
  addTodo,
  toggleTodo,
  updateTodoContent,
  removeTodo,
  removeAllCompletedTodos,
  setFilter,
};
