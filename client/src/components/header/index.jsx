import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Main from '../main/index.jsx';

export default class Header extends Component {
    render() {
        return (
            <div>

                <div className='header'>
                    <strong>Nick Vrdoljak</strong>
                </div>

                <div className='footer'>&#169; Nick Vr. 2018</div>

                <Main/>
            </div>
        );
    }
}