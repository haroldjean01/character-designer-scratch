import React from 'react';

export default function Character({ head }) {
  return (
    <div className="character">
      <div className="headImage" style={{ backgroundImage: `url(./${head}-head.webp)` }}></div>
    </div>
  );
}
