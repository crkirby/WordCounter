import React, { Component } from 'react';
import './App.css';
import Counter from './Counter/Counter';

class App extends Component {
	
	
	isIdle(){
		setInterval(alert("Still there?"), 10000);
	}
	
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Word Responsible</h1>
        </header>
       
		<Counter idle={this.isIdle}/>
		
      </div>
    );
  }
}

export default App;
