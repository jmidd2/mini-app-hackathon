import React, { useEffect, useState } from 'react';
import { socket } from './socket';

import './App.scss';
import { ConnectionState } from './Components/ConnectionState/ConnectionState';
import { Events } from './Events/Events';
import { ConnectionManager } from './Components/ConnectionManager/ConnectionManager';
import { MyForm } from './Components/MyForm/MyForm';

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState<string[]>([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
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
    </div>
  );
}

export default App;
