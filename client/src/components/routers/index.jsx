import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../home/index.jsx';
import Contact from '../contact/index.jsx';
import Play from '../play/index.jsx';
import Blog from '../blog/index.jsx';
import Projects from '../projects/index.jsx';


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/projects' render={(props) => <Home {...props} prop={'one'}/>}/>
            <Route exact path='/blog' render={(props) => <Home {...props} prop={'two'}/>}/>
            <Route exact path='/play' render={(props) => <Home {...props} prop={'three'}/>}/>
            <Route exact path='/contact' render={(props) => <Home {...props} prop={'four'}/>}/>
        </Switch>
    </main>
);

export default Main;