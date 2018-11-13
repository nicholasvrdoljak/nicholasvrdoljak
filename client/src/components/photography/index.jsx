import React, { Component } from 'react';
import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';
import { connect} from "react-redux";
import { openLightbox, closeLightbox } from "../../actions/index"

const PHOTO_SET = [
    {
        src: 'https://nicholasvrdoljak.com/images/DSC00834.jpg',
        // src: 'http://localhost:3456/images/DSC00834.jpg',
        width: 4,
        height: 3
      },
      {
        src: 'https://nicholasvrdoljak.com/images/DSC00071.jpg',
        // src: 'http://localhost:3456/images/DSC00071.jpg',
        width: 4,
        height: 3
    },
  ];

const mapDispatchToProps = dispatch => {
    return {
        openLightbox: () => dispatch(openLightbox()),
        closeLightbox: () => dispatch(closeLightbox()),
    };
};
  

class ConnectedPhotography extends Component {
    constructor(props) {
        super(props);
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    openLightbox(event, obj) {
        this.props.openLightbox();
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
      }

    closeLightbox() {
        this.props.closeLightbox();
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    render(){
        return (
            <div className='contact'>
                <div className='contactTitle'></div>
                <Lightbox images={PHOTO_SET}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                />
                <Gallery photos={PHOTO_SET} onClick={this.openLightbox}/>

                <div className='contactItem'></div>
            </div>
    
        )
    }
}

const Photography = connect(null, mapDispatchToProps)(ConnectedPhotography);

export default Photography;