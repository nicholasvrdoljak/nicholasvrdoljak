import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Contact from '../contact/index.jsx';
import Read from '../read/index.jsx';
import Blog from '../photography/index.jsx';
import Projects from '../projects/index.jsx';

const Main = () => (
    <main style={{height:'100%'}}>
        <Switch>
            <Route exact path='/contact' component={Contact}/>}/>
            <Route exact path='/projects' component={Projects}/>}/>
            <Route exact path='/read' component={Read}/>}/>
            <Route exact path='/photography' component={Blog}/>}/>
        </Switch>
    </main>
);

export default Main;