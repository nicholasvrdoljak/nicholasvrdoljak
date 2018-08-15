import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/home/index.jsx';
import Main from './components/routers/index.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return ( 
      <BrowserRouter >
        <Main /> 
      </BrowserRouter> 
    )
  }
}