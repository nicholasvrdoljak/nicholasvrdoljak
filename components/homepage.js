import React from "react";
import { useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import Contact from '../pages/contact.js';

const useStyles = makeStyles((theme) => ({
    section: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        justifyContent: 'center',
        marginLeft: '10%',
        marginRight: '10%',
        // height: '50vh'
    },
    logoSection: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        width: '100%'
    },
    logoImages: {
        width: '25%', 
        maxWidth: '40%', 
        height: '100px', 
        display: 'inline-block', 
        position: 'relative', 
        margin: '5px',
        [theme.breakpoints.down('md')]: {
            width: `50%`,
        }
    },
    logoImage: {
        objectFit: 'contain', 
        maxHeight: '100%', 
        maxWidth: '100%'
    },
    homeImages: {
        width: '50%', 
        display: 'inline-block', 
        height: 'inherit', 
        position: 'relative', 
        [theme.breakpoints.down('md')]: {
            width: `100%`,
        }
    },
    homeDescription: {
        padding: '5px', 
        width: '50%', 
        // height: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center'
    }
}));

function Homepage() {
    const theme = useTheme();
	const classes = useStyles(theme);

	return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", width:'100%', marginTop: '20px'}}>
            <div className={classes.section}>
                <div className={classes.homeDescription}>Drop a line...</div>
            </div>
            <div className={classes.logoSection}>
                <Contact/>
            </div>
        </div>
	);
}

export default Homepage;