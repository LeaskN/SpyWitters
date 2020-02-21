import React, { Component, Fragment } from 'react';
import TileField from './tileField'

class Background extends Component {
    state = {
        width: 10, 
        height: 10
    }
    render() {
        return (
            <Fragment>
                <div className="App-header">
                    <TileField/>
                </div>
            </Fragment>
        )
    }
};

export default Background;
