import React, { Component } from 'react';
import Reacteroids from './games/asteroids/Reacteroids.js';

 const Play =() => {
    return (
        <div className='contact'>
            <div className='contactTitle'>
                <h1>Play Games here </h1>
            </div>

            <Reacteroids/>

            <div className='contactItem'>
            </div>
        </div>

    )
}

export default Play;