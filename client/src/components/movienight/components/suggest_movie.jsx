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
    paper: {
        alignItems: 'center',
        padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit}px`,
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
    highlight: {
        background: theme.palette.primary.light
    },
    progress: {
        'align-self': 'center',
    },
    nextButton: {
        'margin-bottom': '15em',
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

class SuggestMovies extends Component{
    constructor(props){
        super(props);
        this.state = {
            results: [],
            title: '',
            loading: false,
            error: false,
            errorMessage: '',
            page: 1,

            events: [],
            selectedEvent: null,

            popupOpened: false,
            loadingMovie: false,
            fetchedMovie: false,
            fetchedMovieTitle: '',

            suggestingPopupOpened: false,
        }
    }

    date_format = (date) => {
        let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 
            string = '',
            date_obj = new Date(date);
        
        return days[date_obj.getDay() - 1] + ', ' + date_obj.getMonth() + '/' + date_obj.getDate() + '/' + date_obj.getFullYear();
    }

    handleChange = (e) => {
        this.setState({title: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({results: [], loading: true});
        console.log('searching: ', this.state.title);

        Axios.get('/movies/searchmovie/'+this.state.title+'/1')
            .then((response) => {
                console.log(response);
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

    getMovie = (title, imdbID) => {
        this.setState({loadingMovie: true, popupOpened: true, fetchedMovieTitle: title});
        console.log('getting: ', imdbID)
        Axios.get('/movies/getmovie/'+imdbID)
            .then((response) => {
                console.log(response);
                this.setState({loadingMovie: false, fetchedMovie: response.data});
            })
            .catch((err) => {
                console.log(error);
                this.setState({loadingMovie: false});
            });
    }

    handleClosePopup = (e) => {
        this.setState({selectedEvent: null, popupOpened: false, fetchedMovie: false, fetchedMovieTitle: '', suggestingPopupOpened: false});
    }

    handleOpenSuggest = (e) => {
        const movie = this.state.fetchedMovie;
        // this.setState({loadingMovie: true, suggestingPopupOpened: true});

        this.setState({loadingMovie: false, suggestingPopupOpened: true, popupOpened: false});


        // get the events that are in the future, then, 
        // Axios.get('/movies/getevents')
        //     .then((response) => {
        //         console.log(response);
        //         if(response.data){
        //             let events_by_id = response.data.reduce((a, i) => {
        //                 a[i.id] = i;
        //                 return a;
        //             }, {});
        //             this.setState({
        //                 loadingMovie: false, 
        //                 popupOpened: false, 
        //                 events: response.data,
        //                 events_by_id: events_by_id
        //             });
        //         } else{
        //             this.setState({loadingMovie: false, popupOpened: false})
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })

    }

    handleCloseSuggest = (e) => {
        this.setState({
            selectedEvent: null, 
            popupOpened: false, 
            fetchedMovie: false, 
            fetchedMovieTitle: '', 
            suggestingPopupOpened: false
        });
    }

    handleSuggest = (e) => {
        console.log(this.state);

        if(this.state.selectedEvent){
            const self = this;
            let params = {
                token: sessionStorage.getItem('jwtToken'), 
                event: this.props.events_by_id[this.state.selectedEvent],
                movie: this.state.fetchedMovie
            }
            Axios.post('/movies/suggestmovie', params)
                .then(response => {
                    console.log(response);
                    self.props.getMovies();
                    self.props.getEvents();
                    self.handleCloseSuggest();
                })
                .catch(response => {
                    console.log('error: ', response);
                });
        } else{
            alert('Please select an event.');
        }

    }

    handleClickEvent = (e) => {
        console.log('clicked event: ', e, e.target, e.target.id);
        
        this.setState({selectedEvent: e.target.id})
    }

    nextPage = (e) => {
        e.preventDefault();
        this.setState({results: [], loading: true, page: this.state.page + 1});
        console.log('next page');

        Axios.get('/movies/searchmovie/'+this.state.title+'/'+this.state.page+1)
            .then((response) => {
                console.log(response);
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
                                                                    <Grid container spacing={16}>
                                                                        <Grid container spacing={16} className={classes.imageColumnContainer}>
                                                                            <Grid item md={12}>
                                                                                <img className={classes.imageColumn} src={this.state.fetchedMovie.Poster}/>
                                                                            </Grid>
                                                                        </Grid>

                                                                        <Grid container spacing={16} className={classes.infoContainer}>
                                                                            <Grid item md={6}>
                                                                                Country: 
                                                                                <Paper className={classes.paper}>{this.state.fetchedMovie.Country}</Paper>
                                                                            </Grid>
                                                                            <Grid item md={6}>
                                                                                Language: 
                                                                                <Paper className={classes.paper}>{this.state.fetchedMovie.Language}</Paper>
                                                                            </Grid>
                                                                            <Grid item md={6}>
                                                                                Runtime: 
                                                                                <Paper className={classes.paper}>{this.state.fetchedMovie.Runtime}</Paper>
                                                                            </Grid>
                                                                            <Grid item md={6}>
                                                                                Year: 
                                                                                <Paper className={classes.paper}>{this.state.fetchedMovie.Year}</Paper>
                                                                            </Grid>
                                                                            <Grid item md={6}>
                                                                                Director: 
                                                                                <Paper className={classes.paper}>{this.state.fetchedMovie.Director}</Paper>
                                                                            </Grid>
                                                                            <Grid item md={6}>
                                                                                Genre: 
                                                                                <Paper className={classes.paper}>{this.state.fetchedMovie.Genre}</Paper>
                                                                            </Grid>
                                                                            <Grid item md={6}>
                                                                                Starring: 
                                                                                <Paper className={classes.paper}>{this.state.fetchedMovie.Actors}</Paper>
                                                                            </Grid>
                                                                            <Grid item md={12}>
                                                                                Plot: 
                                                                                <Paper className={classes.paper}>{this.state.fetchedMovie.Plot}</Paper>
                                                                            </Grid>
                                                                            <Grid item md={6}>
                                                                                Imdb Rating: 
                                                                                <Paper className={classes.paper}>{this.state.fetchedMovie.imdbVotes}</Paper>
                                                                            </Grid>
                                                                        </Grid>
                                                                    </Grid>
                                                                )
                                                                : <p>
                                                                    {/* INSERT A PAGE FOR A FAILED MOVIE FETCH */}
                                                                </p>
                                                            }
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button onClick={this.handleClosePopup} color="primary">
                                                        Close
                                                        </Button>
                                                        {this.props.loggedIn 
                                                            ? <Button onClick={this.handleOpenSuggest} color="primary">
                                                                Suggest
                                                            </Button>
                                                            : undefined
                                                        }
                                                    </DialogActions>
                                                </Dialog>

                                                <Dialog
                                                    open={this.state.suggestingPopupOpened}
                                                    onClose={this.handleCloseSuggest}
                                                    aria-labelledby="alert-dialog-title"
                                                    aria-describedby="alert-dialog-description"
                                                    >
                                                    <DialogTitle id="alert-dialog-title">Suggest "{this.state.fetchedMovieTitle}" for a movie night!</DialogTitle>
                                                    <DialogContent className={classes.progress}>
                                                        {this.state.loadingMovie 
                                                            ? <CircularProgress/>
                                                            : (
                                                                <Grid container spacing={16}>
                                                                    <Grid container spacing={16} className={classes.imageColumnContainer}>
                                                                        <Grid item md={12}>
                                                                            <img className={classes.imageColumn} src={this.state.fetchedMovie.Poster}/>
                                                                        </Grid>
                                                                    </Grid>
                                                                    <Grid container spacing={16} className={classes.infoContainer}>
                                                                        {/* {this.state.events.length > 0  */}
                                                                        {this.props.events.length > 0 
                                                                            ? this.props.events.map(event => {
                                                                                return (
                                                                                    <Grid item md={12} key={event.id} id={event.id} onClick={this.handleClickEvent}>
                                                                                        <Paper id={event.id} className={this.state.selectedEvent == event.id ? classes.highlight + ' ' + classes.paper : classes.paper + ' ' + classes.movieRow}>
                                                                                            Event: {event.id}, on {this.date_format(event.date)}
                                                                                        </Paper>
                                                                                    </Grid>
                                                                                )
                                                                            })
                                                                            : (
                                                                                <Grid key={event.id} item md={12}>
                                                                                    <Paper className={classes.paper}>No events available. Go to the events page and create one.</Paper>
                                                                                </Grid>
                                                                            )
                                                                        }
                                                                    </Grid>
                                                                </Grid>
                                                                )
                                                            } 
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button onClick={this.handleCloseSuggest} color="primary">
                                                        Close
                                                        </Button>
                                                        <Button onClick={this.handleSuggest} color="primary">
                                                        Go
                                                        </Button>
                                                    </DialogActions>
                                                </Dialog>

                                            </div>
                                        );
                                    })}
                                </List>
                                <Button variant="outlined" color="secondary" className={classes.nextButton} onClick={this.nextPage}>Next</Button></div>
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