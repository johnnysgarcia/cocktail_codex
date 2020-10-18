import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import List from '../List/List.js'
import Codex from '../Codex/Codex.js'

function App() {

  return (
    <div className='appOuter'>
    <div className="App">
      <header className="App-header">
        <h1>The Cocktail Codex</h1>
        <h3>Serving you all your cocktail needs</h3>
        <hr/>
      </header>
      <div className="App-body">
      <Codex/>
      </div>
    </div>
    </div>
  );
}

export default App;
