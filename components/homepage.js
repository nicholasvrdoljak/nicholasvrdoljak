import React from "react";
import {
    Button,
    TextField
  } from "@material-ui/core";

function Homepage(props) {
	return (
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
	);
}

export default Homepage;