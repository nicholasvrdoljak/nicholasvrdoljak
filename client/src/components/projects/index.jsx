import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';


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
                                <h3>BlockPlanes</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p>Multiplayer space shooter</p>
                            </AccordionItemBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Reddit</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p>Reddit Clone</p>
                            </AccordionItemBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>NicholasVrdoljak.com</h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p>Personal Portfolio site</p>
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