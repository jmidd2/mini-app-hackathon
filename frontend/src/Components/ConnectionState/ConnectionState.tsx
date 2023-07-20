import React from 'react';

export function ConnectionState({ isConnected }: { isConnected: boolean }) {
  return (
    <h5>
      {`State: ${isConnected ? 'Connected' : 'Disconnected'}`}
    </h5>
  );
}
