import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './read.css';
import {withRouter} from 'react-router-dom';

export default class Read extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='readContainer'>
                <div className='contactTitle'>
                    <h1>I put some thoughts here sometimes</h1>
                </div>


                <div className='readItem'>
                    <div className='readbox'>
                        <p>hihihi</p>
                        <p>hihihi</p>
                        <p>hihihi</p>
                        <p>hihihi</p>
                       
                    </div>
                </div>
            </div>

        )
    }
}