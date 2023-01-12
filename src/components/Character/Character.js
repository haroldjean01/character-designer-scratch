import React from 'react';
import './Character.css';

export default function Character({ head }) {
  return (
    <div className="character">
      <div
        className="head-img"
        style={{ backgroundImage: `url(./${head}-head.webp)`, height: '100px' }}
      >
        Head
      </div>
    </div>
  );
}
