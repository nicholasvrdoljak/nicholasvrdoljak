import React, { Component } from 'react';
import Reacteroids from './games/asteroids/Reacteroids.js';
import {withRouter} from 'react-router-dom';

const KEY = {
    LEFT:  37,
    RIGHT: 39,
};

export default class Play extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount(){
        window.addEventListener('keydown', this.handleKeys.bind(this, true));
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleKeys, true);
    }

    handleKeys(value, e){
        if(e.keyCode === KEY.LEFT) this.props.history.push('/blog');
        if(e.keyCode === KEY.RIGHT) this.props.history.push('/contact');
    }

    render() {
        return (
            <div className='contact'>
                <div className='contactTitle'>
                    <h1>Play Games here </h1>
                </div>

                <Reacteroids/>

                <div className='contactItem'>
                </div>
            </div>

        )
    }
}