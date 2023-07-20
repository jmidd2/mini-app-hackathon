import { io, Socket } from 'socket.io-client';
import { ClientEvents, ServerEvents } from './types/Events';

const URL = 'ws://localhost:3001';

export const socket: Socket<ServerEvents, ClientEvents> = io(URL);
