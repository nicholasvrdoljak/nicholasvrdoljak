import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Image from 'next/image';

import {
    Button,
    TextField
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    section: {
        display: 'flex', flexDirection: 'row', alignItems: 'center', width: '80%', marginLeft: '10%', marginRight: '10%', height: '50vh'
    },
    logoSection: {
        display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', width: '100%'
    },
    logoImages: {
        width: '25%', maxWidth: '40%', height: '100px', display: 'inline-block', position: 'relative', margin: '5px',
        [theme.breakpoints.down('sm')]: {
			width: `50%`,
		},
    },
    homeImages: {width: '50%', display: 'inline-block', height: 'inherit', position: 'relative', [theme.breakpoints.down('sm')]: {
        width: `100%`,
    }},
    homeDescription: {padding: '5px', width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}
}));

function Homepage(props) {
    const theme = useTheme();
	const classes = useStyles(theme);

	return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", width:'100%', marginTop: '20px'}}>
            <div className={classes.section}>
                <div className={classes.homeImages}><Image src="/images/smile.JPG" alt="Picture" layout='fill' objectFit='contain' /></div>
                <div className={classes.homeDescription}> I'm a developer in the Pacific Northwest. Welcome to my site. </div>
            </div>
            <br/>
            <div className={classes.logoSection}>
                <div style={{width: '100%', textAlign: 'center'}}>I can work with a lot of different technologies:</div>
                <br/>
                <div style={{width: '100%', flexDirection: 'row', padding: '5px', textAlign: 'center'}}>
                    <div className={classes.logoImages}><Image src="/images/react.png" alt="Picture" layout='fill' objectFit='contain'/></div>
                    <div className={classes.logoImages}><Image src="/images/nextjs.png" alt="Picture" layout='fill' objectFit='contain'/></div>
                    <div className={classes.logoImages}><Image src="/images/sql.png" alt="Picture" layout='fill' objectFit='contain'/></div>
                    <div className={classes.logoImages}><Image src="/images/htmlcss.png" alt="Picture" layout='fill' objectFit='contain'/></div>
                    <div className={classes.logoImages}><Image src="/images/wordpress.png" alt="Picture" layout='fill' objectFit='contain'/></div>
                    <div className={classes.logoImages}><Image src="/images/mongo.png" alt="Picture" layout='fill' objectFit='contain'/></div>
                    <div className={classes.logoImages}><Image src="/images/aws.png" alt="Picture" layout='fill' objectFit='contain'/></div>
                    <div className={classes.logoImages}><Image src="/images/git.png" alt="Picture" layout='fill' objectFit='contain'/></div>
                </div>
            </div>
        </div>
	);
}

export default Homepage;