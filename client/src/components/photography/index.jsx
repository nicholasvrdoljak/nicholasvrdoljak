import React, { Component } from 'react';
import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';
import { connect } from "react-redux";
import { openLightbox, closeLightbox } from "../../actions/index"

const PHOTO_SET = [
    {
        src: 'https://s3-us-west-1.amazonaws.com/nicholas-vrdoljak/small/DSC00071.jpg',
        width: 4,
        height: 3
      },
      {
        src: 'https://s3-us-west-1.amazonaws.com/nicholas-vrdoljak/small/DSC00834.jpg',
        width: 4,
        height: 3
    },
    {
        src: 'https://s3-us-west-1.amazonaws.com/nicholas-vrdoljak/small/DSC00872_Fotor.jpg',
        width: 4,
        height: 3
    },
    {
        src: 'https://s3-us-west-1.amazonaws.com/nicholas-vrdoljak/small/DSC00906_Fotor.jpg',
        width: 4,
        height: 3
    },
    {
        src: 'https://s3-us-west-1.amazonaws.com/nicholas-vrdoljak/small/DSC01039_Fotor.jpg',
        width: 4,
        height: 3
    },
    {
        src: 'https://s3-us-west-1.amazonaws.com/nicholas-vrdoljak/small/DSC01061_Fotor.jpg',
        width: 4,
        height: 3
    },
    {
        src: 'https://s3-us-west-1.amazonaws.com/nicholas-vrdoljak/small/DSC01095_Fotor.jpg',
        width: 4,
        height: 3
    },
];

const PHOTO_SET_BIG = PHOTO_SET.reduce(function(a, i){
    var item = {
        width: i.width, 
        height: i.height,
        src: i.src.split('small/').join('')
    };
    a.push(item);

    return a;
}, []);


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

    openLightbox(e, obj) {
        e.preventDefault();
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
                <Lightbox images={PHOTO_SET_BIG}
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