// 가지고 올 모듈의 이름을 인수로 작성하면 됨
const express = require('express');

const app = express(); // express는 함수다.
const PORT = 7500; // 포트 번호

// Mock data
const todos = [
  { id: 1, content: 'JavaScript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false },
];

// express.static의 인수로 root directory의 이름을 작성해주어야함.
// public파일을 생성후 이름을 넣으면 됨.
app.use(express.static('public'));
app.use(express.json());

// 클라이언트로부터 요청이 오면 req를 받아서, response를 해주어야함.
app.get('/todos', (req, res) => {
  res.send(todos);
}); // get 방식으로 루트 요청이 오면 콜백 함수를 호출

// POST /todos {id: generateId(), content, completed: false}
app.post('/todos', (req, res) => {
  const newTodo = req.body;
  todos = [newTodo, ...todos];
  res.send(todos);
});

app.listen(PORT, () => {
  console.log(`Server listening at port http://localhost:${PORT}`);
}); // listen은 클라이언트의 요청을 받아들임.
