import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import {
    FormControl,
    InputLabel,
    Input,
    Button
  } from "@material-ui/core";

function Contact(props) {
    let [ submitDisabled, changeSubmitDisabled ] = React.useState(true);
    let [ name, changeName ] = React.useState("");
    let [ email, changeEmail ] = React.useState("");
    let [ message, changeMessage ] = React.useState("");
    const recapUrl = 'https://gospb44so8.execute-api.us-west-1.amazonaws.com/default/ContactMeForm';
    
    function onRecaptcha (value) {
        console.log('value: ', value);
        if (value) return changeSubmitDisabled(false);
        return changeSubmitDisabled(true);
    }

    function onSubmit (x, y, z) {
        console.log('submitting', x, y, z)
        console.log('name: ', name, 'email: ', email, 'message: ', message);
        const recapResponse = axios.post(recapUrl, {
            response: value,
        }, {
        }).then(function (x, y, z) {
            console.log(x, y, z)
        }).catch(function (err) {
            console.log('err: ', err);
        });

        console.log(recapResponse);
    }

    function onChangeField (event) {
        const funcs = {name: changeName, email: changeEmail, message: changeMessage};
        if (funcs[this]) return funcs[this](event.target.value);
        return;
    }

	return (
		<div style={{display: 'flex', flexDirection: 'column', width: '100%', padding: '10px'}}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <form style={{ width: "100%" }}>
                    <h1>Contact Form</h1>

                    <FormControl margin="normal" fullWidth onChange={onChangeField.bind('name')}>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input id="name" type="text" />
                    </FormControl>

                    <FormControl margin="normal" fullWidth onChange={onChangeField.bind('email')}>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" type="email" />
                    </FormControl>

                    <FormControl margin="normal" fullWidth onChange={onChangeField.bind('message')}>
                        <InputLabel htmlFor="message">Message</InputLabel>
                        <Input id="message" multiline rows={10} />
                    </FormControl>
                    
                    <br/>
                    
                    <ReCAPTCHA
                        sitekey="6LeGB-UaAAAAAEqKfAq9KNwXSQPcLDXuIZIPAWkY"
                        onChange={onRecaptcha}
                    />

                    <br/>

                    <Button variant="contained" color="primary" size="medium" disabled={submitDisabled} onSubmit={onSubmit}>
                        Send
                    </Button>
                </form>
            </div>
		</div>
	);
}

export default Contact;