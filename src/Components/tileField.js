import React, { Component } from 'react';
import Hexagon from './hexagon'

class TileField extends Component {
    state = {
        width: 10, 
        height: 10,
    }
    render() {
        return (
            <div className="tileContainer">
                <Hexagon/>
            </div>
        )
    }
};

export default TileField;
