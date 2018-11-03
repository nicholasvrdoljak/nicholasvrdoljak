import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Reacteroids from './games/asteroids/Reacteroids.js';
import {withRouter} from 'react-router-dom';

export default class Play extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='contact'>
                <div className='contactTitle'>
                    <h1>Play Games here </h1>
                </div>

                {/* <Reacteroids/> */}

                <div className='contactItem'>
                </div>
            </div>

        )
    }
}