import React, { Component } from 'react';
const KEY = {
    LEFT:  37,
    RIGHT: 39,
};
export default class Blog extends Component {
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
        if(e.keyCode === KEY.LEFT) this.props.history.push('/projects');
        if(e.keyCode === KEY.RIGHT) this.props.history.push('/play');
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