import {TodoId} from '../src/Domains/Todos/TodoRepository';
import {Prisma, Todo} from '@prisma/client';

try {
  console.log('do something');
} catch (e) {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    console.log('uh-oh');
  }
}

export interface ErrorResponse {
    error: Error
}

interface Success<T> {
    data: T;
}

export type Response<T> = ErrorResponse | Success<T>;

export interface ServerEvents {
    'todo:created': (todo: Todo) => void;
    'todo:updated': (todo: Todo) => void;
    'todo:deleted': (id: TodoId) => void;
}

export interface ClientEvents {
    'todo:list': (
        payload: { withAuthor: boolean },
        callback: (res: Response<Todo[]>) => void) => void;

    'todo:create': (
        payload: Omit<Todo, 'createdAt' | 'id'>,
        callback: (res: Response<TodoId>) => void
    ) => void;

    'todo:read': (id: TodoId, callback: (res: Response<Todo>) => void) => void;

    'todo:update': (
        payload: Todo,
        callback: (res?: Response<void>) => void
    ) => void;

    'todo:delete': (id: TodoId, callback: (res?: Response<void>) => void) => void;
}