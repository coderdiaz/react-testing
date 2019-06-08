import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';
import Counter from './Counter/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card />
        <Counter />
      </header>
    </div>
  );
}

export default App;
