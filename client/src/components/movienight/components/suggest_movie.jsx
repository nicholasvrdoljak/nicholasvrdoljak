import React, { Component } from 'react';
import Axios from 'axios';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
// Search
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import LinearProgress from '@material-ui/core/LinearProgress';
// Movie Row Listings
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// Movie Details
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    root: {
        width: '75%',
        backgroundColor: theme.palette.background.paper,
    },
    avatar: {
        width: '200px', 
        height: '200px',
    },
    movieRow: {
        cursor: 'pointer',
        '&:hover': {
            background: theme.palette.secondary.light
        }
    }, 
    progress: {
        'align-self': 'center',
    },
    nextButton: {
        'margin-bottom': '15em',
    }
});

class SuggestMovies extends Component{
    constructor(props){
        super(props);
        this.state = {
            results: [],
            title: '',
            loading: false,
            error: false,
            errorMessage: 'Error...',

            popupOpened: false,
            loadingMovie: false,
            fetchedMovie: false,
            fetchedMovieTitle: '',
        }
    }

    handleChange = (e) => {
        this.setState({title: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({results: [], loading: true});

        Axios.get('/movies/searchmovie/'+this.state.title)
            .then((response) => {
                console.log(response.data);
                const results = response.data;

                if(!results.Error){
                    this.setState({loading: false, results: results.Search})
                } else{
                    this.setState({loading: false, error: true, errorMessage: results.Error})
                }

            })
            .catch((error) => {
                console.log(error)
                this.setState({error: true, loading: false})
            });
    }

    getMovie =(title, imdbID) => {
        this.setState({loadingMovie: true, popupOpened: true, fetchedMovieTitle: title});

        Axios.get('/movies/getmovie/'+imdbID)
            .then((response) => {
                console.log(response);
                this.setState({loadingMovie: false, fetchedMovie: response.data})
            })
            .catch((err) => {
                console.log(error);
                this.setState({loadingMovie: false})
            });
    }

    handleClosePopup = (e) => {
        this.setState({popupOpened: false, fetchedMovie: false, fetchedMovieTitle: ''})
    }

    render(){
        const { classes } = this.props;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="search_movie">Search for a movie</InputLabel>
                        <Input onChange={this.handleChange} name="search_movie" type="text" id="search_movie" autoComplete='off'/>
                    </FormControl>
                </form>

                {
                    this.state.loading 
                    
                        ? (<LinearProgress />) 
                    
                        : this.state.results.length > 0 
                        
                            ? <div><List className={classes.root}>
                                    {this.state.results.map((item) => {
                                        return (
                                            <div key={item.imdbID} name={item.Title}>
                                                <ListItem id={item.imdbID} name={item.Title} className={classes.movieRow} onClick={this.getMovie.bind(this, item.Title, item.imdbID)}>
                                                    <Avatar alt="Remy Sharp" src={item.Poster == 'N/A' ? '' : item.Poster} name={item.Title} className={classes.avatar} />
                                                    <ListItemText name={item.Title} primary={item.Title} secondary={item.Year} />
                                                </ListItem>
                                                <Dialog
                                                    open={this.state.popupOpened}
                                                    onClose={this.handleClosePopup}
                                                    aria-labelledby="alert-dialog-title"
                                                    aria-describedby="alert-dialog-description"
                                                    >
                                                    <DialogTitle id="alert-dialog-title">{this.state.fetchedMovieTitle}</DialogTitle>
                                                    <DialogContent className={classes.progress}>
                                                        {this.state.loadingMovie 
                                                            ? <CircularProgress/>
                                                            : this.state.fetchedMovie 
                                                                ? (

                                                                    <Grid container spacing={24}>
                                                                        <Grid item xs={12}>
                                                                            <Paper className={classes.paper}>{this.state.fetchedMovie.Actors}</Paper>
                                                                        </Grid>
                                                                        <Grid item xs={6}>
                                                                            <Paper className={classes.paper}>{this.state.fetchedMovie.Country}</Paper>
                                                                        </Grid>
                                                                        <Grid item xs={6}>
                                                                            <Paper className={classes.paper}>{this.state.fetchedMovie.Director}</Paper>
                                                                        </Grid>
                                                                        <Grid item xs={3}>
                                                                            <Paper className={classes.paper}>{this.state.fetchedMovie.Director}</Paper>
                                                                        </Grid>
                                                                        <Grid item xs={3}>
                                                                            <Paper className={classes.paper}>{this.state.fetchedMovie.Genre}</Paper>
                                                                        </Grid>
                                                                        <Grid item xs={3}>
                                                                            <Paper className={classes.paper}>{this.state.fetchedMovie.Language}</Paper>
                                                                        </Grid>
                                                                        <Grid item xs={3}>
                                                                            <Paper className={classes.paper}>{this.state.fetchedMovie.Language+this.state.fetchedMovie.Plot+
                                                                    
                                                                    this.state.fetchedMovie.Poster+
                                                                    
                                                                    this.state.fetchedMovie.Runtime+
                                                                    
                                                                    this.state.fetchedMovie.Released+
                                                                    
                                                                    this.state.fetchedMovie.Writer+
                                                                    
                                                                    this.state.fetchedMovie.Year+
                                                                    
                                                                    this.state.fetchedMovie.imdbVotes+'/100'}</Paper>
                                                                        </Grid>
                                                                    </Grid>
                                                                )
                                                                : <p></p>
                                                            }
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button onClick={this.handleClosePopup} color="primary">
                                                        Close
                                                        </Button>
                                                    </DialogActions>
                                                </Dialog>
                                            </div>
                                        );
                                    })}
                                </List>
                                <Button variant="outlined" color="secondary" className={classes.nextButton}>Next</Button></div>
                            : this.state.error 
                                ? (
                                    <p>{this.state.errorMessage}</p>
                                ) 
                                : <p>Press enter to search...</p>

                }
                


            </div>
        )
    }
}

export default withStyles(styles)(SuggestMovies)