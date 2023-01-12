import React from 'react';
import Select from './Select.js';

export default function Form({ head }) {
  return (
    <div className="form">
      <Select label="Head" options={['bird', 'duck', 'dog']} value={head} />
    </div>
  );
}
