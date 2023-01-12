import React from 'react';
import Select from './Select.js';

export default function Form({ head, input, handleChange }) {
  return (
    <>
      <div className="form">
        <Select
          label="Head"
          options={['boy', 'girl', 'tiger']}
          value={head}
          onChange={(e) => handleChange('head', e.target.value)}
        />
        {/* <Select
          label="Shirt"
          options={['pink', 'orange', 'blue']}
          value={shirt}
          onChange={(e) => handleChange('shirt', e.target.value)}
        />
        <Select
          label="Pants"
          options={['pink', 'orange', 'blue']}
          value={pants}
          onChange={(e) => handleChange('pants', e.target.value)}
        /> */}
      </div>
      <div className="form-control">
        <input type="text" value={input} />
        <label>Add a catchphrase</label>
      </div>
    </>
  );
}
