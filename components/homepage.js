import React from "react";
import {
    Button,
    TextField
  } from "@material-ui/core";
import Header from './header.js';

function Homepage(props) {
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