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

    handleClick(){
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
                        features in our product. Please view some of my personal projects below:
                    </p>

                    <div className='accordion-wrap'>
                    <Accordion>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>BlockPlanes.net</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p className='accordion-text'>
                                    Multiplayer space shooter with procedurally generated blockchain 
                                    hosted character sprites and live multiplayer action. <a href='http://www.blockplanes.net' target='blank'>Link</a> 
                                </p>


                                <Accordion>
                                    <AccordionItem className='submenu'>
                                        <AccordionItemTitle>
                                            <h3>Technology</h3>
                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p className='accordion-text'>
                                                React, React Router, Redux, MySQL, Node.js, Redis, Socket.io, Solidity (Ethereum Blockchain), HTML5 Canvas, NGINX, Amazon Web Services
                                            </p>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                    <AccordionItem className='submenu'>
                                        <AccordionItemTitle>
                                            <h3>More info</h3>
                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p className='accordion-text'>This project involved learning programming language and dev environmnt of Solidity. 
                                                We used Ganache to test our smart contracts and eventually deployed them on the Ropsten test network. 
                                                Solidity is a lot like Javascript, with contracts being similar structures to JS Classes.  
                                                It was helpful to think of it like a very slow but very secure Node.js server with a poorly optimized database. Therefore, 
                                                when doing edits or inserts, it was important to make sure that the 'indexing' was preserved, which meant we couldn't just 
                                                reassign values or delete items, which would affect the positioning of all subsequent elements, i.e. no rearranging of the 
                                                array of objects that represented our game elements on the blockchain. 
                                            </p>
                                            <p className='accordion-text'>
                                                Another challenge was programming the live multiplayer game. The multiplayer feature 
                                                introduced massive complications in terms of maintaining a single source of truth shared between 
                                                two clients and minimizing the ability for a player to exploit network lag. 
                                                This was solved by essentially maintaining a gamestate on the server, and accepting user input to update that gamestate. 
                                                The client side would update instantly to maintain a smooth interface, but impact detections and motion was coordinated through 
                                                the socket server. Simultaneously, after pressing a key, instructions were sent to the server and the UI would update directly. 
                                                Thirty times a second, each client would receive a data package with the updated gamestate, which the client would accept and 
                                                smoothly reconcile with the current client-side gamestate using a smoothing function. The result is a smooth feeling game 
                                                but also an incorruptible souce of truth for both players. 
                                            </p>
                                            <p className='accordion-text'>
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
                                <p className='accordion-text'>Reddit Clone</p>

                                <Accordion>
                                    <AccordionItem className='submenu'>
                                        <AccordionItemTitle>
                                            <h3>Technology</h3>
                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p className='accordion-text'>
                                                React, MongoDB, Node.js
                                            </p>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                    <AccordionItem className='submenu'>
                                        <AccordionItemTitle>
                                            <h3>More Info</h3>
                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p className='accordion-text'>
                                                This was the first team project I worked on that was planned and executed using 
                                                sprint planning and agile methodology, a large amount of git management, and a division of labor. 
                                                We decided to plan the work using vertical slicing, where each person would own a feature from back to front, 
                                                rather than divide things between front and back-end. This meant that our merges were a little more difficult to coordinate, 
                                                but also meant that each person had no blockers and could continually work on their feature.
                                            </p>
                                            <p className='accordion-text'>
                                                I was tasked with working out the commenting structure, which is a feature by which a user can comment on a post, 
                                                and subsequently comment on other comments, including comments that are themselves comments on other comments - in other words, a tree data structure. 
                                                This was a prime candidate for a recursive algorithm to construct the multi-dimensional object that was used to construct the comment tree structure. 
                                                The other main challenge for the commenting feature was displaying the (potentially infinitely) nested comments in a user-friendly 
                                                way. I did this by dynamically assigning css styling to indent each comment according to its hierarchical level under the initial post. 
                                                The result is each comment is slightly indented (just like on the real Reddit.com) and it becomes clear to the user that the comments are 
                                                pertaining to what it is directly under.  
                                            </p>
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
                                <p className='accordion-text'>Personal Portfolio site (you're loking at it!)</p>

                                <Accordion>
                                    <AccordionItem className='submenu'>
                                        <AccordionItemTitle>
                                            <h3>Technology</h3>
                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p className='accordion-text'>
                                                React, React Router, Redux, MySQL, Node.js, Digital Ocean, NGINX, Let's Encrypt
                                            </p>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                    <AccordionItem className='submenu'>
                                        <AccordionItemTitle>
                                            <h3>More Info</h3>
                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p className='accordion-text'>
                                                This project was a lot of fun, because it involved a lot of experimentation with React Router to produce 
                                                what I wanted the user to experience. The site is divided into four tabs, and switching between them involves 
                                                the application of css classes dynamically. However, what made it tricky was for each tab to have its own url 
                                                while also still displaying the animation transition when directly loading the page that is desired. 
                                                The effect is smooth and is made easy to navigate using the arrow keys, without the need for any of the bulky 
                                                transition or animation libraries for React. 
                                            </p>
                                            <p className='accordion-text'>
                                                Another fun aspect of this project was setting up the hosted environment, including proxying, SSL certificates, and
                                                daemonizing the app. I am not primarily a dev-ops engineer, but this aspect of software engineering and web development 
                                                is interesting and fun for me. 
                                            </p>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                </Accordion>

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