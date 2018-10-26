import React, { Component } from 'react';

import Control from './Control';
import Verdict from './Verdict';

class Temperature extends Component {
	constructor(props) {
		super(props);

		this.state = {
			temp: 0, // this should be in °Kelvin
			color: 'rgb(239, 98, 59)'
		};
		this._handleTempChange = this._handleTempChange.bind(this);
		this._convertTemp = this._convertTemp.bind(this);
	}

	render() {
		return (
			<div
				className="container"
				style={{
					background:
						'rgb(' +
						+15 +
						this.state.temp * 0.15 +
						',' +
						(200 - this.state.temp * 0.25) +
						',' +
						(245 - this.state.temp * 0.5) +
						')'
				}}
				//maybe adding a breack would be nice
			>
				<div className="converter">
					<h1>Temperature Converter</h1>
					{this._handleTempChange}
					<Control
						handleTempChange={this._handleTempChange}
						convertedTemp={this.state.temp}
						type="k"
					/>
					<Control
						handleTempChange={this._handleTempChange}
						convertedTemp={this._convertTemp('k', 'f', this.state.temp)}
						type="f"
					/>
					<Control
						handleTempChange={this._handleTempChange}
						convertedTemp={this._convertTemp('k', 'c', this.state.temp)}
						type="c"
					/>
					<Verdict />
				</div>
			</div>
		);
	}

	_convertTemp(from, to, value) {
		console.log(this.state.temp);
		//RETURNS KELVIN TO FARENHEIT
		if (from === 'k') {
			if (to === 'f') return (value * 9 / 5 - 459.67).toFixed(2);
			else if (to === 'c') return value - 273;
		} else if (from === 'f') {
			if (to === 'k') return value;
			else if (to === 'c')
				//tochange
				return value; //tochange
		}
	}

	_handleTempChange(temperature) {
		this.setState({
			temp: temperature
		});
	}
}

export default Temperature;
