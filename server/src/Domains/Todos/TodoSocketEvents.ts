import {v4 as uuid} from 'uuid';
import {Components} from '../../app';
import {Todo} from '@prisma/client';
import {TodoId} from './TodoRepository';
import {Socket} from 'socket.io';
import {isError} from '../../util';
import {TodoWithAuthor, ClientEvents, Response, ServerEvents} from 'frontend/src/types/Events';

export default function (components: Components) {
  const {todoRepository} = components;

  // eslint-disable-next-line @typescript-eslint/no-this-alias
  // const socket: Socket<ClientEvents, ServerEvents> = this;

  return {
    createTodo: async function (
      {
        title,
        content = null,
        authorId,
        updatedAt = null,
        updatedBy = null,
        completed = false,
      }: Omit<Todo, 'createdAt' | 'id'>,
      callback: (res: Response<TodoWithAuthor>) => void
    ) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const socket: Socket<ClientEvents, ServerEvents> = this;

      console.log('todo:create');
      const id: TodoId = uuid();
      console.log('new uuid', id);
      const newTodo: Omit<Todo, 'createdAt'> = {
        id,
        title,
        content,
        authorId,
        updatedAt,
        updatedBy,
        completed,
      };
      console.log('new todo', newTodo);

      try {
        const todo = (await todoRepository.save({...newTodo})) as TodoWithAuthor;

        callback({
          data: todo,
        });

        socket.broadcast.emit('todo:created', todo);
      } catch (e) {
        console.error('there was an error', e);
        if (isError(e)) {
          callback({
            error: e,
          });
        } else {
          throw new Error('an unknown error occurred ' + e);
        }
      }
    },

    readTodo() {
    },

    updateTodo: async function (payload: Todo, callback: (res: Response<string>) => void) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const socket: Socket<ClientEvents, ServerEvents> = this;
      try {
        const todo = await todoRepository.update(payload);

        callback({
          data: 'ok',
        });

        socket.broadcast.emit('todo:updated', todo.id);
      } catch (e) {
        console.error(e);
      }
    },

    delTodo: async function (id: TodoId, callback: (res: Response<string>) => void) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const socket: Socket<ClientEvents, ServerEvents> = this;

      try {
        console.log('deleting', id);
        const todo = await todoRepository.deleteById(id);
        callback({data: 'ok'});

        socket.broadcast.emit('todo:deleted', todo.id);
      } catch (e) {
        console.error(e);
      }
    },

    listTodo: async function (
      payload: { withAuthor?: boolean },
      callback: (res: Response<Todo[]> | Response<TodoWithAuthor[]>) => void
    ) {
      try {
        // get todos from db
        const data = payload.withAuthor
          ? await todoRepository.findAllWithAuthor()
          : await todoRepository.findAll();

        console.log(data);
        callback({
          // give them back to the single requester
          data,
        });
      } catch (e) {
        console.error('there was an error', e);
        if (isError(e)) {
          callback({
            error: e,
          });
        } else {
          throw new Error('an unknown error occurred' + e);
        }
      }
    },
  };
}
