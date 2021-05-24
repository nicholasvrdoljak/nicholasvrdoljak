import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    CircularProgress,
  } from "@material-ui/core";
import Modal from '@material-ui/core/Modal';

function Contact(props) {
    let [ submitDisabled, changeSubmitDisabled ] = React.useState(true);
    let [ name, changeName ] = React.useState("");
    let [ email, changeEmail ] = React.useState("");
    let [ loading, setLoading ] = React.useState(false);
    let [ message, changeMessage ] = React.useState("");
    let [ recapValue, changeRecapValue ] = React.useState(null);
    let [ openModal, changeOpenModal ] = React.useState(false);
    let [ openErrorModal, changeOpenErrorModal ] = React.useState(false);

    const recapUrl = 'https://gospb44so8.execute-api.us-west-1.amazonaws.com/default/ContactMeForm';
    let recaptchaRef = React.createRef(null);
    
    let nameref = React.createRef(null);
    let emailref = React.createRef(null);
    let messageref = React.createRef(null);

    function handleCloseModal () {
        changeOpenModal(false);
    }
    function handleCloseErrorModal () {
        changeOpenErrorModal(false);
    }

    function onRecaptcha (value) {
        changeRecapValue(value);
        if (value) return changeSubmitDisabled(false);
        return changeSubmitDisabled(true);
    }

    function resetForm () {
        recaptchaRef.reset();
        setLoading(false);
        changeName('');
        changeEmail('');
        changeMessage('');
        nameref.valueOf().childNodes[0].value = '';
        emailref.valueOf().childNodes[0].value = '';
        messageref.valueOf().childNodes[0].value = '';
    }

    function onSubmit (event) {
        event.preventDefault();
        setLoading(true);
        changeSubmitDisabled(true);

        if (!recapValue) return;

        axios.post(recapUrl, {
            response: recapValue,
            name, email, message
        }, {
        }).then(function (response) {
            if (response.data === "success" && response.status === 200) {
                // handle success
                resetForm();
                changeOpenModal(true);
            } else {
                // handle error
                resetForm();
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

	return (
		<div style={{display: 'flex', flexDirection: 'column', width: '100%', padding: '10px'}}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <form style={{ width: "100%" }} onSubmit={onSubmit}>
                    <h1>Contact Me</h1>

                    <FormControl required={true} margin="normal" fullWidth>
                        <InputLabel htmlFor="name" >Name</InputLabel>
                        <Input id="name" type="text" onChange={onChangeField.bind('name')} ref={el => el && (nameref = el)}/>
                    </FormControl>

                    <FormControl required={true} margin="normal" fullWidth>
                        <InputLabel htmlFor="email" >Email</InputLabel>
                        <Input id="email" type="email" onChange={onChangeField.bind('email')} ref={el => el && (emailref = el)}/>
                    </FormControl>

                    <FormControl required={true} margin="normal" fullWidth>
                        <InputLabel htmlFor="message" >Message</InputLabel>
                        <Input id="message" multiline rows={10} onChange={onChangeField.bind('message')} ref={el => el && (messageref = el)}/>
                    </FormControl>
                    
                    <ReCAPTCHA
                        ref={el => el && (recaptchaRef = el)}
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
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={{
                    top: `20%`,
                    left: `10%`,
                    transform: `translate(30%, -10%)`,
                    position: 'absolute', 
                    width: '50%',
                    height: '10%', 
                    backgroundColor: 'white',
                    boxShadow: '10px 5px 5px black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent:'center'
                }}>
                    <div>
                        You have successfully sent me a message.
                    </div>
                </div>
            </Modal>
            <Modal
                open={openErrorModal}
                onClose={handleCloseErrorModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={{
                    top: `20%`,
                    left: `10%`,
                    transform: `translate(30%, -10%)`,
                    position: 'absolute', 
                    width: '50%',
                    height: '10%', 
                    backgroundColor: 'white',
                    boxShadow: '10px 5px 5px black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent:'center',
                    color: 'red'
                }}>
                    <div>
                        There was an error.
                    </div>
                </div>
            </Modal>
		</div>
	);
}

export default Contact;