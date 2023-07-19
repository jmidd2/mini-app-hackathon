import { io } from 'socket.io-client';

const URL = 'ws://localhost:3001';

export const socket = io(URL);
