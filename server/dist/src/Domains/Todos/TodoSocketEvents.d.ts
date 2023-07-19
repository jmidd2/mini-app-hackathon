import {Components} from '../../app';
import {Todo} from '@prisma/client';
import {TodoId} from './TodoRepository';
import {Response} from '../../../types/Events';

export default function (components: Components): {
    createTodo: ({
                     title,
                     content,
                     authorId,
                     updatedAt,
                     updatedBy,
                     completed,
                 }: Omit<Todo, 'createdAt' | 'id'>, callback: (res: Response<TodoId>) => void) => Promise<void>;
    readTodo(): void;
    updateTodo(): void;
    delTodo(): void;
    listTodo: (payload: {
        withAuthor?: boolean;
    }, callback: (res: Response<Todo[]>) => void) => Promise<void>;
};
