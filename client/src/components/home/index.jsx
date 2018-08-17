import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Main from '../routers/secondary.jsx';
// import SecondaryRouter from '../routers/secondary.jsx';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleHover: false,
        };
    }

    componentWillReceiveProps(nextProps) {
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
        
    }
    goToPage(e) {
        e.preventDefault();
        const x = e.target.title;
        const id = e.target.id;
        this.setState({
            one: (x === 'one'),
            two: (x === 'two'),
            three: (x === 'three'), 
            four: (x === 'four'), 
            shrink: true
        }, () => {
            this.props.history.push(`/${id}`)
        });
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
                    <div className='header'  >
                        <Link to='/' onMouseOver={this.mouseoverTitle.bind(this)}>Nick Vrdoljak</Link>
                    </div>
                    <div className='footer'>&#169; Nick Vr. 2018</div>
                    <div className='footerImg1'><a target='blank' href='https://www.linkedin.com/in/nicholas-vrdoljak-52111453'><img src='/../../assets/linkedin-logo-2.png'></img></a></div>
                    <div className='footerImg2'><a target='blank' href='https://github.com/nicholasvrdoljak'><img src='/../../assets/GitHub-Mark-32px.png'></img></a></div>
                </div>


                <div className='homeContainer' onMouseOver={this.removeTitleBox.bind(this)}>
                    <div className={`homeBar homeBar1 ${this.state.shrink ? (this.state.one ? 'homeBarGrown': 'homeBarShrunk') : ''}`}>
                        <div>
                        {this.state.shrink && this.state.one ? <Main/> : <a href='#' title='one' id='projects' onClick={this.goToPage.bind(this)}>projects</a>}
                        </div>
                    </div>
                    <div className={`homeBar homeBar2 ${this.state.shrink ? (this.state.two ? 'homeBarGrown': 'homeBarShrunk') : ''}`}>
                        <div>
                        {this.state.shrink && this.state.two ? <Main/> : <a href='#' title='two' id='blog' onClick={this.goToPage.bind(this)}>blog</a>}
                        </div>
                    </div>
                    <div className={`homeBar homeBar3 ${this.state.shrink ? (this.state.three ? 'homeBarGrown': 'homeBarShrunk') : ''}`}>
                        <div>
                        {this.state.shrink && this.state.three ? <Main/> : <a href='#' title='three' id='play' onClick={this.goToPage.bind(this)}>play</a>}
                        </div>
                    </div>
                    <div className={`homeBar homeBar4 ${this.state.shrink ? (this.state.four ? 'homeBarGrown': 'homeBarShrunk') : ''}`}>
                        <div>
                            {this.state.shrink && this.state.four ? <Main/> : <a href='#' title='four' id='contact' onClick={this.goToPage.bind(this)}>contact</a>}
                        </div>
                        </div>
                </div>
            </div>
        )
    }
}