import React, { Component } from 'react';
const KEY = {
    LEFT:  37,
    RIGHT: 39,
};

 export default class Projects extends Component{
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
        if(e.keyCode === KEY.RIGHT) this.props.history.push('/blog');
    }

    render(){
        return (
            <div className='contact'>
                <div className='contactTitle'>
                    <h1>View my projects here  </h1>
                </div>
    
                <div className='contactItem'>
                </div>
            </div>
    
        )
    }
}