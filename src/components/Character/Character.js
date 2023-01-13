import React from 'react';
import './Character.css';

export default function Character({ head, shirt, pants }) {
  return (
    <div className="character">
      <div
        className="head-img"
        style={{ backgroundImage: `url(./${head}-head.webp)`, height: '100px' }}
      >
        Head
      </div>
      <div
        className="shirt-img"
        style={{ backgroundImage: `url(./${shirt}-shirt.png)`, height: '100px' }}
      >
        Head
      </div>
      <div
        className="pants-img"
        style={{ backgroundImage: `url(./${pants}-pants.jpeg)`, height: '100px' }}
      >
        Head
      </div>
    </div>
  );
}
