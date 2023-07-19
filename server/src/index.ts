import {Server} from 'socket.io';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const io = new Server(3001, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', socket => {
  socket.on('create-something', async (arg1, callback) => {
    console.log('create-something', arg1);
    const allUsers = await prisma.user.findMany();
    callback({status: 'ok', users: allUsers});
  });
});

io.of('/').adapter.on('create-room', room => {
  console.log(`room ${room} was created`);
});
