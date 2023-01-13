import './App.css';
import React, { useState } from 'react';
import Character from './components/Character/Character.js';
import Form from './components/Form/Form.js';
import Stats from './components/Stats/Stats.js';

function App() {
  const [head, setHead] = useState('girl');
  const [headCount, setHeadCount] = useState(0);
  const [shirt, setShirt] = useState('tiger');
  const [shirtCount, setShirtCount] = useState(0);
  const [pants, setPants] = useState('red');
  const [pantsCount, setPantsCount] = useState(0);
  const [input, setInput] = useState('');
  const [catchphrases, setCatchphrases] = useState([]);

  const handleClick = () => {
    if (!input) return;
    setCatchphrases((prevState) => {
      return [...prevState, input];
    });
    setInput('');
  };
  const handleChange = (type, value) => {
    if (type === 'head') {
      setHead(value);
      setHeadCount(headCount + 1);
    }
    if (type === 'shirt') {
      setShirt(value);
      setShirtCount(shirtCount + 1);
    }
    if (type === 'pants') {
      setPants(value);
      setPantsCount(pantsCount + 1);
    }
  };
  return (
    <main className="App">
      <h1>Character Designer</h1>
      <section>
        <div className="left">
          <Form
            {...{
              head,
              setHead,
              setHeadCount,
              handleChange,
              handleClick,
              setShirt,
              shirt,
              setShirtCount,
              pants,
              setPants,
              setPantsCount,
              setInput,
            }}
          />

          <Stats {...{ headCount, shirtCount, pantsCount, catchphrases }} />
        </div>
        <div className="right">
          <Character {...{ head, shirt, pants }} />
        </div>
      </section>
    </main>
  );
}

export default App;
