import React, {useState} from 'react';
// import {NavLink} from 'react-router-dom'
import {
    Button, 
    Divider, 
    Form, 
    Grid, 
    Header, 
    Icon, 
    Input, 
    Modal,
    Segment} from 'semantic-ui-react'

const LandingPage = (props) => {
    const [myUsername, setMyUsername] = useState('');
    const [myPassword, setMyPassword] = useState('');

    return ( 
        <>
        <Header as='h2' icon textAlign='center'>
            <Icon name='food' circular />
            <Header.Content>ultimateRecipes</Header.Content>
        </Header>

        <Segment placeholder>
            <Grid columns={2} textAlign='center'>
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                <Header>
                    Login
                </Header>

                <Form onSubmit={(e) => props.userLogin(e, myUsername, myPassword)}>
                    <Form.Field 
                        control={Input} 
                        label="Username"
                        onChange={(e) => setMyUsername(e.target.value)}
                        required
                    />
                    <Form.Field 
                        control={Input} 
                        label="Password"
                        onChange={(e) => setMyPassword(e.target.value)}
                        required
                    />
                    <Button primary color='black' type='submit'>Login</Button>
                </Form>
                </Grid.Column>

                <Grid.Column>
                <Header icon>
                    <Icon name='users' />
                    Create a New Account!
                </Header>

                <Modal trigger={<Button color='green'>Sign Up</Button>} size='mini' centered closeIcon>
                    <Header>
                        <Icon name='food'/>
                        <Header.Content>
                            ultimateRecipes
                            <Header.Subheader>Create a New Account</Header.Subheader>
                        </Header.Content>
                    </Header>
                    <Modal.Content centered >
                        <Form onSubmit={(e) => props.userCreate(e, myUsername, myPassword)}>
                            <Form.Field 
                                control={Input} 
                                label="Username"
                                onChange={(e) => setMyUsername(e.target.value)}
                                required
                            />
                            <Form.Field 
                                control={Input} 
                                label="Password"
                                onChange={(e) => setMyPassword(e.target.value)}
                                required
                            />
                            <Button primary color='black' type='submit'>Submit</Button>
                        </Form>
                    </Modal.Content>
                </Modal>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </Segment>
        </>
    );
}
 
export default LandingPage;