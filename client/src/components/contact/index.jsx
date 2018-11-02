import React, { Component } from 'react';
const KEY = {
    LEFT:  37,
    RIGHT: 39,
};
export default class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
        window.addEventListener('keydown', this.handleKeys.bind(this, false));
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleKeys.bind(this, true), true);
    }

    handleKeys(value, e){
        if(e.keyCode === KEY.LEFT) this.props.history.push('/play');
    }

    render(){
        return (
            <div className='contact'>
                <div className='contactTitle'>
                    <h1>Contact Me</h1>
                    <p>Share your ideas with me and let's create something.</p>
                </div>
    
                <div className='contactItem'>
                    <h3>Email: </h3><a href='mailto:vrdoljaknicholas@gmail.com'>vrdoljaknicholas@gmail.com</a>
                    <h3>LinkedIn: </h3><a target='blank' href='https://www.linkedin.com/in/nicholas-vrdoljak-52111453/'>https://www.linkedin.com/in/nicholas-vrdoljak-52111453/</a>
                </div>
            </div>
    
        )
    }
}