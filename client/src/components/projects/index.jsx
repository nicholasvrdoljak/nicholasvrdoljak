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
        this.state = {
        };
    }

    render(){
        return (
            <div className='contact'>
                <div className='contactTitle'>
                    <p>
                        I am a software developer based in California. 
                        My current work is LAMP stack-based with 
                        a custom jQuery framework front-end. I am also utilizing Vue.js for new 
                        features in our product. Please view some of my personal projects below:
                    </p>


                    <Accordion>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>BlockPlanes.net</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p>
                                    Multiplayer space shooter with procedurally generated blockchain 
                                    hosted character sprites and live multiplayer action. <a href='http://www.blockplanes.net' target='blank'>Link</a> 
                                </p>


                                <Accordion>
                                    <AccordionItem className='submenu'>
                                        <AccordionItemTitle>
                                            <h3>Technology</h3>
                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p>
                                                React, React Router, Redux, MySQL, Node.js, Redis, Socket.io, Solidity (Ethereum Blockchain), HTML5 Canvas, NGINX, Amazon Web Services
                                            </p>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                    <AccordionItem className='submenu'>
                                        <AccordionItemTitle>
                                            <h3>More info</h3>
                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p>This project involved learning the new (to me) programming language and dev environment of Solidity. 
                                                We used Ganache to test our smart contracts and eventually deployed them on the Ropsten test network. 
                                                Solidity is a lot like Javascript, with contracts being similar structures to JS Classes. 
                                                I thought of it as a very slow and potentially expensive database, so it twisted the priorities for programming. 
                                                Thinking of it as a database, however, was not quite accurate, since it lacked basic database functionality like indexing. 
                                                Write operations are expensive, computationally and monetarily, whereas computations are cheap. 
                                            </p>
                                            <p>
                                                Another challenge was programming the live multiplayer game. While there is a single player mode, 
                                                the multiplayer introduced massive complications in terms of maintaining a single source of truth shared between 
                                                two clients and minimizing the ability for a player to exploit network lag. 
                                                This was solved by essentially maintaining a gamestate on the server, and accepting user input to update that gamestate. 
                                                The client side would update instantly to maintain a smooth interface, but impact detections and motion was coordinated through 
                                                the socket server. Essentially, you would press a key, and simultaneously the server was sent the instructions but also the UI would update. 
                                                Every 1/30th of a second, the client would receive a data package with the updated gamestate, which the client would accept and 
                                                smoothly reconcile with the current client-side gamestate using a smoothing function. The result is a smooth feeling game 
                                                but also an incorruptible souce of truth for both players. 
                                            </p>
                                            <p>
                                                We used react-redux to maintain app state between pages, JWT for authentication, MetaMask/Web3 to integrate the Ethereum smart contract, 
                                                and HTML5 canvas to display the gamestate. To improve the app, I am planning on better implementing the experience for players who 
                                                do not have MetaMask installed in their browser. Currently, the non-MetaMask enabled version is not an ideal experience and the 
                                                site was developed with having access to the Ethereum network in mind. Please email me if you would like to play!
                                            </p>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                </Accordion>

                            </AccordionItemBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Reddit</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p>Reddit Clone</p>

                                <Accordion>
                                    <AccordionItem className='submenu'>
                                        <AccordionItemTitle>
                                            <h3>Technology</h3>
                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p>
                                                React, MongoDB, Node.js
                                            </p>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                    <AccordionItem className='submenu'>
                                        <AccordionItemTitle>
                                            <h3>More Info</h3>
                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p>Input challenges and anecdotes about the project.</p>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                </Accordion>

                            </AccordionItemBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>NicholasVrdoljak.com</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p>Personal Portfolio site (you're looking at it!)</p>

                                <Accordion>
                                    <AccordionItem className='submenu'>
                                        <AccordionItemTitle>
                                            <h3>Technology</h3>
                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p>
                                                React, React Router, Redux, MySQL, Node.js, Digital Ocean, NGINX, Let's Encrypt
                                            </p>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                    <AccordionItem className='submenu'>
                                        <AccordionItemTitle>
                                            <h3>More Info</h3>
                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p>Input challenges and anecdotes about the project.</p>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                </Accordion>

                            </AccordionItemBody>
                        </AccordionItem>

                    </Accordion>

                </div>
    
                <div className='contactItem'>
                </div>
            </div>
    
        )
    }
}