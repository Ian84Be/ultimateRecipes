import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import {Button, Form, Input} from 'semantic-ui-react'

const LandingPage = (props) => {
    const [myUsername, setMyUsername] = useState('');
    const [myPassword, setMyPassword] = useState('');

    return ( 
        
        <Form onSubmit={
            props.location.pathname === '/sign-up' ? 
            (e) => props.userCreate(e, myUsername, myPassword) :
            (e) => props.userLogin(e, myUsername, myPassword)
        }>
            <p><NavLink exact to="/">Login</NavLink>, or <NavLink to="/sign-up">sign up for a new account!</NavLink></p>
            <Form.Field 
                control={Input} 
                label="Username"
                onChange={(e) => setMyUsername(e.target.value)}
            />
            <Form.Field 
                control={Input} 
                label="Password"
                onChange={(e) => setMyPassword(e.target.value)}
            />
            <Button type='submit'>Submit</Button>
        </Form>
    );
}
 
export default LandingPage;