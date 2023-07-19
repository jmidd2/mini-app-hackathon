import React from 'react';

export function Events({ events }: { events: string[] }) {
  return (
    <ul>
      {
        // eslint-disable-next-line react/no-array-index-key
        events.map((event, index) => <li key={ index }>{event}</li>)
      }
    </ul>
  );
}
