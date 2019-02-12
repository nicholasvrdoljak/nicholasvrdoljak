import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Security from '@material-ui/icons/Security';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import './styles.css';


function TabContainer(props) {
    return (
        <Typography component="div" dir={props.dir} style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: 'auto', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class LogInOut extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '', 
            password: '',
            password1: '',
            password2: '',
            remember: false,

            index: 0,

        }
    }

    handleSignIn = (e, v) => {
        e.preventDefault();
        // console.log('signing in ', e.target)
        // console.log(this.props);
        // console.log(this.state);
        this.props.handleLogin(this.state.username, this.state.password, this.state.remember);
    }

    handleChangePassword = (e, v) => {
        e.preventDefault()
        // console.log(this.state);
        this.props.handleChangePassword(this.state.password1, this.state.password2);
    }

    handleChange = (e, v) => {
        let state = {};
        if(e.target.value === 'remember'){
            state[e.target.value] = e.target.checked;
        } else{
            // console.log(e.target.id);
            // console.log(e.target.value);
            state[e.target.id] = e.target.value;
        }

        this.setState(() => {
            return state;
        });
    }

    renderLogin = (classes, bool) => {
        return (
            <div className='login' key='3'>
                <main className={classes.main}>
                    <CssBaseline />
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                        <LockIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="username">Your Name</InputLabel>
                                <Input onChange={this.handleChange.bind(this)} id="username" name="username" autoComplete="username"/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input onChange={this.handleChange.bind(this)} name="password" type="password" id="password" autoComplete="current-password" />
                            </FormControl>
                            <FormControlLabel
                                id='rememberme'
                                onChange={this.handleChange.bind(this)}
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.handleSignIn}
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </div>
        );
    }

    renderChangePassword = (classes, bool) => {
        return (
            <div className='login' key='1'>
                <main className={classes.main}>
                    <CssBaseline />
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <Security />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Please Change Your Password
                        </Typography>
                        <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="username">{this.props.username}</InputLabel>
                            <Input id="username" name="username" disabled />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password_change_1">Password</InputLabel>
                            <Input onChange={this.handleChange.bind(this)} name="password_change_1" type="password" id="password1" />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password_change_2">Type password again</InputLabel>
                            <Input onChange={this.handleChange.bind(this)} name="password_change_2" type="password" id="password2" />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.handleChangePassword}
                        >
                            Submit
                        </Button>
                        </form>
                    </Paper>
                </main>
            </div>
        );
    }
    renderLoggedIn = (classes) => {
        return(
            <div className='login' key='2'>
                <main className={classes.main}>
                    <p>You've been logged in. Feel free to suggest or vote on movies.</p>
                </main>
            </div>
        )
    }

    render(){
        const { classes } = this.props;
        return(
            <div>
                <ReactCSSTransitionGroup
                    transitionName="login"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>

                    {   this.props.loggedIn ? 
                            this.renderLoggedIn(classes) 
                            : this.props.changePassword ? 
                                this.renderChangePassword(classes)
                                : this.renderLogin(classes)
                    }
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default withStyles(styles)(LogInOut);