import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SwipeableViews from 'react-swipeable-views';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Axios from 'axios';

import CurrentRankingsAndVote from './components/current_rankings.jsx';
import LogInOut from './components/log_in_out.jsx';
import Events from './components/events.jsx';
import SuggestMovies from './components/suggest_movie.jsx';

function TabContainer(props) {
    return (
        <Typography component="div" dir={props.dir} style={{ padding: '3em', height: '100%'}}>
            {props.children}
        </Typography>
    );
}

class MovieNight extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            changePassword: false,
            movies: [],
            events: [],
            events_by_id: {},

            loginPackage: {},
            user: '', 
            access: '',

            value: 0,
        };
    }
    getMovies = () => {
        // fetch current rankings
        var self = this;

        Axios.get('/movies/getmovies')
        .then((response) => {
            if(Array.isArray(response.data)){
                // console.log('MOVIES: ', response);
                let data = {};
                response.data.forEach(movie => {
                    if(!data[movie.event_id]){
                        data[movie.event_id] = [];
                    }
                    data[movie.event_id].push(movie);
                })
                self.setState({movies: data})
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    componentDidMount(){
        // check for login cookie, if so, set the state
        if(sessionStorage.getItem('jwtToken')){
            let params = {token: sessionStorage.getItem('jwtToken')}

            Axios.post('/movies/signintoken', params)
                .then((response) => {
                    this.setState({user: response.data.user.username, loggedIn: true});
                })
                .catch((err) => {
                    console.log('error: ', err);
                });
        }

        this.getMovies();
        this.getEvents();
    }

    getEvents(){
        Axios.get('/movies/getevents')
            .then(response => {
                if(response.data && Array.isArray(response.data)){
                    let events_by_id = response.data.reduce((a, i) => {
                        a[i.id] = i;
                        return a;
                    }, {});
                    let events = response.data.sort((a, b) => {
                        return (a.id > b.id ? 1 : -1)
                    })
                    // console.log('events received', events);
                    this.setState({
                        events: events,
                        events_by_id: events_by_id
                    });
                }
            })
            .catch((err) => {
                console.log('error: ', err);
            })
    }

    handleLogin(username, password){
        let self = this;
        
        Axios.post('/movies/login/'+username+'/'+password)
            .then(response => {
                console.log(response);
                if(response.data.code == 'success'){
                    sessionStorage.setItem('jwtToken', response.data.token);
                    self.setState({loggedIn: true, user: username})
                } else if(response.data.code == 204){
                    alert("username password do not match")
                } else{
                    if(response.data.code === 'change_pass'){
                        self.setState({changePassword: true, access: response.data.access, user: username})
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChangePassword = (pass1, pass2) => {
        let self = this;

        if(pass1 !== pass2){
            alert("The passwords must match.");
        } else{
            let params = {username: this.state.user, password: pass1, access: this.state.access}

            Axios.post('/movies/changepassword', params)
                .then(response => {
                    console.log(response);
                    if(response.data.code === 'success'){
                        self.setState({
                            changePassword: 0
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    render() {
        const { classes, theme } = this.props;
        const { value, loggedIn, user } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color='default'>
                    <Tabs 
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                        fullWidth
                    >
                        <Tab label="Current Rankings" />
                        <Tab label="Suggest a Movie" />
                        <Tab label="Events" />
                        <Tab label={loggedIn ? "Log Out" : "Log In"} />
                    </Tabs>
                </AppBar>
                <div className='loginNotification'>{loggedIn ? 'Welcome back, '+this.state.user+'.' : 'Please log in to vote or suggest movies.'}</div>
                <SwipeableViews
                    style={{ height: '100%', position: 'absolute', width: '100%', overflowY: null }}
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}><CurrentRankingsAndVote loggedIn={loggedIn} movies={this.state.movies} getMovies={this.getMovies.bind(this)} events={this.state.events} getEvents={this.getEvents.bind(this)}/></TabContainer>
                    <TabContainer dir={theme.direction}><SuggestMovies loggedIn={loggedIn} getMovies={this.getMovies.bind(this)} events={this.state.events} events_by_id={this.state.events_by_id} getEvents={this.getEvents.bind(this)}/></TabContainer>
                    <TabContainer dir={theme.direction}><Events loggedIn={loggedIn} events={this.state.events} getEvents={this.getEvents.bind(this)}/></TabContainer>
                    <TabContainer dir={theme.direction}><LogInOut loggedIn={loggedIn} changePassword={this.state.changePassword} handleLogin={this.handleLogin.bind(this)} username={this.state.user} handleChangePassword={this.handleChangePassword.bind(this)}/></TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}
  
const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    // fullHeight: {
    //     height: '100vh'
    // }
});
  

export default withStyles(styles, {withTheme: true})(MovieNight);
