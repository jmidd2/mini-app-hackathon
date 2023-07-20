import React, { useEffect, useState } from 'react';
import { Todo } from 'database';
import ChangeHighlight from 'react-change-highlight';
import { socket } from './socket';
import { Response, TodoWithAuthor } from './types/Events';

import { ConnectionState } from './Components/ConnectionState/ConnectionState';
import { Events } from './Components/Events/Events';
import { ConnectionManager } from './Components/ConnectionManager/ConnectionManager';
import { MyForm } from './Components/MyForm/MyForm';

import './App.scss';
import TodoList from './Components/TodoList/TodoList';

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState<string[]>([]);
  const [todos, setTodos] = useState<TodoWithAuthor[]>([]);
  const [currentUser, setCurrentUser] = useState<number>();

  useEffect(() => {
    // @ts-ignore
    function onConnect() {
      setIsConnected(true);
      // @ts-ignore
      socket.emit('todo:list', { withAuthor: true }, (res: Response<TodoWithAuthor[]>) => {
        if ('data' in res) {
          setTodos(res.data);
        }
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

  useEffect(() => {
    function onTodoCreated(value: TodoWithAuthor) {
      console.log('received broadcast', value);
      setTodos(prevState => [...prevState, value]);
    }

    function onTodoDeleted(id: string) {
      console.log('Someone deleted', id);
      setTodos(prevState => prevState.filter(todo => todo.id !== id));
    }

    function onTodoUpdated(id: string) {
      console.log('Someone completed', id);
      // eslint-disable-next-line no-param-reassign
      const item = todos.filter(todo => todo.id === id)[0];
      item.completed = true;
      const prevArray = todos.filter(todo => todo.id !== id);
      setTodos([...prevArray, item]);
    }

    socket.on('todo:created', onTodoCreated);
    socket.on('todo:deleted', onTodoDeleted);
    socket.on('todo:updated', onTodoUpdated);

    return () => {
      socket.off('todo:created', onTodoCreated);
      socket.off('todo:deleted', onTodoDeleted);
      socket.off('todo:updated', onTodoUpdated);
    };
  }, [todos]);

  const handleUserChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLSelectElement;
    if (target.value) {
      setCurrentUser(parseInt(target.value, 10));
    }
  };

  const completeTodo = (item: TodoWithAuthor) => {
    console.log('completing', item.id);
    // eslint-disable-next-line no-param-reassign
    item.completed = true;
    socket.emit('todo:update', item, (res) => {
      if ('data' in res && res.data === 'ok') {
        console.log('You completed', item.id);
        const prevArray = todos.filter(todo => todo.id !== item.id);
        setTodos([...prevArray, item]);
      }
    });
  };
  const deleteTodo = (item: Todo) => {
    console.log('deleting', item.id);
    socket.emit('todo:delete', item.id, (res) => {
      if ('data' in res && res.data === 'ok') {
        console.log(`you ${item.id} deleted`);
        setTodos(prevState => prevState.filter(todo => todo.id !== item.id));
      }
    });
  };

  return (
    <div className="App container pt-3">
      <div className="d-flex justify-content-between mb-5">
        <div>
          <select className="form-select" onChange={ handleUserChange }>
            <option>Pick User</option>
            <option value={ 1 }>Alice</option>
            <option value={ 2 }>Bob</option>
          </select>
        </div>
        <div>
          <ConnectionState isConnected={ isConnected } />
          <Events events={ fooEvents } />
          <ConnectionManager />
        </div>
      </div>
      <MyForm setTodos={ setTodos } currentUser={ currentUser } />
      <div className="row">
        <ChangeHighlight mode="change">
          {todos.length > 0 && (
            <TodoList items={ todos } finishItem={ completeTodo } deleteItem={ deleteTodo } />
          )}
        </ChangeHighlight>
      </div>
    </div>
  );
}

export default App;
