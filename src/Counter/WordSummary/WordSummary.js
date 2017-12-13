import React from 'react';
const pluralize = require('pluralize')

const wordSummary = function(props){
	let message = null;
	
	if (props.wordCount === 1){
		message = "There is " + props.wordCount.toLocaleString() + pluralize(' word', props.wordCount) + ".";
	}
	else{
		message = "There are " + props.wordCount.toLocaleString() + pluralize(' word', props.wordCount) + ".";
	}
	
	return (
		<p> {message}</p>
	);
}

export default wordSummary;