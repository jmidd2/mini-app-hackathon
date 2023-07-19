import React, { useEffect, useState } from 'react';
import { Todo, User } from '.prisma/client';
import { socket } from './socket';

import { ConnectionState } from './Components/ConnectionState/ConnectionState';
import { Events } from './Components/Events/Events';
import { ConnectionManager } from './Components/ConnectionManager/ConnectionManager';
import { MyForm } from './Components/MyForm/MyForm';

import './App.scss';

interface TodoWithAuthor extends Todo {
    author: User
}

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState<string[]>([]);
  const [todos, setTodos] = useState<TodoWithAuthor[]>([]);

  useEffect(() => {
    // @ts-ignore
    function onConnect() {
      setIsConnected(true);
      // @ts-ignore
      socket.emit('todo:list', { withAuthor: true }, (res) => {
        console.log(res);
        setTodos(res.data);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  useEffect(() => {
    function onFooEvent(value: string) {
      setFooEvents(prevState => [...prevState, value]);
    }

    socket.on('foo', onFooEvent);
    return () => {
      socket.off('foo', onFooEvent);
    };
  }, [fooEvents]);

  return (
    <div className="App">
      <ConnectionState isConnected={ isConnected } />
      <Events events={ fooEvents } />
      <ConnectionManager />
      <MyForm />
      <div className="row">
        {todos.length > 0 && todos.map(todo => <p key={ todo.id }>{`${todo.title} - ${todo.author.name}`}</p>)}
      </div>
    </div>
  );
}

export default App;
