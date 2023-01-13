import React from 'react';
import Select from './Select.js';

export default function Form({ head, input, handleChange, shirt, pants }) {
  return (
    <>
      <div className="form">
        <Select
          label="Head"
          options={['boy', 'girl', 'tiger']}
          value={head}
          onChange={(e) => handleChange('head', e.target.value)}
        />
        <Select
          label="Shirt"
          options={['blue', 'red', 'green']}
          value={shirt}
          onChange={(e) => handleChange('shirt', e.target.value)}
        />
        <Select
          label="Pants"
          options={['blue', 'purple', 'red']}
          value={pants}
          onChange={(e) => handleChange('pants', e.target.value)}
        />
      </div>
      <div className="form-control">
        <input type="text" value={input} />
        <label>Add a catchphrase</label>
      </div>
    </>
  );
}
