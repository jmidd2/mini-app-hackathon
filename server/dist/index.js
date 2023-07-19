'use strict';

var _nodeHttp = require('node:http');
var _app = require('./app');
var _TodoRepository = require('./Domains/Todos/TodoRepository');
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

var httpServer = (0, _nodeHttp.createServer)();
(0, _app.createApplication)(httpServer, {
  todoRepository: new _TodoRepository.TodoRepository()
}, {
  cors: {
    origin: ['http://localhost:3000']
  }
});
httpServer.listen(3001);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbm9kZUh0dHAiLCJyZXF1aXJlIiwiX2FwcCIsIl9Ub2RvUmVwb3NpdG9yeSIsImh0dHBTZXJ2ZXIiLCJjcmVhdGVTZXJ2ZXIiLCJjcmVhdGVBcHBsaWNhdGlvbiIsInRvZG9SZXBvc2l0b3J5IiwiVG9kb1JlcG9zaXRvcnkiLCJjb3JzIiwib3JpZ2luIiwibGlzdGVuIl0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IFNlcnZlciB9IGZyb20gJ3NvY2tldC5pbyc7XG4vLyBpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG4vL1xuLy8gY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuLy9cbi8vIGNvbnN0IGlvID0gbmV3IFNlcnZlcigzMDAxLCB7XG4vLyAgIGNvcnM6IHtcbi8vICAgICBvcmlnaW46ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuLy8gICB9LFxuLy8gfSk7XG4vL1xuLy8gaW8ub24oJ2Nvbm5lY3Rpb24nLCBzb2NrZXQgPT4ge1xuLy8gICBzb2NrZXQub24oJ2NyZWF0ZS1zb21ldGhpbmcnLCBhc3luYyAoYXJnMSwgY2FsbGJhY2spID0+IHtcbi8vICAgICBjb25zb2xlLmxvZygnY3JlYXRlLXNvbWV0aGluZycsIGFyZzEsIHNvY2tldC5jb25uLnRyYW5zcG9ydCk7XG4vLyAgICAgY29uc3QgYWxsVXNlcnMgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kTWFueSgpO1xuLy8gICAgIGlvLmVtaXQoJ2ZvbycsICdiYXInKTtcbi8vICAgICBjYWxsYmFjayh7IHN0YXR1czogJ29rJywgdXNlcnM6IGFsbFVzZXJzIH0pO1xuLy8gICB9KTtcbi8vIH0pO1xuLy9cbi8vIGlvLm9mKCcvJykuYWRhcHRlci5vbignY3JlYXRlLXJvb20nLCByb29tID0+IHtcbi8vICAgY29uc29sZS5sb2coYHJvb20gJHtyb29tfSB3YXMgY3JlYXRlZGApO1xuLy8gfSk7XG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIgfSBmcm9tICdub2RlOmh0dHAnO1xuaW1wb3J0IHsgY3JlYXRlQXBwbGljYXRpb24gfSBmcm9tICcuL2FwcCc7XG5pbXBvcnQgeyBUb2RvUmVwb3NpdG9yeSB9IGZyb20gJy4vRG9tYWlucy9Ub2Rvcy9Ub2RvUmVwb3NpdG9yeSc7XG5cbmNvbnN0IGh0dHBTZXJ2ZXIgPSBjcmVhdGVTZXJ2ZXIoKTtcblxuY3JlYXRlQXBwbGljYXRpb24oXG4gIGh0dHBTZXJ2ZXIsXG4gIHsgdG9kb1JlcG9zaXRvcnk6IG5ldyBUb2RvUmVwb3NpdG9yeSgpIH0sXG4gIHsgY29yczogeyBvcmlnaW46IFsnaHR0cDovL2xvY2FsaG9zdDozMDAwJ10gfSB9XG4pO1xuXG5odHRwU2VydmVyLmxpc3RlbigzMDAxKTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUF1QkEsSUFBQUEsU0FBQSxHQUFBQyxPQUFBO0FBQ0EsSUFBQUMsSUFBQSxHQUFBRCxPQUFBO0FBQ0EsSUFBQUUsZUFBQSxHQUFBRixPQUFBO0FBekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUcsVUFBVSxHQUFHLElBQUFDLHNCQUFZLEVBQUMsQ0FBQztBQUVqQyxJQUFBQyxzQkFBaUIsRUFDZkYsVUFBVSxFQUNWO0VBQUVHLGNBQWMsRUFBRSxJQUFJQyw4QkFBYyxDQUFDO0FBQUUsQ0FBQyxFQUN4QztFQUFFQyxJQUFJLEVBQUU7SUFBRUMsTUFBTSxFQUFFLENBQUMsdUJBQXVCO0VBQUU7QUFBRSxDQUNoRCxDQUFDO0FBRUROLFVBQVUsQ0FBQ08sTUFBTSxDQUFDLElBQUksQ0FBQyJ9
//# sourceMappingURL=index.js.map