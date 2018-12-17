import React, { Component } from 'react';
import Axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
});

class CurrentRankingsAndVote extends Component{
    constructor(props){
        super(props);
        this.state = {
            expanded: null,
            movies: [
                {id: 1, title: 'Demolition Man', genre: 'Comedy', year: 2000, description: ':DLKJSDH KLJSHDF LKSDHJFS LKDJFH kjhsdl kfhjs afksjhdfa lskdj ssd'},
                {id: 2, title: 'Citizen Four', genre: 'Horror', year: 1929, description: ';lkj sk djfs djkf alskghksjhgk hwj gkjhsk gjhsadkfjasjhdf adf'},
            ]
        }
    } 

    componentDidMount(){
        // fetch current rankings
        Axios.get('/movies/getmovies')
            .then((response) => {
                console.log(response);
                this.setState({movies: response.data})
            })
            .catch((err) => {
                console.log(err);
            });

    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render(){
        const {classes} = this.props;
        const {expanded} = this.state;

        return(
            <div className={classes.root}>
            
            {this.state.movies.map((item) => {
                return (
                    <ExpansionPanel expanded={expanded === item.id} key={item.id} onChange={this.handleChange(item.id)}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>{item.title}</Typography>
                            <Typography className={classes.secondaryHeading}>{item.genre + ', ' + item.year}</Typography>
                            <Typography className={classes.secondaryHeading}><br/>Votes: {item.votes}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                <img src='https://s3-us-west-1.amazonaws.com/nicholas-vrdoljak/small/DSC00906_Fotor.jpg' />
                            {item.description}
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                );

            })}
            
            
            </div>
        )
    }
}


export default withStyles(styles)(CurrentRankingsAndVote);
