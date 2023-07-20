import React from 'react';
import { socket } from '../../socket';

export function ConnectionManager() {
  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <>
      <button type="button" className="btn btn-secondary" onClick={ connect }>Connect</button>
      <button type="button" className="btn btn-secondary ms-3" onClick={ disconnect }>Disconnect</button>
    </>
  );
}
