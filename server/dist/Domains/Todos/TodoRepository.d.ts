import { Todo } from 'database';
export type TodoId = string;
export declare class TodoRepository {
    deleteById(id: TodoId): Promise<{
        id: string;
    }>;
    update(item: Partial<Todo>): Promise<{
        id: string;
    }>;
    findAll(): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: string;
        title: string;
        createdAt: Date;
        content: string | null;
        completed: boolean;
        updatedAt: Date | null;
        updatedBy: number | null;
        authorId: number;
    }, unknown> & {})[]>;
    findAllWithAuthor(): Promise<({
        author: import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string | null;
            email: string;
        }, unknown> & {};
    } & import("@prisma/client/runtime/library").GetResult<{
        id: string;
        title: string;
        createdAt: Date;
        content: string | null;
        completed: boolean;
        updatedAt: Date | null;
        updatedBy: number | null;
        authorId: number;
    }, unknown> & {})[]>;
    findById(id: TodoId): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: string;
        title: string;
        createdAt: Date;
        content: string | null;
        completed: boolean;
        updatedAt: Date | null;
        updatedBy: number | null;
        authorId: number;
    }, unknown> & {}) | null>;
    save(entity: Omit<Todo, 'createdAt'>): import("database").Prisma.Prisma__TodoClient<{
        author: import("@prisma/client/runtime/library").GetResult<{
            id: number;
            name: string | null;
            email: string;
        }, unknown> & {};
    } & import("@prisma/client/runtime/library").GetResult<{
        id: string;
        title: string;
        createdAt: Date;
        content: string | null;
        completed: boolean;
        updatedAt: Date | null;
        updatedBy: number | null;
        authorId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
//# sourceMappingURL=TodoRepository.d.ts.map