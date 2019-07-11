import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import Main from '../routers/secondary.jsx';
import './home.css';

const KEY = {
    LEFT:  37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
};

const mapStateToProps = state => {
    return {
        lightboxIsOpen: state.lightboxIsOpen,
    };
};  

class ConnectedHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleHover: false,
            slideOutOverlay: false
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log('will receive');
        if (nextProps.prop) {
            this.setState({
                one: (nextProps.prop === 'one'),
                two: (nextProps.prop === 'two'),
                three: (nextProps.prop === 'three'), 
                four: (nextProps.prop === 'four'), 
                shrink: true
            });
        } else {
            this.setState({
                one: false,
                two: false, 
                three: false, 
                four: false, 
                shrink: false 
            })
        }
    }
    componentDidMount() {
        setTimeout(() => {
            if (this.props.prop) {
                this.setState({
                    one: (this.props.prop === 'one'),
                    two: (this.props.prop === 'two'),
                    three: (this.props.prop === 'three'), 
                    four: (this.props.prop === 'four'), 
                    shrink: true
                });
            } else {
                this.setState({
                    one: false,
                    two: false, 
                    three: false, 
                    four: false, 
                    shrink: false 
                })
            }
        }, 200);

        document.body.addEventListener('keydown', this.handleKeyDown.bind(this, false));

        setTimeout(()=>{this.setState({slideOutOverlay: true})}, 2000);
    }

    componentWillUnmount(){
        console.log('unmounting', this.state);
    }

    handleKeyDown(x, e){
        if(e.keyCode === KEY.UP 
            || e.keyCode === KEY.LEFT
            || e.keyCode === KEY.RIGHT
        ){
            e.preventDefault();
        }
        if(!this.props.lightboxIsOpen){
            if(e.keyCode === KEY.LEFT){
                if(this.props.prop === 'one'){
                    return;
                } else if(this.props.prop === 'two' || this.props.location.pathname === "/"){
                    this.goToPage(null, 'one', 'projects')
                } else if(this.props.prop === 'three'){
                    this.goToPage(null, 'two', 'photography')
                } else if(this.props.prop === 'four'){
                    this.goToPage(null, 'three', 'read')
                }
            }
            if(e.keyCode === KEY.RIGHT){
                if(this.props.prop === 'one'){
                    this.goToPage(null, 'two', 'photography')
                } else if(this.props.prop === 'two'){
                    this.goToPage(null, 'three', 'read')
                } else if(this.props.prop === 'three' || this.props.location.pathname === "/"){
                    this.goToPage(null, 'four', 'contact')
                } else if(this.props.prop === 'four'){
                    return;
                }
            }
            if(e.keyCode === KEY.UP){
                this.setState({
                    one: false, 
                    two: false, 
                    three: false, 
                    four: false, 
                    shrink: false
                }, () => this.props.history.push('/'));
            }
        }
    }

    goToPage(e, x, z) {
        console.log('go to page');
        if(e) e.preventDefault();

        const title = x || e.target.title;
        const id = z || e.target.id;

        if(!this.props.lightboxIsOpen){
            this.setState({
                one: (title === 'one'),
                two: (title === 'two'),
                three: (title === 'three'), 
                four: (title === 'four'), 
                shrink: true
            }, () => {
                this.props.history.push(`/${id}`)
            });
        }
    }
    mouseoverTitle() {
        this.setState({titleHover: !this.state.titleHover});
    }
    removeTitleBox() {
        this.setState({titleHover: false});
    }

    render() {
        return (
            <div>
                <div>
                    {(this.props.prop) ? ('') : (<div className={((this.state.slideOutOverlay) ? ('intro-overlay slide-out-overlay') : ('intro-overlay'))}>
                        {(!this.state.slideOutOverlay) ? (<div className='inner-overlay-wrapper'>
                            <div className='inner-overlay'>
                                Try using your &#8593; &#8592; & &#8594; keyboard keys.
                            </div>
                        </div>) : ('')}
                    </div>)}
                    <ReactCSSTransitionGroup
                        transitionName="header"
                        transitionEnterTimeout={1500}
                        transitionLeaveTimeout={1500}>

                        { !this.state.shrink
                            ?  (
                                <div className='header'  >
                                    <Link to='/' onMouseOver={this.mouseoverTitle.bind(this)}>Nick Vrdoljak</Link>
                                </div>
                            )
                            : (
                                <div className='header-small'  >
                                    <Link to='/' onMouseOver={this.mouseoverTitle.bind(this)}>Nick Vrdoljak</Link>
                                </div>
                            )
                        }
                    </ReactCSSTransitionGroup>
                    <div className='footer'> <Link to='/' >&#169; Nick Vr. 2019</Link></div>
                    <div className='footerImg1'><a target='blank' href='https://www.linkedin.com/in/nicholas-vrdoljak-52111453'><img src='/../../assets/linkedin-logo-2.png'></img></a></div>
                    <div className='footerImg2'><a target='blank' href='https://github.com/nicholasvrdoljak'><img src='/../../assets/GitHub-Mark-32px.png'></img></a></div>
                </div>


                <div className='homeContainer' onMouseOver={this.removeTitleBox.bind(this)}>
                    <div onClick={this.state.one ? () => {return;} : this.goToPage.bind(this)} title='one' id='projects' className={`homeBar homeBar1 ${this.state.shrink ? (this.state.one ? 'homeBarGrown': 'homeBarShrunk') : ''}`}>
                        <div className='containerObject'>
                        {this.state.shrink && this.state.one ? <Main/> : <a href='#' title='one' id='projects' onClick={this.goToPage.bind(this)}>projects</a>}
                        </div>
                    </div>
                    <div onClick={this.state.two ? () => {return;} : this.goToPage.bind(this)} title={this.state.two ? '' : 'two'} id={this.state.two ? '' : 'photography'} className={`homeBar homeBar2 ${this.state.shrink ? (this.state.two ? 'homeBarGrown': 'homeBarShrunk') : ''}`}>
                        <div className='containerObject'>
                        {this.state.shrink && this.state.two ? <Main/> : <a href='#' title='two' id='photography' onClick={this.goToPage.bind(this)}>photos</a>}
                        </div>
                    </div>
                    <div onClick={this.state.three ? () => {return;} : this.goToPage.bind(this)} title='three' id='read' className={`homeBar homeBar3 ${this.state.shrink ? (this.state.three ? 'homeBarGrown': 'homeBarShrunk') : ''}`}>
                        <div className='containerObject'>
                        {this.state.shrink && this.state.three ? <Main/> : <a href='#' title='three' id='read' onClick={this.goToPage.bind(this)}>read</a>}
                        </div>
                    </div>
                    <div onClick={this.state.four ? () => {return;} : this.goToPage.bind(this)} title='four' id='contact' className={`homeBar homeBar4 ${this.state.shrink ? (this.state.four ? 'homeBarGrown': 'homeBarShrunk') : ''}`}>
                        <div className='containerObject'>
                            {this.state.shrink && this.state.four ? <Main/> : <a href='#' title='four' id='contact' onClick={this.goToPage.bind(this)}>contact</a>}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const Home = connect(mapStateToProps)(ConnectedHome);

export default Home;