import React, {useState} from 'react';
import LoginForm from './LoginForm';
import {
    Divider, 
    Grid, 
    Header, 
    Icon, 
    Message,
    Segment} from 'semantic-ui-react'
import SignupForm from './SignupForm';

const LandingPage = () => {
    const [errMsg, setErrMsg] = useState('');

    return ( 
        <>
        <Header as='h2' icon textAlign='center'>
            <Icon name='food' circular />
            <Header.Content>ultimateRecipes</Header.Content>
        </Header>

        {errMsg && <Message attached error header='Login Error' content={errMsg}/>}
        <Segment placeholder className='attached'>
            <Grid columns={2} textAlign='center'>
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                    <Header>Login</Header>
                    <LoginForm setErrMsg={setErrMsg} />
                </Grid.Column>

                <Grid.Column>
                    <Header icon><Icon name='users'/>Create a New Account!</Header>
                    <SignupForm errMsg={errMsg} setErrMsg={setErrMsg}/>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </Segment>
        </>
    );
}
 
export default LandingPage;