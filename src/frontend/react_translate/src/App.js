import React, { Component } from 'react';
import './App.css';
import Translator from './Translator.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Text Translation</h1>
        </header>
        <Translator />
      </div>
    );
  }
}

export default App;
