import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import Axios from 'axios';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    page: {
        // height: '100vh!important'
    },
});

class Events extends Component{
    constructor(props){
        super(props);
        this.state = {
            focused: false, 
            date: null, 
            eventsList: [],

            showCalendar: false, 
            showForm: false,

            eventname: '', 
            locationname: '',
        }
    }

    componentDidMount(){
        Axios.get('/movies/getevents').then(response => {
            console.log(response.data);
            this.setState({eventsList: response.data})
        });
    }

    handleChange = (e) => {
        let state = {};
        
        console.log(e.target.id);
        console.log(e.target.value);
        state[e.target.id] = e.target.value;

        this.setState(prevState => {
            return {...prevState, ...state};
        });
    }

    showCalendar(){
        this.setState({showCalendar: true})
    }

    onDateSelected(date){
        this.setState({ date: date, showForm: true });
    }

    submitEvent(e){
        // e.stopPropagation();
        console.log('Submitting', this.state.date.format('YYYY-MM-DD'));
        console.log(JSON.parse(JSON.stringify(this.state)));
    
        if(this.props.loggedIn && this.state.eventname.length > 0 && this.state.locationname.length > 0 && this.state.date){
            console.log('sending post');
            e.preventDefault();

            let params = {
                event_date: this.state.date.format('YYYY-MM-DD'),
                event_name: this.state.eventname, 
                event_location: this.state.locationname,
                token: sessionStorage.getItem('jwtToken'), 
            }

            Axios.post('/movies/createevent', params)
                .then((response) => {
                    console.log('event response: ', response);
                    this.props.getEvents();
                    if(response.data.success){
                        this.setState({date: null, showForm: false, showCalendar: false});
                        Axios.get('/movies/getevents').then(response => {
                            console.log(response.data);
                            this.setState({eventsList: response.data})
                        });
                    }
                })
                .catch((err) => {
                    console.log('error: ', err);
                });

        }
    }

    render(){
        const classes = this.props;
        return(
            <div>
                <div 
                    // style={{height: '100vh'}}
                >
                    <button onClick={this.showCalendar.bind(this)}>Create a new Event</button>
                    <br/>
                    <br/>

                    {this.state.showCalendar 
                    ? (<SingleDatePicker
                        date={this.state.date} // momentPropTypes.momentObj or null
                        onDateChange={this.onDateSelected.bind(this)} // PropTypes.func.isRequired
                        focused={this.state.focused} // PropTypes.bool
                        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                        id="event_date_picker" // PropTypes.string.isRequired,
                    />)
                    : undefined}

                    {this.state.showForm
                    ? (
                        <div>
                            <form className={classes.form}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="eventname">Event Name</InputLabel>
                                    <Input onChange={this.handleChange} name="eventname" id="eventname" />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="locationname">Location Name</InputLabel>
                                    <Input onChange={this.handleChange} id="locationname" name="locationname" />
                                </FormControl>
                                <br/>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={this.submitEvent.bind(this)}
                                >
                                    Submit Event
                                </Button>
                            </form>
                        </div>
                    )
                    : undefined}
                    
                    <div>
                        {this.props.events.length === 0 
                        
                        ? <div><p>No events could be found.</p></div>
                        
                        : this.props.events.map((event, i) => {
                            return <p key={i}>{event.name}, {event.location}, {event.date}</p>;
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Events);