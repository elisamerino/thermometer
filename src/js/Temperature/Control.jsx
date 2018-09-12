import React from 'react';

// TODO display an input with for the temperature in the given type
const Control = (props) => {
	return (
		<div className="temp-line">
			<input
				type="number"
				value={props.convertedTemp}
				onChange={(evt) => props.handleTempChange(evt.target.value)}
			/>
			<p>°{props.type.toUpperCase()}</p>
		</div>
	);
};

export default Control;
