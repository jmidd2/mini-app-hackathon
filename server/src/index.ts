import {Server} from 'socket.io';

const io = new Server(3001, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', socket => {
  socket.on('create-something', (arg1, callback) => {
    console.log('create-something', arg1);
    console.log(callback);
    callback({status: 'ok'});

  });
});

io.of('/').adapter.on('create-room', room => {
  console.log(`room ${room} was created`);
});
