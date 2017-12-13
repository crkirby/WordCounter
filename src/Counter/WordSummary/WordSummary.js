import React from 'react';
const wordSummary = function(props){
	let message = null;
	
	if (props.wordCount === 1){
		message = "There is " + props.wordCount.toLocaleString() + " word."
	}
	else{
		message = "There are " + props.wordCount.toLocaleString()+ " words.";
	}
	
	return (
		<p> {message}</p>
	);
}

export default wordSummary;