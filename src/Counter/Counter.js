import React, { Component } from 'react';
import './Counter.css';
import WordSummary from './WordSummary/WordSummary';

class Counter extends Component {
		state={
			words:[],
			counter:0
		};

	restrictEnter(e){
		if(e.key === "Enter"){
			e.preventDefault();
		}
	}
	
	handleInputChange = (e) => {
		let word = e.target.value;
		
		
		let data = word.split(" ");
		 //data.shift(); //removes the default space
		
		let spaces = data.filter(word => word == "");
		
		
		this.setState({
			words:data,
			counter: (data.length)-(spaces.length)
		})
	}
	
	
  render() {
    return (
      <div className="Counter">
		<WordSummary wordCount={this.state.counter}/>
      	<textarea onKeyPress={this.restrictEnter} 
		onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default Counter;
