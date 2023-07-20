import {Server, ServerOptions} from 'socket.io';
import {ClientEvents, ServerEvents} from 'frontend/src/types/Events';
import {TodoRepository} from './Domains/Todos/TodoRepository';
import createTodoHandlers from './Domains/Todos/TodoSocketEvents';
import {Server as HttpServer} from 'node:http';

export interface Components {
  todoRepository: TodoRepository;
}

export function createApplication(
  server: HttpServer,
  components: Components,
  serverOptions: Partial<ServerOptions> = {}
): Server<ClientEvents, ServerEvents> {
  const io = new Server<ClientEvents, ServerEvents>(server, serverOptions);

  const {createTodo, readTodo, updateTodo, delTodo, listTodo} = createTodoHandlers(components);

  io.on('connection', socket => {
    socket.on('todo:create', createTodo);
    socket.on('todo:read', readTodo);
    socket.on('todo:update', updateTodo);
    socket.on('todo:delete', delTodo);
    socket.on('todo:list', listTodo);
  });

  return io;
}
