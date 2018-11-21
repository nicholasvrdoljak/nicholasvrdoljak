import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

export default class Secure extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='contact'>
                <div className='contactTitle'>
                    <h1>Secure Area </h1>
                </div>
                <Link to='/secure/one'>One</Link>


                <div className='contactItem'>
                </div>
            </div>

        )
    }
}