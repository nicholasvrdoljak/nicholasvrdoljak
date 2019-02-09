import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/home/index.jsx';
import Main from './components/routers/index.jsx';
import io from 'socket.io-client';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount(){
		console.log('socket connection');
		const socket = io.connect('http://localhost:1234');
	}

	render() {
		return ( 
			<BrowserRouter >
				<Main /> 
			</BrowserRouter> 
		)
	}
}