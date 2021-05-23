import React from "react";

function Secret(props) {
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
                You have found my secret.
            </div>
		</div>
	);
}

export default Secret;