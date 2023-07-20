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
