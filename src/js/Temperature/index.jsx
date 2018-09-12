import React, { Component } from 'react';

import Control from './Control';
import Verdict from './Verdict';

class Temperature extends Component {
	constructor(props) {
		super(props);

		this.state = {
			temp: 0 // this should be in °Kelvin
		};
		this._handleTempChange = this._handleTempChange.bind(this);
		this._convertTemp = this._convertTemp.bind(this);
	}

	render() {
		return (
			<div className="container">
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
		);
	}
	_convertTemp(from, to, value) {
		//RETURNS KELVIN TO FARENHEIT
		if (from === 'k') {
			if (to === 'f') return (this.state.temp * 9 / 5 - 459.67).toFixed(2);
			else if (to === 'c') return this.state.temp - 273;
		} else if (from === 'f') {
			if (to === 'k') return this.state.temp;
			else if (to === 'c')
				//tochange
				return this.stat.temp; //tochange
		}
	}

	_handleTempChange(temperature) {
		this.setState({
			temp: temperature
		});
	}
}

export default Temperature;
