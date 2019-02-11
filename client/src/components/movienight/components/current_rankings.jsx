import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
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
        }
    } 

    componentDidMount(){
        this.props.getMovies();
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    vote = (movieId, eventId) => {
        console.log('voting for: ', movieId);
        Axios.post('/movies/vote/'+movieId+'/'+eventId, {token: sessionStorage.getItem('jwtToken')})
            .then(response => {
                if(response.data.success){
                    this.props.getMovies();
                } else{
                    alert(response.data.error);
                }
            })
    }

    render(){
        const {classes} = this.props;
        const {expanded} = this.state;

        return(
            <div className={classes.root}>
            
            {this.props.movies.length > 0
                ? this.props.movies.map((item) => {
                    console.log('movie: ', item);
                    return (
                        // <ExpansionPanel expanded={expanded === item.id} key={item.id} onChange={this.handleChange(item.id)}>
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
                        // </ExpansionPanel>
                    );

                })
                : <Typography className={classes.secondaryHeading}>No movies have been suggested</Typography>
        
            }
            
            
            </div>
        )
    }
}


export default withStyles(styles)(CurrentRankingsAndVote);
