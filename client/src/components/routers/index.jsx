import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../home/index.jsx';
import Contact from '../contact/index.jsx';
import Play from '../play/index.jsx';
import Photography from '../photography/index.jsx';
import Projects from '../projects/index.jsx';
import Secure from '../secure/index.jsx';
import One from '../secure/components/one.jsx';


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/projects' render={(props) => <Home {...props} prop={'one'}/>}/>
            <Route exact path='/photography' render={(props) => <Home {...props} prop={'two'}/>}/>
            <Route exact path='/play' render={(props) => <Home {...props} prop={'three'}/>}/>
            <Route exact path='/contact' render={(props) => <Home {...props} prop={'four'}/>}/>
            <Route exact path='/secure' render={() => <Secure/>}/>
            <Route exact path='/secure/one' render={() => <One/>}/>
        </Switch>
    </main>
);

export default Main;