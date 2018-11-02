import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <div className='contact'>
                <div className='contactTitle'>
                    <h1>view my blog here </h1>
                </div>
    
                <div className='contactItem'>
                </div>
            </div>
    
        )
    }
}