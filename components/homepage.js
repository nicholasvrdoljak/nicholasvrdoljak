import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
    Button,
    TextField
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

}));

function Homepage(props) {
    const theme = useTheme();
	const classes = useStyles(theme);

	return (
        <div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: 20,
                        padding: 20
                    }}
                >
                    Welcome to my site
                </div>
            </div>
        </div>
	);
}

export default Homepage;