/// <reference types="node" />
import { Server, ServerOptions } from 'socket.io';
import { ClientEvents, ServerEvents } from 'frontend/src/types/Events';
import { TodoRepository } from './Domains/Todos/TodoRepository';
import { Server as HttpServer } from 'node:http';
export interface Components {
    todoRepository: TodoRepository;
}
export declare function createApplication(server: HttpServer, components: Components, serverOptions?: Partial<ServerOptions>): Server<ClientEvents, ServerEvents>;
//# sourceMappingURL=app.d.ts.map