import React, { Component } from 'react';
import './App.css';
import Counter from './Counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Word Responsible</h1>
        </header>
       
		<Counter />
		
      </div>
    );
  }
}

export default App;
