import React from 'react';

export default function Stats({ headCount, shirtCount, pantsCount }) {
  return (
    <div>
      <p>
        You have changed the head {headCount} times, shirt {shirtCount} times, and pants{' '}
        {pantsCount}
      </p>
    </div>
  );
}
