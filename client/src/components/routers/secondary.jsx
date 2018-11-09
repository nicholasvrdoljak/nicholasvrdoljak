import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Contact from '../contact/index.jsx';
import Play from '../play/index.jsx';
import Blog from '../photography/index.jsx';
import Projects from '../projects/index.jsx';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/contact' component={Contact}/>}/>
            <Route exact path='/projects' component={Projects}/>}/>
            <Route exact path='/play' component={Play}/>}/>
            <Route exact path='/photography' component={Blog}/>}/>
        </Switch>
    </main>
);

export default Main;