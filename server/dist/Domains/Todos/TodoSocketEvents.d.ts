import { Components } from '../../app';
import { Todo } from '@prisma/client';
import { TodoId } from './TodoRepository';
import { TodoWithAuthor, Response } from 'frontend/src/types/Events';
export default function (components: Components): {
    createTodo: ({ title, content, authorId, updatedAt, updatedBy, completed, }: Omit<Todo, 'createdAt' | 'id'>, callback: (res: Response<TodoWithAuthor>) => void) => Promise<void>;
    readTodo(): void;
    updateTodo: (payload: Todo, callback: (res: Response<string>) => void) => Promise<void>;
    delTodo: (id: TodoId, callback: (res: Response<string>) => void) => Promise<void>;
    listTodo: (payload: {
        withAuthor?: boolean;
    }, callback: (res: Response<Todo[]> | Response<TodoWithAuthor[]>) => void) => Promise<void>;
};
//# sourceMappingURL=TodoSocketEvents.d.ts.map