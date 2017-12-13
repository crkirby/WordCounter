import React, { Component } from 'react';
import './Counter.css';
import WordSummary from './WordSummary/WordSummary';

class Counter extends Component {
		state={
			words:[],
			counter:0
		};
	
	
	componentDidMount(){
		let placeholderStr = "Enter text or paste with Command (⌘) + V or Ctrl + V . . . .";
		let ta = document.querySelector('textarea');
		var pArr = [...placeholderStr];
		var i = -1;
		
		(function runPlaceHolder(){
			i = (i + 1) % pArr.length;
			if(i !== pArr.length-1){
				ta.placeholder += pArr[i];
				setTimeout(runPlaceHolder, 45);	
			}
		})();

	}
	

	restrictEnter(e){
		if(e.key === "Enter"){
			e.preventDefault();
		}
	}
	
	handleInputChange = (e) => {
		let word = e.target.value;
		
		let data = this.state.words.slice(); 
		
		data = word.split(" ");
		
		let spaces = data.filter(word => word === "");
		
		this.setState({
			words:data,
			counter: (data.length)-(spaces.length)
		})
		
	}
	
	
  render() {
    return (
      <div className="Counter">
		<WordSummary wordCount={this.state.counter}/>
		
      	<textarea autoFocus 
		onKeyPress={this.restrictEnter} 
		onChange={this.handleInputChange} />
		
      </div>
    );
  }
}

export default Counter;
