import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';


export default class MovieNight extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            username: '', 
            password: '',
        };
    }

    componentDidMount(){
        console.log('did mount');
        // check for login cookie, if so, set the state
    }

    handleLogin(event){
        var apiBaseUrl = "http://localhost:3456/";
        var self = this;
        var payload={
            "email": this.state.username,
            "password": this.state.password
        }
        axios.post(apiBaseUrl+'login', payload)
        .then(function (response) {
            console.log(response);
            if(response.data.code == 200){
                console.log("Login successfull");
                // check if they are logging in for the first time
                    // if so - have them change their password
                    // if not - set state to logged in



                // var uploadScreen=[];
                // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
                // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})

            }
            else if(response.data.code == 204){
                console.log("Username password do not match");
                alert("username password do not match")
            }
            else{
                console.log("Username does not exists");
                alert("Username does not exist");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
          <div>
            <MuiThemeProvider>
              <div>
              <AppBar
                 title="Movie Night"
               />
               <TextField
                 hintText="Enter your Username"
                 floatingLabelText="Username"
                 onChange = {(event,newValue) => this.setState({username:newValue})}
                 />
               <br/>
                 <TextField
                   type="password"
                   hintText="Enter your Password"
                   floatingLabelText="Password"
                   onChange = {(event,newValue) => this.setState({password:newValue})}
                   />
                 <br/>
                 <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleLogin(event)}/>
             </div>
             </MuiThemeProvider>
          </div>
        );
    }
}
const style = {
    margin: 15,
};