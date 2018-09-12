import React, { Component } from 'react'

import Control from './Control'
import Verdict from './Verdict'

class Temperature extends Component {
    constructor(props) {
        super(props)

        this.state = {
            temp: 0, // this should be in °Kelvin
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Temperature Converter</h1>
                {/* TODO you might want to put more props in the components */}
                <Control type="k" />
                <Control type="f" />
                <Control type="c" />
                <Verdict />
            </div>
        )

        // put your functions here
    }
}

export default Temperature
