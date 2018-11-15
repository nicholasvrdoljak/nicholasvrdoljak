import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <div className='contact'>
                <div className='contactTitle'>
                    <h1>Contact Me</h1>
                    <p>Share your ideas with me and let's create something.</p>
                    <p>My LinkedIn and GitHub profiles are linked in the lower left and right corners.</p>
                </div>
    
                <div className='contactItem'>
                    <h3>Email/Hangouts: </h3><a href='mailto:vrdoljaknicholas@gmail.com'>vrdoljaknicholas@gmail.com</a>
                </div>
            </div>
    
        )
    }
}