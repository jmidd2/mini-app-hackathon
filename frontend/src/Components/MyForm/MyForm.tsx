import React, { useState } from 'react';
import { socket } from '../../socket';

export function MyForm() {
  const [value, setValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    socket.emit('create-something', value, (res: Object) => {
      console.log(res);
      setIsLoading(false);
    });
  }

  return (
    <form onSubmit={ onSubmit }>
      <input onChange={ e => setValue(e.target.value) } type="text" />
      <button type="submit" disabled={ isLoading }>Submit</button>
    </form>
  );
}
