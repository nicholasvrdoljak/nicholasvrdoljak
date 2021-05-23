import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    CircularProgress
  } from "@material-ui/core";

function Contact(props) {
    let [ submitDisabled, changeSubmitDisabled ] = React.useState(true);
    let [ name, changeName ] = React.useState("");
    let [ email, changeEmail ] = React.useState("");
    let [ loading, setLoading ] = React.useState(false);
    let [ message, changeMessage ] = React.useState("");
    let [ recapValue, changeRecapValue ] = React.useState(null);
    const recapUrl = 'https://gospb44so8.execute-api.us-west-1.amazonaws.com/default/ContactMeForm';
    const recaptchaRef = React.createRef();
    
    function onRecaptcha (value) {
        changeRecapValue(value);
        if (value) return changeSubmitDisabled(false);
        return changeSubmitDisabled(true);
    }

    function onSubmit (event) {
        event.preventDefault();
        setLoading(true);
        changeSubmitDisabled(true);
        if (!recapValue) return;
        const recapResponse = axios.post(recapUrl, {
            response: recapValue,
            name, email, message
        }, {
        }).then(function (response) {
            if (response.data === "success" && response.status === 200) {
                // handle success
                resetReCaptcha();
            } else {
                // handle error
                resetReCaptcha();
            }
        }).catch(function (err) {
            console.log('err: ', err);
            resetReCaptcha();
        });
    }

    function onChangeField (event) {
        const funcs = {name: changeName, email: changeEmail, message: changeMessage};
        if (funcs[this]) return funcs[this](event.target.value);
        return;
    }

    function resetReCaptcha () {
        // console.log(recaptchaRef);
        // const recap = recaptchaRef.current.getValue();
        // recap.reset();
    }

	return (
		<div style={{display: 'flex', flexDirection: 'column', width: '100%', padding: '10px'}}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <form style={{ width: "100%" }} onSubmit={onSubmit}>
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
                    
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LeGB-UaAAAAAEqKfAq9KNwXSQPcLDXuIZIPAWkY"
                        onChange={onRecaptcha}
                        style={{padding: '20px'}}
                    />

                    <br/>
                    <div style={{position: 'relative'}}>
                        <Button variant="contained" color="primary" size="medium" disabled={submitDisabled} type="submit" style={{position: 'absolute'}}>Send</Button>
                        {loading && <CircularProgress size={24} style={{marginLeft: 24, marginTop: 8, position: 'absolute'}}/>}
                    </div>
                </form>
            </div>
		</div>
	);
}

export default Contact;