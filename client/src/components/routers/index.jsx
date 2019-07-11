import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../home/index.jsx';
import Contact from '../contact/index.jsx';
import Read from '../read/index.jsx';
import Photography from '../photography/index.jsx';
import Projects from '../projects/index.jsx';
import Secure from '../secure/index.jsx';
import One from '../secure/components/one.jsx';
import MovieNight from '../movienight/index.jsx';


const Main = () => (
    <main style={{height:'100%'}}>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/projects' render={(props) => <Home {...props} prop={'one'}/>}/>
            <Route exact path='/photography' render={(props) => <Home {...props} prop={'two'}/>}/>
            <Route exact path='/read' render={(props) => <Home {...props} prop={'three'}/>}/>
            <Route exact path='/contact' render={(props) => <Home {...props} prop={'four'}/>}/>
            <Route exact path='/signIn' render={() => <Secure/>}/>
            <Route exact path='/signIn/one' render={() => <One/>}/>
            <Route exact path='/movienight' render={() => <MovieNight/>}/>
        </Switch>
    </main>
);

export default Main;