import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SwipeableViews from 'react-swipeable-views';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Axios from 'axios';
import configs from '../../configs.js';

import CurrentRankingsAndVote from './components/current_rankings.jsx';
import LogInOut from './components/log_in_out.jsx';
import PastEvents from './components/past_events.jsx';
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
            loggedIn: 0,
            changePassword: 0,

            loginPackage: {},
            user: 'nick', 

            value: 0,
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
      };

    componentDidMount(){
        console.log('did mount');
        // check for login cookie, if so, set the state
    }

    handleLogin(event){
        this.setState({changePassword: 1});
        // var self = this;
        // var payload={
        //     "email": this.state.username,
        //     "password": this.state.password
        // }
        // axios.post(configs.domain+'movies/login', payload)
        // .then(function (response) {
        //     console.log(response);
        //     if(response.data.code == 200){
        //         console.log("Login successfull");

        //         // check if they are logging in for the first time
        //             // if so - have them change their password
        //             // if not - set state to logged in



        //         // var uploadScreen=[];
        //         // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
        //         // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})

        //     }
        //     else if(response.data.code == 204){
        //         console.log("Username password do not match");
        //         alert("username password do not match")
        //     }
        //     else{
        //         console.log("Username does not exists");
        //         alert("Username does not exist");
        //     }
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
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
                        <Tab label="Past Events" />
                        <Tab label={loggedIn ? "Log Out" : "Log In"} />
                    </Tabs>
                </AppBar>
                <div className='loginNotification'>{loggedIn ? 'Welcome back, '+user+'.' : 'Please log in to vote or suggest movies.'}</div>
                <SwipeableViews
                    style={{height: '100vh', position: 'absolute', width: '100%'}}
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}><CurrentRankingsAndVote loggedIn={loggedIn}/></TabContainer>
                    <TabContainer dir={theme.direction}><SuggestMovies loggedIn={loggedIn}/></TabContainer>
                    <TabContainer dir={theme.direction}><PastEvents loggedIn={loggedIn}/></TabContainer>
                    <TabContainer dir={theme.direction}><LogInOut loggedIn={loggedIn} handleLogin={this.handleLogin.bind(this)} loginPackage={this.state.loginPackage} username='nick' changePassword={this.state.changePassword}/></TabContainer>
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
});
  

export default withStyles(styles, {withTheme: true})(MovieNight);
