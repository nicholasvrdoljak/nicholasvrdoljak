import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

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
});

class Events extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: null, 
            focused: true, 
        }
    }
    render(){

        return(
            <div>
            <div>Events</div>

            <SingleDatePicker
                date={this.state.date} // momentPropTypes.momentObj or null
                onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                focused={this.state.focused} // PropTypes.bool
                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                id="your_unique_id" // PropTypes.string.isRequired,
            />
            </div>
        )
    }
}

export default withStyles(styles)(Events);