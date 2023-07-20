import React, { useState } from 'react';
import { User } from '.prisma/client';
import { socket } from '../../socket';
import { TodoWithAuthor } from '../../types/Events';

interface MyFormProps {
    setTodos: React.Dispatch<React.SetStateAction<TodoWithAuthor[]>>,
    currentUser: number | undefined,
}

export function MyForm({ setTodos, currentUser }: MyFormProps) {
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (currentUser) {
      socket.emit(
        'todo:create',
        {
          title,
          authorId: currentUser,
          content: content ?? null,
          updatedAt: null,
          updatedBy: null,
          completed: false,
        },
        (res) => {
          console.log(res);
          if ('data' in res) {
            console.log('create response', res.data);

            setTodos(prevState => ([...prevState, res.data]));
          }
        }
      );
    }
  }

  return (
    <form onSubmit={ onSubmit } className="w-50">
      <label className="form-label" htmlFor="title">ToDo</label>
      <input className="form-control" id="title" name="title" onChange={ e => setTitle(e.target.value) } type="text" />
      <label className="form-label mt-2" htmlFor="content">Description (Optional)</label>
      <textarea
        className="form-control"
        id="content"
        name="content"
        onChange={ e => setContent(e.target.value) }
        rows={ 2 }
      />

      <button type="submit" className="btn btn-success my-3">Submit</button>
    </form>
  );
}
