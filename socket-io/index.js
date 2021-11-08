const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

// functions ---------------------------------------------

// 사용자는 5명으로 제한됨.
const user = (() => {
  const cats = ['오드아이', '삼색이', '샴', '고등어', '치즈'];
  const ch = Array(5).fill(0);
  return {
    add() {
      const idx = ch.indexOf(0);
      if (idx === -1) return false; // 대기
      ch[idx] = 1;
      return cats[idx];
    },
    delete(user) {
      ch[cats.indexOf(user)] = 0;
    },
  };
})();

// socket.io ---------------------------------------------

// 서버가 클라이언트에게 index.html파일을 생성해서 제공해줌
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  const curUser = user.add();
  if (curUser) {
    // 3000 번 포트에 접속한 클라이언트
    io.emit('user', curUser);

    // chat message이벤트가 발생한 경우
    socket.on('chat message', msg => {
      io.emit('chat message', [curUser, msg]);
    });
    // 연결이 끊어진 경우
    socket.on('disconnect', () => {
      io.emit('disconnect', curUser);
      user.delete(curUser);
    });
  } else {
    // 5명 초과인경우 여기서 대기
  }
});

// 특정 소켓(socket)을 제외한 모든 사람들에게 전달하고 싶을 경우
// io.on('connection', socket => {
//   socket.broadcast.emit('hi');
// });

server.listen(3000, () => {
  console.log('listening on *:3000');
});
