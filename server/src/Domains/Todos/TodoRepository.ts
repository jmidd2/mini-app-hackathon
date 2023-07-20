import {prisma, Todo} from 'database';

export type TodoId = string;

export class TodoRepository {
  async deleteById(id: TodoId) {
    return prisma.todo.delete({
      where: {
        id: id,
      },
      select: {
        id: true,
      },
    });
  }

  async update(item: Partial<Todo>) {
    return prisma.todo.update({
      where: {
        id: item.id,
      },
      data: {
        completed: item.completed,
      },
      select: {
        id: true,
      },
    });
  }

  async findAll() {
    return prisma.todo.findMany();
  }

  async findAllWithAuthor() {
    return prisma.todo.findMany({include: {author: true}});
  }

  async findById(id: TodoId) {
    return prisma.todo.findFirst({where: {id}});
  }

  save(entity: Omit<Todo, 'createdAt'>) {
    const {id, title, content, authorId, updatedAt, updatedBy, completed} = entity;
    return prisma.todo.create({
      data: {id, title, content, authorId, updatedAt, updatedBy, completed},
      include: {author: true},
    });
  }
}
