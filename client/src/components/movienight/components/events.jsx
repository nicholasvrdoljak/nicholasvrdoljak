import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
        height: '100vh!important'
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
        }
    }

    showCalendar(){
        this.setState({showCalendar: true})
    }

    onDateSelected(date){
        this.setState({ date: date, showForm: true });
    }

    submitEvent(){
        alert('Submitting');
        this.setState({date: null, showForm: false, showCalendar: false});

        if(this.props.loggedIn){
            let params = {
                event_date: 'date1',
                event_name: 'name1', 
                event_location: 'loc1',
                token: sessionStorage.getItem('jwtToken'), 
            }

            Axios.post('/movies/createevent', params)
                .then((response) => {
                    console.log('event response: ', response);
                    // this.setState({user: response.data.user.username, loggedIn: true});
                })
                .catch((err) => {
                    console.log('error: ', err);
                });
        }
    }

    render(){

        return(
            <div>
                <div style={{height: '100vh'}}>
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
                            <form>
                                <TextField
                                    id="name"
                                    label="Name of Event"
                                    margin="normal"
                                />

                                <TextField
                                    id="location"
                                    label="Location"
                                    margin="normal"
                                />
                            </form>
                            <button onClick={this.submitEvent.bind(this)}>Go</button>
                        </div>
                    )
                    : undefined}
                    
                    <div>
                        {this.state.eventsList.length === 0 
                        
                        ? <div><p>No events could be found.</p></div>
                        
                        : this.state.eventsList.map(event => {
                            return <p>Event</p>;
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Events);