import {v4 as uuid} from 'uuid';
import {Components} from '../../app';
import {Todo} from '@prisma/client';
import {TodoId} from './TodoRepository';
import {ClientEvents, Response, ServerEvents} from '../../../types/Events';
import {Socket} from 'socket.io';
import {isError} from '../../util';

export default function (components: Components) {
  const {todoRepository} = components;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const socket: Socket<ClientEvents, ServerEvents> = this;

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
      callback: (res: Response<TodoId>) => void
    ) {
      const id: TodoId = uuid();
      try {
        const todo = await todoRepository.save({
          id,
          title,
          content,
          authorId,
          updatedAt,
          updatedBy,
          completed,
        });

        callback({
          data: todo.id,
        });

        socket.broadcast.emit('todo:created', todo);
      } catch (e) {
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
    updateTodo() {
    },
    delTodo() {
    },
    listTodo: async function (
      payload: { withAuthor?: boolean },
      callback: (res: Response<Todo[]>) => void
    ) {
      try {
        // get todos from db
        const data = payload.withAuthor
          ? await todoRepository.findAllWithAuthor()
          : await todoRepository.findAll();
        callback({
          // give them back to the single requester
          data,
        });
      } catch (e) {
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
