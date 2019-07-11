import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import './styles.css';


export default class Projects extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        console.log(this.state);
    }

    handleClick(e){
        e.preventDefault();
        ReactDOM.findDOMNode(this).scrollTop = 0;
    }

    render(){
        return (
            <div className='contact'>
                <div className='contactTitle'>
                    <p>
                        I am a software developer based in California. 
                        My current work is LAMP stack-based with 
                        a custom jQuery framework front-end. I also utilize Vue.js for new 
                        features in our product. When I have the time I sometimes create stuff on my own:
                    </p>

                    <div className='accordion-wrap'>
                    <Accordion>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Fate of Empires</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p className='accordion-text'>
                                    A multiplatform mobile app board game. Work is in progress.
                                    I am the lead developer on this project and I am working as part of a two-person team.
                                </p>
                                <p className='accordion-text'>
                                    Technology used: React Native, Redux, Socket.io, Sqlite <a href='http://www.fateofempiresgame.com' target='blank'>Link</a> 
                                </p>

                            </AccordionItemBody>
                        </AccordionItem>


                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>BlockPlanes.net</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p className='accordion-text'>
                                    Multiplayer space shooter with procedurally generated blockchain 
                                    hosted character sprites and live multiplayer action. Deployed on 
                                    AWS EC2 and utilizing AWS RDS for data persistence. Ethereum smart contract 
                                    is deployed on the Ropsten test network. 
                                </p>
                                <p className='accordion-text'>
                                    Technology used: React, Redux, Mysql, Socket.io, Solidity, Adobe Illustrator <a href='http://www.blockplanes.net' target='blank'>Link</a> 
                                </p>

                            </AccordionItemBody>
                        </AccordionItem>

                        

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>NicholasVrdoljak.com</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p className='accordion-text'>Personal Portfolio site (you're loking at it!)</p>

                               

                            </AccordionItemBody>
                        </AccordionItem>

                    </Accordion>
                    </div>
                </div>
    
                <div className='contactItem'>
                </div>
            </div>
    
        )
    }
}