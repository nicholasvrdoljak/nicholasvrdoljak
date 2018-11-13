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

                    <Accordion>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>BlockPlanes.net</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p>Multiplayer space shooter</p>


                                <Accordion>
                                    <AccordionItem className='submenu'>
                                        <AccordionItemTitle>
                                            <h3>Technology</h3>
                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p>React, Redux, MySQL, Node, Socket.io, HTML5 Canvas</p>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                    <AccordionItem className='submenu'>
                                        <AccordionItemTitle>
                                            <h3>Challenges</h3>
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
                                            <p>React, Redux, MySQL, Node, Socket.io, HTML5 Canvas</p>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                    <AccordionItem className='submenu'>
                                        <AccordionItemTitle>
                                            <h3>Challenges</h3>
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
                                <p>Personal Portfolio site</p>

                                <Accordion>
                                    <AccordionItem className='submenu'>
                                        <AccordionItemTitle>
                                            <h3>Technology</h3>
                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p>React, Redux, MySQL, Node, Socket.io, HTML5 Canvas</p>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                    <AccordionItem className='submenu'>
                                        <AccordionItemTitle>
                                            <h3>Challenges</h3>
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