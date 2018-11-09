import React, { Component } from 'react';
// import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';


const PHOTO_SET = [
    {
        src: 'http://localhost:3456/images/DSC00834.jpg',
        width: 4,
        height: 3
      },
      {
        src: 'http://localhost:3456/images/DSC00071.jpg',
        width: 4,
        height: 3
    },
  ];

export default class Photography extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <div className='contact'>
                <div className='contactTitle'></div>

                <Gallery photos={PHOTO_SET} />

                <div className='contactItem'></div>
            </div>
    
        )
    }
}