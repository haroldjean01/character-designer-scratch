import './App.css';
import React from 'react';
// import Character from './components/Character';
import Form from './components/Form';
// import Stats from './components/Stats';

function App() {
  return (
    <main className="App">
      <h1>Character Designer</h1>
      <section>
        <div className="left">
          <Form />
          {/* <Stats /> */}
        </div>
        <div className="right">{/* <Character /> */}</div>
      </section>
    </main>
  );
}

export default App;
