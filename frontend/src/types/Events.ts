import { Prisma, User, Todo } from 'database';

declare type TodoId = string;

export interface TodoWithAuthor extends Todo {
    author: User
}

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

export interface Success<T> {
    data: T;
}

export type Response<T> = Success<T> | ErrorResponse;

export interface ServerEvents {
    'todo:created': (todo: TodoWithAuthor) => void;
    'todo:updated': (id: TodoId) => void;
    'todo:deleted': (id: TodoId) => void;
    'foo': (value: string) => void;
}

export interface ClientEvents {
    'todo:list': (
        payload: { withAuthor?: boolean },
        callback: (res: Response<Todo[]> | Response<TodoWithAuthor[]>) => void) => Promise<void>;

    'todo:create': (
        payload: Omit<Todo, 'createdAt' | 'id'>,
        callback: (res: Response<TodoWithAuthor>) => void
    ) => Promise<void>;

    'todo:read': (id: TodoId, callback: (res: Response<Todo>) => void) => void;

    'todo:update': (
        payload: Todo,
        callback: (res: Response<string>) => void
    ) => void;

    'todo:delete': (id: TodoId, callback: (res: Response<string>) => void) => void;

}
