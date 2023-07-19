// import { Server } from 'socket.io';
// import { PrismaClient } from '@prisma/client';
//
// const prisma = new PrismaClient();
//
// const io = new Server(3001, {
//   cors: {
//     origin: 'http://localhost:3000',
//   },
// });
//
// io.on('connection', socket => {
//   socket.on('create-something', async (arg1, callback) => {
//     console.log('create-something', arg1, socket.conn.transport);
//     const allUsers = await prisma.user.findMany();
//     io.emit('foo', 'bar');
//     callback({ status: 'ok', users: allUsers });
//   });
// });
//
// io.of('/').adapter.on('create-room', room => {
//   console.log(`room ${room} was created`);
// });
import {createServer} from 'node:http';
import {createApplication} from './app';
import {TodoRepository} from './Domains/Todos/TodoRepository';

const httpServer = createServer();

createApplication(
  httpServer,
  {todoRepository: new TodoRepository()},
  {cors: {origin: ['http://localhost:3000']}}
);

httpServer.listen(3001);
