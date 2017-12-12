import React, { Component } from 'react';
import './Counter.css';
import WordSummary from './WordSummary/WordSummary';

class Counter extends Component {
		
		state={
			words:[],
			counter:0
		};
	
	handleInputChange = (e) => {
		let word = e.target.value;
		let data = word.split(' ');
		
		this.setState({
			words:data,
			counter: data.length-1
		})
	}
	
	
  render() {
    return (
      <div className="Counter">
		<WordSummary wordCount={this.state.counter}/>
      	<textarea onChange={this.handleInputChange}/>
      </div>
    );
  }
}

export default Counter;
