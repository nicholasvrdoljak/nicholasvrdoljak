
import React, { useState } from "react";
import makeStyles from '@mui/styles/makeStyles';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles(() => ({
    avatar: {
        borderRadius: '5px',
        width: '43px',
        marginRight: '7px',
    },
    avatarOption: {
        borderRadius: '5px',
        width: '48px',
        height: '48px',
        marginRight: '15px',
        cursor: 'pointer',
        transition: "all ease .5s",
        "&:hover": {
            width: '55px',
            height: '55px'
        }
    },
    avatarOptionSelected: {
        width: '55px',
        height: '55px',
        borderBottom: '3px solid cyan'
    },
    tweetWrap: {
        maxWidth: '490px',
        background: '#fff',
        margin: '0 auto',
        marginTop: '50px',
        borderRadius: '3px',
        padding: '30px',
        borderBottom: '1px solid #e6ecf0',
        borderTop: '1px solid #e6ecf0',
        fontFamily: "'Larsseit Bold', sans-serif"
    },
    optionWrap: {
        maxWidth: '490px',
        background: '#fff',
        borderRadius: '3px',
        padding: '30px',
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto'
    },
    tweetHeader: {
        display: 'flex',
        alignItems: 'flex-start',
        fontSize: '14px',
    },
    tweetHeaderInfo: {
        fontWeight: 'bold',
    },
    tweetHeaderInfoSpan: {
        color: '#657786',
        fontWeight: 'normal',
        fontSize: '11px', 
        marginLeft: '5px',
    },
    tweetHeaderInfoP: {
        fontWeight: 'normal',
        marginTop: '2px',
    }
}));
function SlackGenerator() {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [activeImage, setActiveImage] = useState('aubrey.jpeg')
    const [activeName, setActiveName] = useState('Aubrey Stento')
    const [activeCaption, setActiveCaption] = useState("It won't make a difference")

    return (
        <div>
            <div className={classes.optionWrap}>
                Pick an avatar and type a slack message
            </div>
            <div className={classes.optionWrap}>
                <img onClick={() => {
                    setActiveImage('aubrey.jpeg');
                    setActiveName('Aubrey Stento')
                }} className={`${classes.avatarOption} ${activeImage == 'aubrey.jpeg' ? classes.avatarOptionSelected : ''}`} src={'/images/aubrey.jpeg'} />
                <img onClick={() => {
                    setActiveImage('alastair.png');
                    setActiveName('Alastair Cleve \u1F954')
                }} className={`${classes.avatarOption} ${activeImage == 'alastair.png' ? classes.avatarOptionSelected : ''}`} src={'/images/alastair.png'} />
                <img onClick={() => {
                    setActiveImage('ben.jpeg');
                    setActiveName('Ben Bengoetxea')
                }} className={`${classes.avatarOption} ${activeImage == 'ben.jpeg' ? classes.avatarOptionSelected : ''}`} src={'/images/ben.jpeg'} />
                <img onClick={() => {
                    setActiveImage('evan.png');
                    setActiveName('Evan Hsu')
                }} className={`${classes.avatarOption} ${activeImage == 'evan.png' ? classes.avatarOptionSelected : ''}`} src={'/images/evan.png'} />
                <img onClick={() => {
                    setActiveImage('max.jpeg');
                    setActiveName('Max Runia')
                }} className={`${classes.avatarOption} ${activeImage == 'max.jpeg' ? classes.avatarOptionSelected : ''}`} src={'/images/max.jpeg'} />
                <img onClick={() => {
                    setActiveImage('nick.png');
                    setActiveName('Nick Vrdoljak')
                }} className={`${classes.avatarOption} ${activeImage == 'nick.png' ? classes.avatarOptionSelected : ''}`} src={'/images/nick.png'} />
                <img onClick={() => {
                    setActiveImage('reagan.jpeg');
                    setActiveName('Reagan Keeler')
                }} className={`${classes.avatarOption} ${activeImage == 'reagan.jpeg' ? classes.avatarOptionSelected : ''}`} src={'/images/reagan.jpeg'} />
            </div>
            <div className={classes.optionWrap}>
                <input style={{width: '75%'}} onChange={(evt) => setActiveCaption(evt.target.value)}></input>
            </div>

            <div className={classes.tweetWrap}>
                <div className={classes.tweetHeader}>
                    <img style={{ maxWidth: '100%' }} src={`/images/${activeImage}`} alt="" className={classes.avatar} />
                    <div className={classes.tweetHeaderInfo}>
                        {activeName} <span className={classes.tweetHeaderInfoSpan}> {'<'} 1 minute ago</span>
                        <p className={classes.tweetHeaderInfoP}>{activeCaption}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlackGenerator;
