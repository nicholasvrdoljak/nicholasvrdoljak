import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Axios from 'axios';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    imageColumn: {
        'max-width': '100%',
        'margin-top': '1em', 
    },
    imageColumnContainer: {
        width: '50%'
    },
    infoContainer: {
        width: '50%', 
        'margin-top': '1em', 
        'padding-left': '1em'
    }

});

class CurrentRankingsAndVote extends Component{
    constructor(props){
        super(props);
        this.state = {
            expanded: null,
            value: 0,
            displayedEventsMovies: null
        }
    } 

    componentDidMount(){
        if(Object.keys(this.props.movies).length > 0){
            console.log('setting to zero')
            this.setState({value: 0, displayedEventsMovies: 0})
        }
    }

    shouldComponentUpdate(nextProps){
        console.log('JUDGING');
        return true;
    }

    handleChange = panel => (event, expanded) => {
        console.log('handle change')
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    vote = (movieId, eventId) => {
        Axios.post('/movies/vote/'+movieId+'/'+eventId, {token: sessionStorage.getItem('jwtToken')})
            .then(response => {
                if(response.data.success){
                    this.props.getMovies();
                    this.props.getEvents();
                } else{
                    alert(response.data.error);
                }
            })
    }

    handleEventChange = (event, value) => {
        console.log('event change')        
        this.setState({displayedEventsMovies: value, value: value})
    }

    render(){
        const {classes} = this.props;
        const {expanded} = this.state;

        console.log('rendering', 
            this.state.value, 
            this.props.movies, 
            Object.keys(this.props.movies),
            Object.keys(this.props.movies)[this.state.value], 
            this.props.movies[Object.keys(this.props.movies)[this.state.value]],
            typeof this.state.displayedEventsMovies
        );

        return(
            <div className={classes.root}>
            {Object.keys(this.props.movies).length > 0 ? 
                <AppBar position="static" color='default'>
                    <Tabs 
                        value={this.state.value}
                        onChange={this.handleEventChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                        fullWidth
                    >
                        {this.props.events.length > 0 ? 
                        this.props.events.map(event => {
                            console.log('event clicked', event);
                            return <Tab key={event.id} label={"Event "+event.id+": "+unescape(event.name)+" "+unescape(event.location)} />
                        })
                        : undefined}
                        
                    </Tabs>
                </AppBar>
                : undefined}

            {(typeof this.state.displayedEventsMovies === 'number' || Object.keys(this.props.movies).length > 0) && this.props.movies[Object.keys(this.props.movies)[this.state.value]] !== undefined
                ? this.props.movies[Object.keys(this.props.movies)[this.state.value]].map((item) => {
                    console.log('PROPS MOVIES', this.props.movies, this.state.value);
                    console.log('movie: ', item);
                    return (
                        <ExpansionPanel expanded={expanded === item.id} key={item.id} onChange={this.handleChange(item.id)}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>{item.title}</Typography>
                                <Typography className={classes.secondaryHeading}>Votes: {item.votes}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container spacing={16}>
                                    <Grid container spacing={16} className={classes.imageColumnContainer}>
                                        <Grid item md={12}>
                                            <img className={classes.imageColumn} src={item.image_url} />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={16} className={classes.infoContainer}>
                                        <Grid item md={12}>
                                            <Typography className={classes.secondaryHeading}>{item.description}</Typography>
                                            <Typography className={classes.secondaryHeading}><br/>{item.genre}</Typography>
                                            <Typography className={classes.secondaryHeading}><br/>{item.year}</Typography>
                                            <Typography className={classes.secondaryHeading}><br/></Typography>
                                            <Button 
                                                variant="contained"
                                                color="primary"
                                                onClick={this.vote.bind(this, item.id, item.event_id)}
                                            >
                                                Vote
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    );

                })
                : <Typography className={classes.secondaryHeading}>No movies have been suggested</Typography>
        
            }
            
            
            </div>
        )
    }
}


export default withStyles(styles)(CurrentRankingsAndVote);
