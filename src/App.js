import './App.css';
import React, { useState } from 'react';
import Character from './components/Character/Character.js';
import Form from './components/Form/Form.js';
// import Stats from './components/Stats';

function App() {
  const [head, setHead] = useState('dog');
  const [headCount, setHeadCount] = useState(0);
  const handleChange = (type, value) => {
    if (type === 'head') {
      setHead(value);
      setHeadCount(headCount + 1);
    }
  };
  return (
    <main className="App">
      <h1>Character Designer</h1>
      <section>
        <div className="left">
          <Form {...{ head, handleChange }} />

          {/* <Stats /> */}
        </div>
        <div className="right">
          <Character {...{ head }} />
        </div>
      </section>
    </main>
  );
}

export default App;
